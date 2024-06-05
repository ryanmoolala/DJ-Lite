import React from "react";
import "./styles.css";
import AlbumService from "./LoginAnimation/AlbumScroll";

const LoginPage = () => {
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
          <AlbumService/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
