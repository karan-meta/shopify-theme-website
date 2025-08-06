import "./App.css";
import bgImg from "./assets/pics/homepage_hero_shopify.webp";
import glass from "./assets/pics/magnifying_glass.png";
import bag from "./assets/pics/shopping_bag.png";
import jewel from "./assets/pics/short_jewel_image.avif";
import broadcast from "./assets/pics/Broadcast_Jewelry.webp";
import statement from "./assets/pics/modern_statement.webp";
import order from "./assets/pics/made_to_order.webp";

function App() {
  return (
    <>
      <div>
        <div className="relative w-full h-screen">
          <img
            src= {bgImg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          ></img>
          <div className="flex justify-between items-center p-4 w-full ">
            <div className="flex space-x-4">
              <h1 className="text-white">Theme Features</h1>
              <a className="text-white">Blog</a>
              <a className="text-white">FAQ</a>
            </div>
            <div className="flex space-x-4">
              <i
                className="fab fa-instagram text-white text-1xl"
              
              ></i>
              <a className="text-white">Gift Card</a>
              <a className="text-white">English</a>
              <a className="text-white">Cad$</a>
            </div>
          </div>
          <hr className="bg-white h-px border-0 "></hr>
          <div className="flex justify-between items-center p-4 w-full ">
            <div className="flex space-x-4">
              <h1 className="text-white">Jwellery</h1>
              <h1 className="text-white">Sale</h1>
              <h1 className="text-white">About</h1>
            </div>
            <div className="flex space-x-4">
              <h1 className="text-white text-3xl">Broadcast</h1>
            </div>
            <div className="flex space-x-4">
              <i className="fa-regular fa-circle-user text-1xl text-white"></i>
              <img src={glass} className="invert brightness-[200%] h-5"></img>
              <img src={bag} className="invert h-5"></img>
            </div>
          </div>
          <div className="relative w-fit top-60 left-10 flex flex-col space-y-6">
            <h1 className="text-white text-5xl w-fit font-bold">EVERYDAY LUXURY</h1>
            <div className="space-y-2">
              <h1 className="text-white text-2xl w-fit">Beautiful pieces to pass down to generations</h1>
              <div className="space-x-5">
                <button className="bg-black text-white h-15 w-45">  SHOP ALL PRODUCTS</button>
                <button className="bg-white text-black h-15 w-30">SHOP SALE</button>
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-center w-full pt-20 pb-20">
          <p className="text-3xl font-bold">
            SHOP OUR MODERN <img src={jewel} className="inline-block h-20"></img> HEIRLOOMS , BESTSELLING <br></br>FINE JWELERY <img src="src\assets\pics\short_ring_image.avif" className="inline-block h-20"></img> AND ELEGANT <img src="src\assets\pics\short_necklace.avif" className="inline-block h-20"></img> TREASURES.
          </p>
       
        </div>
        <div className="flex justify-around">
          <div className="w-80 space-y-4">
            <img src={broadcast} className="h-100"></img>
            <p className="font-bold">THE ESSENTIALS COLLECTION</p>
            <p>Our signature pieces designed to be worn everyday with subtle details in contemporary shapes.</p>
            <p>SHOP CLASSICS <i class="fa-solid fa-arrow-right"></i></p>
          </div>
          <div className="w-80 space-y-4">
            <img src={statement} className="h-100"></img>
             <p className="font-bold">MODERN STATEMENT</p>
            <p>Timeless and wearable earrings with a modern twist that add a touch of style to any outfit.</p>
            <p>SHOP EARINGS <i class="fa-solid fa-arrow-right"></i></p>
          </div>
          <div className="w-80 space-y-4">
            <img src={order} className="h-100"></img>
             <p className="font-bold">MADE-TO-ORDER JEWELERY</p>
            <p>Handmade pieces that are carefully crafted to ensure that you'll love for a lifetime.</p>
            <p>SHOP NOW <i class="fa-solid fa-arrow-right"></i></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
