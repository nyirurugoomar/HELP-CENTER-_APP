import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20  px-10 bg-[#1B1464] ">
      <Link to="/">
        <h1 className="text-white font-bold text-[20px]">Logo|Help Center</h1>
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4 text-20 text-white hover:text-blue cursor-pointer">
          Partner
        </li>

        <li className="p-4 text-20 text-white hover:text-blue cursor-pointer">
          Contact
        </li>

        <li className="p-4 text-20 text-white hover:text-blue cursor-pointer flex">
          English <IoIosArrowDown size={17} className="mt-1" />
        </li>

        <li className="p-2 text-20 text-[#1B1464] hover:text-black cursor-pointer mt-auto">
          <Link to="/signin">
            <button className="rounded-2xl bg-white w-24 h-9">Sign In</button>
          </Link>
        </li>
        <li className="p-2 text-20 text-[#1B1464] hover:text-black cursor-pointer mt-auto">
          <Link to="/signup">
            <button className="rounded-2xl bg-white w-24 h-9">Sign Up</button>
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mx-28">
        {nav ? (
          <AiOutlineClose size={30} color={"white"} />
        ) : (
          <AiOutlineMenu size={30} color={"white"} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#1B1464] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%] "
        }
      >
        {/* <h1 className='w-24 '><img src={logo} alt=''/></h1> */}
        <h1 className="text-white mb-20 mt-10 ml-4">logo|help center</h1>
        {/* <NavLink to="/home"> */}
        <li className="p-4 border-b border-white text-white">Partner</li>
        {/* </NavLink> */}
        {/* <NavLink to="/work"> */}
        <li className="p-4 border-b border-white text-white">Contact</li>
        {/* </NavLink> */}
        {/* <NavLink to="/work"> */}
        <li className="p-4 border-b border-white text-white">English</li>
        {/* </NavLink> */}
        <li className="p-4 border-b border-white text-white"></li>
        <li className="p-2 text-20 text-[#1B1464] hover:text-black cursor-pointer">
          <button className="rounded-2xl bg-white w-24 h-9">Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
