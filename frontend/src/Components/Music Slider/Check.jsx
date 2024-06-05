import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Button from "./Button";

const Check = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState("Nothing");
  const [trackURL, setTrackURL] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState();
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    fetch("/player/findSpotifyPlaying", {
      method: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrentTrack(data.item.name);
        setCurrentTime(Math.floor(data.progress_ms / 1000));
        setMaxTime(Math.floor(data.item.duration_ms / 1000));
        setIsPlaying(data.is_playing);

        setArtistName(data.item.artists[0].name);
        setAlbumName(data.item.album.name);
        setImage(data.item.album.images[0].url);
        setImageURL(data.item.album.external_urls.spotify);
        setTrackURL(data.item.external_urls.spotify);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div class="border min-w-full rounded-xl border-gray-200 h-24 flex items-center justify-center">
      <div class="mr-5 flex-shrink-0">
        <a href={imageURL} target="_blank">
          <img
            class="rounded object-cover mr-0 w-16 h-16 cursor-default transition-transform duration-300 transform hover:scale-110"
            src={image}
          ></img>
        </a>
      </div>

      <div class="flex-col items-center">
        <div class="flex w-96 justify-center whitespace-nowrap overflow-hidden">
          <a class="w-96" href={trackURL} target="_blank">
            <p class="duration-0 animate-maquee">
              {currentTrack} | {artistName}{" "}
            </p>
          </a>
        </div>

        <div>
          <Slider currentTime={currentTime} maxTime={maxTime} />
        </div>

        <div>
          <Button isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
      </div>
    </div>
  );
};

export default Check;
