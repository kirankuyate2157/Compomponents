import React, { useState } from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";

const EditPhoto = ({ onClose, onFileSelect, fileType }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [initialPreview, setInitialPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Set initial preview for video and PDF files
    if (fileType === "Videos" && file.type.startsWith("video/")) {
      createVideoThumbnail(file);
    } else if (fileType === "Documents" && file.type === "application/pdf") {
      createDocumentThumbnail();
    }
  };

  const createVideoThumbnail = (file) => {
    // Create video thumbnail using a <video> element
    const video = document.createElement("video");
    video.src = URL.createObjectURL(file);
    video.currentTime = 1; // Show the frame at 1 second
    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const thumbnailUrl = canvas.toDataURL();
      setInitialPreview(thumbnailUrl);
    });
  };

  const createDocumentThumbnail = () => {
    // For documents, just use a generic icon
    setInitialPreview(null); // No preview for documents
  };

  const handleDone = () => {
    onFileSelect(selectedFile);
    onClose();
  };

  return (
    <div className='py-2 w-80 border rounded-xl'>
      <h1 className='px-3'>Select {fileType}</h1>
      <hr className='mt-2 text-black' />
      <label
        className={`flex text-blue-500 font-bold justify-center items-center ${
          selectedFile ? "" : "py-10"
        } hover:bg-gray-200 cursor-pointer bg-slate-100`}
      >
        <input
          type='file'
          accept={`${
            fileType === "Images"
              ? "image"
              : fileType === "Videos"
              ? "video"
              : "application/pdf"
          }/*`}
          className='hidden'
          onChange={handleFileChange}
        />
        {selectedFile ? (
          <div className='relative w-full h-56 overflow-hidden'>
            {fileType === "Images" ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt='Selected File'
                className='w-full h-full object-contain'
              />
            ) : (
              <div className='flex items-center justify-center h-full'>
                {fileType === "Videos" ? (
                  <img
                    src={initialPreview}
                    alt='Video Thumbnail'
                    className='w-full h-auto'
                  />
                ) : fileType === "Documents" ? (
                  <IoDocumentText className='text-6xl text-gray-600' />
                ) : null}
              </div>
            )}
          </div>
        ) : (
          `Select ${fileType.toLowerCase()} to share`
        )}
      </label>
      {selectedFile && (
        <div className='mt-2 px-3 font-semibold text-gray-600'>
          {selectedFile.name}
        </div>
      )}
      <hr className='mb-2 text-black' />
      <div className='flex justify-end items-center gap-3 m-2'>
        <button
          className='px-4 py-1 bg-blue-400 rounded-2xl hover:bg-blue-500 items-center'
          onClick={onClose}
        >
          Back
        </button>
        <button
          className={`px-4 py-1 rounded-2xl items-center ${
            selectedFile
              ? "bg-blue-400 hover:bg-blue-500"
              : "bg-gray-200 hover:shadow-xl pointer-events-none"
          }`}
          onClick={handleDone}
          disabled={!selectedFile}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EditPhoto;
