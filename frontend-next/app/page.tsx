"use client";
import { useEffect, useState } from "react";
import { fetchProjects } from "@/services/ProjectService";
import { FilterBox } from "@/components/FilterBox";
import { ProjectDetails } from "@/components/Project/Project.model";
import Project from "@/components/Project/Project";

let totalProjects: [];
export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<ProjectDetails[] | []>([]);

  const changeProjectBasedOnFilter = (projects: ProjectDetails[]) => {
    if (projects.length == 0) {
      setProjects(totalProjects);
      return;
    }
    setProjects(projects);
  };

  useEffect(() => {
    setLoading(true);
    const getProjects = async () => {
      const projectData = await fetchProjects();
      if (!totalProjects) {
        totalProjects = projectData;
      }
      setProjects(projectData);
      setLoading(false);
    };

    getProjects();
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      {/* rest of the page, after the navbar vertically */}
      <div className="h-full w-full flex flex-col jost-custom-font">
        {/* horizontal diving the page into three sections to ensure margins on both ends */}
        <div className="h-42 w-full flex flex-row border-b">
          <div className="h-full w-full basis-3/14"></div>
          <div className="h-full w-full flex flex-col basis-9/14">
            <div className="h-full w-full text-2xl pt-4 font-light overflow-auto">
              I am Vishal, coding tag McaupyBugs, I love to develop stuff which
              I post here, available to be used. Basically it is a portal to my
              world, and my day to day coding shenanigans.
            </div>
          </div>
          <div className="h-full w-full basis-2/14"></div>
        </div>
        <div className="h-full w-full flex flex-row">
          <div className="h-full w-full flex-3/14"></div>
          <div className="h-full w-full flex flex-col flex-9/14">
            <div className="h-full w-full text-3xl pt-4 font-small">
              Catalog
            </div>
          </div>
          <div className="h-full w-full flex-2/14"></div>
        </div>
        <div className="h-full w-full flex flex-row ">
          <div className="h-full w-full flex-3/14"></div>
          <div className="h-full w-full flex flex-col flex-9/14">
            <div className="h-full w-full flex flex-row pt-4 gap-8">
              {loading ? (
                <div></div>
              ) : (
                <FilterBox
                  projectDetails={totalProjects ? totalProjects : projects}
                  changeProjectBasedOnFilter={changeProjectBasedOnFilter}
                />
              )}
              <div className="h-full w-full flex flex-wrap gap-4">
                {loading ? (
                  <div></div>
                ) : (
                  projects.map((project) => {
                    return (
                      <Project key={project.id} projectDetails={project} />
                    );
                  })
                )}
              </div>
            </div>
          </div>
          <div className="h-full w-full flex-2/14"></div>
        </div>
      </div>
    </div>
  );
}
