"use client";
import { useContext } from "react";
import { ProjectSchema } from "./Project.model";
import { UserContext } from "@/app/layout";
import { User, UserContextType } from "@/app/types";
import { useRouter } from "next/navigation";
import { PriceTagRibbon } from "../PriceTagRibbon";
const mimeType = "image/png";

interface ProjectProps {
  projectDetails: ProjectSchema;
}

const Project: React.FC<ProjectProps> = ({ projectDetails }) => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Context is not set right now");
  }

  const { user, setUser, selectedProject, setSelectedProject } = context;

  let router = useRouter();

  const openProjectPage = (id: string) => {
    const newRoute = `/projects/${id}`; // Path for the route

    // Create the full URL including the query string
    const fullUrl = `${newRoute}`;

    setSelectedProject(projectDetails);

    // Navigate to the full URL
    router.push(fullUrl);
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
          // onClick={() => purchaseProjectHelper(projectDetails)}
        >
          {" "}
          Quick Buy
        </div>
      </div>
    </div>
  );
};

export default Project;
