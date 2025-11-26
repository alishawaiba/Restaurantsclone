import React from "react";
import { restaurantLines } from "../constant/restaurantsSection";

const Restaurants: React.FC = () => {
  return (
    <div
      className="relative mt-5 w-full flex flex-col justify-center items-center bg-gray-400 overflow-hidden"
      id="restaurants"
    >
      <h1 className="text-5xl mt-4 md:text-6xl font-extrabold mb-10 text-center text-purple-600 tracking-wide">
        Restaurants
      </h1>

      <div className="text-center space-y-4 pb-10">
        {restaurantLines.map((line, index) => (
          <p
            key={index}
            className={`${line.className} transition duration-300 hover:text-purple-700`}
          >
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
