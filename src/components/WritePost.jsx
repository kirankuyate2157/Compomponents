import React, { useState } from "react";
import Picker from "emoji-picker-react";

import { BiSolidChevronDown } from "react-icons/bi";

const WritePost = () => {
  const [articleText, setArticleText] = useState("");
  const [visibilityText, setVisibilityText] = useState("Anyone");
  const [showPopup, setShowPopup] = useState(false);
  const [showvisPopup, setVisShowPopup] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleVisibilitySelect = (option) => {
    setVisibilityText(option);
    setShowPopup(false);
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setArticleText((prevText) => prevText + emojiObject.emoji);
    setShowPopup(false);
  };
  const emojis = ["😀", "👍", "❤️", "😂", "🔥", "🎉", "🙌"];

  const handleEmojiClick = (emoji) => {
    if (emoji) {
      setArticleText((prevText) => prevText + emoji);
    }
    setChosenEmoji(null); // Clear the chosenEmoji state after setting the emoji
  };

  return (
    <>
      <div className='px-3'>
        <div className='flex gap-1 justify-start items-center'>
          <div className='p-2'>
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
            <h1 className='bold text-xl flex items-center gap-1'>
              Kiran Kuayte
              <span className=''>
                <BiSolidChevronDown />
              </span>
            </h1>{" "}
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
        <hr className='mt-2 text-black' />
        <div className='flex py-2'>
          <textarea
            className='w-full rounded-xl p-3 focus:outline-none  '
            rows={10}
            placeholder='What do you want to talkk about ?'
            value={articleText}
            onChange={(e) => {
              setArticleText(e.target.value);
            }}
          />
        </div>
        <div className='flex overflow-x-auto py-2'>
          {emojis.map((emoji, index) => (
            <button
              key={index}
              className='text-2xl m-1 cursor-pointer hover:bg-gray-100 rounded-full p-2 focus:outline-none'
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </button>
          ))}
          {/* Emoji Picker Button */}
          <button
            className='text-2xl m-1 cursor-pointer hover:bg-gray-100 rounded-full p-2 focus:outline-none'
            onClick={() => setShowPopup(!showPopup)}
          >
            😃
          </button>
        </div>
        <div className='relative'>
          {showPopup && (
            <div className='absolute bottom-[-10px] right-0 z-10 bg-white border border-gray-300 rounded mt-1 w-56'>
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
        {/* ... (rest of your component code) ... */}
        {/* Display the chosen emoji */}
        {chosenEmoji ? (
          <span>You chose: {chosenEmoji.emoji}</span>
        ) : (
          <span>No emoji chosen</span>
        )}

        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default WritePost;
