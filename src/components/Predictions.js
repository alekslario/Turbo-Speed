"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Table from "./Table.js";
import { useStore } from "../utils/contextStore.js";
import NextImage from "next/image.js";

const defaultState = { src: "", predictions: [] };
export const Predictions = () => {
  const [{ src, predictions }, setShow] = useState({
    ...defaultState,
  });
  const imageRef = useRef(null);
  const [{ processedFiles }, dispatch] = useStore();
  const showImage = (file) => {
    setShow((prev) => ({ ...prev, ...file }));
  };
  const hideImage = () => {
    setShow(defaultState);
  };

  useEffect(() => {
    if (src) {
      const image = imageRef.current;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = src;
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        console.log(predictions);
        predictions.forEach(({ bbox, label, score }) => {
          ctx.beginPath();
          ctx.lineWidth = "15";
          ctx.strokeStyle = "red";
          ctx.rect(bbox.x1, bbox.y1, bbox.x2, bbox.y2);
          ctx.font = "bold 100px serif";
          ctx.textAlign = "right";
          ctx.fillText(
            `${label} (${Math.round(score * 100)}%)`,
            bbox.x2,
            bbox.y2 - 20
          );
          ctx.stroke();
        });
        // will be some delay before rectangles are loaded
        image.src = canvas.toDataURL();
      };
    }
  }, [src]);

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {src &&
          createPortal(
            <div className="fixed top-0 left-0 right-0 w-full h-screen flex justify-center z-50 items-center">
              {" "}
              <div className="w-6/12 max-w-[400px] h-fit flex flex-col justify-center  items-center bg-white p-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="flex justify-end w-full mb-3">
                  <button onClick={hideImage}>
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
                <NextImage src={src} width={700} height={700} ref={imageRef} />
              </div>
            </div>,
            document.body
          )}
        {processedFiles.length > 0 && (
          <Table
            files={processedFiles}
            handleAction={showImage}
            context="predictions"
          />
        )}
      </div>
    </div>
  );
};
export default Predictions;
