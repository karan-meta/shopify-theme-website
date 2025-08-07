import React from "react";
import best from "../assets/pics/everyday_wear_main.webp";
import rings from "../assets/pics/everyday_wear_bestseller.webp";
import wear from "../assets/pics/everyday_wear_new.webp";

const Bestseller = () => {
  return (
    <div>
      <div className="flex flex-col-reverse justify-center items-center md:flex-row md:justify-around">
        <img src={best} className=" h-auto w-1/3 "></img>
        <div className="w-[100%] md:w-1/3 flex flex-col justify-center items-center space-y-5">
          <p >TRENDS & TRADITION</p>
          <p className=" w-[100%] font-bold   md:font-bold text-3xl flex justify-center">FOR EVERYDAY WEAR</p>
          <p className="text-center md:w-70 text-1 ">
            From dainty classics that are perfect for daily adornment to chic,
            to trendsetting pieces designed to complement any occasion our
            selection blends exquisite craftsmanship with modern sensibility.
          </p>
          <div className="flex justify-around w-100 ">
            <div  className="flex flex-col">
              <img src={rings} className="h-50"></img>
              <p className="flex justify-center">Bestsellers</p>
            </div>
            <div className="flex flex-col">
              <img src={wear} className="h-50"></img>
              <p className="flex justify-center">New</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
