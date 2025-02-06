import React from "react";
import PriceTagRibbon from "./PriceTagRibbon";
const Project = ({ projectDetails }) => {
  return (
    <div className="h-84 w-64 flex flex-col border">
      <div className="h-9/10 w-full flex flex-col p-2 flex-9/10">
        <div className="h-6/10 w-full flex-6/10 border">
          <img
            className="h-full w-full object-contain"
            src={projectDetails.displayImageBlobUrl}
          ></img>
        </div>
        <div className="h-4/10 w-full flex-4/10 text-2xl pt-2">
          {projectDetails.title}
        </div>
      </div>
      <div className="h-1/10 w-full flex flex-row flex-1/10 border-t justify-between p-2">
        <PriceTagRibbon price={projectDetails.price}></PriceTagRibbon>
        <div className="h-1/10 w-contain border p-2 rounded-md cursor-pointer">
          {" "}
          Quick Buy
        </div>
      </div>
    </div>
  );
};

export default Project;
