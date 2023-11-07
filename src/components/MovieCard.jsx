import React from "react";
import { IMG_CDN } from "../utils/constants";
export const MovieCard = ({ movie }) => {
  return (
    <div className="inline-block px-2">
      <div className="w-64 h-auto max-w-sm overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-400 ease-in-out">
        <img
          className="w-auto h-full"
          src={IMG_CDN + movie?.backdrop_path}
          alt="movie-card"
        />
      </div>
    </div>
  );
};
