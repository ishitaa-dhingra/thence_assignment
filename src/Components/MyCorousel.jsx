import React, { useState, useEffect } from "react";

const MyCarousel = () => {
  const sample = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "Enhance fortune 70 company’s insights teams research capabilities",
    "Enhance fortune 80 company’s insights teams research capabilities  ",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sample.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sample.length]);

  return (
    <div className=" text-left relative mt-72 font-Manrope text-2xl w-15 h-30 font-semibold leading-[67.2px] mr-3">
      <div className="absolute me-10 right-0 ">{sample[currentIndex]}</div>
      <br />
      <br />
      <div className="absolute bottom-2  right-0  flex me-[400px] ">
        {sample.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-green-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
