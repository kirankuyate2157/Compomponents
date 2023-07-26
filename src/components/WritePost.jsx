import React, { useState } from "react";
import EditPhoto from "./EditPhoto";
import Picker from "emoji-picker-react";
import { BsCameraVideoFill } from "react-icons/bs";
import { BiSolidChevronDown, BiTime } from "react-icons/bi";
import { GrEmoji } from "react-icons/gr";
import { CiImageOn } from "react-icons/ci";
import { FaCertificate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const WritePost = () => {
  const [articleText, setArticleText] = useState("");
  const [visibilityText, setVisibilityText] = useState("Anyone");
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showvisPopup, setVisShowPopup] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleVisibilitySelect = (option) => {
    setVisibilityText(option);
    setShowPopup(false);
  };
  const fileType = "Documents";
  const handleFileSelect = (file) => {
    if (fileType === "Images") {
      setSelectedImage(file);
    } else if (fileType === "Videos") {
      setSelectedVideo(file);
    } else if (fileType === "Documents") {
      setSelectedDocument(file);
    }

    console.log("file selected :--- ", file.name);

    setShowPopup2(false); // Close the modal after selecting the file
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject.target);
    setArticleText((prevText) => prevText + chosenEmoji);
    setShowPopup(false);
  };
  return (
    <>
      <div className='px-3'>
        <div className='flex  gap-1 justify-start items-center'>
          <div className='flex items-center hover:bg-gray-100 rounded-lg p-1 gap-2'>
            <div className='p-1'>
              <img
                src='https://avatars.githubusercontent.com/u/84271800?v=4'
                alt='placeholder'
                className='w-[50px] rounded-full'
              />
            </div>
            <div
              className='flex flex-col  '
              onClick={() => setVisShowPopup(!showvisPopup)}
            >
              <h1 className='bold text-xl flex items-center gap-1 '>
                Kiran Kuayte
                <span className=' p-1'>
                  <BiSolidChevronDown />
                </span>
              </h1>
              {showvisPopup && (
                <ul className='absolute bg-white border border-gray-300 z-10 rounded mt-1 py-2 w-32'>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => handleVisibilitySelect("Everyone")}
                  >
                    Everyone
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => handleVisibilitySelect("Connections")}
                  >
                    Connections
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => handleVisibilitySelect("Private")}
                  >
                    Private
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => handleVisibilitySelect("Group")}
                  >
                    Group
                  </li>
                </ul>
              )}
              <h5>Post to {visibilityText}</h5>
            </div>
          </div>
        </div>
        <hr className='mt-2 text-black' />
        <div className='relative w-full h-80  overflow-auto'>
          <div className='flex py-2'>
            <textarea
              className='w-full rounded-xl px-3 pt-2 text-xl resize-none focus:outline-none overflow-auto'
              rows={10}
              placeholder='What do you want to talkk about ?'
              value={articleText}
              onChange={(e) => {
                setArticleText(e.target.value);
              }}
            />
          </div>
          {/* Show the EditPhoto modal when 'showPopup2' is true */}
          {showPopup2 && (
            <div className='fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70'>
              <div className='bg-white p-4 rounded-lg'>
                <EditPhoto
                  onClose={() => setShowPopup2(false)}
                  onFileSelect={handleFileSelect}
                  fileType={"Documents"}
                />
              </div>
            </div>
          )}

          {selectedImage && (
            <div className='relative w-full h-56 mt-4 overflow-auto'>
              <div className='mt-2 px-3 font-semibold text-gray-600'>
                {selectedImage.name}
              </div>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt='Selected Image'
                className='w-full h-auto'
              />
            </div>
          )}

          {selectedVideo && (
            <div className='relative w-full h-56 mt-4 overflow-hidden'>
              <div className='mt-2 px-3 font-semibold text-gray-600'>
                {selectedVideo.name}
              </div>
              <img
                src={selectedVideo.thumbnailUrl}
                alt='Video Thumbnail'
                className='w-full h-auto'
              />
            </div>
          )}

          {selectedDocument && (
            <div className='relative w-full h-20 mt-4 overflow-hidden'>
              <div className='mt-2 px-3 font-semibold text-gray-600'>
                {selectedDocument.name}
              </div>
              <IoDocumentText className='text-6xl text-gray-600' />
            </div>
          )}
        </div>
        <div className='flex overflow-x-auto py-2'>
          <button
            className='text-2xl m-1 cursor-pointer hover:bg-gray-100 rounded-full p-2 focus:outline-none'
            onClick={() => setShowPopup(!showPopup)}
          >
            <GrEmoji />
          </button>
        </div>

        <div className='relative'>
          {showPopup && (
            <div className='absolute bottom-[-10px] right-0 z-10 bg-white border border-gray-300 rounded mt-1 w-56'>
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
        <div className='flex gap-3 text-3xl text-gray-500 '>
          <span
            className='bg-gray-100 rounded-full p-3 hover:bg-gray-200  hover:shadow-md shadow-black'
            onClick={() => setShowPopup2(!showPopup2)}
          >
            <CiImageOn />
          </span>
          <span
            className='bg-gray-100 rounded-full p-3 hover:shadow-md shadow-black hover:bg-gray-200
          '
          >
            <BsCameraVideoFill />
          </span>
          <span
            className='bg-gray-100 rounded-full p-3 hover:shadow-md shadow-black hover:bg-gray-200
          '
          >
            <IoDocumentText />
          </span>
          <span
            className='bg-gray-100 rounded-full p-3 hover:shadow-md shadow-black hover:bg-gray-200
          '
          >
            <FaCertificate />
          </span>
          <span
            className='bg-gray-100 rounded-full p-3 hover:shadow-md shadow-black hover:bg-gray-200
          '
          >
            <MdWork />
          </span>
        </div>
        <hr className='mt-2 text-black' />

        <hr className='mt-2 text-black' />
        <div className='flex justify-end items-center gap-3 my-2'>
          <BiTime className='text-2xl text-gray-400' />
          <button className='px-4 py-1 bg-blue-400 rounded-2xl hover:bg-blue-500 items-center'>
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default WritePost;
