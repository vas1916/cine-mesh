import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white absolute pt-[25%] px-24 bg-gradient-to-r from-black">
      <h1 className="text-4xl font bold">{title}</h1>
      <p className="py-6 text-lg w-4/12">{overview}</p>
      <div className="">
        <button className="bg-white text-black hover:opacity-50 font-bold px-6 py-2 rounded-lg mr-5 ">
          ⏯️ Play
        </button>
        <button className="bg-gray-600 text-white hover:opacity-50 font-bold px-6 py-2 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
