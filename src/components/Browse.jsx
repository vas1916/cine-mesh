import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
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
