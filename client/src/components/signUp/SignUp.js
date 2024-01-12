import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function SignUp({ setIsAuthenticated }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      // Check if username or password is empty
      if (!username.trim() || !password.trim()) {
        setError("Please enter both username and password.");
        return;
      }
      setLoading(true);
      const response = await axios.post("http://localhost:5000/register", {
        username: username,
        password: password,
      });

      // Check if registration was successful
      if (response.status === 201) {
        console.log("Register successful");
        setUsername("");
        setPassword("");
        setIsAuthenticated(true);
        history.push("/dashboard");
      } else {
        console.error("Registration failed", response.statusText);
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      setError(
        error.response?.data.error ||
          "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="left-0 w-screen h-screen  bg-Search-bg bg-cover flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg w-[475px] h-[464px]">
          <div className="text-center mt-6">
            <h1 className="text-[30px] font-bold">Create Account</h1>
          </div>

          <div className="mx-4 mt-4 space-y-4">
            <div className="">
              <h1 className="font-bold text-[20px]">Email</h1>
              <input
                className="border-[1px] w-[370px] h-[45px] border-black rounded-[9px] p-2"
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="">
              <h1 className="font-bold text-[20px]">Password</h1>
              <input
                className="border-[1px] w-[370px] h-[45px] border-black rounded-[9px] p-2"
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right cursor-pointer">
                <h1 className="text-[#1B1464] font-bold ">Forget Password</h1>
              </div>
            </div>
            <div className="text-red-500 text-center">
              {error && <p>{error}</p>}
            </div>
          </div>

          <div className="text-center p-4">
            <button
              className="bg-[#1B1464] p-4 w-[419px] rounded-[9px] text-white font-bold"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#ffffff" css={override} size={30} />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <h1>
            Login to your Account{" "}
            <Link to="/signin">
              <span className="text-[#1B1464] font-bold underline">SignIn</span>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}

export default SignUp;
