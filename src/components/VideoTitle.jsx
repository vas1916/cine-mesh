import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white absolute pt-[5%] md:pt-[20%] px-5 md:px-24 bg-gradient-to-r from-black">
      <h1 className="text-md md:text-4xl font-bold">{title}</h1>
      <p className=" md:inline-block py-3 md:py-6 mb-2 md:mb-0 text-xs md:text-lg md:w-4/12 w-full">
        {overview}
      </p>
      <div className="flex flex-row">
        <button className="bg-white text-black md:text-lg text-xs hover:opacity-50 font-bold px-2 md:px-6 md:py-2 py-1 rounded-lg mr-2 md:mr-5 ">
          ⏯️ Play
        </button>
        <button className="bg-gray-600 text-white md:text-lg text-xs hover:opacity-50 font-bold  px-2 md:px-6 md:py-2 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
