"use client";
import { useContext, useEffect, useState } from "react";
import { ProjectSchema } from "./Project.model";
import { UserContext } from "@/app/layout";
import { User, UserContextType } from "@/app/types";
import { useRouter } from "next/navigation";
import { PriceTagRibbon } from "../PriceTagRibbon";
import {
  downloadProject,
  fetchIsProjectPurchased,
  purchaseProject,
} from "@/services/ProjectService";
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
  const [isProjectPurchased, setIsProjectPurchased] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const fetchProjectDetails = async () => {
      if (user) {
        console.log(user);
        const isProjectPurchased = await fetchIsProjectPurchased(
          user?.id,
          selectedProject?.id
        );
        setIsProjectPurchased(isProjectPurchased);
      }
    };
    fetchProjectDetails();
  }, [user]);

  let router = useRouter();

  const openProjectPage = (id: string) => {
    const newRoute = `/projects/${id}`; // Path for the route

    // Create the full URL including the query string
    const fullUrl = `${newRoute}`;

    setSelectedProject(projectDetails);

    // Navigate to the full URL
    router.push(fullUrl);
  };

  const downloadProjectHelper = async (projectZipBlobUrl: string) => {
    try {
      console.log("ProjectBlob", projectZipBlobUrl);
      if (!projectZipBlobUrl) {
        console.log("Project download failed because of some error");
        return;
      }
      const tempLink = document.createElement("a");
      tempLink.href = projectZipBlobUrl;
      tempLink.download = `${projectDetails.title}.zip`;
      document.body.append(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      URL.revokeObjectURL(projectZipBlobUrl);
    } catch (error) {
      console.log("Error downloading the file:", error);
    }
  };

  const purchaseProjectHelper = async (projectDetails: ProjectSchema) => {
    if (!user) {
      // create an alert tab
      console.log("Please login to buy the project");
      return;
    }
    console.log("user email", user.email);
    var result = await purchaseProject(projectDetails, user.email);
    console.log("RESULT", result);
    var fileUrl = await downloadProject(projectDetails, user.email);
    if (!fileUrl) {
      console.log("File not found on server!");
      return;
    }
    await downloadProjectHelper(fileUrl);
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
          onClick={() => purchaseProjectHelper(projectDetails)}
        >
          {" "}
          Quick Buy
        </div>
      </div>
    </div>
  );
};

export default Project;
