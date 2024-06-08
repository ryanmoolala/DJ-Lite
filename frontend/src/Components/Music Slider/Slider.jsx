import React, { useEffect, useState } from "react";

const Slider = ({ position, duration, isPlaying, nextSong }) => {
  const [current, setCurrent] = useState(position);

  const [songProgress, setSongProgress] = useState({
    playing: false,
    position: 0,
    duration: 0,
    updateTime: 0,
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCurrent(value);
  };

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    setSongProgress({
      playing: isPlaying,
      position: position,
      duration: duration,
      updateTime: performance.now(),
    });
  }, [position, isPlaying, duration]);


  useEffect(() => {
    // Set up the interval when the component mounts
    let intervalId;
    if (isPlaying) { 
      intervalId = setInterval(() => {
        setSongProgress((prevState) => ({
          ...prevState,
          position: prevState.position + 1,
        }));
      }, 1000);
    }
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };

  }, [isPlaying]);

  if (songProgress.position >= songProgress.duration) {
    nextSong();
  }

  return (
    <div>
      <div class="relative flex items-center jusitfy-center text-xs">
        <div>
          <div class="mt-[-0px] absolute left-0 top-0 ">
            {formatTime(songProgress.position)}
          </div>
        </div>

        <input
          style={{ accentColor: "#1DB954" }}
          type="range"
          class="ml-9 w-80 h-0.5 bg-black appearance-none rounded-full"
          value={songProgress.position}
          min='0'
          max={duration}
          onChange={(e) => setCurrent(e.target.value)}
          onInput={handleInputChange}
        ></input>

        <div class="ml-1 right-0">{formatTime(songProgress.duration)}</div>
      </div>
    </div>
  );
};

export default Slider;
