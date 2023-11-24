import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


const UserProfile = () => {
  return (
    <div className="container mx-auto h-screen bg-Search-bg bg-cover">
        <Link to="/dashboard">
            <button className='bg-white p-4  flex '>
            <IoIosArrowBack size={20} className='mt-[3px]' /> Back
            </button>
        </Link>
      
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-4">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Name</label>
          <input
            type="text"
            
            className="w-full p-2 border-b border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Telephone</label>
          <input
            type="tel"
            
            className="w-full p-2 border-b border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Email</label>
          <input
            type="email"
            
            className="w-full p-2 border-b border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Location</label>
          <input
            type="text"
            
            className="w-full p-2 border-b border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border-b border-gray-300"
          />
        </div>
        <div className='flex flex-col items-center'>
            <button className='bg-[#1B1464] p-2 text-white w-40 rounded-lg'>
                Save
            </button>
        </div>
        
        
          
       
      </div>
      
    </div>
  );
};

export default UserProfile;
