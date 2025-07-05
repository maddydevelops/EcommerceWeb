import React, { useState } from 'react';
import { UserCircleIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full max-w-[1100px] mx-auto mb-1 mt-6 flex gap-4 border border-gray-300 rounded-lg bg-white shadow-md">
      
      {/* Left Categories Section */}
      <div className="relative flex flex-col w-[200px] mb-4 mt-4 ml-3 space-y-2">
        <button className="bg-[#E5F1FF] p-2 rounded-lg font-semibold transition hover:bg-blue-300">
          Automobiles
        </button>
        <button className="p-2 text-gray-700 transition hover:bg-gray-200 rounded-lg">
          Clothes and Wear
        </button>
        <button className="p-2 text-gray-700 transition hover:bg-gray-200 rounded-lg">
          Home Interiors
        </button>
        <button className="p-2 text-gray-700 transition hover:bg-gray-200 rounded-lg">
          Computer and Tech
        </button>
        <button className="p-2 text-gray-700 transition hover:bg-gray-200 rounded-lg">
          Tools, Equipment
        </button>
        <button className="p-2 text-gray-700 transition hover:bg-gray-200 rounded-lg">
          Sports and Outdoor
        </button>
        <button className="p-2 text-gray-700 transition hover:bg-gray-200 rounded-lg">
          Animals and Pets
        </button>
        <button className="p-2 text-gray-700 transition hover:bg-gray-200 rounded-lg">
          Machinery Tools
        </button>

        {/* More Categories with Hover Effect */}
        <div 
          className="relative"
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}
        >
          <button className="p-2 text-gray-700 transition hover:bg-gray-200 rounded-lg w-full">
            More Categories
          </button>

          {/* Dropdown Menu */}
          {showMore && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 shadow-lg rounded-lg z-10">
              <button className="block w-full text-left p-2 transition hover:bg-gray-200 rounded-lg">
                Health & Beauty
              </button>
              <button className="block w-full text-left p-2 transition hover:bg-gray-200 rounded-lg">
                Baby & Toys
              </button>
              <button className="block w-full text-left p-2 transition hover:bg-gray-200 rounded-lg">
                Office Supplies
              </button>
              <button className="block w-full text-left p-2 transition hover:bg-gray-200 rounded-lg">
                Industrial Equipment
              </button>
              <button className="block w-full text-left p-2 transition hover:bg-gray-200 rounded-lg">
                Musical Instruments
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Middle Hero Section */}
      <div className="relative mt-15 flex-1">
        <img src="src/assets/HeroSection.png" alt="Hero Section" className="w-full h-auto rounded-lg" />
        <div className="absolute top-8 left-8">
          <h1 className="text-lg font-semibold text-gray-800">Latest Trending</h1>
          <h1 className="text-xl font-bold text-gray-900">Electronic Items</h1>
          <button className="mt-2 px-4 py-2 bg-white text-black font-medium rounded-lg transition hover:bg-blue-600 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Right User Info & Offers Section */}
      <div className="w-[230px] mb-4 mt-4 mr-3 p-4 flex flex-col gap-4">
        <div className="flex flex-col bg-[#E3F0FF] rounded-lg p-4 items-center gap-2">
          <h1 className="text-lg font-semibold text-center">
            <UserCircleIcon className="w-10 h-10 text-blue-500" />
            Hi, user! Let's get started
          </h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full transition hover:bg-blue-600 hover:scale-105">
            Join Now
          </button>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg w-full transition hover:bg-gray-300 hover:scale-105">
            Log In
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="bg-orange-500 text-white p-3 rounded-lg text-center transition hover:bg-orange-600">
            <h1>Get US $10 off with a new supplier</h1>
          </div>
          <div className="bg-teal-400 text-white p-3 rounded-lg text-center transition hover:bg-blue-600">
            <h1>Send quotes with supplier preferences</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
