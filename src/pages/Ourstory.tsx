import React from "react";
import bgImg from "../assets/ourstory.jpg"; 

export default function OurStory() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white" id="ourstory"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold mb-6">Our Story</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          It all started with the opening of the first Taor restaurant in 1980.
          A journey of passion, flavors, and unforgettable experiences.
        </p>
        <button className="px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition" >
          Explore
        </button>
        
      </div>
    </div>
  );
}
