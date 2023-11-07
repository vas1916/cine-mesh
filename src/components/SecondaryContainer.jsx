import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className=" -mt-[10%] px-4 py-2 relative z-20 ">
        <MovieList title={"Up Coming"} movies={movies?.upComingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
      </div>
      {/**
       *MovieList - Up Coming
       *MovieList - Popular
       *MovieList - Now Playing
       *MovieList - Trending
       *MovieList - Horror
       *MovieList - Comedy
       */}
    </div>
  );
};

export default SecondaryContainer;
