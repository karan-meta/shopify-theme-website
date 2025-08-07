import React from 'react'
import "./ScrollingHeadlinetwo.css";

const ScrollingHeadlineTwo = () => {
     const content = (
        <>
          <span className="mx-4 text-2xl font-bold text-amber-50">
            . Timeless pieces to treasure forever
          </span>
          
          <span className="mx-4 text-2xl font-bold text-amber-50">
            . Sustainable heirlooms
          </span>

           <span className="mx-4 text-2xl font-bold text-amber-50">
            . Ethical sourcing and manufacturing
          </span>
        
        </>
     )
  return (
   <div className="overflow-hidden whitespace-nowrap bg-black p-5">
      <div className="scrolling-text hover:paused">
        {content}
        {content}
      </div>
    </div>
  )
}

export default ScrollingHeadlineTwo