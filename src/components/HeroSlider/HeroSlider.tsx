import React from "react";
import Carousel from "./Carousel";

const HeroSlider = () => {
  return (
    <div className="flex justify-center">
      <div className="md:w-[60%] w-full lg:w-[60%] xl:w-[60%]">
        <div className=" md:pt-7 pt-3 px-3 md:px-0 lg:px-0 xl:px-0">
          <h2 className="font-bold text-lg uppercase">Featured Section</h2>
          <hr
            className="h-[2px] border-0 mt-2"
            style={{
              background: "linear-gradient(to right, #ef4444 3%, #d1d5db 2%)",
            }}
          />
          <Carousel />
          <hr className="h-[2px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
