export const Table = ({
  files = [],
  handleAction,
  loading,
  context = "images",
}) => {
  return (
    <div className="mt-4 -mb-3">
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <div
          style={{ backgroundPosition: "10px 10px" }}
          className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        ></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="border-collapse table-auto w-full text-sm">
              <thead
                className={`before:absolute before:top-[65px] before:content-['']  before:bg-blue-600 before:rounded-[4px] before:h-[2px] before:duration-[4000ms] before-w-0 ${
                  loading ? "before:w-full" : ""
                }`}
              >
                <tr>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    {context === "images" ? "Filename" : "Title"}
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    {context === "images" ? "Size" : "Description"}
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Time
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"></th>
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-slate-800">
                {files.map(
                  (
                    {
                      filename,
                      size,
                      time,
                      title,
                      description = "",
                      server_timestamp = "",
                      src,
                      predictions = [],
                    },
                    index
                  ) => (
                    <tr key={index}>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        {context === "images" ? filename : title}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                        {context === "images" &&
                          `${
                            Math.round((size / (1024 * 1000)) * 100) / 100
                          } MB`}
                        {context === "predictions" && description}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                              stroke="#52525B"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            {context === "images"
                              ? new Date(time).toLocaleString()
                              : new Date(server_timestamp).toLocaleString()}
                          </p>
                        </div>
                      </td>
                      <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                        <button
                          className="focus:ring-2 focus:ring-offset-2  focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none disabled:text-slate-300"
                          onClick={() =>
                            handleAction({
                              filename,
                              size,
                              time,
                              src,
                              predictions,
                            })
                          }
                          disabled={loading}
                        >
                          {context === "images" ? "Predict" : "View"}
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
      </div>
    </div>
  );
};
export default Table;
