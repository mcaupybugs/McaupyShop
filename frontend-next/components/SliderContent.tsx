const mimeType = "image/png";

interface SliderContentProps {
  activeIndex: number;
  sliderImages: string[];
}
const SliderContent: React.FC<SliderContentProps> = ({
  activeIndex,
  sliderImages,
}) => {
  return (
    <section>
      {sliderImages.map((slide: string, index: number) => (
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
