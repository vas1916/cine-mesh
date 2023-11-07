import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    playerVars: {
      controls: 0, // Hide video controls
      showinfo: 0, // Hide video title and uploader info
      modestbranding: 1, // Hide YouTube logo in the control bar
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;
