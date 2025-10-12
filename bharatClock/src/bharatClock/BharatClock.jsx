import React from "react";

function BharatClock() {
  let appName = "Bharat Clock";
  let currentTime = new Date();
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-xl h-auto p-10 bg-indigo-200 rounded-2xl shadow-lg shadow-indigo-600">
        {/* App Name */}
        <h1 className="text-center text-4xl font-bold text-indigo-700 mb-6">
          {appName}
        </h1>

        <p className="text-xl text-gray-800 my-3">
          This is the Clock that shows the time in India at all times
        </p>

        {/* Current Time */}
        <h2 className="text-xl text-center font-bold">
          Current Date is :{" "}
          <span className="text-red-700"> {currentTime.toDateString()} </span>
        </h2>
        <h2 className="text-xl text-center font-bold">
          Current Time is :{" "}
          <span className="text-red-700">
            {currentTime.toLocaleTimeString()}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default BharatClock;
