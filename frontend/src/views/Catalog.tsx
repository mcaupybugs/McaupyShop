import NavBar from "../components/Navbar";
import IntroBox from "../components/IntroBox";

const Catalog = () => {
  return (
    <div class="w-full h-full flex flex-col">
      <div class="h-16">
        <NavBar></NavBar>
      </div>
      <div class="basis-1/4">
        <IntroBox></IntroBox>
      </div>
    </div>
  );
};

export default Catalog;
