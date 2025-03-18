import React from "react";

interface ImageSliderDotsProps {
  activeIndex: number;
  onclick: (activeIndex: number) => void;
  sliderImages: string[];
}

const ImageSliderDots: React.FC<ImageSliderDotsProps> = ({
  activeIndex,
  onclick,
  sliderImages,
}) => {
  return (
    <div className="all-dots">
      {sliderImages.map((slide: any, index: number) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
};

export default ImageSliderDots;
