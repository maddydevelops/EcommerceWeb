import {
  ChatBubbleBottomCenterIcon,
  Bars3Icon,
  UserCircleIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Language Data
const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "hi", name: "Hindi" },
];

// Default country is **Pakistan**
const defaultCountry = {
  code: "PK",
  name: "Pakistan",
  flag: "https://flagcdn.com/w40/pk.png",
};

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default English

  return (
    <div>
      {/* Top Navbar */}

      <nav className="bg-white p-4 border-b border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-300">Logo</h1>

          {/* Search Bar */}
          <div className="flex items-center border border-blue-500 rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-64 outline-none text-gray-700 border border-gray-300 rounded-l-md"
            />
            <button className="bg-white text-slate-500 px-4 py-2 border border-gray-300 flex items-center">
              All Categories
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-r-md">
              Search
            </button>
          </div>

          {/* Icons */}
          <ul className="hidden md:flex space-x-6">
            
            <li className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
              <UserCircleIcon className="h-6 w-6" />
              <span className="text-sm mt-1">Products</span>
            </li>
            <li className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
              <ChatBubbleBottomCenterIcon className="h-6 w-6" />
              <span className="text-sm mt-1">Messages</span>
            </li>
            <li className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
              <ClipboardDocumentListIcon className="h-6 w-6" />
              <span className="text-sm mt-1">Orders</span>
            </li>
            <li className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="text-sm mt-1">Cart</span>
            </li>
          </ul>
        </div>


      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-white p-3 border-b border-gray-300 shadow-sm text-base font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            {/* More Categories */}
            <li className="text-gray-700 hover:text-blue-500 transition flex items-center space-x-2 relative group">
              <Bars3Icon className="h-5 w-5" />
              <span>More Categories</span>

              {/* Dropdown */}
              <div className="absolute left-0 top-full min-w-[200px] bg-white border border-gray-300 shadow-lg rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition">
                  Health & Beauty
                </button>
                <button className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition">
                  Baby & Toys
                </button>
                <button className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition">
                  Office Supplies
                </button>
                <button className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition">
                  Industrial Equipment
                </button>
                <button className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition">
                  Musical Instruments
                </button>
              </div>
            </li>

            <li className="text-gray-700 hover:text-blue-500 transition">Hot offers</li>
            <li className="text-gray-700 hover:text-blue-500 transition">Gift boxes</li>
            <li className="text-gray-700 hover:text-blue-500 transition">Projects</li>
            <li className="text-gray-700 hover:text-blue-500 transition">Menu Items</li>

            {/* Help Dropdown */}
            <li className="text-gray-700 hover:text-blue-500 transition flex items-center space-x-1 relative group">
              <span>Help</span>
              <ChevronDownIcon className="h-4 w-4" />
              <div className="absolute left-0 top-full min-w-[200px] bg-white border border-gray-300 shadow-lg rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition">
                  FAQs
                </button>
                <button className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition">
                  Customer Support
                </button>
                <button className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition">
                  Shipping Details
                </button>
              </div>
            </li>
          </ul>

          {/* Language & Country */}
          <div className="flex items-center space-x-6">
            {/* Language Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 transition flex items-center gap-1">
                <span className="text-sm">{selectedLanguage.name}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              <div className="absolute left-0 top-full w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-10 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onMouseEnter={() => setSelectedLanguage(lang)}
                    className="block w-full text-left p-2 hover:bg-blue-100 rounded-lg transition"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Fixed Country - Pakistan */}
            <div className="flex items-center gap-2 text-gray-700">
              <img src={defaultCountry.flag} alt="Pakistan Flag" className="w-5 h-5 rounded-full" />
              <span className="text-sm">{defaultCountry.name}</span>
              <GlobeAmericasIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
