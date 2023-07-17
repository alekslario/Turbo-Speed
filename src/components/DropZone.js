import { useEffect, useRef, useState } from "react";
export const DropZone = ({ handleFileUpload }) => {
  const [active, setActive] = useState(false);
  const dropzone = useRef(null);

  const handlePickFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    handleFileUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    if (!active) setActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setActive(false);
  };
  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setActive(false);
    handleFileUpload(file);
  };

  useEffect(() => {
    if (!dropzone.current) return;

    dropzone.current.addEventListener("drop", handleFileDrop);
    dropzone.current.addEventListener("dragleave", handleDragLeave);
    dropzone.current.addEventListener("dragover", handleDragOver);
    return () => {
      if (!dropzone.current) return;
      dropzone.current.removeEventListener("drop", handleFileDrop);
      dropzone.current.removeEventListener("dragleave", handleDragLeave);
      dropzone.current.removeEventListener("dragover", handleDragOver);
    };
  }, []);
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
      <div>
        <label
          ref={dropzone}
          className={`flex justify-center w-full h-32 px-4 transition  border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none ${
            active && "border-blue-800"
          }`}
        >
          <span className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="font-medium text-gray-600">
              Drop your files here, or{" "}
              <span className="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input
            type="file"
            name="file_upload"
            className="hidden"
            onChange={handlePickFile}
          />
        </label>
      </div>
    </div>
  );
};
export default DropZone;
