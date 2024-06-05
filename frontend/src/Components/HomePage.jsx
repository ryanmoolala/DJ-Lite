import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const userTopArtist = () =>
    fetch("/api/user-top-artist?term=0&limit=10", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        navigate('/api/dashboard')
      });

  const userTopSong = () =>
    fetch("/api/user-top-song?term=0&limit=10", { method: "GET" })
      .then((response) => response.json())
      .then((data) => console.log(data));

  const userTopGenres = () => {
    console.log("top genres");
  };

  const findArtist = () =>
    fetch("/api/findArtist", { method: "GET" })
      .then((response) => response.text())
      .then((link) => window.open(link));

  const findTrack = () =>
    fetch("/api/findTrack", { method: "GET" })
      .then((response) => response.text())
      .then((link) => window.open(link));

  const findAlbum = () =>
    fetch("/api/findAlbum", { method: "GET" })
      .then((response) => response.text())
      .then((link) => window.open(link));

  const findSpotifyPlaying = () =>
    fetch("/player/findSpotifyPlaying", { method: "GET" })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

  return (
    <div>
      <h1>Spotify Home Page</h1>
      <button onClick={userTopArtist}>
        Send API Request for user-top-artist
      </button>
      <div></div>
      <button onClick={userTopSong}>Send API Request for user-top-songs</button>
      <div></div>
      <button onClick={userTopGenres}>
        Send API Request for user-top-genres
      </button>
      <div></div>
      <button onClick={findArtist}>Send API Request for artist</button>
      <div></div>
      <button onClick={findTrack}>Send API Request for track</button>
      <div></div>
      <button onClick={findAlbum}>Send API Request for album</button>
      <div></div>
      <button onClick={findSpotifyPlaying}>
        Send API Request for current song
      </button>
    </div>
  );
};

export default HomePage;
