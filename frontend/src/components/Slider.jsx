import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import "./slider.css";
import ImageSliderArrows from "./ImageSliderArrows";
import ImageSliderDots from "./ImageSliderDots";

const Slider = ({ sliderImage, sliderImageCount }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        activeIndex === sliderImageCount - 1 ? 0 : activeIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <ImageSliderArrows
        prevSlide={() =>
          setActiveIndex(
            activeIndex < 1 ? sliderImageCount - 1 : activeIndex - 1
          )
        }
        nextSlide={() =>
          setActiveIndex(
            activeIndex === sliderImageCount - 1 ? 0 : activeIndex + 1
          )
        }
      />
      <ImageSliderDots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
