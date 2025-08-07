import React from "react";
import jewel from "../assets/pics/short_jewel_image.avif";
import ring from "../assets/pics/short_ring_image.avif";
import necklace from "../assets/pics/short_necklace.avif";


const ShopDescription = () => {
  return (
    <div>
      <div className="flex justify-center w-full pt-20 pb-20">
        <p className="text-3xl font-bold">
          SHOP OUR MODERN <img src={jewel} className="inline-block h-20"></img>{" "}
          HEIRLOOMS , BESTSELLING <br></br>FINE JWELERY{" "}
          <img src={ring} className="inline-block h-20"></img> AND ELEGANT{" "}
          <img src={necklace} className="inline-block h-20"></img> TREASURES.
        </p>
      </div>
    </div>
  );
};

export default ShopDescription;
