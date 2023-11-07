import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
       * Main Container
       * - Video Background
       * - Video Title
       * Secondary Container
       * - MovieList * n (Vertical Scrollable)
       *    - MoveCard * n (Horizontal Carosal)
       *
       *
       */}
    </div>
  );
};

export default Browse;
