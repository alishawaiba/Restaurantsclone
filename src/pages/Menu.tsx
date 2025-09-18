import React from "react";
import { Link } from "react-router-dom"; 
import bgImg from "../assets/Menu.jpg"; 

export default function Menu() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white" id="menu"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-6">Meal</h1>

        {/* Rectangle Button that links to another page */}
        <Link
          to="/meals"
          className="px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition inline-block"
        >
          Explore Menu
        </Link>
      </div>
    </div>
  );
}
