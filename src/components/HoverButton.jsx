import React, { useEffect } from "react";
import { useState } from "react";
import hands from "../assets/pics/hands.jpg";
import jeans from "../assets/pics/jeans.jpg";
import necklaceTwo from "../assets/pics/necklaceTwo.jpg";
import sleep from "../assets/pics/sleep.jpg";
import womanTwo from "../assets/pics/womanTwo.jpg";

const HoverButton = () => {
  const data = [
    { src: hands, text1: "RINGS", text2: "14" },
    { src: jeans, text1: "BESTSELLERS", text2: "95" },
    { src: necklaceTwo, text1: "NECKLACES", text2: "27" },
    { src: sleep, text1: "EARINGS", text2: "47" },
    { src: womanTwo, text1: "BRACELETS", text2: "6" },
  ];

 

  const [lockedImage, setLockedImage] = useState([sleep]);
  const [hoverImage, setHoverImage] = useState(null);

  const defaultImage = hoverImage || lockedImage;

  return (
    <div className="w-full ">
      <div
        className="w-full h-[75vh] bg-center bg-cover  transition-all duration-700"
        style={{ backgroundImage: `url(${defaultImage})` }}
      >
        <div className="flex flex-col items-center gap-y-[50px]">
          <div>
            {data.slice(0, 3).map(({ src, text1, text2 }) => (
              <button
                className=""
                onMouseEnter={() => {
                  setHoverImage(src);
                }}
                onMouseLeave={() => {
                  setHoverImage(null);
                }}
                onClick={() => {
                  setLockedImage(src);
                }}
              >
                <p className="text-white text-5xl font-bold  p-5 ml-2 ">
                  <strong>{text1}</strong>
                  <span>{text2}</span>
                </p>
              </button>
            ))}
          </div>

          <div>
            {data.slice(3, 5).map(({ src, text1, text2 }) => (
              <button
                className=""
                onMouseEnter={() => {
                  setHoverImage(src);
                }}
                onMouseLeave={() => {
                  setHoverImage(null);
                }}
                onClick={() => {
                  setLockedImage(src);
                }}
              >
                <p className="text-white text-5xl font-bold  p-5 ml-2 ">
                  <strong>{text1}</strong>
                  <span>{text2}</span>
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverButton;
