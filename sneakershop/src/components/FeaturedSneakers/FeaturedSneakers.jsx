import * as React from "react";
import { useState, useEffect } from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import CircleIcon from "@mui/icons-material/Circle";
import "./FeaturedSneakers.css";

function ImageSlider({ text, images, delay }) {
  const [index, setIndex] = useState(0);
  const imagesLength = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index + 1) % imagesLength);
    }, delay);
    return () => clearInterval(timer);
  }, [index, imagesLength, delay]);

  const handlePrev = () => {
    setIndex((index - 1 + imagesLength) % imagesLength);
  };

  const handleNext = () => {
    setIndex((index + 1) % imagesLength);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
        {images.map((slide, idx) => {
          return (
            <div className={`slider-item ${
              idx === index ? "" : idx < index ? "previous" : "next"
            }`}>
              <img
              key={idx}
              src={slide.image}
              alt="travel image"
              className='image'
              style={{width:"25rem"}}
              />
            </div>
          );
        })}
    </div>
  );
}

export default ImageSlider;
