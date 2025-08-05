import React, { useState, useEffect } from "react";

const slides = [
  "/Nagarkot/01%20merochittra-0546.jpg",
  "/Nagarkot/02%20merochittra-04044.jpg",
  "/Nagarkot/03%20merochittra-04149.jpg",
  "/Nagarkot/04%20merochittra-04159.jpg",
  "/Nagarkot/05%20merochittra-04166.jpg",
  "/Nagarkot/06%20merochittra-04256.jpg",
  "/Nagarkot/07%20merochittra-04257.jpg",
];

const Nagarkot_Carousel = () => {
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
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Image Slides */}
      {slides.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-3 sm:px-5 -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-white/80 hover:bg-white text-lg sm:text-xl"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-white/80 hover:bg-white text-lg sm:text-xl"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Nagarkot_Carousel;
