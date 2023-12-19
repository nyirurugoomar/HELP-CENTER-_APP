import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import profile from "../assets/Avatal image.png";

import CreatedCard from "./CreatedCard";

function Dashboard() {
  const [nav] = useState(false);

  const [profilePopUp, setProfilePopUp] = useState(false);

  const toggleProfilePopUp = () => {
    setProfilePopUp(!profilePopUp);
  };

  return (
    <>
      <div className="flex justify-between items-center h-20  px-10 bg-[#1B1464] ">
        <Link to="/">
          <h1 className="text-white font-bold text-[20px]">Logo|Help Center</h1>
        </Link>
        <ul className="hidden md:flex gap-4">
          {/* <NavLink to="/contact"> */}
          <li className="p-2 text-20 text-[#1B1464] hover:text-black cursor-pointer mt-auto">
            <Link to="/create">
              <button className="rounded-2xl bg-white w-24 h-9">Create</button>
            </Link>
          </li>

          <img
            src={profile}
            alt=""
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
            onClick={toggleProfilePopUp}
          />
          {profilePopUp && (
            <div className="absolute right-4 mt-20 bg-white border rounded shadow-md w-48">
              <div className="py-2">
                <Link to="/profile">
                  <button className="block px-4 py-2 text-black font-bold hover:bg-gray-100 w-full">
                    Profile
                  </button>
                </Link>

                <button className="block px-4 py-2 text-black font-bold hover:bg-gray-100 w-full">
                  Settings
                </button>
                <button className="block px-4 py-2 text-[#FF0000] font-bold hover:bg-gray-100 w-full ">
                  Logout
                </button>
              </div>
            </div>
          )}
        </ul>

        <div className="block md:hidden mx-28">
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
      <div className="h-full w-full">
        <section className=" h-full py-20 bg-[#1B1464BD]">
          <div className="md:mx-40">
            <h2 className="text-center text-white text-3xl mb-4 font-bold">
              Welcome Again (name of user)
            </h2>
            <div className=" flex mt-4">
              <input
                className="p-4 md:w-full  rounded-l-[20px] border-[0px] focus:outline-none "
                type="search"
                placeholder="Search..... "
              />

              <button className="bg-[#1B1464] p-4  text-white rounded-r-[20px] font-bold">
                Search
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* User content */}
      <CreatedCard />
    </>
  );
}

export default Dashboard;
