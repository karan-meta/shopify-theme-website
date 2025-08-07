import React from "react";
import allure from "../assets/pics/allure_logo.avif";
import marie from "../assets/pics/marie_claire_logo.avif";
import vogue from "../assets/pics/vogue_logo.avif";
import "./ScrollingHeadline.css";

const ScrollingHeadline = () => {
  const content = (
    <>
      <span className="mx-4 text-2xl font-bold">
        Exquisite craftsmanship meets sustainable luxury.
      </span>
      <img src={allure} alt="jewel" className="inline-block h-10 mx-2 " />
      <span className="mx-4 text-2xl font-bold italic">
        Impeccable design meets unmatched quality in every piece.
      </span>
      <img src={marie} alt="necklace" className="inline-block h-10 mx-2" />
      <img src={vogue} alt="necklace" className="inline-block h-10 mx-2" />
    </>
  );
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#f5f2ec] p-5">
      <div className="scrolling-text hover:paused">
        {content}
        {content}
      </div>
    </div>
  );
};

export default ScrollingHeadline;
