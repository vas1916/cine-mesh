import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./gpt/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  const showGptSearch = useSelector((store) => store?.gpt.showGptSearch);
  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
