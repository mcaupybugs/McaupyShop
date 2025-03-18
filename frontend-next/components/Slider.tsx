import { useEffect, useState } from "react";
import "./slider.css";
import SliderContent from "./SliderContent";
import ImageSliderArrows from "./ImageSliderArrows";
import ImageSliderDots from "./ImageSliderDots";

interface SliderProps {
  sliderImage: string[];
  sliderImageCount: number;
}

const Slider: React.FC<SliderProps> = ({ sliderImage, sliderImageCount }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
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
      <SliderContent activeIndex={activeIndex} sliderImages={sliderImage} />
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
        sliderImages={sliderImage}
        onclick={(activeIndex: number) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
