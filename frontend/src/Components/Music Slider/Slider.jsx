import React, { useState } from "react";

const Slider = ({ currentTime, maxTime}) => {
  const [current, setCurrent] = useState(currentTime);
  const [sliderValue, setSliderValue] = useState(currentTime);


  const handleInputChange = (event) => {
    const value = event.target.value;
    setCurrent(formatTime(value));
    setSliderValue(value);
  };

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div class="relative flex items-center jusitfy-center text-xs">
      <div>
        <div class="mt-[-0px] absolute left-0 top-0 ">{formatTime(currentTime)}</div>
      </div>

      <input
        style={{ accentColor: "#1DB954" }}
        class="ml-9 w-80 h-0.5 bg-black appearance-none rounded-full"
        value={currentTime}
        type="range"
        min={0}
        max={maxTime}
        onInput={handleInputChange}
      ></input>

      <div class="ml-1 right-0">{formatTime(maxTime)}</div>
    </div>
  );
};

export default Slider;
