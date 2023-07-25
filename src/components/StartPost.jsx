import { useState } from "react";
import { CiImageOn } from "react-icons/ci";

const Media = () => {
  return (
    <>
      <div className='flex justify-center  gap-1 items-center text-xl bg-red-100 '>
        <CiImageOn className='w-[56px]  h-full' />
        <span className='w-full '>Photo</span>
      </div>
    </>
  );
};
const StartPost = () => {
  const [text, setText] = useState("");
  return (
    <>
      <div className=' bg-blue-200'>
        <div className='flex bg-green-300'>
          <div>
            <img
              src='https://media.licdn.com/dms/image/C5603AQHW5p7nPuc-mg/profile-displayphoto-shrink_100_100/0/1621769516271?e=1695859200&v=beta&t=2VkVh3iqCuDd61i3jL8eoscf1T7cLfSkt9bJ7Im6Bug'
              alt='placeholder'
            />
          </div>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className='m-2 flex w-full justify-around '>
          <Media />
          <Media />
          <Media />
          <Media />
        </div>
      </div>
    </>
  );
};

export default StartPost;
