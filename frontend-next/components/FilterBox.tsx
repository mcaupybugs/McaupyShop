const FilterBox = () => {
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
                        id={index}
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
