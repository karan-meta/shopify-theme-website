import React from "react";
import { useState } from "react";

const Card = ({ card , className="" }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
     className={`w-[250px] bg-white shadow-md rounded-md p-4 ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        <img src={hover ? card.hoverImage : card.defaultImage} alt="image" />
      </div>
      <div>{card.title}</div>
      <div>{card.subtitle}</div>
      <div >
        {card.dots.map((dot) => (
          <div key={dot.id} >
            
            <div >
              {dot.tooltip}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
