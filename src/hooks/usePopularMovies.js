import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/reduxSlices/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMoviesStore = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    !popularMoviesStore && getPopularMovies();
  }, []);
};
export default usePopularMovies;
