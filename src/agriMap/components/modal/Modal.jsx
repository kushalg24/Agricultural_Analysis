import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, surveyData, modalData }) => {
  const [randomData, setRandomData] = useState(null);

   // useEffect hook to handle adding and removing a CSS class to the body element
  // when the modal is open or closed. This can be useful for preventing background
  // scrolling when the modal is open.
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");

      // Generate random data when the modal is opened
      if (!randomData) {
        setRandomData({
          yieldInTons: (Math.random() * 5).toFixed(2),
          moistureContent: getRandomNumber(10, 20),
          cultivatedLand: getRandomNumber(70, 100),
          cropAgeInMonths: getRandomNumber(1, 12),
        });
      }
    } else {
      document.body.classList.remove("modal-open");
      setRandomData(null); // Clear random data when modal closes
    }

     // Cleanup function to remove the class when the component is unmounted
    // or when the modal closes.
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen, randomData]);

  // Handle background click to close the modal when the user clicks outside the modal content.
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Function to generate a random number between a specified min and max value.
  function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(4);
  }

  // Return null if the modal is not open or if the required data is not available.
  if (!isOpen || !surveyData || !modalData) return null;

  // Destructure modalData for easier access to the images and statistics.
  const { ndviImageUrl, trueColorImageUrl, statistics } = modalData;

  return (
    // Background overlay for the modal. Clicking on this will close the modal (handled by handleBackgroundClick).
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10"
      onClick={handleBackgroundClick}
    >
      {/* Modal content container */}
      <div
        className="relative w-3/5 h-[95%] bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside the modal content.
      >
        {/* Close button in the top right corner */}
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
        {/* Modal content wrapper */}
        <div className="h-full flex flex-col">
          {/* Section for displaying True Color and NDVI images */}
          <div className="w-full p-4 flex flex-row justify-evenly gap-2">
            <div className="w-1/2 h-full">
              <p className="text-base font-bold text-center">
                True Color Image
              </p>
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
              {ndviImageUrl ? (
                <img
                  src={ndviImageUrl}
                  alt="NDVI Image"
                  className="w-full rounded-lg"
                />
              ) : (
                <p>Loading...</p> // Display loading message if the image is not available yet.
              )}
            </div>
          </div>
          {/* Section for displaying crop details and statistics */}
          <div className="w-full p-4 overflow-y-auto">
            <h2 className="text-xl font-bold text-center pb-2">Crop Details</h2>
            {statistics ? (
              <div className="w-full flex flex-row justify-evenly p-4 gap-2">
                {/* List of statistics (NDVI_Min, NDVI_Max, etc.) */}
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

                {/* Display the stored random data */}
                {randomData && (
                  <ul className="space-y-2">
                    <li>
                      <p className="mt-1">
                        <strong className="text-gray-800">
                          Yield in Tons:{" "}
                        </strong>
                        <i className="text-gray-600">
                          {randomData.yieldInTons}
                        </i>
                      </p>
                    </li>
                    <li>
                      <p className="mt-1">
                        <strong className="text-gray-800">
                          Moisture Content in Percentage:
                        </strong>
                        <i className="text-gray-600">
                          {randomData.moistureContent}
                        </i>
                      </p>
                    </li>
                    <li>
                      <p className="mt-1">
                        <strong className="text-gray-800">
                          Cultivated Land:
                        </strong>
                        <i className="text-gray-600">
                          {randomData.cultivatedLand}%
                        </i>
                      </p>
                    </li>
                    <li>
                      <p className="mt-1">
                        <strong className="text-gray-800">
                          Age of Crop in Months:
                        </strong>
                        <i className="text-gray-600">
                          {randomData.cropAgeInMonths}
                        </i>
                      </p>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <p>Loading...</p> // Display loading message if statistics are not available yet.
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
