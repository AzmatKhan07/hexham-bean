import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const images = [
    "/hero.jpeg",
    "/hero.jpeg",
    "/hero.jpeg",
    "/hero.jpeg",
    "/hero.jpeg",
    "/hero.jpeg",
    "/hero.jpeg",
    "/hero.jpeg",
    "/hero.jpeg",
  ];

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openSlider = (index) => {
    const sliderImages = [
      images[index],
      images[(index + 1) % images.length],
      images[(index + 2) % images.length],
      images[(index + 3) % images.length],
      images[(index + 4) % images.length],
    ];
    setSelectedImages(sliderImages);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-28">
      {/* Gallery Grid */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`g${index}`}
            className="cursor-pointer"
            onClick={() => openSlider(index)}
          />
        ))}
      </div>

      {/* Slider Modal */}
      {isSliderOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeSlider} // Close slider when clicking on overlay
        >
          <div
            className="relative w-11/12 md:w-2/3 lg:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside slider
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeSlider}
            >
              &times;
            </button>
            <Slider {...sliderSettings}>
              {selectedImages.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`slide${idx}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
