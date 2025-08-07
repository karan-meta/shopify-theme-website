import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="absolute w-fit top-90 left-10 flex flex-col space-y-6 ">
        <h1 className="text-4xl text-white w-fit font-bold">EVERYDAY LUXURY</h1>
        <div className="space-y-2">
          <h1 className="text-1x1 md:text-1xl text-white  w-fit">
            Beautiful pieces to pass down to generations
          </h1>
          <div className="space-x-5">
            <button className="bg-black text-white h-15 w-45">
              SHOP ALL PRODUCTS
            </button>
            <button className="bg-white text-black h-15 w-30">SHOP SALE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
