import { useState, useEffect } from "react";
import LinesEllipsis from "react-lines-ellipsis";

import myphoto from "./../assets/myphoto.jpg";
import { SlLike, SlOptions } from "react-icons/sl";
import { FaRegComment, FaShare } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

const Post = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [reactionOptionsVisible, setReactionOptionsVisible] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [reactionCounts, setReactionCounts] = useState({
    Like: 0,
    Love: 0,
    Celebrate: 0,
    Support: 0,
    Insightful: 0,
  });

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    setLikeCount((prevLikeCount) =>
      prevIsLiked
        ? prevLikeCount - reactionCounts.Like
        : prevLikeCount + reactionCounts.Like
    );
    setSelectedReaction(null); // Clear the selected reaction when the user clicks the Like button
  };

  const handleReactionSelect = (reaction) => {
    if (selectedReaction === reaction) {
      setSelectedReaction(null);
      setReactionCounts((prevCounts) => ({
        ...prevCounts,
        [reaction.label]: prevCounts[reaction.label] - 1,
      }));
      setLikeCount((prevLikeCount) => prevLikeCount - 1);
    } else {
      setSelectedReaction(reaction);
      setReactionCounts((prevCounts) => ({
        ...prevCounts,
        [reaction.label]: prevCounts[reaction.label] + 1,
      }));
      setLikeCount((prevLikeCount) => prevLikeCount + 1);
    }
    setReactionOptionsVisible(false);
  };

  const handleReactionHover = () => {
    if (!isLiked) {
      setReactionOptionsVisible(true);
    }
  };

  const handleReactionLeave = () => {
    if (!isLiked) {
      setTimeout(() => {
        setReactionOptionsVisible(false);
      }, 2000); // 2 seconds delay
    }
  };

  const ReactionOptions = ({ onSelectReaction }) => {
    const reactionOptions = [
      { label: "Like", emoji: "👍" },
      { label: "Love", emoji: "❤️" },
      { label: "Celebrate", emoji: "🎉" },
      { label: "Support", emoji: "🤝" },
      { label: "Insightful", emoji: "🧠" },
    ];

    const [hoveredEmoji, setHoveredEmoji] = useState(null);

    return (
      <div className='absolute bottom-2 flex bg-white rounded-lg text-xl shadow-2xl p-1 z-10'>
        {reactionOptions.map((option) => (
          <div
            key={option.label}
            className={`relative cursor-pointer hover:bottom-3 hover:bg-transparent   rounded p-2 transform transition-transform ${
              hoveredEmoji === option.emoji ? "scale-100 opacity-150" : ""
            }`}
            onClick={() => onSelectReaction(option)}
            onMouseEnter={() => setHoveredEmoji(option.emoji)}
            onMouseLeave={() => setHoveredEmoji(null)}
          >
            {option.emoji}
            {hoveredEmoji === option.emoji && (
              <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-lg'>
                {option.label}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const Reaction = ({
    Icons,
    title,
    onClick,
    isActive,
    onMouseLeave,
    onMouseEnter,
  }) => {
    return (
      <div
        className={`flex w-full justify-center p-2 sm:p-4 my-2 text-gray-600 hover:bg-gray-100 cursor-pointer gap-1 md:gap-2 items-center sm:text-sm md:text-md font-bold rounded-lg ${
          isActive ? "text-blue-500" : ""
        }`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Icons className={`w-[20px] sm:w-[30px] md:w-[25px] h-auto`} />
        <span className='hidden sm:flex'>{title}</span>
      </div>
    );
  };

  return (
    <div className='m-2 rounded-lg bg-white'>
      <div className='flex items-center text-sm mx-2 md:mx-5'>
        <div className='w-14 sm:w-[4rem] md:w-20 rounded m-2'>
          <img
            src='https://avatars.githubusercontent.com/u/84271800?v=4'
            alt='user profile'
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
          text={`I'm happy to share that I have obtained a new certification of Advanced Software Engineering Virtual Program of Walmart Global Tech, it was provided by Forage. #walmartglobaltech #theforage #softwareengineer #virtualexperience`}
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
        <div className='flex justify-between text-xs p-1'>
          <div className='flex gap-1 relative'>
            <div className='flex items-center cursor-pointer'>
              {likeCount > 0 && (
                <span className='bg-green-300 border rounded-full '>👍</span>
              )}
              {reactionCounts.Love > 0 && (
                <span className='bg-red-700 border rounded-full ml-[-8px]'>
                  ❤️
                </span>
              )}
              {reactionCounts.Celebrate > 0 && (
                <span className='bg-yellow-500 border border-gray-300 rounded-full ml-[-8px]'>
                  🎉
                </span>
              )}
              {reactionCounts.Support > 0 && (
                <span className='bg-blue-500 border border-gray-300 rounded-full ml-[-8px]'>
                  🤝
                </span>
              )}
              {reactionCounts.Insightful > 0 && (
                <span className='bg-purple-500 border border-gray-300 rounded-full ml-[-8px]'>
                  🧠
                </span>
              )}
            </div>
            {reactionOptionsVisible && (
              <ReactionOptions onSelectReaction={handleReactionSelect} />
            )}
            <div>
              {likeCount} {likeCount === 1 ? "like" : "likes"}
            </div>
          </div>
          <div className='flex px-2 gap-2'>
            <h6>
              • {reactionCounts.Like} Like • {reactionCounts.Love} Love •{" "}
              {reactionCounts.Celebrate} Celebrate • {reactionCounts.Support}{" "}
              Support • {reactionCounts.Insightful} Insightful
            </h6>
          </div>
        </div>
        <hr className='mt-1' />
        <div className='flex w-full mb-2 '>
          <Reaction
            Icons={SlLike}
            title={"Like"}
            onClick={() => handleReactionSelect({ label: "Like", emoji: "👍" })}
            isActive={isLiked}
            onMouseEnter={handleReactionHover}
            onMouseLeave={handleReactionLeave}
          />
          <Reaction Icons={FaRegComment} title={"Comment"} />
          <Reaction Icons={BiRepost} title={"Repost"} />
          <Reaction Icons={FaShare} title={"Send"} />
        </div>
      </div>
    </div>
  );
};

export default Post;
