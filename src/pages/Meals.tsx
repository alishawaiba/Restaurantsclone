import React from "react";
import bgImg from "../assets/meals.jpg"; // <-- replace with your actual meal background image

export default function Meals() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white" 
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold mb-6">Meals</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Explore our wide range of delicious meals prepared with passion,
          authentic recipes, and the freshest ingredients.
        </p>
        
        <a href="#explore" className="hoverunderline:px-10 py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition">Explore</a>
      </div>
    </div>
  );
}
