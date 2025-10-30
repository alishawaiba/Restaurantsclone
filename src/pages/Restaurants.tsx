import React from "react";

const Restaurants: React.FC = () => {
  
  const lines = [
    { text: "Delicious food in a pleasant atmosphere", className: "text-2xl md:text-3xl font-semibold text-gray-800" },
    { text: "Fresh", className: "text-3xl md:text-4xl font-bold text-purple-500 uppercase tracking-wider" },
    { text: "Local produce", className: "text-2xl md:text-3xl font-medium text-gray-700 italic" },
    { text: "everyday", className: "text-xl md:text-2xl font-light text-gray-600 tracking-wide" },
    { text: "Quality", className: "text-2xl md:text-3xl font-semibold text-purple-600" },
    { text: "Meals & Desserts", className: "text-xl md:text-2xl font-medium text-gray-800" },
    { text: "to enjoy", className: "text-lg md:text-xl font-light text-gray-600 italic" },
    { text: "wide range of", className: "text-2xl md:text-3xl font-semibold text-purple-500" },
    { text: "Wines & Drinks", className: "text-xl md:text-2xl font-medium text-gray-800" },
    { text: "to explore", className: "text-lg md:text-xl font-light text-gray-600 italic" },
  ];

  return (
    <div className="relative [h-900px] w-full mt-[1px] flex flex-col justify-center items-center mb-4 bg-gray-400 px-6 overflow-hidden" id="restaurants">
      
      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center text-purple-600 tracking-wide">
        Restaurants
      </h1>

  
      <div className="text-center space-y-4">
        {lines.map((line, index) => (
          <p
            key={index}
            className={`${line.className} opacity-0 animate-fadeIn`}
            style={{ animationDelay: `${index * 0.3}s`, animationFillMode: "forwards" }}
          >
            {line.text}
          </p>
        ))}
      </div>

    
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Restaurants;
