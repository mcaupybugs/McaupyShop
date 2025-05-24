import { useEffect, useState } from "react";
import { ProjectSchema } from "../Project/Project.model";

interface FilterBoxProps {
  projectDetails: ProjectSchema[];
  changeProjectBasedOnFilter: (projects: ProjectSchema[]) => void;
}

// Adding functionality to show and hide dropdowns based on the click event.
const showDropdown = (dropDownIdSuffix: string) => {
  const allDropDownIdSuffix = ["sortby", "tags", "price"];
  var output = document.getElementById(
    "dropdown-content-" + dropDownIdSuffix
  )?.classList;
  if (!output) {
    return;
  }
  const isClosed = output.contains("hidden");
  if (isClosed) {
    output.remove("hidden");
    // Close all the other dialog box.
    var dropDownIdsToClose = allDropDownIdSuffix.filter(
      (element) => element != dropDownIdSuffix
    );
    dropDownIdsToClose.forEach((dropDownId) => {
      var elementClasses = document.getElementById(
        "dropdown-content-" + dropDownId
      )?.classList;
      if (elementClasses) {
        if (!elementClasses.contains("hidden")) {
          elementClasses.add("hidden");
        }
      }
    });
  } else {
    output.add("hidden");
  }
};

const getUniqueTags = (projectDetails: ProjectSchema[]) => {
  var projectTags = projectDetails
    .map((project) => project.tags)
    .filter((tags) => Array.isArray(tags))
    .flat();
  return projectTags;
};

const FilterBox: React.FC<FilterBoxProps> = ({
  projectDetails,
  changeProjectBasedOnFilter,
}) => {
  const totalProjectCount = projectDetails.length;
  const uniqueTags = getUniqueTags(projectDetails);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] =
    useState<ProjectSchema[]>(projectDetails);

  const selectTag = (index: number) => {
    setSelectedTags((prevTags) => [...prevTags, uniqueTags[index]]);
  };

  const clearTags = () => {
    var allInputTags: HTMLCollectionOf<Element> =
      document.getElementsByClassName("sort-by-tags");

    // Convert HTMLCollection to an array and reset all checkboxes
    Array.from(allInputTags).forEach((element) => {
      // Type assertion to HTMLInputElement
      const inputElement = element as HTMLInputElement;
      inputElement.checked = false;
    });
    setSelectedTags([]);
  };

  useEffect(() => {
    if (selectedTags.length == 0) {
      changeProjectBasedOnFilter([]);
    }
    var selectedProjects = projectDetails.filter((project) =>
      project.tags.some((tag: string) => selectedTags.includes(tag))
    );
    setSelectedProjects(selectedProjects);
    changeProjectBasedOnFilter(selectedProjects);
  }, [selectedTags]);

  return (
    <div className="h-full w-full border flex flex-2/12 flex-col text-2xl font-light rounded-md">
      <div className="h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2 border-b">
        <div>
          {selectedProjects.length} of {totalProjectCount} projects
        </div>
        <div className="underline cursor-pointer" onClick={() => clearTags()}>
          Clear
        </div>
      </div>
      <div className="h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2 border-b">
        <input className="outline rounded-md p-2" placeholder="Search"></input>
      </div>
      <div className="h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2 border-b">
        <div className="h-full w-full flex flex-col items-start">
          <div
            className="h-full w-full cursor-pointer"
            onClick={() => showDropdown("sortby")}
          >
            Sort By
          </div>
          <div
            id="dropdown-content-sortby"
            className="h-full w-full flex flex-col"
          >
            <ul className="h-full w-full">
              {uniqueTags &&
                uniqueTags.map((tag, index) => {
                  return (
                    <li
                      className="h-full w-full flex flex-row justify-between"
                      key={index}
                    >
                      <span>{tag}</span>
                      <input
                        type="radio"
                        className="sort-by-tags"
                        name={tag}
                        id={index.toString()}
                        onClick={() => selectTag(index)}
                      ></input>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2 border-b">
        <div className="h-full w-full flex flex-col items-start">
          <div
            className="h-full w-full cursor-pointer"
            onClick={() => showDropdown("tags")}
          >
            Tags
          </div>
          <div
            id="dropdown-content-tags"
            className="h-full w-full flex flex-col hidden"
          >
            <ul className="h-full w-full">
              <li className="h-full w-full flex flex-row justify-between">
                <span>Frontend</span>
                <input type="radio" name="Frontend" id="1"></input>
              </li>
              <li className="h-full w-full flex flex-row justify-between">
                <span>backend</span>
                <input type="radio" name="backend" id="2"></input>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-row justify-between pl-4 pr-4 pt-2 pb-2">
        <div className="h-full w-full flex flex-col items-start">
          <div
            className="h-full w-full cursor-pointer"
            onClick={() => showDropdown("price")}
          >
            Price
          </div>
          <div
            id="dropdown-content-price"
            className="h-full w-full flex flex-col hidden"
          >
            <ul className="h-full w-full">
              <li className="h-full w-full flex flex-row justify-between">
                <span>Frontend</span>
                <input type="radio" name="Frontend" id="1"></input>
              </li>
              <li className="h-full w-full flex flex-row justify-between">
                <span>backend</span>
                <input type="radio" name="backend" id="2"></input>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
