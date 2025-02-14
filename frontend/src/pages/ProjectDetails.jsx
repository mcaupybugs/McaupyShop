import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router";
import RatingRibbon from "../components/RatingRibbon";
import PriceTagRibbon from "../components/PriceTagRibbon";
import Slider from "../components/Slider";
import { FaDollarSign } from "react-icons/fa";

const ProjectDetails = () => {
  let location = useLocation();
  var projectDetails = location.state?.projectDetails;

  return (
    <div className="h-full w-full flex flex-col pb-12">
      <div className="sticky top-0 z-50 bg-white itim-regular">
        <Navbar />
      </div>
      <div className="h-full w-full flex flex-row border-b-2 text-xl font-light p-2 items-center jost-custom-font">
        <div className="h-full w-full flex flex-row justify-center gap-4">
          <div className="h-full w-full flex justify-end">
            <PriceTagRibbon price={projectDetails.price} />
          </div>
          <div className="h-full w-full flex self-center">
            {projectDetails.title}
          </div>
        </div>
        <div className="h-full w-full flex flex-row justify-center gap-4 items-center">
          <RatingRibbon
            initialProductRating={projectDetails.rating}
            displayTextRating={true}
          />
          <div className="p-2 border rounded-md button-bg-color cursor-pointer">
            Add to cart
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-row justify-center jost-custom-font">
        <div className="h-full w-full flex-3/14"></div>
        <div className="h-full w-full flex flex-col pt-8">
          <Slider
            sliderImage={projectDetails.projectImages}
            sliderImageCount={2}
          ></Slider>
          <div className="h-full w-full flex flex-row border divide-y divide-x">
            <div className="h-full w-full flex flex-col basis-4/6 divide-y ">
              <div className="h-full w-full flex basis-4/16 text-3xl p-2">
                {projectDetails.title}
              </div>
              <div className="h-[7em] w-full flex basis-2/16 flex-row place-items-center divide-x">
                <div className="w-full p-2">
                  <PriceTagRibbon price={projectDetails.price}></PriceTagRibbon>
                </div>
                <div className="h-full w-full">
                  <div className="h-full w-full flex flex-row items-center justify-center pl-2 gap-4">
                    <img
                      src="/assets/logo.jpg"
                      alt="My display picture"
                      className="border rounded-full h-full w-[3rem] object-cover"
                    />

                    <div className="h-full w-full flex font-Itim underline">
                      McaupyBugs
                    </div>
                  </div>
                </div>
                <div className="h-full w-full flex justify-center items-center">
                  <RatingRibbon
                    initialProductRating={projectDetails.rating}
                  ></RatingRibbon>
                </div>
              </div>
              <div className="h-full min-h-48 w-full flex basis-10/16 text-2xl p-2 font-light">
                {projectDetails.description}
              </div>
            </div>
            <div className="h-full w-full flex flex-col basis-2/6 gap-6 p-2 pl-14 pr-14 pt-14">
              <div className="h-full w-full border flex flex-row rounded-md p-2 place-items-center gap-2">
                <FaDollarSign className="text-xl"></FaDollarSign>
                <input
                  type="number"
                  placeholder="Place your bid .."
                  className="text-xl outline-none itim-regular"
                ></input>
              </div>
              <div className="h-full w-full border text-2xl cursor-pointer rounded-md button-bg-color flex justify-center font-light p-2">
                Buy Now !!!
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex-3/14"></div>
      </div>
    </div>
  );
};

export default ProjectDetails;
