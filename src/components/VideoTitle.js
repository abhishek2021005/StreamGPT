import React, { useState, useRef } from "react";

const VideoTitle = ({ title, overview }) => {
  const [showFullText, setShowFullText] = useState(false);
  const overviewRef = useRef(null); // Ref for overview paragraph

  const toggleText = () => {
    setShowFullText(!showFullText);
    // Scroll to the overview section when expanding
    if (!showFullText) {
      overviewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const overviewStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3, // Number of lines before truncation
    wordWrap: "break-word", // Ensures long words are wrapped
  };

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24  absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p
        className="hidden md:inline-block text-lg py-6 md:1/4 lg:w-1/4"
        ref={overviewRef}
      >
        {showFullText ? (
          overview
        ) : (
          <span style={overviewStyle}>{overview}</span>
        )}
      </p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black px-3 md:px-12 py-1 md:py-4 text-xl hover:bg-opacity-50 rounded-lg">
          {" "}
          ▶️ Play
        </button>
        <button
          className="hidden md:inline-block bg-gray-500 mx-2 text-white px-12 p-4 text-xl opacity-50 rounded-lg"
          onClick={toggleText}
        >
          {showFullText ? "Show less" : "More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
