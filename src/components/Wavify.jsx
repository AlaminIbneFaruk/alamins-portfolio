import React from "react";
import Wave from "react-wavify";

const Wavify = () => {
  return (
    <div className="relative h-24 w-full z-0">
      <Wave
        fill="#08002e"
        paused={false}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.15,
          points: 4,
        }}
        className="absolute bottom-0 left-0"
        data-theme="synthwave"
      ></Wave>
    </div>
  );
};

export default Wavify;
