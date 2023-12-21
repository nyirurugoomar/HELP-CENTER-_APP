import React from "react";
import { Link } from "react-router-dom";
function SignOut() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen  bg-Search-bg bg-cover flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-[475px] h-[414px]">
        <div className="text-center mt-6">
          <h1 className="text-[30px] font-bold">Create Account</h1>
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
          Login for your Account{" "}
          <Link to="/signin">
            <span className="text-[#1B1464] font-bold underline">SignIn</span>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default SignOut;
