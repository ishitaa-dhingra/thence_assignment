import React, { useState, useEffect } from "react";
import Button from "./Button";
import check from "../images/Group 1171281397.png";

function MyCorousel() {
  const slides = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      className="herocarouseldiv max-w-[400px] ml-[950px] mt-36 ml-15 mx-auto "
      style={{ backgroundImage: `url(${check})` }}
    >
      <p className="text-4xl font-semibold">{slides[currentSlide]}</p>
      <div className="flex gap-4 mt-8 mb-20">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-green-600" : "bg-gray-400 "
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <Button
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        idname="black"
        bgcolor="black"
        color="white"
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          Explore More
          <span>
            <svg
              id="carouselsvg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z"
                fill="white"
              />
            </svg>
          </span>
        </span>
      </Button>
    </div>
  );
}

export default MyCorousel;
