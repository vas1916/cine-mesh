import React from "react";
import { GPTSearchBar } from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          className="h-screen md:w-screen object-cover"
          src={BG_URL}
          alt="cinemesh-background"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
