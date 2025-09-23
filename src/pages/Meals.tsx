import React from "react";
import bgImg from "../assets/meals.jpg"; 
import Menu from "../assests/Mealexplore1.jpg";
import enu from "../assest/Mealexplore2.jpg";
import menu from "../assests/Mealexplore3.jpg";

export default function Meals() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white" id="Menu"
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
        
        
        <a href="#meal" className="hoverunderline:px-10 py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition">Meal</a>
      </div>
      <div>
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-4xl font-bold mb-4">Explore Menu</h1>
              <p className="text-lg text-gray-700">Check out our delicious meals!</p>
            </div>
          </div>
    </div>
  );
}
 