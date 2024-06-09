import React, { useState, useEffect } from "react";
import { TbBrandSpotify } from "react-icons/tb";

const Artist = () => {
  const [arrayArtists, setArrayArtists] = useState([]);
  const [listState, setListState] = useState(true);
  const [topFourItems, setFourItems] = useState([]);
  const [topFourLinks, setFourLinks] = useState([]);

  const [activeButton, setActive] = useState(0);

  const render10Rows = () => {
    return arrayArtists.slice(0, 10).map((artist, index) => {
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
                <img
                  class="object-cover w-full h-full bg-cover bg-gray-50"
                  src={artist.images[0].url}
                ></img>
              </div>

              <div class="ml-3 ">
                <div class="text-sm font-medium text-gray-900 whitespace-pre-wrap">
                  {artist.name}
                </div>
              </div>
            </div>
          </td>

          <td class="w-6 pr-2">
            <button
              onClick={() => window.open(artist.external_urls.spotify)}
              class="flex"
            >
              <div>
                <TbBrandSpotify class="size-6" />
              </div>
            </button>
          </td>
        </tr>
      );
    });
  };

  const render50Rows = () => {
    return arrayArtists.map((artist, index) => {
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
                <img
                  class="object-cover w-full h-full bg-cover bg-gray-50"
                  src={artist.images[0].url}
                ></img>
              </div>

              <div class="ml-3">
                <div class="text-sm font-medium text-gray-900 whitespace-pre-wrap">
                  {artist.name}
                </div>
              </div>
            </div>
          </td>

          <td class="w-6 pr-2">
            <button
              onClick={() => window.open(artist.external_urls.spotify)}
              class="flex"
            >
              <div>
                <TbBrandSpotify class="size-6" />
              </div>
            </button>
          </td>
        </tr>
      );
    });
  };

  const renderTopImages = () => {
    return (
      <div class="flex justify-center">
        <div class="ml-12 mr-12 grid grid-cols-2 gap-5 w-72 h-72">
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topFourLinks[0]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50"
                alt="1"
                src={topFourItems[0]}
              ></img>
            </a>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topFourLinks[1]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50 "
                alt="2"
                src={topFourItems[1]}
              ></img>
            </a>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topFourLinks[2]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50"
                alt="3"
                src={topFourItems[2]}
              ></img>
            </a>
          </div>
          <div class="transition-transform duration-300 transform hover:scale-110">
            <a href={topFourLinks[3]} target="_blank" class="cursor-default">
              <img
                class="object-cover w-full h-full bg-cover rounded-xl bg-gray-50"
                alt="4"
                src={topFourItems[3]}
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetch("/api/user-top-artist?term=0", {
      method: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArrayArtists(data.items);
        setFourItems(data.items.slice(0, 4).map((x) => x.images[0].url));
        setFourLinks(
          data.items.slice(0, 4).map((x) => x.external_urls.spotify)
        );
      });
      
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  const changeTimeScale = (timeId) => {
    setActive(timeId);
    fetch(`/api/user-top-artist?term=${timeId}`, {
      method: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArrayArtists(data.items);
        setFourItems(data.items.slice(0, 4).map((x) => x.images[0].url));
        setFourLinks(
          data.items.slice(0, 4).map((x) => x.external_urls.spotify)
        );
      });
  };

  return (
    <div>
      <div>{renderTopImages()}</div>

      <div class="w-full border-solid border-2 border-zinc-700 rounded-lg mt-10">
        <div class="text-center">Your Artists</div>

        <div class="flex justify-evenly mt-1 mb-1">
          {activeButton == 0 ? (
            <button
              class="bg-green-100 w-20 border-2 rounded-2xl border-green-300"
              onClick={() => changeTimeScale(0)}
            >
              1 Month
            </button>
          ) : (
            <button onClick={() => changeTimeScale(0)}> 1 Month</button>
          )}

          {activeButton == 1 ? (
            <button
              class="bg-green-100 w-20 border-2 rounded-2xl border-green-300"
              onClick={() => changeTimeScale(1)}
            >
              6 Months
            </button>
          ) : (
            <button onClick={() => changeTimeScale(1)}> 6 Months</button>
          )}

          {activeButton == 2 ? (
            <button
              class="bg-green-100 w-20 border-2 rounded-2xl border-green-300"
              onClick={() => changeTimeScale(2)}
            >
              All time
            </button>
          ) : (
            <button onClick={() => changeTimeScale(2)}> All time</button>
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
              Artist
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

export default Artist;
