import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiHandbagSimple } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";

const BurgerMenuSection = () => {
  return (
    <div>
      <div className="flex justify-around pt-10">
        <div className="flex ">
          <button className="md:hidden flex flex-col space-y-1 p-2 focus:outline-none">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          <h1 className="md:hidden text-white mt-3 text-2xl" >
            <AiOutlineSearch />
          </h1>
        </div>
        <div>
          <h1 className="md:hidden text-white text-3xl">Broadcast</h1>
        </div>
        <div className="w-20 flex justify-around">
          <h1 className="md:hidden text-white mt-3 text-2xl">
            <FaRegCircleUser />
          </h1>
          <h1 className="md:hidden text-white mt-3 text-2xl">
            <PiHandbagSimple  />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenuSection;
