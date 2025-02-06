import React from "react";

const PriceTagRibbon = ({ price }) => {
  return (
    <div className="h-full w-contain border p-2 rounded-md">
      <div>${price}</div>
    </div>
  );
};

export default PriceTagRibbon;
