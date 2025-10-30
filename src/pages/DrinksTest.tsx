import React, { useState, useEffect } from "react";

interface Drink {
  name: string;
  img: string;
  prices: string[];
}

const DrinksTest: React.FC = () => {
  const [drinksData, setDrinksData] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        
        const images = await Promise.all([
          import("../assets/Drinks1.jpeg"),
          import("../assets/Drinks2.jpeg"),
          import("../assets/Drinks3.jpeg"),
          import("../assets/Drinks4.jpeg"),
          import("../assets/Drinks5.jpeg"),
          import("../assets/Drinks6.jpeg"),
          import("../assets/Drinks7.jpeg"),
        ]);

        const drinks = [
          { name: "Sauvignon Blanc", img: images[0].default, prices: ["125 ml $6", "Bottle $28"] },
          { name: "Calvet Prestige Bordeaux", img: images[1].default, prices: ["125 ml $8", "Bottle $35"] },
          { name: "Chardonnay", img: images[2].default, prices: ["125 ml $8"] },
          { name: "Aperol Spritz", img: images[3].default, prices: ["125 ml $8"] },
          { name: "Dry Martini", img: images[4].default, prices: ["125 ml $8"] },
          { name: "Whisky", img: images[5].default, prices: ["125 ml $8"] },
          { name: "Sparkling Water", img: images[6].default, prices: ["125 ml $8"] },
        ];

        setDrinksData(drinks);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return <div className="text-white p-8">Loading images...</div>;
  }

  return (
    <div className="w-full text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Drinks Test Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drinksData.map((drink, index) => (
          <div key={index} className="bg-black/70 rounded-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
              <img
                src={drink.img}
                alt={drink.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log("Image failed to load:", drink.img);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
                onLoad={() => {
                  console.log("Image loaded successfully:", drink.img);
                }}
              />
              <div className="hidden text-white text-center">
                <p>Failed to load: {drink.name}</p>
                <p className="text-sm">Path: {drink.img}</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{drink.name}</h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                {drink.prices.map((price, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 px-3 py-1 rounded text-sm"
                  >
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

