import React from "react";
import bgVideo from "../../assets/res.mp4";

export default function Hero() {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      
      <video
        src={bgVideo}   
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500">
          Welcome to TAOR Restaurant
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl max-w-2xl"id="exploremenu">
          Explore our delicious menu, browse our drinks, and discover the story
          of our restaurant.
        </p>
      </div>
    </div>
  );
}
