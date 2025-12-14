import React, { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2 className="text-xl text-center font-bold">
        Current Date is :{" "}
        <span className="text-red-700"> {time.toDateString()} </span>
      </h2>
      <h2 className="text-xl text-center font-bold">
        Current Time is :{" "}
        <span className="text-red-700">{time.toLocaleTimeString()}</span>
      </h2>
    </>
  );
}

export default CurrentTime;
