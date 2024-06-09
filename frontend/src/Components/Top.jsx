import React from "react";
import { useState, useEffect } from "react";
import Check from "./Music Slider/Check";
import { TbLogout2 } from "react-icons/tb";

const Top = (props) => {
  const [profileImage, setProfileImage] = useState();
  const [username, setUsername] = useState();
  const [profileLink, setProfileLink] = useState();

  const visitProfile = () => {
    window.open(profileLink);
  };

  useEffect(() => {
    fetch("/api/user-profile", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setProfileImage(data.images[0].url);
        setProfileLink(data.external_urls.spotify);
        setUsername(data.display_name);
      });
  }, []);

  const exitApp = () => {
    fetch("http://localhost:8080/api/exit", { method: "GET"})
      .then((response) => response.text())
      .then((response) => {
        window.location.replace(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div class="flex justify-center mt-10">
      <div class="ml-10 flex items-center w-1/2">
        <button class="absolute -translate-x-44" onClick={() => exitApp()}>
          <TbLogout2 size="32px" class="transition-transform duration-300 transform hover:scale-110" />
        </button>

        <button class="min-w-16 min-w-16" onClick={visitProfile}>
          <img
            class="object-cover w-16 h-16 mr-0 rounded-full cursor-pointer"
            src={profileImage}
          ></img>
        </button>

        <div class="ml-5 text-2xl cursor-pointer">
          <button onClick={visitProfile}>{username}</button>
        </div>

        <div class="min-w-96 w-4/6 ml-32 text-center">
          <Check deviceID={props.deviceID} />
        </div>
      </div>
    </div>
  );
};

export default Top;
