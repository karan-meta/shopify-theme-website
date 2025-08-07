import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiHandbagSimple } from "react-icons/pi";
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between items-center p-4 w-full ">
        <div className="flex space-x-4">
          <h1 className="text-white none md:block">Theme Features</h1>
          <a className="text-white none md:block">Blog</a>
          <a className="text-white none md:block">FAQ</a>
        </div>
        <div className="flex space-x-4">
          <h1>
            <FaInstagram className=" text-white text-1xl none md:inline-block" />
          </h1>

          <a className="text-white none md:block">Gift Card</a>
          <a className="text-white none md:block">English</a>
          <a className="text-white none md:block">Cad$</a>
        </div>
      </div>
      <hr className="bg-white h-px border-0 none md:block"></hr>
      <div className="flex justify-between items-center p-4 w-full ">
        <div className="flex space-x-4">
          <h1 className="text-white none md:block">Jwellery</h1>
          <h1 className="text-white none md:block">Sale</h1>
          <h1 className="text-white none md:block">About</h1>
        </div>
        <div className="flex space-x-4">
          <h1 className="text-white text-3xl none md:block">Broadcast</h1>
        </div>
        <div className="flex space-x-4">
          <h1 className="text-white none md:block">
            <FaRegCircleUser />
          </h1>
         
          <h1><AiOutlineSearch className="text-white none md:block"/></h1>

          <h1>
            <PiHandbagSimple className="text-white none md:block" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
