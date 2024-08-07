import { getToken } from "./TokenService.js"; // Ensure this is correctly imported

function getUniqueFilename() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `truecolor-${timestamp}.png`;
}

export async function sendPostRequest(coordinates) {
  const token = await getToken();

  const request_data = {
    input: {
      bounds: {
        properties: {
          crs: "http://www.opengis.net/def/crs/OGC/1.3/CRS84",
        },
        geometry: {
          type: "Polygon",
          coordinates: [coordinates],
        },
      },
      data: [
        {
          type: "sentinel-2-l1c",
          dataFilter: {
            timeRange: {
              from: "2024-05-01T00:00:00Z",
              to: "2024-05-05T00:00:00Z",
            },
          },
        },
      ],
    },
    output: {
      width: 512,
      height: 512,
    },
  };

  const evalscript = `
//VERSION=3
function setup() {
  return {
    input: ["B02", "B03", "B04"],
    output: {
      bands: 3,
      sampleType: "AUTO"
     }
  }
}

function evaluatePixel(sample) {
  return [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02];
}`;

  const formData = new FormData();
  formData.append("request", JSON.stringify(request_data));
  formData.append("evalscript", evalscript);

  const response = await fetch(
    "https://services.sentinel-hub.com/api/v1/process",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  const contentType = response.headers.get("Content-Type");
  if (contentType.includes("application/json")) {
    const result = await response.json();
    console.error(result);
    return null;
  } else if (
    contentType.includes("image/png") ||
    contentType.includes("application/octet-stream")
  ) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url; // Return the URL to be used in the React component
  } else {
    console.error("Received unexpected content type:", contentType);
    return null;
  }
}
