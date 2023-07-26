import React, { useState } from "react";

const EditPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className='py-2 w-80 border rounded-xl'>
      <h1 className='px-3'>Edit Your Photo</h1>
      <hr className='mt-2 text-black' />
      <label
        className={`flex text-blue-500 font-bold justify-center items-center ${
          selectedImage ? "" : "py-10"
        } hover:bg-gray-200 cursor-pointer bg-slate-100`}
      >
        <input
          type='file'
          accept='image/*'
          className='hidden'
          onChange={handleImageChange}
        />
        {selectedImage ? (
          <div className='relative w-full h-56 overflow-auto'>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt='Selected Image'
              className='w-full h-auto '
            />
          </div>
        ) : (
          "Select image to share"
        )}
      </label>
      <hr className='mb-2 text-black' />
      <div className='flex justify-end items-center gap-3 m-2'>
        <button className='px-4 py-1 bg-blue-400 rounded-2xl hover:bg-blue-500 items-center'>
          Back
        </button>
        <button
          className={`px-4 py-1   rounded-2xl items-center ${
            selectedImage
              ? "bg-blue-400 rounded-2xl hover:bg-blue-500"
              : "bg-gray-200 hover:shadow-xl pointer-events-none"
          }`}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EditPhoto;
