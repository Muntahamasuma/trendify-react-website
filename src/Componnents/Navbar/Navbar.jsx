import { useState } from "react";

const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () =>{
  setIsMenuOpen(!isMenuOpen)
}
  return (
    <>
    <nav className=" ">
     <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 md:px-6 md:py-4">

        <div className="">
            <img className="" src="https://i.ibb.co.com/88sdBvh/image-removebg-preview-6-removebg-preview.png" alt="Trendify" />
        </div>

         {/* Nav Links*/}
         <div className="hidden md:flex gap-10 text-center">
          <a href="#home" className="text-black font-semibold hover:text-[#E43605]">Home</a>
          <a href="#shop" className="text-black font-semibold hover:text-[#E43605]">Shop</a>
          <a href="#about" className="text-black font-semibold hover:text-[#E43605]">About</a>
        </div>

        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#E43605] to-orange-500 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-100 hover:text-black transition duration-300">
            Contact
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <div className="space-y-1 cursor-pointer my-2">
            <span className="block w-8 h-1 bg-black"></span>
            <span className="block w-8 h-1 bg-black"></span>
            <span className="block w-8 h-1 bg-black"></span>
          </div>
        </div>
      </div>

      {/* Mobile/Medium Menu - Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-30 left-0 w-full  bg-black bg-opacity-80 z-40 flex flex-col justify-center items-center">
          <ul className="space-y-4 text-white text-2xl font-bold">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#shop" onClick={toggleMenu}>Shop</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
          </ul>
          <button
            className="mt-5 bg-gradient-to-r from-[#E43605] to-orange-500 text-white py-2 px-6 rounded-lg"
            onClick={toggleMenu}
          >
            Contact
          </button>
          </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;