import React from "react";
import Slider from "react-slick";
import { galleryImages } from "../constant/gallerySection";

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
          {galleryImages.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
