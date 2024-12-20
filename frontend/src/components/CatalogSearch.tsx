const CatalogSearch = () => {
  return (
    <div class="h-content w-full border border-black rounded-sm flex-row font-Jost text-2xl font-light justify-end border-t-0">
      <div class="flex flex-row justify-between p-2 border border-black border-l-0 border-r-0">
        <div class="flex">1-4 of 4 products</div>
        <div class="flex underline">Clear</div>
      </div>
      <div class="flex border-black border border-t-0 border-l-0 border-r-0">
        <div class="flex p-3">
          <input
            type="text"
            placeholder="Search"
            class="w-full rounded-md p-2 border border-black focus:outline-none"
          />
        </div>
      </div>
      {/* Create this dropdown using tailwind css */}
      <div class="flex flex-col p-3 border border-black border-x-0 border-t-0">
        <button
          data-dropdown-toggle="dropdown"
          class="flex justify-between"
          type="button"
        >
          Sort By
        </button>
        <div id="dropdown" class="hidden">
          <ul>
            <li>Newest</li>
            <li>Oldest</li>
            <li>Price: Low to High</li>
            <li>Price: High to Low</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col p-3 border border-black border-x-0 border-t-0">
        Tags
      </div>
      <div class="flex flex-col p-3 border border-black border-x-0 border-t-0 border-b-0">
        Price
      </div>
    </div>
  );
};

export default CatalogSearch;
