import React from "react";
import AppName from "./AppName";
import Sloogen from "./Sloogen";
import CurrentTime from "./CurrentTime";
import BharatClockContainer from "./BharatClockContainer";

function BharatClock() {
  return (
    <BharatClockContainer>
      <AppName />
      <Sloogen />
      <CurrentTime />
    </BharatClockContainer>
  );
}

export default BharatClock;
