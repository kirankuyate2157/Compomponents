import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { BiSolidVideos } from "react-icons/bi";
import { IoCalendar } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";

const Media = ({ Icons, title, colors = "red", onClick }) => {
  return (
    <>
      <div
        className={`flex justify-center p-3 hover:bg-gray-100 cursor-pointer gap-1 md:gap-2 items-center text-sm md:text-lg rounded-md`}
        onClick={onClick}
      >
        <Icons
          className={`w-[30px] md:w-[56px] h-auto text-${colors}-600`}
          style={{ color: colors }}
        />
        <span className='w-full'>{title}</span>
      </div>
    </>
  );
};

const StartPost = () => {
  const [documentType, setDocumentType] = useState("");
  const navigate = useNavigate();
  const handleDocumentClick = (type) => {
    setDocumentType(type);
    navigate(`/write-post/${type}/true`); // Use route parameters format
  };

  return (
    <>
      <div className='my-10 rounded-xl border'>
        <div className='flex gap-3 mx-5 py-2'>
          <div>
            <img
              src='https://avatars.githubusercontent.com/u/84271800?v=4'
              alt='placeholder'
              className='w-[60px] rounded-full'
            />
          </div>
          <Link
            to='/write-post'
            className='w-full h-auto hover:bg-gray-100 p-1 rounded-full cursor-pointer'
          >
            <h5 className='w-full rounded-full items-center flex h-full text-lg border-[1px] input-none focus:outline-none border-gray-300 px-5'>
              Start post ..
            </h5>
          </Link>
        </div>
        <div className='flex w-full justify-around mb-2 '>
          <Media
            title={"Photo"}
            Icons={CiImageOn}
            onClick={() => handleDocumentClick("Images")}
          />
          <Media
            title={"Video"}
            Icons={BiSolidVideos}
            onClick={() => handleDocumentClick("Videos")}
          />
          <Media
            title={"Articles"}
            Icons={GrArticle}
            onClick={() => handleDocumentClick("Documents")}
          />
          <Media
            title={"Events"}
            Icons={IoCalendar}
            onClick={() => handleDocumentClick("Events")}
          />
        </div>
      </div>
    </>
  );
};

export default StartPost;
