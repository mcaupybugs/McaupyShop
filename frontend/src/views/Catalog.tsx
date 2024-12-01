import NavBar from "../components/Navbar";
import IntroBox from "../components/IntroBox";
import ProductGallary from "../components/ProductGallary";

const Catalog = () => {
  return (
    <div class="w-full h-full flex flex-col">
      <div class="h-16">
        <NavBar></NavBar>
      </div>
      <div class="basis-1/3">
        <IntroBox></IntroBox>
      </div>
      <div class="basis-2/3">
        <ProductGallary></ProductGallary>
      </div>
    </div>
  );
};

export default Catalog;
