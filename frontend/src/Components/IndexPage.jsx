import React, { useEffect } from "react";

import "./styles.css";
import AlbumAnimationService from "./LoginAnimation/AlbumScroll";
import { IoAlertCircleOutline } from "react-icons/io5";
 

const IndexPage = () => {

  const getUserLogin = () => {
    fetch("http://localhost:8080/api/login")
      .then((response) => response.text())
      .then((response) => {
        window.location.replace(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div class="absolute mt-4 ml-4 flex">
        <p>Spotify must be active for this to work</p>
        <IoAlertCircleOutline class="ml-3" size="24px"/>
      </div>
      <div class="text text-center flex flex-col items-center h-screen">
        <div class="flex flex-col text-9xl w-1/2 font-bold h-1/2 justify-center overflow-hidden relative">
          <h1 class="">DJ Lite</h1>
        </div>

        <div class="mt-3 text-xl">
          <h1>Discover your music story</h1>
        </div>

        <div class="font-bold h-36 w-2/5">
          <button
            class="bg-green-600 text-white py-2 px-4 mt-4 h-16 w-52 rounded-full border transition-transform hover:scale-110"
            onClick={getUserLogin}
          >
            Sign in with Spotify
          </button>
        </div>
        <div class="">
          <AlbumAnimationService/>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
