import React from "react";

interface ImageSliderArrowsProps {
  prevSlide: () => void;
  nextSlide: () => void;
}

const ImageSliderArrows: React.FC<ImageSliderArrowsProps> = ({
  prevSlide,
  nextSlide,
}) => {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default ImageSliderArrows;
