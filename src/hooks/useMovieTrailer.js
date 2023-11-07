import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/reduxSlices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideoAvailable = useSelector(
    (store) => store.movies.trailerVideo
  );
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterTrailers = json?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterTrailers?.length
      ? filterTrailers?.[0]
      : json?.results?.[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideoAvailable && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
