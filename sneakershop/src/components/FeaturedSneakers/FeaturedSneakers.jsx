import * as React from "react";
import { useState, useEffect } from "react";
import "./FeaturedSneakers.css";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

function ImageSlider({ text, images, delay }) {
  const [index, setIndex] = useState(0);
  const imagesLength = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index + 1) % imagesLength);
    }, delay);
    return () => clearInterval(timer);
  }, [index, imagesLength, delay]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <Fade
    className="fade-div"
    duration = "2500"
    indicators = {true}
    autoplay = {true}
    arrows = {true}
    dynamicHeight={true}
    >
      {images.map ((img, idx) => {
        return (
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${img.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "center" }}>
            <span>{text[idx]}</span>
            </div>
            </div>
        )
      })}
    </Fade>
  )
}

export default ImageSlider;
