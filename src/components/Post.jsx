import { useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";

import myphoto from "./../assets/myphoto.jpg";
import { SlLike, SlOptions } from "react-icons/sl";
import { FaRegComment, FaShare } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

const Reaction = ({ Icons, title }) => {
  return (
    <>
      <div
        className={`flex w-full justify-center p-2 sm:p-4 my-2 text-gray-600 hover:bg-gray-100 cursor-pointer gap-1 md:gap-2 items-center sm:text-sm md:text-md font-bold rounded-lg`}
      >
        <Icons className={` w-[20px] sm:w-[30px] md:w-[25px]  h-auto `} />
        <span className='hidden sm:flex'>{title}</span>
      </div>
    </>
  );
};
const Post = () => {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <div className='m-2 rounded-lg bg-white'>
      <div className='flex  items-center text-sm mx-2 md:mx-5'>
        <div className='  w-14 sm:w-[4rem] md:w-20 rounded m-2'>
          <img
            src='https://avatars.githubusercontent.com/u/84271800?v=4'
            alt='user profile '
            className='w-full rounded-full'
          />
        </div>
        <div className='mr-1 my-2 w-[85%] text-gray-700'>
          <div className='flex justify-between w-full'>
            <div className='flex justify-start gap-1 text-sm md:text-lg'>
              <h1 className='font-semibold text-black'>Kiran Kuyate</h1>
              <span>(He/Him)</span>
            </div>
            <SlOptions />
          </div>
          <div className='flex items-center'>
            <p className='flex text-xs md:text-sm overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[12rem] md:max-w-lg'>
              SDE aspirants 💫 | final yr | web dev (MERN) | DS | DSA | AI
              enthusiast | 2x100DaysOfCode
            </p>
            <span>...</span>
          </div>
          <h6 className='text-xs md:text-sm'>13hr 🌏</h6>
        </div>
        <div></div>
      </div>
      <div className='text-sm md:text-md mx-3 md:mx-5 mb-3'>
        <LinesEllipsis
          text={`I'm happy to share that I have obtained new certification of Advanced
          Software Engineering Virtual Program of Walmart Global Tech, it was
          provided by Forage. #walmartglobaltech #theforage #softwareengineer
          #virtualexperience`}
          maxLine={showFullText ? 1000 : 3}
          ellipsis='.. See more...'
          trimRight
          basedOn='words'
          onClick={() => setShowFullText(!showFullText)}
        />
      </div>
      <div className='mx-2 sm:mx-0'>
        <img src={myphoto} alt='post image' />
      </div>
      <div className='mx-2 md:mx-5 text-gray-600'>
        <div className='flex justify-between text-xs p-1  '>
          <div className='flex gap-1'>
            <div className='flex items-center'>
              <span className=' bg-green-300 border rounded-full '>👍</span>
              <span className=' bg-red-700  border rounded-full ml-[-8px]'>
                ❤️
              </span>
              <span className=' bg-yellow-500 border border-gray-300  rounded-full ml-[-8px]'>
                🎉
              </span>
            </div>
            <div> pravan kumar and 234 others</div>
          </div>
          <div className='flex px-2 gap-2'>
            <h6>10 comments</h6>
            <h6>• 6 reposts</h6>
          </div>
        </div>
        <hr className='mt-1' />
        <div className='flex w-full mb-2 '>
          <Reaction Icons={SlLike} title={"Like"} />
          <Reaction Icons={FaRegComment} title={"Comment"} />
          <Reaction Icons={BiRepost} title={"Repost"} />
          <Reaction Icons={FaShare} title={"Send"} />
        </div>
      </div>
    </div>
  );
};

export default Post;
