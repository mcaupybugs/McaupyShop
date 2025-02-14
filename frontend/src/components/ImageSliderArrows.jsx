import React from "react";

const ImageSliderArrows = ({ prevSlide, nextSlide }) => {
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
