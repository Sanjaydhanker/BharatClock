import React from "react";

function BharatClockContainer({ children }) {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-xl h-auto p-10 bg-indigo-200 rounded-2xl shadow-lg shadow-indigo-600">
        {children}
      </div>
    </div>
  );
}

export default BharatClockContainer;
