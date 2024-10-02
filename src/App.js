import frame from "../src/img/Frame5.png";
import logo from "./img/logo.svg";
import cart from "./img/cart.svg";
import heroimg from "./img/heroimg.svg";
import diagonal from "./img/diagonal.svg";
import whitediagonal from "./img/whitediagonal.svg";
import scrollDown from "./img/scrollDown.svg";
import curosel from "./img/curosel.svg";
import sort from "./img/sort.png";
import filter from "./img/filter.png";
import peach from "./img/peach.svg";
import textimg from "./img/text.svg";

function App() {
  const length = 10;

  return (
    <div className="App relative">
      <img src={frame} className="w-full h-screen absolute top-0 left-0 z-0" alt="Frame 5" />
      <div className="relative z-10 px-[88px]">
        <nav className="flex items-center justify-center w-full pt-5">
          <div className="flex gap-[600px]">
            <img src={logo} alt="logo" />
            <div className="flex items-center gap-10">
              <p className="text-white font-light">Home</p>
              <p className="text-white font-light">Shop</p>
              <p className="text-white font-light">About Us</p>
              <p className="text-white font-light">Help</p>
              <img className="ml-40" src={cart} alt="cart" />
            </div>
          </div>
        </nav>
        <div className="relative flex justify-between pt-20">
          <div>
            <div>
              <h2 className="font-light text-white text-4xl">Welcome to</h2>
              <h1 className="font-bold text-white text-6xl pt-2">Pop Rock Crystal Shop!</h1>
              <p className="text-sm pt-10 w-[400px]">
                Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
              </p>
            </div>
            <div className="flex items-center p-8 gap-10">
              <div className="bg-white text-xs p-2 px-6 font-medium rounded-lg">SHOP NOW</div>
              <div>about us</div>
            </div>
          </div>
          <div className="bg-white px-10 py-4 z-10 shadow-xl rounded-[30px]">
            <img src={heroimg} alt="hero" />
          </div>
        </div>
        <img src={diagonal} className="absolute bottom-[-60px] left-0 z-0 w-full" alt="Diagonal Image" />
        <div className="relative z-10 flex pl-[500px]">
          <img src={scrollDown} alt="scrollDown" />
          <img src={curosel} className="pl-[400px] mt-8" alt="curosel" />
        </div>
      </div>
      <div className="mt-32 w-[90%] mx-auto">
        <div className="flex justify-center">
          <h1 className="font-semibold text-4xl">All Product</h1>
        </div>
        <div className="flex gap-20 mt-20">
          <img src={sort} alt="scrollDown" />
          <img src={filter} alt="scrollDown" />
        </div>
        <div className="flex flex-wrap gap-12 my-10">
          {Array.from({ length }).map((_, index) => (
            <div key={index} className="flex flex-col items-center shadow-lg rounded-lg p-4 gap-2 justify-center">
              <img src={peach} alt="scrollDown" />
              <h1>Crystal Agate Phone Grip</h1>
              <h1 className="font-semibold">18.99$</h1>
              <button className="bg-[#75CCEB] text-white font-medium px-3 rounded-lg">Buy Now</button>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-4">
          <button className=" border-blue-400 border-2 rounded-xl p-1 px-4">View all</button>
        </div>
      </div>
      <div className="relative overflow-hidden pt-32 bg-[#75CCEB] pb-40">
        <img
          src={whitediagonal}
          className="absolute w-full z-0 top-[-200px]  object-cover"
          alt="White Diagonal"
        />

        <div className="relative z-10 w-[80%] mx-auto flex justify-between">
          <img src={textimg} alt="Text" />

          <div className="relative mt-32 w-[60%] mb-20 mx-auto flex items-center justify-center gap-6">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-white shadow-lg z-0"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full bg-white shadow-md z-1"></div>

            <img
              src={peach}
              className="relative z-10 w-[200px] h-[200px] rounded-full object-cover"
              alt="Hero"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#1c2864] w-full h-40"></div>

    </div>
  );
}

export default App;
