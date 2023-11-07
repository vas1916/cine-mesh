import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/reduxSlices/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMoviesStore = useSelector(
    (store) => store.movies.upComingMovies
  );
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json?.results));
  };
  useEffect(() => {
    !upComingMoviesStore && getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
