import React from "react";
import broadcast from "../assets/pics/Broadcast_Jewelry.webp";
import statement from "../assets/pics/modern_statement.webp";
import order from "../assets/pics/made_to_order.webp";

const ProductCollection = () => {
  return (
    <div>
      <div className="flex flex-col space-y-3 md:flex-row md:justify-around">
        <div className=" w-full md:w-80 space-y-4">
          <img src={broadcast} className="h-full w-full md:h-100"></img>
          <p className="font-bold">THE ESSENTIALS COLLECTION</p>
          <p>
            Our signature pieces designed to be worn everyday with subtle
            details in contemporary shapes.
          </p>
          <p>
            SHOP CLASSICS <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className=" w-full md:w-80 space-y-4">
          <img src={statement} className="h-full w-full md:h-100"></img>
          <p className="font-bold">MODERN STATEMENT</p>
          <p>
            Timeless and wearable earrings with a modern twist that add a touch
            of style to any outfit.
          </p>
          <p>
            SHOP EARINGS <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className=" w-full md:w-80 space-y-4">
          <img src={order} className="h-full w-full md:h-100"></img>
          <p className="font-bold">MADE-TO-ORDER JEWELERY</p>
          <p>
            Handmade pieces that are carefully crafted to ensure that you'll
            love for a lifetime.
          </p>
          <p>
            SHOP NOW <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
