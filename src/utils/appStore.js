import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduxSlices/userSlice";
import moviesReducer from "./reduxSlices/movieSlice";
import gptSlice from "./reduxSlices/gptSearchSlice";
import configSlice from "./reduxSlices/configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSlice,
    config: configSlice,
  },
});
export default appStore;
