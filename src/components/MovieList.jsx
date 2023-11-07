import React from "react";
import { MovieCard } from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="flex flex-col">
      <h1 className="flex py-2 px-2 font-bold text-2xl text-gray-100">
        {title}
      </h1>
      <div className="flex overflow-auto ">
        <div className="flex scroll-m-8 hover:scroll-m-0">
          {movies?.map?.((movie) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
