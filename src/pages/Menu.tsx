import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgImg from "../assets/Menu.jpg";
import Mealexplore1 from "../assets/Mealexplore1.jpg";
import Mealexplore2 from "../assets/Mealexplore2.jpg";
import Mealexplore3 from "../assets/Mealexplore3.jpg";

export default function Menu() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="w-full">
      
      <div
        id="menu-hero"
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6">Meal</h1>
          <a
            href="#menu-section"
            className="px-10 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition inline-block"
          >
            Explore Menu
          </a>
        </div>
      </div>

      
      <div
        id="menu-section"
        className="w-full  bg-gray-100 p-8 mt-12"
      >
        <div className="w-full max-w-6xl mx-auto"> {/* centered container */}
          <Slider {...settings}>
            {[Mealexplore1, Mealexplore2, Mealexplore3, Mealexplore1, Mealexplore2, Mealexplore3].map((img, index) => (
              <div key={index} className="px-3"> {/* gap between slides */}
                <img
                  src={img}
                  alt={`Meal ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
