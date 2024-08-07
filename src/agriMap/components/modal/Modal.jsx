import React, { useEffect, useState } from "react";
import axios from "axios";

const Modal = ({ isOpen, onClose, surveyData }) => {
  const [ndviImageUrl, setNdviImageUrl] = useState(null);
  const [trueColorImageUrl, setTrueColorImageUrl] = useState(null);
  const [statistics, setStatistics] = useState(null);

  const fetchImagesAndStatistics = async (coordinates) => {
    try {
      let updatedCoor = coordinates[0];
      const ndviResponse = await axios.post(
        "https://sentinal-node-services.onrender.com/sentinelNdviImage",
        { coordinates: updatedCoor },
        { responseType: "blob" }
      );
    //   console.log(ndviResponse, "ndviResponse");
        const trueColorResponse = await axios.post(
          "https://sentinal-node-services.onrender.com/sentinelTrueColorImage",
          { coordinates: updatedCoor },
          { responseType: "blob" }
        );
        const statisticsResponse = await axios.post(
          "https://sentinal-node-services.onrender.com/sentinelStatistics",
          { coordinates: updatedCoor }
        );

      // Convert the NDVI image response to a URL
      const ndviImageBlob = ndviResponse.data;
      const ndviImageUrl = URL.createObjectURL(ndviImageBlob);
      setNdviImageUrl(ndviImageUrl);
      
	  const trueColorImageBlob = trueColorResponse.data;
    const trueColorImageUrl = URL.createObjectURL(trueColorImageBlob);
      setTrueColorImageUrl(trueColorImageUrl);
      setStatistics(statisticsResponse.data.stats);
    } catch (error) {
      console.error("Error fetching images and statistics:", error);
    }
  };

  useEffect(() => {
    if (isOpen && surveyData) {
      fetchImagesAndStatistics(surveyData.coordinates);
    }
  }, [isOpen, surveyData]);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(4);
  }

  if (!isOpen || !surveyData) return null;

  // Construct dynamic paths for the images
  //   const ndviImagePath = require(`../sampleImages/ndviImages/ndvi-${surveyData.ndviImage}.jpg`);
  //   const trueColorImagePath = require(`../sampleImages/trueColorImages/truecolor-${surveyData.trueColorImage}.png`);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10"
      onClick={handleBackgroundClick}
    >
      <div
        className="relative w-3/5 h-[95%] bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 transform hover:scale-125 transition duration-300 ease-in-out"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="h-full flex flex-col">
          <div className="w-full  p-4 flex flex-row justify-evenly gap-2">
            <div className="w-1/2 h-full">
              <p className="text-base font-bold text-center">
                True Color Image
              </p>
              {/* <img
                src={trueColorImagePath}
                alt="True Color Image"
                className="w-full rounded-lg"
              /> */}
              {trueColorImageUrl ? (
                <img
                  src={trueColorImageUrl}
                  alt="True Color Image"
                  className="w-full rounded-lg"
                />
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="w-1/2 h-full">
              <p className="text-base font-bold text-center">NDVI Image</p>
              {/* <img
                src={ndviImagePath}
                alt="NDVI Image"
                className="w-full rounded-lg"
              /> */}
              {ndviImageUrl ? (
                <img
                  src={ndviImageUrl}
                  alt="NDVI Image"
                  className="w-full rounded-lg"
                />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div className="w-full p-4 overflow-y-auto">
            <h2 className="text-xl font-bold text-center pb-2">Crop Details</h2>
            {statistics ? (
              <div className="w-full flex flex-row justify-evenly p-4 gap-2">
                <ul className="space-y-2">
                  <li>
                    <p className="mt-1">
                      <strong className="text-gray-800">NDVI_Min: </strong>
                      <i className="text-gray-600">{statistics.min}</i>
                    </p>
                  </li>
                  <li>
                    <p className="mt-1">
                      <strong className="text-gray-800">NDVI_Max: </strong>
                      <i className="text-gray-600">{statistics.max}</i>
                    </p>
                  </li>
                  <li>
                    <p className="mt-1">
                      <strong className="text-gray-800">NDVI_Mean: </strong>
                      <i className="text-gray-600">{statistics.mean}</i>
                    </p>
                  </li>
                  <li>
                    <p className="mt-1">
                      <strong className="text-gray-800">StDev: </strong>
                      <i className="text-gray-600">{statistics.stDev}</i>
                    </p>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <p className="mt-1">
                      <strong className="text-gray-800">Yield in Tons: </strong>
                      <i className="text-gray-600">
                        {(Math.random() * 5).toFixed(2)}
                      </i>
                    </p>
                  </li>
                  <li>
                    <p className="mt-1">
                      <strong className="text-gray-800">
                        Moisture Content in Percentage:{" "}
                      </strong>
                      <i className="text-gray-600">{getRandomNumber(10, 20)}</i>
                    </p>
                  </li>
                  <li>
                    <p className="mt-1">
                      <strong className="text-gray-800">
                        Cultivated Land:{" "}
                      </strong>
                      <i className="text-gray-600">
                        {getRandomNumber(70, 100)}%
                      </i>
                    </p>
                  </li>
                  <li>
                    <p className="mt-1">
                      <strong className="text-gray-800">
                        Age of Crop in Months:{" "}
                      </strong>
                      <i className="text-gray-600">{getRandomNumber(1, 12)}</i>
                    </p>
                  </li>
                </ul>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
