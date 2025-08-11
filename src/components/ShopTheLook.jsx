import React from 'react'
import ShopDynamicOne from './ShopDynamicOne'
import model1 from "../assets/pics/shop_the_look_model.jpg"
import look from "../assets/pics/earing_five.jpg"
import ring from "../assets/pics/earing_four.png"

const ShopTheLook = () => {
  return (
    <div>
        <div className='flex h-screen'>
            <div className='w-[50%] h-screen overflow-hidden'>
                <img src={model1} className='w-[100%]'/>
            </div>
             <div className='w-[50%] flex flex-col'>
                <div className='flex justify-center'><p>SHOP THE LOOK</p></div>
                <div className='flex justify-around'>
                
                       <ShopDynamicOne/>
                </div>
                

             </div>
             

        </div>
     

    </div>
  )
}

export default ShopTheLook