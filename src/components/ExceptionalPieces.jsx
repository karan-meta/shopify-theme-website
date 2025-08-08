import React from "react";
import { useRef } from "react";
import Card from "./Card";
import cardData from "../data/cardData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StaticCard from "./StaticCard";

const ExceptionalPieces = () => {
  const scrollRef = useRef(null);
  const cardWidth = 270;
  const scrollAmount = cardWidth * 2;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex gap-6 px-6 py-12">
      <div className="w-[270px] shrink-0">
        <StaticCard />
      </div>

      <div className="relative w-[560px] overflow-hidden">
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
          <FaChevronLeft />
        </button>
        <div
          ref={scrollRef}
         className="flex space-x-4 scroll-smooth px-6"
          style={{ scrollBehavior: "smooth" }}
        >
          {cardData.map((card) => (
            <div key={card.id}  className="min-w-[270px] flex-shrink-0">
                 <Card
              
              card={card}
             
            />
            </div>
         
          ))}
        </div>
        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ExceptionalPieces;
