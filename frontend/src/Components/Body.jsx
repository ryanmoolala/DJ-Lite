import React from "react";
import Artist from "./Lists/Artist";
import Tracks from "./Lists/Tracks";
import Genres from "./Lists/Genre";

const Body = () => {
  return (
    <div class="flex justify-evenly gap-2">
      <div>
        <Artist />
      </div>

      <div>
        <Tracks />
      </div>

      <div>
        <Genres />
      </div>
    </div>
  );
};

export default Body;
