import React from "react";
import bgImage from "../assets/.jpg";
import drink1 from "../assets/1Drinks.jpeg";
import drink2 from "../assets/2Drinks.jpeg";
import drink3 from "../assets/3Drinks.jpeg";
import drink4 from "../assets/4Drinks.jpeg";
import drink5 from "../assets/5Drinks.jpeg";
import drink6 from "../assets/6Drinks.jpeg";
import drink8 from "../assets/8Drinks.jpeg";

const drinks = [
  { id: 1, src: drink1, name: "Saugvignon Blanc 2ml | $6 Bottle | $60" },
  { id: 2, src: drink2, name: "Carbanet sauvignon 120ml | $33.9" },
  { id: 3, src: drink3, name: "Chardonay 125ml | $6" },
  { id: 4, src: drink4, name: "Aperol spritz 500ml | $6" },
  { id: 5, src: drink5, name: "Dry Martin 80ml | $12.8" },
  { id: 6, src: drink6, name: "Whisky 50ml | $6 Bottle | $70" },
  { id: 7, src: drink8, name: "Sparkling Water 50ml | $1.5" },
];

const Drinks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8" id="drinks">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        {drinks.map((drink) => (
          <div
            key={drink.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <h1 className="text-3xl font-bold text-purple-600">Drinks</h1>
               </div>
            {/* Text on the left */}
            <div className="flex-1 p-6">
              <h2 className="text-xl font-semibold text-gray-800">{drink.name}</h2>
            </div>

            {/* Image on the right */}
            <div className="w-full md:w-1/3 h-64 md:h-48">
              <img
                src={drink.src}
                alt={drink.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
