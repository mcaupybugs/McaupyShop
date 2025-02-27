import React from "react";
const mimeType = "image/png";
const SliderContent = ({ activeIndex, sliderImage }) => {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img
            className="slide-image"
            src={`data:${mimeType};base64,${slide}`}
            alt=""
          />
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
