import React from "react";
import loop from "../assets/pics/lotti_gold_loop.jpg";
import loop2 from "../assets/pics/quick_add.webp";
import background from "../assets/pics/limited_release_bg.png";
import woman from "../assets/pics/women_with_gold_earing.webp";

const QuickAdd = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className=" w-[100%] md:w-[50%] bg-[rgb(176,163,139)] flex justify-center items-center">
        <div className="w-[50%]">
          <div className="relative group w-full">
            <img src={loop} className="w-full h-auto object-cover block" />
            <img
              src={loop2}
              className="w-full h-auto object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute bottom-2 left-0 w-full px-2">
              <div className="bg-white/70 text-center text-xs py-2  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Quick Add
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#f5f2ec] ">
            <p>Lotti Hoops in Gold</p>
            <p>Limited Release</p>
            <p>$198.00</p>
            <div className="flex">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      
      </div>
      <div
        className=" w-[100%] md:w-[50%] h-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-[50%] h-[400px] overflow-y-scroll no-scrollbar">
          <img src={loop2} className="w-full block" />
          <img src={woman} className="w-full block" />
        </div>
      </div>
    </div>
  );
};

export default QuickAdd;
