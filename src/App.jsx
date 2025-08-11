import "./App.css";
import bgImg from "./assets/pics/homepage_hero_shopify.webp";
import glass from "./assets/pics/magnifying_glass.png";
import bag from "./assets/pics/shopping_bag.png";

import responsive from "./assets/pics/mobile_hero_image.webp";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BurgerMenuSection from "./components/BurgerMenuSection";
import ShopDescription from "./components/ShopDescription";
import ProductCollection from "./components/ProductCollection";
import ScrollingHeadline from "./components/ScrollingHeadline";
import Bestseller from "./components/Bestseller";
import ScrollingHeadlineTwo from "./components/ScrollingHeadlineTwo";
import ExceptionalPieces from "./components/ExceptionalPieces";
import QuickAdd from "./components/QuickAdd";
import Ethical from "./components/Ethical";
import HoverButton from "./components/hoverButton";
import ShopTheLook from "./components/ShopTheLook";

function App() {
  return (
    <>
      <div>
        <div className="relative w-full h-screen">
          <img
            src={responsive}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover -z-10 md:hidden"
          />
          <img
            src={bgImg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block"
          />

          <Navbar glass={glass} bag={bag} />
          <HeroSection />
          <BurgerMenuSection glass={glass} bag={bag} />
        </div>
        <ShopDescription />
        <ProductCollection />
        <ScrollingHeadline />
        <Bestseller/>
        <ScrollingHeadlineTwo/>
        {/* <ExceptionalPieces/> */}
        <QuickAdd/>
        <Ethical/>
        <HoverButton/>
        <ScrollingHeadlineTwo/>
        {/* <ShopTheLook/> */}
      </div>
    </>
  );
}

export default App;
