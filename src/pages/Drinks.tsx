import React from "react";
import nextpgdrink from "../assets/nextpgdrink.jpeg";


const drinksData = [
  { name: "Sauvignon Blanc", img: "/images/Drinks1.jpeg", prices: ["125 ml $6", "Bottle $28"] },
  { name: "Calvet Prestige Bordeaux", img: "/images/Drinks2.jpeg", prices: ["125 ml $8", "Bottle $35"] },
  { name: "Chardonnay", img: "/images/Drinks3.jpeg", prices: ["125 ml $8"] },
  { name: "Aperol Spritz", img: "/images/Drinks4.jpeg", prices: ["125 ml $8"] },
  { name: "Dry Martini", img: "/images/Drinks5.jpeg", prices: ["125 ml $8"] },
  { name: "Whisky", img: "/images/Drinks6.jpeg", prices: ["125 ml $8"] },
  { name: "Sparkling Water", img: "/images/Drinks7.jpeg", prices: ["125 ml $8"] },
];

const DrinksSection: React.FC = () => {

  const scrollToText = () => {
    const element = document.getElementById("text");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="drinks" className="w-full bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-400">Drinks</p>
          <h2 className="text-4xl font-semibold mt-4 leading-snug">
            Browse our wine and <br /> spirits stock online, or <br /> visit one of our stores.
          </h2>
          <button
            className="mt-8 border border-gray-600 px-6 py-3 rounded-md hover:bg-gray-800 transition"
            onClick={scrollToText} // <-- Smooth scroll to paragraph
          >
            Explore <span className="ml-2">▼</span>
          </button>
        </div>
        
        <div id="drinks-list" className="grid grid-cols-1 gap-6">
          {drinksData.map((drink, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={drink.img} alt={drink.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold">{drink.name}</h3>
                <div className="flex gap-4 mt-2">
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

      
<div
  className="relative h-[600px] w-full mt-90 max-w-[400px] mx-auto bg-center bg-cover flex flex-col justify-center items-center text-white transition-transform duration-500 hover:scale-105 overflow-visible"
  style={{ backgroundImage: `url(${nextpgdrink})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Text that overflows horizontally */}
<p
  id="text"
  className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold text-white text-center w-[800px] leading-snug"
>
  With its relaxed and intimate atmosphere, <span className="font-bold text-gray-500">
  it is the ideal setting for any occasion,
</span>
  whether it is a romantic meal for two, a dinner with friends, or a lively celebration
  you have in mind.
</p>
</div>





    </div>
  );
};

export default DrinksSection;
