import React, { useState, useEffect } from "react";
import { FaMusic } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { Helmet } from "react-helmet";

const Tracks = () => {
  const [arrayTracks, setArrayTracks] = useState([]);
  const [listState, setListState] = useState(true);
  const [topSixImages, setSixImages] = useState([]);
  const [topSixURL, setSixUrls] = useState([]);

  const [activeButton, setActive] = useState(0);

  const playSong = (track, album) => {
    fetch("/player/play", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ offset: track - 1, albumID: album }),
    }).catch((error) => console.log(error));
  };

  const render10Rows = () => {
    return arrayTracks.slice(0, 10).map((track, index) => {
      return (
        <tr>
          <td class="px-2 py-2 text-gray-500 md:px-6 whitespace-nowrap">
            <div class="flex flex-row items-center justify-center">
              {index + 1}
            </div>
          </td>

          <td class="px-2 py-2 md:px-6 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 w-14 h-14 sm:h-16 sn:w-16">
                <a href={track.album.external_urls.spotify} target="_blank">
                  <img
                    class="object-cover w-full h-full bg-cover bg-gray-50 transition-transform duration-300 transform hover:scale-110"
                    src={track.album.images[0].url}
                  ></img>
                </a>
              </div>

              <div class="ml-3">
                <div class="text-sm font-medium text-gray-900 whitespace-pre-wrap">
                  {track.name}
                </div>
                <div class="text-sm font-medium text-gray-900 whitespace-pre-wrap">
                  {track.artists[0].name}
                </div>
              </div>
            </div>
          </td>

          <td class="w-6">
            <div class="flex space-x-2">
              <button
                onClick={() => {
                  playSong(`${track.track_number}`, `${track.album.id}`);
                }}
              >
                <IoHeadset class="size-4 " />
              </button>

              <button onClick={() => window.open(track.external_urls.spotify)}>
                <FaMusic class="size-4 mr-2" />
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  const render50Rows = () => {
    return arrayTracks.map((track, index) => {
      return (
        <tr>
          <td class="px-2 py-2 text-gray-500 md:px-6 whitespace-nowrap">
            <div class="flex flex-row items-center justify-center">
              {index + 1}
            </div>
          </td>

          <td class="px-2 py-2 md:px-6 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 w-14 h-14 sm:h-16 sn:w-16">
                <a href={track.album.external_urls.spotify} target="_blank">
                  <img
                    class="object-cover w-full h-full bg-cover bg-gray-50 transition-transform duration-300 transform hover:scale-110"
                    src={track.album.images[0].url}
                  ></img>
                </a>
              </div>

              <div class="ml-3">
                <div class="text-sm font-medium text-gray-900 whitespace-pre-wrap">
                  {track.name}
                </div>
                <div class="text-sm font-medium text-gray-900 whitespace-pre-wrap">
                  {track.artists[0].name}
                </div>
              </div>
            </div>
          </td>

          <td class="w-6">
            <div class="flex space-x-2">
              <button
                onClick={() => {
                  playSong(`${track.track_number}`, `${track.album.id}`);
                }}
              >
                <IoHeadset class="size-4 " />
              </button>

              <button onClick={() => window.open(track.external_urls.spotify)}>
                <FaMusic class="size-4 mr-2" />
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  const renderTopImages = () => {
    return (
      <div class="flex justify-center">
        <div class="grid grid-cols-3 gap-5 w-96 h-72">
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topSixURL[0]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50"
                alt="1"
                src={topSixImages[0]}
              ></img>
            </a>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topSixURL[1]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50 "
                alt="2"
                src={topSixImages[1]}
              ></img>
            </a>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topSixURL[2]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50"
                alt="3"
                src={topSixImages[2]}
              ></img>
            </a>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topSixURL[3]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50"
                alt="4"
                src={topSixImages[3]}
              ></img>
            </a>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topSixURL[4]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50"
                alt="3"
                src={topSixImages[4]}
              ></img>
            </a>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topSixURL[5]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50"
                alt="3"
                src={topSixImages[5]}
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetch("/api/user-top-song?term=0", {
      method: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArrayTracks(data.items);
        setSixImages(data.items.slice(0, 6).map((x) => x.album.images[0].url));
        setSixUrls(
          data.items.slice(0, 6).map((x) => x.external_urls.spotify)
        );
      });
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  const adjustTime = (timeId) => {
    fetch(`/api/user-top-song?term=${timeId}`, {
      method: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArrayTracks(data.items);
        setSixImages(data.items.slice(0, 6).map((x) => x.album.images[0].url));
        setSixUrls(
          data.items.slice(0, 6).map((x) => x.external_urls.spotify)
        );
      });
  };

  const chooseActiveButton = (number) => {
    setActive(number);
    adjustTime(number);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>

      <div>{renderTopImages()}</div>

      <div class="w-full border-solid border-2 border-zinc-700 rounded-lg mt-10">
        <div class="text-center">Your Tracks</div>

        <div class="flex justify-evenly mt-1 mb-1">
          {activeButton == 0 ? (
            <button
              class="bg-green-100 w-20 border-2 rounded-2xl border-green-300"
              onClick={() => chooseActiveButton(0)}
            >
              {" "}
              1 Month{" "}
            </button>
          ) : (
            <button onClick={() => chooseActiveButton(0)}> 1 Month</button>
          )}
          {activeButton == 1 ? (
            <button
              class="bg-green-100 w-20 border-2 rounded-2xl border-green-300"
              onClick={() => chooseActiveButton(1)}
            >
              {" "}
              6 Months{" "}
            </button>
          ) : (
            <button onClick={() => chooseActiveButton(1)}> 6 Months</button>
          )}
          {activeButton == 2 ? (
            <button
              class="bg-green-100 w-20 border-2 rounded-2xl border-green-300"
              onClick={() => chooseActiveButton(2)}
            >
              {" "}
              All time{" "}
            </button>
          ) : (
            <button onClick={() => chooseActiveButton(2)}> All time</button>
          )}
        </div>
      </div>

      <table class="min-w-full divide-y divide-gray-400 border-2 mt-5">
        <thead>
          <tr>
            <th
              scope="col"
              class="px-2 py-3 text-xs font-medium w-24 tracking-wider text-gray-500 uppercase md:px-6 bg-gray-50"
            >
              <span class="pl-3 hidden sm:block">Position</span>
              <span class="block sm:hidden">Pos.</span>
            </th>

            <th
              scope="col"
              class="py-3 text-xs font-medium w-80 tracking-wider text-center text-gray-500 uppercase md:px-6 bg-gray-50"
            >
              Track
            </th>
            <th class="hidden bg-gray-50 md:table-cell"></th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
          {listState ? render10Rows() : render50Rows()}
        </tbody>
      </table>

      <button
        onClick={() => setListState(!listState)}
        class="flex items-center justify-center w-full px-8 py-2 text-sm font-serif text-l border border-transparent bg-gray-100 hover:bg-indigo-100 md:py-3 md:text-md md:px-10"
      >
        <div class={`${listState ? "block" : "hidden"}`}>View all</div>
        <div class={`${listState ? "hidden" : "block"}`}>View less</div>
      </button>

      <div style={{ marginBottom: "20rem" }}></div>
    </div>
  );
};

export default Tracks;
