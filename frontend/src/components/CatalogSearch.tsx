const CatalogSearch = () => {
  return (
    <div class="h-full w-full pt-12 border border-black rounded-sm flex-row font-Jost text-2xl font-light justify-end">
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
    </div>
  );
};

export default CatalogSearch;
