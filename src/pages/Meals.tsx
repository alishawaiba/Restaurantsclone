import React from "react";
import bgImg from "../assets/meals.jpg";
import { mealsData } from "../constant/mealsSection";

export default function Meals() {
  return (
    <div>
      
      <div
        className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-5xl font-bold z-10">Meals</h1>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {mealsData.map((meal) => (
          <div key={meal.id}>
            <img src={meal.image} className="w-full h-64 object-cover rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
