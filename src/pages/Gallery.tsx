import React from "react";
import bgImg from "../assets/Gallery.jpg";

export default function Gallery() {
  return (
    <div
      className="relative h-screen mt- w-full bg-cover bg-center flex flex-col justify-center items-center text-white transition-transform duration-500 hover:scale-105" id="Gallery"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      
<img src={bgImg} alt="" />
      {/* Centered content */}
      <div className="absolute z-10 text-center px-4 animate-fadeIn">
        
        <h1 className="absolute text-5xl ml-20 font-bold mb-6">Our Gallery</h1>
        <p className="text-lg  leading-[8.8] max-w-2xl mx-auto">
          A glimpse of our finest moments and beautiful experiences.
        </p>
        
      </div>

      {/* Explore Button */}
      <div className="absolute bottom-12 z-10">
        <button
          onClick={() =>
            document.getElementById("gallery-section")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Explore
        </button>
      </div>

      {/* Optional: placeholder for gallery section to scroll */}
      <div id="gallery-section" className="h-screen w-full bg-gray-100" />
    </div>
  );
}
