import React from 'react'
import piece from "../assets/pics/expectional_case_main.jpg";

const StaticCard = () => {
   
  return (
     <div>
      <div className='relative'>
        <img src={piece} className='absolute inset-0 w-full h-full object-cover -z-10'/>
        <p>14k solid gold essentials, sterling silver statement pieces and more.</p>
        <button>Shop Rings</button>
      </div>
     
     
    </div>
  )
}

export default StaticCard