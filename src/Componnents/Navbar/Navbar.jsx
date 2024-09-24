

const Navbar = () => {


  return (
    <>
    <nav className=" ">
     <div className="md:flex items-center">
        <div className="flex-1 justify-start">
            <img className="" src="https://i.ibb.co.com/88sdBvh/image-removebg-preview-6-removebg-preview.png" alt="Trendify" />
        </div>
        <div className="flex-1">
          <ul className="md:flex gap-16 font-semibold">
          <li>
            <a href="#home" className="hover:text-[#E43605] hover:font-bold">Home</a>
            </li>
          <li>
            <a href="#shop" className="hover:text-[#E43605] hover:font-bold">Shop</a>
            </li>
          <li>
            <a href="#about" className="hover:text-[#E43605]  hover:font-bold">About</a>
            </li>
          </ul>
          
        </div>
        <div className="justify-end">
        <button className="bg-gradient-to-r from-[#E43605] to-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-yellow-500 hover:to-orange-100 hover:text-black transition duration-300">Contact</button>
        </div>
     </div>
    </nav>
    </>
  );
};

export default Navbar;