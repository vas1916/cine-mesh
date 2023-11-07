import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer({ movieId });
  return (
    <div className="border-r-white-600 border-r-20">
      <iframe
        className="w-screen aspect-video"
        src={
          `https://www.youtube.com/embed/` +
          trailerVideo?.key +
          `?&autoplay=1&mute=1`
        }
        title="video player"
        allow="autoplay; encrypted-media;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
