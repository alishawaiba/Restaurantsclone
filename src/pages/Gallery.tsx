import React from "react";
import Slider from "react-slick"; 
import bgImg from "../assets/Gallery.jpg";
import galleryexplore1 from "../assets/galleryexplore1.jpg";
import galleryexplore2 from "../assets/galleryexplore2.jpg";
import galleryexplore3 from "../assets/galleryexplore3.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {

  
  const scrollToGallery = () => {
    const section = document.getElementById("gallery-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div className="w-full mt-5">
      
      {/* === HERO SECTION === */}
      <div
        id="gallery-hero"
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="absolute z-10 text-center px-4 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg max-w-2xl mx-auto">
            A glimpse of our finest moments and beautiful experiences.
          </p>
        </div>

        {/* Explore Button */}
        <div className="absolute bottom-12 z-10">
          <button
            onClick={scrollToGallery}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Explore
          </button>
        </div>
      </div>

      {/* === GALLERY SECTION === */}
      <div
        id="gallery-section"
        className="w-full  bg-gray-100 p-8 mt-10"
      >
        <h2 className="text-3xl font-bold text-center mb-10"></h2>

        <Slider {...settings}>
          <div>
            <img
              src={galleryexplore1}
              alt="Gallery 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={galleryexplore2}
              alt="Gallery 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={galleryexplore3}
              alt="Gallery 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={galleryexplore1}
              alt="Gallery 4"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={galleryexplore2}
              alt="Gallery 5"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={galleryexplore3}
              alt="Gallery 6"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
