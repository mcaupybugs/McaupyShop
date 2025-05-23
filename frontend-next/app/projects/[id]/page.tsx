"use client";
import { UserContext } from "@/app/layout";
import { PriceTagRibbon } from "@/components/PriceTagRibbon";
import { ProjectSchema } from "@/components/Project/Project.model";
import { RatingRibbon } from "@/components/RatingRibbon";
import Slider from "@/components/Slider";
import {
  downloadProject,
  fetchIsProjectPurchased,
  fetchProject,
  purchaseProject,
} from "@/services/ProjectService";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";

export default function ProjectView() {
  const context = useContext(UserContext);
  const params = useParams();
  const { id } = params;

  var [projectDetails, setProjectDetails] = useState<ProjectSchema | undefined>(
    undefined
  );
  const [isProjectPurchased, setIsProjectPurchased] = useState<boolean | null>(
    null
  );
  if (!context) {
    console.log("There is no context set");
    throw new Error("Context is not set right now");
  }
  const { user, setUser, selectedProject } = context;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProject(id);
      setProjectDetails(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      if (user && projectDetails) {
        console.log(projectDetails);
        const isProjectPurchased = await fetchIsProjectPurchased(
          user?.id,
          projectDetails?.id
        );
        setIsProjectPurchased(isProjectPurchased);
      }
    };
    fetchProjectDetails();
  }, [user, projectDetails]);

  if (!projectDetails) {
    // TODO : Create a loading animation and put it here!
    return <div>Loading</div>;
  }
  const downloadProjectHelper = async (projectZipBlobUrl: string) => {
    try {
      console.log("ProjectBlob", projectZipBlobUrl);
      if (!projectZipBlobUrl) {
        return;
      }
      const tempLink = document.createElement("a");
      tempLink.href = projectZipBlobUrl;
      tempLink.download = `${projectDetails?.title}.zip`;
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

  const initiateDownloadProject = async (projectDetails: ProjectSchema) => {
    var fileUrl: string | undefined = await downloadProject(
      projectDetails,
      user?.email
    );
    if (!fileUrl) {
      throw new Error("File url is null");
    }
    await downloadProjectHelper(fileUrl);
  };

  return (
    <div className="h-full w-full flex flex-col pb-12">
      <div className="h-full w-full flex flex-row border-b-2 text-xl font-light p-2 items-center jost-custom-font">
        <div className="h-full w-full flex flex-row justify-center gap-4">
          <div className="h-full w-full flex justify-end">
            <PriceTagRibbon price={projectDetails?.price ?? 0} />
          </div>
          <div className="h-full w-full flex self-center">
            {projectDetails?.title}
          </div>
        </div>
        <div className="h-full w-full flex flex-row justify-center gap-4 items-center">
          <RatingRibbon
            initialProductRating={projectDetails?.rating ?? 0}
            displayTextRating={true}
          />
          <div className="p-2 border rounded-md button-bg-color cursor-pointer">
            Add to cart
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-row justify-center jost-custom-font">
        <div className="h-full w-full flex-3/14"></div>
        <div className="h-full w-full flex flex-col pt-8">
          <Slider
            sliderImage={projectDetails?.projectImages}
            sliderImageCount={2}
          ></Slider>
          <div className="h-full w-full flex flex-row border divide-x">
            <div className="h-full w-full flex flex-col basis-4/6 divide-y">
              <div className="h-full w-full flex basis-4/16 text-3xl p-2">
                {projectDetails?.title}
              </div>
              <div className="h-full w-full flex basis-2/16 flex-row place-items-center divide-x">
                <div className="w-full p-2">
                  <PriceTagRibbon
                    price={projectDetails?.price ?? 0}
                  ></PriceTagRibbon>
                </div>
                <div className="h-full w-full">
                  <div className="h-full w-full flex flex-row items-center justify-center pl-2 gap-4">
                    <img
                      src="/assets/logo.jpg"
                      alt="My display picture"
                      className="border rounded-full h-full w-[3rem] object-cover"
                    />

                    <div className="h-full w-full flex font-Itim underline">
                      McaupyBugs
                    </div>
                  </div>
                </div>
                <div className="h-full w-full flex justify-center items-center">
                  <RatingRibbon
                    initialProductRating={projectDetails?.rating ?? 0}
                  ></RatingRibbon>
                </div>
              </div>
              <div className="h-full min-h-48 w-full flex basis-10/16 text-2xl p-2 font-light">
                {projectDetails?.description}
              </div>
            </div>
            <div className="h-full w-full flex flex-col basis-2/6 gap-6 p-2 pl-14 pr-14 pt-14">
              <div
                className="h-full w-full border text-2xl cursor-pointer rounded-md button-bg-color flex justify-center font-light p-2"
                // onClick={() =>
                //   purchaseProjectHelper(projectDetails.title, projectDetails.id)
                // }
              >
                {isProjectPurchased && (
                  <div onClick={() => initiateDownloadProject(projectDetails!)}>
                    Download Now !!!
                  </div>
                )}
                {!isProjectPurchased && (
                  <div onClick={() => purchaseProjectHelper(projectDetails!)}>
                    Buy Now !!!
                  </div>
                )}
              </div>
              <div className="h-full w-full flex gap-2 flex-wrap">
                {projectDetails &&
                  projectDetails.tags.map((tag: string, index: number) => {
                    return (
                      <div
                        className="border border-rounded-md p-2 bg-gray-200 h-contain w-contain"
                        key={index}
                      >
                        {tag}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex-3/14"></div>
      </div>
    </div>
  );
}
