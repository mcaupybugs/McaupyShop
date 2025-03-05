import React from "react";
import PriceTagRibbon from "./PriceTagRibbon";
import { useNavigate } from "react-router";
import { purchaseProject } from "../services/ProjectService.js";
const mimeType = "image/png";

const Project = ({ projectDetails }) => {
  let navigate = useNavigate();
  const openProjectPage = (id) => {
    var newRoute = "projectDetails/" + id;
    navigate(newRoute, { state: { projectDetails } });
  };

  const purchaseProjectHelper = async (projectId) => {
    console.log(projectId);
    const projectZip = await purchaseProject(projectId);
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
            src={`data:${mimeType};base64,${projectDetails.displayImage}`}
            alt="image description"
          ></img>
        </div>
        <div className="w-full flex-4/10 text-xl pt-2">
          {projectDetails.title}
        </div>
      </div>
      <div className=" w-full flex flex-row flex-1/10 border-t justify-between p-2 ">
        <PriceTagRibbon price={projectDetails.price}></PriceTagRibbon>
        <div
          className=" w-contain border p-2 rounded-md cursor-pointer button-bg-color"
          onClick={() => purchaseProjectHelper(projectDetails.id)}
        >
          {" "}
          Quick Buy
        </div>
      </div>
    </div>
  );
};

export default Project;
