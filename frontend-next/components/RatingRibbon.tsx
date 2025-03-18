import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingRibbonProps {
  initialProductRating: number;
  displayTextRating?: boolean;
}

const RatingRibbon: React.FC<RatingRibbonProps> = ({
  initialProductRating,
  displayTextRating = false,
}) => {
  const colors = {
    orange: "#F2C265",
    grey: "#FFFFFF",
  };

  const stars = Array(5).fill(0);
  const [rating, setRating] = useState<number | undefined>(
    initialProductRating
  );
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const handleMouseOverStar = (index: number) => {
    setHoverValue(index);
  };

  const handleMouseLeaveStar = () => {
    setHoverValue(undefined);
  };

  const handleClickStar = (index: number) => {
    setRating(index);
  };

  return (
    <div className="flex flex-row gap-2 justify-items-center">
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={24}
            values={rating?.toString() ?? "0"}
            onChange={(e) =>
              setRating(Number((e.target as HTMLInputElement).value))
            }
            style={{
              stroke: "black", // Apply black stroke (border)
              strokeWidth: 20, // Define stroke width (border thickness)
              fill:
                (hoverValue! || rating!) > index ? colors.orange : colors.grey,
              cursor: "pointer",
            }}
            onClick={() => handleClickStar(index + 1)}
            onMouseOver={() => handleMouseOverStar(index + 1)}
            onMouseLeave={handleMouseLeaveStar}
          />
        );
      })}
      {displayTextRating && <div>{rating} Ratings</div>}
    </div>
  );
};

export { RatingRibbon };
