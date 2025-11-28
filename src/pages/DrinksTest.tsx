import React from "react";
import { drinksData } from "../constant/drinktestSection";

const DrinksTest: React.FC = () => {
  return (
    <div className="w-full text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Drinks Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drinksData.map((drink, index) => (
          <div key={index} className="bg-black/70 rounded-lg overflow-hidden">

            <div className="w-full h-64 bg-gray-800 relative">
              <img
                src={drink.img}
                alt={drink.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement?.querySelector(".fallback");
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />

              <div className="fallback hidden absolute inset-0 flex-col items-center justify-center text-white bg-black/50">
                <p className="text-lg">Image failed to load</p>
                <p className="text-sm opacity-75">{drink.name}</p>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold">{drink.name}</h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                {drink.prices.map((price, idx) => (
                  <span key={idx} className="bg-gray-800 px-3 py-1 rounded text-sm">
                    {price}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinksTest;
