import React from "react";
import look1 from "../assets/pics/earing_look_main.webp";
import ring1 from "../assets/pics/gold_ring.jpg";
import look2 from "../assets/pics/earing_one_look.jpg";
import ring2 from "../assets/pics/earing_one.jpg";

const ShopDynamicOne = () => {
  const data = [
    { defaultImg: ring1, hoverImg: look1 },
    { defaultImg: ring2, hoverImg: look2 },
  ];
  return (
    <div className="">
      <div className=" ">
        {data.map(({ defaultImg, hoverImg }, index) => (
          <div key={index} className="">
            <div className="flex justify-around">
              <div className="w-[40%]">
                <img src={defaultImg} />
              </div>
              <div className="w-[40%]">
                <img src={hoverImg} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopDynamicOne;
