import React from "react";
import Artist from "./Lists/Artist";
import Tracks from "./Lists/Tracks";

const Body = () => {
  return (
    <div class="flex justify-evenly gap-2">
      <div class="">
        <Artist />
      </div>

      <div class="">
        <Tracks/>
      </div>

    </div>
  );
};

export default Body;
