import React from "react";
import lang from "../../utils/languageTranslation";
import { useSelector } from "react-redux";

export const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=" pt-[10%]">
      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang?.[langKey]?.gptSearchPlaceholder}
          className="border-none rounded-lg w-1/3 p-4 m-4 bg-slate-100 "
        />
        <button className="px-6 my-4 bg-red-600 beorder-non text-white rounded-lg">
          {lang?.[langKey]?.search}
        </button>
      </form>
    </div>
  );
};
