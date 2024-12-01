import CatalogSearch from "./CatalogSearch";
import ProductListing from "./ProductListing";
const ProductGallary = () => {
  return (
    <div class="h-full w-full pl-48 pr-48 flex-col">
      <div class="text-4xl font-Jost pt-8 font-light">Catalog</div>
      <div class="h-full w-full flex flex-row gap-12">
        <div class="h-full w-full basis-1/5">
          <CatalogSearch />
        </div>
        <div class="h-full w-full basis-4/5">
          <ProductListing />
        </div>
      </div>
    </div>
  );
};

export default ProductGallary;
