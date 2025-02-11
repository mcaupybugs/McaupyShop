import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";

const ProjectDetails = () => {
  let location = useLocation();
  var projectDetails = location.state?.projectDetails;

  return (
    <div className="h-full w-full flex flex-col">
      <div className="sticky top-0 z-50 bg-white itim-regular">
        <Navbar />
      </div>
      <div className="h-full w-full flex flex-row border-b-1 text-xl font-light p-2 items-center jost-custom-font">
        <div className="h-full w-full flex flex-row justify-center gap-4">
          <div className="h-full w-full flex justify-end">
            <div className="border rounded-md p-2 font-light">
              ${projectDetails.price}
            </div>
          </div>
          <div className="h-full w-full flex self-center">
            {projectDetails.title}
          </div>
        </div>
        <div className="h-full w-full flex flex-row justify-center gap-4 ">
          <div className="">Stars</div>
          <div className="">Stars</div>
          <div className="">Stars</div>
        </div>
      </div>
      <div className="h-full w-full flex flex-row justify-center">Video</div>
    </div>
  );
};

export default ProjectDetails;
