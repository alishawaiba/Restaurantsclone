import React from "react";
import Slider from "react-slick";

import bgImg from "../assets/Gallery.jpg";
import galleryexplore1 from "../assets/galleryexplore1.jpg";
import galleryexplore2 from "../assets/galleryexplore2.jpg";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="w-full bg-black text-white py-10">
      <h2 className="text-center text-4xl font-bold mb-6">Our Gallery</h2>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          <div>
            <img
              src={bgImg}
              alt="Gallery"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div>
            <img
              src={galleryexplore1}
              alt="Explore 1"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div>
            <img
              src={galleryexplore2}
              alt="Explore 2"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
