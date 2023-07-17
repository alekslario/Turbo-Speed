import { useRef } from "react";
export const PopUp = ({ processImage, closePopUp }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const handleInput = (e) => {
    e.preventDefault();
    processImage(titleRef.current.value, descriptionRef.current.value);
  };
  return (
    <div className="fixed top-0 left-0 right-0 w-full h-screen flex justify-center z-50 items-center">
      {" "}
      <div className="w-6/12 max-w-[400px] h-fit flex flex-col justify-center  items-center bg-white p-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="flex justify-end w-full">
          <button onClick={closePopUp}>
            <svg
              className="w-4 h-4 text-gray-500 dark:text-white hover:text-gray-700 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <form action={processImage} class="mt-10">
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="relative z-0">
              <input
                ref={titleRef}
                type="text"
                name="title"
                class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Title
              </label>
            </div>
            <div class="relative z-0 col-span-2">
              <textarea
                ref={descriptionRef}
                name="description"
                rows="5"
                class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Description
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <button
              className="focus:ring-2 focus:ring-offset-2  focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-300 focus:outline-none disabled:text-slate-300"
              type="button"
              onClick={handleInput}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PopUp;
