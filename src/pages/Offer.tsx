import React from "react";
import Offer1 from "../assets/Offer1.jpg";
import Offer2 from "../assets/Offer2.jpg";
import Offer3 from "../assets/Offer3.jpg";

const offers = [
  {
    title: "We wish you a pleasant stay and enjoy dinner",
    category: "STEAKS",
    image: Offer1,
  },
  {
    title: "Brownies and cheesecakes baked exclusively for Taar",
    category: "DESSERTS",
    image: Offer2,
  },
  {
    title: "Browse our stock online with over 30 wines",
    category: "WINES",
    image: Offer3,
  },
];

export default function OfferDropdown() {
  return (
    <div className="w-full bg-black py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group shadow-lg"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm mb-2">{offer.category}</p>
              <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
              <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md hover:bg-gray-200 transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
