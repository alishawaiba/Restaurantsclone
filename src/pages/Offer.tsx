import React, { useState } from "react";
import { offers } from "../constant/offerSection";

const Offer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const activeItems = offers.find((o) => o.category === activeCategory)?.items || [];

  return (
    <div className="bg-black py-10 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {offers.map((offer, idx) => (
          <div key={idx} className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
              <p className="text-sm">{offer.category}</p>
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <button
                onClick={() => toggleCategory(offer.category)}
                className="mt-2 px-3 py-1 bg-white text-black rounded-md"
              >
                {activeCategory === offer.category ? "Hide" : "Explore"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeItems.length > 0 && (
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 mt-10 px-4">
          {activeItems.map((item) => (
            <div key={item.id} className="bg-white text-black w-64 rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex justify-between">
                <h4 className="font-semibold">{item.name}</h4>
                <span className="font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Offer;
