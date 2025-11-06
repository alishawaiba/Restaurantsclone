import React, { useState } from "react";


import Offer1 from "../assets/Offer1.jpg";
import Offer2 from "../assets/Offer2.jpg";
import Offer3 from "../assets/Offer3.jpg";


import Brownie from "../assets/Browniejpg.jpg";
import CheeseCake from "../assets/CheeseCake.jpg";
import Pastries from "../assets/Pastries.jpg";


import SteaksImg from "../assets/steaks.jpg"; 
import FilletSteaks from "../assets/FilletSteaks.jpg";
import FlanksSteaks from "../assets/FlanksSteaks.jpg";

import Wine1 from "../assets/Drinks2.jpeg";
import Wine2 from "../assets/Drinks3.jpeg";
import Wine3 from "../assets/Drinks4.jpeg";


const offers = [
  { title: "We wish you a pleasant stay and enjoy dinner", category: "STEAKS", image: Offer1 },
  { title: "Brownies and cheesecakes baked exclusively for Taar", category: "DESSERTS", image: Offer2 },
  { title: "Browse our stock online with over 30 wines", category: "WINES", image: Offer3 },
];


const desserts = [
  { id: 1, name: "Brownie", image: Brownie, price: "$5.99" },
  { id: 2, name: "Cheesecake", image: CheeseCake, price: "$6.99" },
  { id: 3, name: "Pastries", image: Pastries, price: "$4.49" },
];


const steaks = [
  { id: 1, name: "Steaks", image: SteaksImg, price: "225g | $19" },
  { id: 2, name: "FileSteaks", image: FilletSteaks, price: "280g | $14" },
  { id: 3, name: "FlankSteaks", image: FlanksSteaks, price: "z | $22" },
];


const wines = [
  { id: 1, name: "Sauvignon Blanc", image: Wine1, price: "$15.00" },
  { id: 2, name: "Cabernet Sauvignon", image: Wine2, price: "$18.00" },
  { id: 3, name: "Merlot", image: Wine3, price: "$20.00" },
];

export default function OfferDropdown() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  
  const getItems = (category: string) => {
    if (category === "DESSERTS") return desserts;
    if (category === "STEAKS") return steaks;
    if (category === "WINES") return wines;
    return [];
  };

  return (
    <div className="w-full bg-black py-10" id="offer">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {offers.map((offer, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden group shadow-lg">
            <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm mb-2">{offer.category}</p>
              <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>

              <button
                onClick={() =>
                  setActiveCategory(activeCategory === offer.category ? null : offer.category)
                }
                className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md hover:bg-gray-200 transition"
              >
                {activeCategory === offer.category ? "Hide" : "Explore"}
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {activeCategory && (
        <div className="w-full bg-black text-white py-16 px-8 flex flex-col md:flex-row justify-center gap-6">
          {getItems(activeCategory).map((item) => (
            <div
              key={item.id}
              className="bg-white text-black rounded-xl shadow-lg overflow-hidden w-72 hover:scale-105 transition-transform duration-300"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-gray-700 font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
