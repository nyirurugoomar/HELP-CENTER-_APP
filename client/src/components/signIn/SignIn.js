import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import line1 from "../assets/Line 1.svg";
import line2 from "../assets/Line 2.svg";
import axios from "axios";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

import Navbar from "../Navbar";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function SignIn({ setIsAuthenticated }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      // Check if username or password is empty
      if (!username.trim() || !password.trim()) {
        setError("Please enter both username and password.");
        return;
      }
      setLoading(true);
      const response = await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      //check if login was successfull
      if (response.data && response.data.accessToken) {
        console.log("Login successfull");
        setUsername("");
        setPassword("");
        setIsAuthenticated(true);
        history.push("/dashboard");
      } else {
        console.error("Login failed", response.data.error);
        if (response.data.error === "Wrong username or user does not exist") {
          setError("Wrong username. Please check your credentials.");
        } else {
          setError(
            response.data.error || "An error occurred. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      if (error.message.includes("401")) {
        setError("Wrong username. Please check your credentials.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      // After the operation is complete, set loading back to false
      setLoading(false);
    }, 60000);
  };
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <div className="left-0 w-screen h-screen  bg-Search-bg bg-cover flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg w-[475px] h-[644px]">
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-red-500 text-center  text-sm">
                {error && <p>{error}</p>}{" "}
              </div>

              <div className="text-right cursor-pointer">
                <h1 className="text-[#1B1464] font-bold ">Forget Password</h1>
              </div>
            </div>
          </div>

          <div className="text-center p-4">
            <button
              className="bg-[#1B1464] p-4 w-[419px] rounded-[9px] text-white font-bold"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#ffffff" css={override} size={30} />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <h1>
            Rigister for new Account{" "}
            <Link to="/signup">
              <span className="text-[#1B1464] font-bold underline">SignUp</span>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}

export default SignIn;
