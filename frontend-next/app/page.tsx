"use client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

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
              {/* {loading ? (
                <div></div>
              ) : (
                <FilterBox
                  projectDetails={totalProjects ? totalProjects : projects}
                  changeProjectBasedOnFilter={changeProjectBasedOnFilter}
                />
              )} */}
              <div className="h-full w-full flex flex-wrap gap-4">
                {/* {loading ? (
                  <div></div>
                ) : (
                  projects.map((project) => {
                    return (
                      <Project key={project.id} projectDetails={project} />
                    );
                  })
                )} */}
              </div>
            </div>
          </div>
          <div className="h-full w-full flex-2/14"></div>
        </div>
      </div>
    </div>
  );
}
