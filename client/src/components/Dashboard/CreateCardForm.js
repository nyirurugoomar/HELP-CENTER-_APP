import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import ImageUpload from "./ImageUpload";
function CreateCardForm() {
  const history = useHistory();

  const [companyName, setCompanyName] = useState("");
  const [companyService, setCompanyService] = useState("");
  const [supportNumber, setSupportNumber] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/cards", {
        title: companyName,
        service: companyService,
        ssdNo: supportNumber,
        image: image,
      });

      if (response.status === 200) {
        console.log("Card created successfully");

        setCompanyName("");
        setCompanyService("");
        setSupportNumber("");
        setImage("");

        history.push("/");
      } else {
        console.error("Error creating card:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating card:", error.message);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-Search-bg bg-cover flex justify-center items-center">
      <Link to="/dashboard">
        <button className="bg-white p-4  flex ">
          <IoIosArrowBack size={20} className="mt-[3px]" /> Back
        </button>
      </Link>
      <div className="bg-white p-2 rounded-lg w-[655px] h-[599px]">
        <div className="mx-20 mt-8 space-y-4">
          <div>
            <h1 className="font-bold text-[17px]">Company Logo</h1>
            {/* images inputs */}
            <ImageUpload />
          </div>

          <div className="">
            <h1 className="font-bold text-[17px]">Name of company</h1>
            <input
              className="border-[1px] w-[470px] h-[40px] border-black rounded-[28px] p-4"
              type="text"
              name=""
              id=""
              placeholder="Name Of Company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="">
            <h1 className="font-bold text-[17px]">Services</h1>
            <input
              className="border-[1px] w-[470px] h-[40px] border-black rounded-[28px] p-4"
              type="text"
              name=""
              id=""
              placeholder="Company Service"
              value={companyService}
              onChange={(e) => setCompanyService(e.target.value)}
            />
          </div>
          <div className="">
            <h1 className="font-bold text-[17px]">Numbers</h1>
            <input
              className="border-[1px] w-[470px] h-[40px] border-black rounded-[28px] p-4"
              type="text"
              name=""
              id=""
              placeholder="Support Number"
              value={supportNumber}
              onChange={(e) => setSupportNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center p-4">
          <button
            onClick={handleSubmit}
            className="bg-[#1B1464] p-2 w-[119px] rounded-[9px] text-white font-bold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateCardForm;
