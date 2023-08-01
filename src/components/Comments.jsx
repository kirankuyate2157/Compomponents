import { useState } from "react";
import { SlLike, SlOptions } from "react-icons/sl";
import LinesEllipsis from "react-lines-ellipsis";

const Comments = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [reactionOptionsVisible, setReactionOptionsVisible] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [react, setReact] = useState({
    label: "Like",
  });
  const [reactionCounts, setReactionCounts] = useState({
    Like: 0,
    Love: 0,
    Celebrate: 0,
    Support: 0,
    Insightful: 0,
  });

  const handleReactionSelect = (reaction) => {
    if (selectedReaction === reaction) {
      // If the same reaction is selected, clear the selection
      setSelectedReaction(null);

      setReactionCounts((prevCounts) => ({
        ...prevCounts,
        [reaction.label]: 0, // Set the count of the selected reaction to 0
      }));

      setLikeCount(
        (prevLikeCount) => prevLikeCount + (selectedReaction ? 0 : 1)
      );
    } else {
      // If a different reaction is selected, update the selection
      setSelectedReaction(reaction);
      setReactionCounts(() => ({
        // Set the count of the selected reaction to 1 and all others to 0
        Like: reaction.label === "Like" ? 1 : 0,
        Love: reaction.label === "Love" ? 1 : 0,
        Celebrate: reaction.label === "Celebrate" ? 1 : 0,
        Support: reaction.label === "Support" ? 1 : 0,
        Insightful: reaction.label === "Insightful" ? 1 : 0,
      }));

      setLikeCount(
        (prevLikeCount) =>
          // Adjust the like count based on the selected reaction
          prevLikeCount + (selectedReaction ? 0 : 1)
      );
    }
    setIsLiked(!isLiked);
    console.log("liked : ", isLiked);

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
      { label: "Insightful", emoji: "💡" },
    ];

    const [hoveredEmoji, setHoveredEmoji] = useState(null);

    return (
      <div className='absolute bottom-5 flex bg-white rounded-lg text-lg shadow-2xl  z-10'>
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

  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Kiran Kuyate",
      handle: `SDE aspirants 💫 | final yr | web dev (MERN) | DS | DSA | AI
      enthusiast | 2x100DaysOfCode`,
      avatar: "https://avatars.githubusercontent.com/u/84271800?v=4",
      time: "13m",
      content:
        "I'm happy to share that I have obtained a new certification of Advanced Software Engineering Virtual Program of Walmart Global Tech, it was provided by Forage. #walmartglobaltech #theforage #softwareengineer #virtualexperience",
    },
    {
      id: 2,
      user: "Jane Smith",
      handle: `SDE aspirants 💫 | final yr | web dev (MERN) | DS | DSA | AI
      enthusiast | 2x100DaysOfCode`,
      avatar: "https://avatars.githubusercontent.com/u/84271800?v=4",
      time: "2hr",
      content: "Congratulations! That's amazing!",
    },
    // Add more sample comments here...
  ]);

  const handlePostComment = () => {
    if (commentInput.trim() !== "") {
      const newComment = {
        id: comments.length + 1,
        user: "John Doe", // Replace with the actual user name
        handle: `SDE aspirants 💫 | final yr | web dev (MERN) | DS | DSA | AI\nenthusiast | 2x100DaysOfCode`, // Replace with the actual user handle
        avatar: "https://avatars.githubusercontent.com/u/12345678?v=4", // Replace with the actual user avatar URL
        time: "just now", // Replace with the actual timestamp
        content: commentInput,
      };
      setComments((prevComments) => [newComment, ...prevComments]);
      setCommentInput("");
    }
  };
  return (
    <div>
      <div className='flex gap-3 mx-5 py-2'>
        <div>
          <img
            src='https://avatars.githubusercontent.com/u/84271800?v=4'
            alt='placeholder'
            className='w-[50px] rounded-full'
          />
        </div>
        <div className='w-full flex flex-col h-auto hover:bg-gray-100 p-1 rounded-2xl cursor-pointer'>
          <input
            className='w-full rounded-full items-center flex h-full text-lg border-[1px] input-none focus:outline-none border-gray-300 px-5'
            placeholder='add comments..'
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          {commentInput.trim() !== "" && (
            <button
              className='self-end bg-blue-500 text-white px-3 rounded-xl mt-2'
              onClick={handlePostComment}
            >
              Post
            </button>
          )}
        </div>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className='p-4 mx-1'>
          <div className='flex flex-col text-sm'>
            <div className='flex items-start text-[9px] ml-1 md:mx-3'>
              <div className='w-8 sm:w-[3rem] md:w-12 rounded m-2'>
                <img
                  src={comment.avatar}
                  alt='user profile'
                  className='w-full rounded-full'
                />
              </div>
              <div className='mr-1 items-center w-[85%] text-gray-700'>
                <div className='bg-slate-100 rounded-b rounded-r-lg  p-1'>
                  <div className='flex justify-between w-full'>
                    <div className='flex justify-start gap-1 text-xs md:text-sm'>
                      <h1 className='font-semibold text-black'>
                        {comment.user}
                      </h1>
                      <span>(He/Him)</span>
                    </div>
                    <div className='flex items-center gap-1 md:gap-2 text-xs md:text-sm mr-1'>
                      <h6 className='md:text-xs'>{comment.time}</h6>
                      <SlOptions />
                    </div>
                  </div>
                  <div className='flex'>
                    <span className='flex text-[0.65rem] overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[12rem] md:max-w-lg'>
                      {comment.handle}
                    </span>
                    <span>...</span>
                  </div>
                  <p className='p-2 text-sm'>
                    <LinesEllipsis
                      text={comment.content}
                      maxLine={showFullText ? 1000 : 3}
                      ellipsis='.. See more'
                      trimRight
                      basedOn='words'
                      onClick={() => setShowFullText(!showFullText)}
                    />
                  </p>
                </div>
                <div className='ml-2 flex gap-1 justify-start items-center relative'>
                  {reactionOptionsVisible && (
                    <ReactionOptions onSelectReaction={handleReactionSelect} />
                  )}
                  <span
                    className={`${isLiked ? "text-blue-500" : ""}`}
                    onClick={() => handleReactionSelect({ label: "Like" })}
                    onMouseEnter={handleReactionHover}
                    onMouseLeave={handleReactionLeave}
                  >
                    {react.label}
                  </span>
                  •
                  <span className='p-1'>
                    <span className='text-[0.50rem] rounded-full'>
                      {reactionCounts.Like > 0 && (
                        <span className='bg-green-300 border rounded-full ml-[-8px] '>
                          👍
                        </span>
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
                          💡
                        </span>
                      )}
                    </span>
                  </span>
                  <span>{likeCount > 0 ? likeCount : ""}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
