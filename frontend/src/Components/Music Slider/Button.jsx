import React, { useEffect, useState } from "react";
import { IoIosPlay } from "react-icons/io";
import { IoPauseSharp } from "react-icons/io5";

const Button = ({ isPlaying, play }) => {
  const [deviceID, setDeviceID] = useState("");

  useEffect(() => {
    fetch("/player/device", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setDeviceID(data.devices[0].id))
      .catch((error) => console.log(error));
  });

  const pause = () => {
    play();
    fetch(`/player/pause/${deviceID}`, { method: "PUT" }).catch((error) =>
      console.log(error)
    );
  };

  const resume = () => {
    play();
    fetch(`/player/resume/${deviceID}`, { method: "PUT" }).catch((error) =>
      console.log(error)
    );
  };

  return (
    <div>
      <button onClick={() => {
        isPlaying ? pause() : resume()}
        }>
        <div
          class={`${
            isPlaying ? "block" : "hidden"
          } transition-transform duration-300 transform hover:scale-110`}
        >
          <IoPauseSharp />
        </div>
        <div
          class={`${
            isPlaying ? "hidden" : "block"
          } transition-transform duration-300 transform hover:scale-110`}
        >
          <IoIosPlay />
        </div>
      </button>
    </div>
  );
};

export default Button;
