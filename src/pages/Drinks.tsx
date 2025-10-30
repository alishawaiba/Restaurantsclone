import React from "react";
import nextpgdrink from "../assets/nextpgdrink.jpeg";
import { drinksData } from "../constant/drinksSection";

const DrinksSection: React.FC = () => {
  return (
    <section id="drinks" className="w-full text-white bg-black">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 flex flex-col md:flex-row gap-10">

        {/* Left Text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="uppercase tracking-widest text-sm text-gray-300">Drinks</p>
          <h2 className="text-4xl font-semibold mt-4 leading-snug">
            Browse our wine and <br /> spirits stock online, or <br /> visit one of our stores.
          </h2>
        </div>

        {/* Right Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {drinksData.map((drink) => (
            <div
              key={drink.id}
              className="relative rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] bg-gray-900/50"
            >
              {/* Drink Image */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Drink Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{drink.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  {drink.prices.map((price, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-200 px-3 py-1 rounded text-sm font-medium"
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

      {/* Bottom Background Section */}
      <div
        className="relative h-[600px] w-full mt-16 flex justify-center items-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${nextpgdrink})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <p className="relative z-10 text-3xl md:text-4xl font-bold text-center max-w-3xl leading-snug px-4 text-white">
          With its relaxed and intimate atmosphere,{" "}
          <span className="text-gray-400">
            it is the ideal setting for any occasion,
          </span>{" "}
          whether it is a romantic meal for two, a dinner with friends, or a lively celebration you have in mind.
        </p>
      </div>
    </section>
  );
};

export default DrinksSection;
