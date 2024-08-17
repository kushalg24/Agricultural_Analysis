import { getToken } from "./TokenService.js";

// Function to fetch statistics for given coordinates using Sentinel Hub's API
export async function getStatistics(coordinates) {
  // Retrieve the authentication token
  const token = await getToken();

  // Validate coordinates to ensure none of them contain null values
  if (coordinates.flat().includes(null)) {
    console.error("Invalid coordinates:", coordinates); // Log error for debugging
    throw new Error("Invalid coordinates generated"); // Throw an error if coordinates are invalid
  }

  // Define the request payload to be sent to the Sentinel Hub Statistics API
  const requestData = {
    input: {
      bounds: {
        geometry: {
          type: "Polygon",
          coordinates: [coordinates], // Specify the coordinates as a polygon
        },
        properties: {
          crs: "http://www.opengis.net/def/crs/EPSG/0/32633", // Coordinate reference system (CRS)
        },
      },
      data: [
        {
          type: "sentinel-2-l2a", // Data source (Sentinel-2 Level 2A)
          dataFilter: {
            mosaickingOrder: "leastCC", // Use mosaicking with the least cloud cover
          },
        },
      ],
    },
    aggregation: {
      timeRange: {
        from: "2024-06-01T00:00:00Z", // Start date for data aggregation
        to: "2024-07-18T00:00:00Z",   // End date for data aggregation
      },
      aggregationInterval: {
        of: "P30D", // Aggregation interval (30 days)
      },
      evalscript: `//VERSION=3
function setup() {
  return {
    input: [{
      bands: [
        "B04",       // Red band
        "B08",       // Near-infrared band
        "SCL",       // Scene Classification Layer
        "dataMask"   // Data mask
      ]
    }],
    output: [
      {
        id: "data",
        bands: 1
      },
      {
        id: "dataMask",
        bands: 1
      }]
  }
}

function evaluatePixel(samples) {
    let ndvi = (samples.B08 - samples.B04)/(samples.B08 + samples.B04) // Calculate NDVI

    var validNDVIMask = 1
    if (samples.B08 + samples.B04 == 0 ){
        validNDVIMask = 0 // Invalidate NDVI if both bands are zero
    }

    var noWaterMask = 1
    if (samples.SCL == 6 ){
        noWaterMask = 0 // Invalidate NDVI if the pixel is water
    }

    return {
        data: [ndvi], // Return calculated NDVI
        dataMask: [samples.dataMask * validNDVIMask * noWaterMask] // Apply masks to the data
    }
}`,
      resx: 10, // Resolution in x direction (10 meters per pixel)
      resy: 10, // Resolution in y direction (10 meters per pixel)
    },
  };

  // Send a POST request to the Sentinel Hub Statistics API
  const response = await fetch(
    "https://services.sentinel-hub.com/api/v1/statistics",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
        Authorization: `Bearer ${token}`,    // Include the bearer token for authentication
      },
      body: JSON.stringify(requestData), // Convert the request payload to a JSON string
    }
  );

  // Check if the response is not OK (e.g., 4xx or 5xx status code)
  if (!response.ok) {
    const errorText = await response.text(); // Read the error message from the response
    throw new Error(`Statistics API Request Failed: ${errorText}`); // Throw an error with the response message
  }

  // Parse the JSON response
  const result = await response.json();
  
  // Extract the statistics from the response
  const stats = result.data[0]?.outputs?.data?.bands?.B0?.stats;

  // Check if the statistics are not found in the response
  if (!stats) {
    throw new Error("Invalid response from Statistics API: stats not found");
  }

  // Return the extracted statistics
  return stats;
}
