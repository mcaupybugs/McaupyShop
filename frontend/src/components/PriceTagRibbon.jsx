import React from "react";
import { IoPricetags } from "react-icons/io5";

const PriceTagRibbon = ({ price }) => {
  return (
    <div className="h-full w-contain border p-2 rounded-md">
      <div className="h-full w-full flex flex-row place-items-center gap-2">
        <IoPricetags></IoPricetags>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default PriceTagRibbon;
