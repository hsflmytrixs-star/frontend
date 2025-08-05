import React, { useState, useEffect } from "react";

const slides = ["/slider01.jpg", "/slider02.jpg", "/slider03.jpg"];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {slides.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          alt={`Slide ${index + 1}`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* Static Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-30 pointer-events-none">
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">
          HIMALAYAN SCHOOL FOR
        </h1>
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">
          REGENERATIVE LEARNING
        </h1>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 sm:px-5 -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-white/80 hover:bg-white p-2 sm:p-3 text-lg sm:text-2xl"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-white/80 hover:bg-white p-2 sm:p-3 text-lg sm:text-2xl"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
