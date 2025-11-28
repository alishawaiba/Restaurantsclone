import React from "react";
import bgImg from "../assets/ourstory.jpg"; 
import OurStoryVideo from "../assets/story.mp4";
import { storyTexts, stats } from "../constant/ourstorySection";
import { features } from "../constant/mealsSection";

export default function OurStory() {
  return (
    <div>
    
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
        id="ourstory"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl font-bold mb-6">{storyTexts.mainHeading}</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">{storyTexts.mainDescription}</p>
          <a href="#story">
            <button className="px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
              Explore
            </button>
          </a>
        </div>
      </div>


      <div className="px-6 mt-16" id="story">
        <p className="text-center text-6xl font-medium leading-[1.4]">{storyTexts.mealsInfo}</p>

        <div className="flex flex-row gap-20 mt-16 justify-center">
          {storyTexts.sections.slice(0, 2).map((sec, idx) => (
            <div key={idx} className="">
              <h2 className="text-xl font-bold">{sec.title}</h2>
              <p className="text-gray-400 mt-4">{sec.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-16 text-center items-center justify-center">
          {storyTexts.sections.slice(2).map((sec, idx) => (
            <div key={idx} className="mt-16 bg-gray-100 w-full py-20">
              <h2 className="text-7xl font-medium leading-[1.2]">{sec.title}</h2>
              <p className="mt-5 text-2xl">{sec.description}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="flex flex-col text-center justify-center items-center mt-16 gap-6">
  {features.map((feat, idx) => {
    const Icon = feat.icon; // assign the component to a variable
    return (
      <div key={idx} className="flex items-center gap-4">
        <span className="flex items-center justify-center bg-green-700 text-white rounded-full h-10 w-10">
          <Icon className="w-6 h-6" /> {/* render as JSX */}
        </span>
        <div>
          <h3 className="font-semibold">{feat.title}</h3>
          <p className="text-gray-600">{feat.description}</p>
        </div>
      </div>
    );
  })}
</div>


    
      <div className="relative h-screen w-full mt-16">
        <video
          src={OurStoryVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex justify-center items-center h-full gap-12 px-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="w-64 h-72 flex flex-col justify-center items-center text-black bg-white/20 backdrop-blur-md rounded-md shadow-lg">
              <p className="uppercase text-sm tracking-widest">{stat.label}</p>
              <p className="text-4xl font-bold my-4">{stat.value}</p>
              <p className="uppercase text-sm tracking-widest">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
