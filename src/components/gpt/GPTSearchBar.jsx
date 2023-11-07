import React, { useRef } from "react";
import lang from "../../utils/languageTranslation";
import { useSelector } from "react-redux";
import openai from "../../utils/openai";
export const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    console.log("@@@Input text:", searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the exaple results given ahead. Example Result: RaceGurram, Chitram, Kaleja, Mungarumaleya, Kantara";
    const chatGptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatGptResults.choices);
  };
  return (
    <div className=" pt-[10%]">
      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang?.[langKey]?.gptSearchPlaceholder}
          className="border-none rounded-lg w-1/3 p-4 m-4 bg-slate-100 "
        />
        <button
          className="px-6 my-4 bg-red-600 beorder-non text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang?.[langKey]?.search}
        </button>
      </form>
    </div>
  );
};
