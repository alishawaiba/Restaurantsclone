import React from "react";
import bgVideo from "../../assets/res.mp4";
import { heroData } from "../../constant/heroSection";

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
          {heroData.heading}
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl max-w-2xl" id="exploremenu">
          {heroData.description}
        </p>
      </div>
    </div>
  );
}
