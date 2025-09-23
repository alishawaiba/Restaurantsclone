import React from "react";
import bgImg from "../assets/ourstory.jpg"; 
import { Check } from "lucide-react";
import OurStoryVideo from "../assets/story.mp4"

export default function OurStory() {
  return (
    <div>
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
        <a href="#story"><button className="px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition" >
          Explore
        </button>
        </a>
        
      </div>
    </div>
  <div className="" id="story">
      <p className="mt-30 flex justify-center font-medium items-center text-6xl leading-[1.4] ">
      We offer a variety of fresh and local <br /> meals and drinks, including breakfast, <br /> lunch, dinner, and excellent desserts.
    </p>
    <div className="flex flex-row ml-60 mt-40">
      <p className="mt-5">
        F R E S S

        <span className="block text-gray-400 mt-5">
          Our food is freshly cooked and baked to order by <br /> our main chef, using the finest and most <br /> promising ingredients.
        </span>
      </p>

      <p className=" ml-70">
        S T O C K S
        <span className="block text-gray-400 mt-5">
          We are proud of our wine stock with over 130 <br /> wines from around the world. Our choices are <br /> from Italy, Turkey, USA, Hungary, and Brasil.
        </span>
      </p>
      
    </div>
    <div className="flex flex-col mt-50 text-center  items-center justify-center bg-pink-50">
      <p className=" mt-30 pb-40 ">
      ABOUT
      <span className="block text-black text-7xl font-medium mt-5 leading-[1.2]">
        Traditional restaurant in <br /> the heart of the town with <br /> the finest local cuisine
      </span>
    </p>
    </div>
    <div className="flex flex-col mt-50 text-center items-center justify-center bg-gray-80">
      <p className="mt-30 pb-40">
        C U I S I N E
        <span className="block  mt-10 text-7xl font-medium leading-[1.2]">
          Seeking unique tastes <br /> in the everyday
        </span>
      </p>
       
    </div>
    </div>
   
   <div className="flex flex-col text-center justify-center items-center">

    <span className="flex gap-5">
      <span className="flex items-center bg-green-700 text-white border-green-700 justify-center border rounded-full h-10 w-10 ml-5">
      <Check />
      </span>
      <p className="text-start">Fress
            <span className="block">Our cuisine is characterized by the fresh meals </span> </p></span>

             <span className="border border-gray-400 h-20 flex mr-82 mt-1"/>

      <span className="flex mt-3 gap-5">
      <span className="flex items-center bg-green-700 text-white border-green-700 justify-center border rounded-full h-10 w-10 ml-7">
      <Check/>
      </span> <p className="text-start">Tasty
             <span className="block"> We provide tasty food in a pleasant atmosphere </span></p>
      </span>

      <span className="border border-gray-400 h-20 flex mr-82 mt-1"/>

      <span className="flex gap-5 mt-3">
      <span className="flex items-center bg-green-700 text-white border-green-700 justify-center border rounded-full h-10 w-10">
      <Check/>
      </span> 
      <p className="text-start">Local
             <span className="block">Quality meat and ingredients from our farm</span>
             </p>
      </span>
   </div>
   <div className="relative h-screen w-full mt-30">
      {/* Background video/image */}
      <video
        src={OurStoryVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover "
      />

   <div className="relative  z-10 flex justify-center items-center h-full gap-12 px-6">
        {/* Card 1 */}
        <div className="w-64 h-72 flex flex-col bg-white/20 justify-center items-center text-black backdrop-blur-md rounded-md shadow-lg">
          <p className="uppercase text-sm tracking-widest">Open</p>
          <h2 className="text-4xl font-bold my-4">12</h2>
          <p className="uppercase text-sm tracking-widest">Restaurants</p>
        </div>
              <div className="relative z-10 flex justify-center items-center h-full gap-12 px-6">
        {/* Card 1 */}
        <div className="w-64 h-72 flex flex-col justify-center items-center text-black bg-white/20 backdrop-blur-md rounded-md shadow-lg">
          <p className="uppercase text-sm tracking-widest">Since</p>
          <p className="text-4xl font-bold my-4">1980</p>
          <p className="uppercase text-sm tracking-widest">Brands</p>
        </div>
<div className="w-64 h-72 flex flex-col justify-center items-center text-black bg-white/20 backdrop-blur-md rounded-md shadow-lg">
          <p className="uppercase text-sm tracking-widest">Daily</p>
          <p className="text-4xl font-bold my-4">400</p>
          <p className="uppercase text-sm tracking-widest">Customers</p>
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}
