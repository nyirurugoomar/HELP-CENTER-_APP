import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import line1 from "../assets/Line 1.svg";
import line2 from "../assets/Line 2.svg";
function SignIn() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen  bg-Search-bg bg-cover flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-[475px] h-[614px]">
        <div className="text-center mt-6">
          <h1 className="text-[30px] font-bold">Welcome Back</h1>
          <p className="text-[#94a3b8] text-[23px]">
            Please enter your details to sign in
          </p>
        </div>

        <div className="  mx-10 ">
          <div className="flex gap-10 mt-6 ">
            <button className="flex border-[1px] border-black  rounded-[9px]  w-[10rem] p-2  ">
              <img
                src={google}
                className="w-[40px] h-[40px]"
                alt="google_icon"
              />
              <p className="font-bold text-center mt-[3px] text-[20px]">
                Google
              </p>
            </button>
            <button className="flex border-[1px] border-black  rounded-[9px]  w-[10rem] p-2  ">
              <img
                src={facebook}
                className="w-[56px] h-[40px]"
                alt="facebook_icon"
              />
              <p className="font-bold text-center mt-[3px] text-[20px]">
                Facebook
              </p>
            </button>
          </div>
        </div>
        {/* lines */}
        <div className=" flex mx-4 mt-10 gap-4  ">
          <img src={line1} className="w-40" alt="" />
          <h1 className="text-[20px]">or</h1>
          <img src={line2} className="w-40" alt="" />
        </div>
        <div className="mx-4 mt-4 space-y-4">
          <div className="">
            <h1 className="font-bold text-[20px]">Email</h1>
            <input
              type="email"
              name=""
              id=""
              className="border-[1px] w-[370px] h-[45px] border-black rounded-[9px] p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="">
            <h1 className="font-bold text-[20px]">Password</h1>
            <input
              type="password"
              name=""
              id=""
              className="border-[1px] w-[370px] h-[45px] border-black rounded-[9px] p-2"
              placeholder="Enter your password"
            />
            <div className="text-right cursor-pointer">
              <h1 className="text-[#1B1464] font-bold ">Forget Password</h1>
            </div>
          </div>
        </div>

        <div className="text-center p-4">
          <button className="bg-[#1B1464] p-4 w-[419px] rounded-[9px] text-white font-bold">
            Sign In
          </button>
        </div>
        <h1>
          Rigister for new Account{" "}
          <Link to="/signout">
            <span className="text-[#1B1464] font-bold underline">SignOut</span>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default SignIn;
