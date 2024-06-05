import React from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";

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
