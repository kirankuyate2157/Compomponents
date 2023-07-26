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
  const [showEditPhoto, setShowEditPhoto] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowEditPhoto = () => {
    setShowEditPhoto(!showEditPhoto);
  };

  const handleVisibilitySelect = (option) => {
    setVisibilityText(option);
    setShowPopup(false);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const onEmojiClick = (event, emojiObject) => {
    console.log("Emoji obj : ", emojiObject);
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
                <ul className='absolute bg-white border border-gray-300 rounded mt-1 py-2 w-32'>
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
          {showPopup2 && (
            <EditPhoto
              onClose={() => setShowPopup2(false)}
              onImageSelect={handleImageSelect}
            />
          )}

          {selectedImage && (
            <div className='relative w-full h-56 mt-4 overflow-auto'>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt='Selected Image'
                className='w-full h-full object-contain'
              />
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
        <div className='flex gap-3 text-3xl text-gray-600 '>
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
            <FaCertificate />
          </span>
          <span
            className='bg-gray-100 rounded-full p-3 hover:shadow-md shadow-black hover:bg-gray-200
          '
          >
            <MdWork />
          </span>
          <span
            className='bg-gray-100 rounded-full p-3 hover:shadow-md shadow-black hover:bg-gray-200
          '
          >
            <IoDocumentText className='text-gray-700' />
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
      {showEditPhoto && <EditPhoto onImageSelect={handleImageSelect} />}
    </>
  );
};

export default WritePost;
