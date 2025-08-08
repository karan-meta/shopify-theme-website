import defaultOne from "../assets/pics/gold_ring.jpg";
import defaultTwo from "../assets/pics/gold_ring2.jpg";
import defaultThree from "../assets/pics/silver_ring.jpg";
import hoverOne from "../assets/pics/hover_image_one.webp";
import hoverTwo from "../assets/pics/hover_image_one.webp";
import hoverThree from "../assets/pics/hover_image_one.webp";


const defaultImages = [defaultOne,defaultTwo,defaultThree];
const hoverImages = [hoverOne,hoverTwo,hoverThree];



const cardData = Array.from({length:6},(_,index)=>({
    id:index+1,
    defaultImage : defaultImages[index%defaultImages.length],
    hoverImage : hoverImages[index%hoverImages.length],
    title:`${index+1}`,
    subtitle:`${index+1}`,
    dots:[
        {id:"a",tooltip:`Tooltip A${index+1}`},
        {id:"b",tooltip:`Tooltip B${index+1}`}
    ]


}))

export default cardData;