import React from "react";
import PriceTagRibbon from "./PriceTagRibbon";
const Project = () => {
  return (
    <div className="h-84 w-64 flex flex-col border">
      <div className="h-full w-full flex flex-col p-2 flex-9/10">
        <div className="h-full w-full flex-6/10 border">{/* image */}</div>
        <div className="h-full w-full flex-4/10 text-2xl pt-2">
          Sample Project
        </div>
      </div>
      <div className="h-full w-full flex flex-row flex-1/10 border-t justify-between p-2">
        <PriceTagRibbon></PriceTagRibbon>
        <div className="h-full w-contain border p-2 rounded-md cursor-pointer">
          {" "}
          Quick Buy
        </div>
      </div>
    </div>
  );
};

export default Project;
