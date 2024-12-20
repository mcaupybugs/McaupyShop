const Product = () => {
  return (
    <div class="h-96 w-64 flex border border-black flex-col m-4">
      <div class="h-48 w-56 border border-black flex m-4"></div>
      <div class="text-3xl font-Jost flex ml-4">Multi line title</div>
      <div class="border border-t-black justify-evenly mt-auto text-2xl flex">
        <div class="">$100</div>
        <div>$100</div>
      </div>
    </div>
  );
};

export default Product;
