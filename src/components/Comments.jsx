import { useState } from "react";
import { SlLike, SlOptions } from "react-icons/sl";
const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: {
        name: "John Doe",
        profilePicture: "https://avatars.githubusercontent.com/u/84271800?v=4",
      },
      content:
        "Your message is incredibly inspiring and a testament to the power of perseverance and resilience in the face of rejections. It's common for people to experience moments of self-doubt and disappointment after facing multiple rejections, but your transformational journey",
      likes: 10,
      replies: [
        {
          id: 11,
          user: {
            name: "Alice Smith",
            profilePicture:
              "https://avatars.githubusercontent.com/u/84271800?v=4",
          },
          content: "Replying to the first comment.",
          likes: 3,
        },
      ],
    },
    // Add more comments here as needed
  ]);

  const handleLike = (commentId) => {
    // Logic to handle liking a comment
  };

  const handleReply = (commentId) => {
    // Logic to handle replying to a comment
  };

  return (
    <div className='p-4 mx-1 '>
      <div className='flex flex-col   text-sm'>
        <div className='flex   items-start text-[9px] ml-1 md:mx-3'>
          <div className='w-8 sm:w-[3rem] md:w-12 rounded m-2'>
            <img
              src='https://avatars.githubusercontent.com/u/84271800?v=4'
              alt='user profile'
              className='w-full rounded-full'
            />
          </div>
          <div className='mr-1  items-center w-[85%]  text-gray-700  '>
            <div className='bg-slate-200 rounded-md p-1'>
              <div className='flex justify-between  w-full'>
                <div className='flex justify-start gap-1 text-xs md:text-sm'>
                  <h1 className='font-semibold text-black'>Kiran Kuyate</h1>
                  <span>(He/Him)</span>
                </div>
                <div className='flex items-center  gap-1 md:gap-2 text-xs md:text-sm mr-1 '>
                  <h6 className='md:text-xs '>13m</h6>
                  <SlOptions />
                </div>
              </div>
              <div className='flex  '>
                <span className='flex  text-[0.65rem] overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[12rem] md:max-w-lg'>
                  SDE aspirants 💫 | final yr | web dev (MERN) | DS | DSA | AI
                  enthusiast | 2x100DaysOfCode
                </span>
                <span>...</span>
              </div>
              <p className=' p-2 text-sm '>
                incredibly inspiring and a testament to the power of
                perseverance and resilience in the face of rejections. It's
                common for people to experience moments of self-doubt and
                disappointment after facing multiple rejections, but your
                transformational journey
              </p>
            </div>
            <div className='ml-2 flex gap-1 '>
              <span>Like</span> •
              <div>
                <span className='text-[0.50rem] rounded-full bg-blue-200'>
                  👍🏻
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
