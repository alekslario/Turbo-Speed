"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Table from "./Table.js";
import DropZone from "./DropZone.js";
import PopUp from "./PopUp.js";
import { useStore } from "../utils/contextStore.js";
import db from "../app/db.json";
export const Images = () => {
  const [{ loading, popup, tempFile }, setState] = useState({
    //loading should be a global event, but this is just an example
    loading: false,
    popup: false,
    tempFile: null,
  });

  const [{ files }, dispatch] = useStore();

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      dispatch({
        type: "ADD_FILE",
        file: {
          src: reader.result,
          filename: file.name,
          size: file.size,
          time: Date.now(),
        },
      });
    };
  };
  const showPopup = (file) => {
    setState((prev) => ({ ...prev, popup: true, tempFile: file }));
  };

  const closePopUp = () => {
    setState((prev) => ({ ...prev, popup: false }));
  };
  const processImage = async (title, description) => {
    setState((prev) => ({ ...prev, loading: true }));
    //simulating api call

    setTimeout(() => {
      setState((prev) => ({ ...prev, loading: false }));
      dispatch({
        type: "ADD_PROCESSED_FILE",
        file: {
          ...tempFile,
          title,
          description,
          server_timestamp: Date.now(),
          predictions: db.predict.predictions,
        },
      });
    }, 3000);

    closePopUp();
  };

  return (
    <div className="flex flex-col items-center justify-between p-24 pt-0">
      {popup &&
        createPortal(
          <PopUp processImage={processImage} closePopUp={closePopUp} />,
          document.body
        )}
      <DropZone handleFileUpload={handleFileUpload} />
      {files.length > 0 && (
        <Table files={files} handleAction={showPopup} loading={loading} />
      )}
    </div>
  );
};
export default Images;
