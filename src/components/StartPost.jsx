import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { BiSolidVideos } from "react-icons/bi";
import { IoCalendar } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";
const Media = ({ Icons, title, colors = "red" }) => {
  return (
    <>
      <div
        className={`flex justify-center p-1 gap-2 items-center text-lg rounded-md`}
      >
        <Icons
          className={`w-[45px] h-full text-${colors}-600`}
          style={{ color: colors }}
        />
        <span className='w-full'>{title}</span>
      </div>
    </>
  );
};

const StartPost = () => {
  const [text, setText] = useState("");
  return (
    <>
      <div className='  my-10 rounded-xl border'>
        <div className='flex  gap-3 mx-5 py-2'>
          <div>
            <img
              src='https://avatars.githubusercontent.com/u/84271800?v=4'
              alt='placeholder'
              className='w-[60px] rounded-full'
            />
          </div>
          <input
            value={text}
            placeholder='Start post ..'
            onChange={(e) => {
              setText(e.target.value);
            }}
            className='w-full rounded-full text-lg border-[1px] border-gray-300  px-5'
          />
        </div>
        <div className='m-2 pb-1 flex w-full justify-around '>
          <Media title={"Photo"} Icons={CiImageOn} />
          <Media title={"Video"} Icons={BiSolidVideos} />
          <Media title={"Events"} Icons={IoCalendar} />
          <Media
            title={"Events"}
            Icons={GrArticle}
            className='text-green-400'
          />
        </div>
      </div>
    </>
  );
};

export default StartPost;
