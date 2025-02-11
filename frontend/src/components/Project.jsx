import React from "react";
import PriceTagRibbon from "./PriceTagRibbon";
import { useNavigate } from "react-router";

const Project = ({ projectDetails }) => {
  let navigate = useNavigate();
  const openProjectPage = (id) => {
    var newRoute = "projectDetails/" + id;
    navigate(newRoute, { state: { projectDetails } });
  };
  return (
    <div className="h-96 w-64 flex flex-col border">
      <div
        className="w-full flex flex-col p-2 flex-9/10 cursor-pointer"
        onClick={() => openProjectPage(projectDetails.id)}
      >
        <div className="w-full flex-6/10 border">
          <img
            className="h-48 w-full object-cover"
            src={projectDetails.displayImageBlobUrl}
            alt="image description"
          ></img>
        </div>
        <div className="w-full flex-4/10 text-xl pt-2">
          {projectDetails.title}
        </div>
      </div>
      <div className=" w-full flex flex-row flex-1/10 border-t justify-between p-2">
        <PriceTagRibbon price={projectDetails.price}></PriceTagRibbon>
        <div className=" w-contain border p-2 rounded-md cursor-pointer">
          {" "}
          Quick Buy
        </div>
      </div>
    </div>
  );
};

export default Project;
