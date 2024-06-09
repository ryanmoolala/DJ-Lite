import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Genres = () => {
  const [activeButton, setActive] = useState(0);
  const [arrayGenres, setArrayGenres] = useState([]);
  const [activeTimeId, setActiveTimeId] = useState(0);

  useEffect(() => {
    console.log('only run once please')
    fetch("/api/user-top-genre?term=0", {
      method: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArrayGenres(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const chooseActiveButton = (number) => {
    setActive(number);
    changeTimeScale(number);
  };

  const render20Rows = () => {
    return arrayGenres.map((genre, index) => {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        genre.genre
      )} music genre`;
      return (
        <tr>
          <td class="px-2 py-2 text-gray-500 md:px-6 whitespace-nowrap">
            <div class="flex flex-row items-center justify-center">
              {index + 1}
            </div>
          </td>

          <td class="px-2 py-2 md:px-6 whitespace-nowrap">
            <div class="ml-3 ">
              <a
                href={googleSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="font-medium text-center text-gray-900 whitespace-pre-wrap hover:bg-slate-100 border-0 rounded-xl">
                  {genre.genre.charAt(0).toUpperCase() + genre.genre.slice(1)}
                </div>
              </a>
            </div>
          </td>
        </tr>
      );
    });
  };

  const changeTimeScale = (timeId) => {
    setActiveTimeId(timeId);
    fetch(`/api/user-top-genre?term=${timeId}`, {
      method: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setArrayGenres(data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>

      <div>Render Images</div>

      <div class="w-full border-solid border-2 border-zinc-700 rounded-lg">
        <div class="text-center">Your Genres</div>

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
              Artist
            </th>
            <th class="hidden bg-gray-50 md:table-cell"></th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
          {render20Rows()}
        </tbody>
      </table>
    </div>
  );
};

export default Genres;
