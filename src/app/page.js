"use client";
import { useState } from "react";
import { Predictions, Images, Table } from "../components";
export const Home = () => {
  const [{ tab }, setState] = useState({
    tab: "images", // images || predictions
    loading: false,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
        <div className="flex flex-row items-center justify-between p-24">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li
                className="mr-2"
                onClick={() => setState((prev) => ({ ...prev, tab: "images" }))}
              >
                <a
                  href="#"
                  className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg dark:hover:text-gray-300 group ${
                    tab === "images"
                      ? "border-blue-600 text-blue-600 "
                      : "hover:text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 mr-2  dark:text-gray-500 dark:group-hover:text-gray-300  ${
                      tab === "images"
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-gray-500 "
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      fill="currentColor"
                      d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                    />
                  </svg>
                  Images
                </a>
              </li>
              <li
                className="mr-2"
                onClick={() =>
                  setState((prev) => ({ ...prev, tab: "predictions" }))
                }
              >
                <a
                  href="#"
                  className={`inline-flex items-center justify-center p-4 border-b-2  rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group ${
                    tab === "predictions"
                      ? "text-blue-600 border-blue-600"
                      : "hover:text-gray-600 hover:border-gray-300"
                  }`}
                  aria-current="page"
                >
                  <svg
                    className={`w-4 h-4 mr-2  dark:text-blue-500
                    ${
                      tab === "predictions"
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-gray-500 "
                    }
                    `}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 22 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                    />
                  </svg>
                  Predictions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/alekslario/Turbo-Speed"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Alex
          </a>
        </div>
      </div>
      {tab === "images" && <Images />}
      {tab === "predictions" && <Predictions />}
    </main>
  );
};
export default Home;
