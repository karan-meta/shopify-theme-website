import React from "react";
import ethical1 from "../assets/pics/ethical1.jpg";
import ethical2 from "../assets/pics/ethical2.webp";

const Ethical = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col space-y-2 pl-9 pt-2.5">
        <p className="text-4xl font-bold">ETHICAL IS BEAUTIFUL</p>
        <p>
          We ensure our products contribute to the well-being of people and
          planet, towards a brighter future.
        </p>
      </div>
      <div className="flex flex-col justify-around items-center h-screen w-full space-y-3 md:flex-row">
        <div className=" w-full md:w-[45%] h-4/5">
          <div
            className=" h-full w-full bg-center bg-cover flex"
            style={{ backgroundImage: `url(${ethical1})` }}
          >
            <div className="w-[75%] flex flex-col justify-end space-y-2.5 pl-3 pb-3">
              <p className="text-amber-50 font-bold text-4xl">ELSEWORTH NECKLACE</p>
               <p className="text-amber-50 font-bold "> Explore rings for your big moment, and all the little memories after.</p>
               <button className="bg-amber-50 h-13 w-35 ">SHOP NOW </button>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[45%] h-4/5">
          <div
            className=" h-full w-full bg-center bg-cover flex"
            style={{ backgroundImage: `url(${ethical2})` }}
          >
            <div className="w-[75%] flex flex-col justify-end space-y-2.5 pl-3 pb-3">
              <p className="text-amber-50 font-bold text-4xl">MODERN AND TIMELESS</p>
               <p className="text-amber-50 font-bold "> Accessorize with 14k recycled gold all day, everyday</p>
               <button className="bg-amber-50 h-13 w-35 ">SHOP NOW </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethical;
