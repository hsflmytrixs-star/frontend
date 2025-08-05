import React, { useState, useEffect } from "react";

const slides = [
  "/Bardiya/01%20Burhan-31.JPEG",
  "/Bardiya/02%20merochittra-7401796.jpg",
  "/Bardiya/03%20merochittra-08350.jpg",
  "/Bardiya/04%20merochittra-07823.jpg",
  "/Bardiya/05%20merochittra-00887.jpg",
  "/Bardiya/06%20merochittra-07215.jpg",
  "/Bardiya/07%20merochittra-07276.jpg",
  "/Bardiya/08%20A7404477.JPG",
  "/Bardiya/09%20merochittra-07223.jpg",
  "/Bardiya/10%20A7401823.JPG",
];

const Bardiya_Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
      {/* Image Slides */}
      {slides.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          loading="lazy"
        />
      ))}

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-3 sm:px-5 -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-white/80 hover:bg-white text-lg sm:text-2xl w-9 h-9 sm:w-12 sm:h-12"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-white/80 hover:bg-white text-lg sm:text-2xl w-9 h-9 sm:w-12 sm:h-12"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Bardiya_Carousel;
