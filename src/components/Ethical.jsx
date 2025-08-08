import React from "react";
import ethical1 from "../assets/pics/ethical1.jpg"
import ethical2 from "../assets/pics/ethical2.webp"

const Ethical = () => {
  return (
    <div>
      <div>
        <p>Ethical is Beautiful</p>
        <p>
          We ensure our products contribute to the well-being of people and
          planet, towards a brighter future.
        </p>
      </div>
      <div className="flex justify-around items-center">
        <div className="w-[35%] h-[50%]">
            <img src={ethical1} />


        </div>
        <div className="w-[35%]">
            <img src={ethical2}/>
        </div>
      </div>
    </div>
  );
};

export default Ethical;
