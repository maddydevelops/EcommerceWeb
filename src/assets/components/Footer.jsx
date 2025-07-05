import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaApple, 
  FaGooglePlay 
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-white p-12 px-20 border-t border-gray-300">
        <div className="container mx-auto flex justify-between items-start gap-8">
          
         
          <div className="w-1/4">
            <h1 className="text-lg font-semibold">Brand</h1>
            <p className="text-sm text-gray-700">
              Best information about the company goes here, but now learn more.
            </p>
            
            <div className="flex gap-3 mt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-5 w-5 text-blue-600 cursor-pointer hover:text-blue-800" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-5 w-5 text-blue-400 cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-5 w-5 text-pink-600 cursor-pointer hover:text-pink-800" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-5 w-5 text-blue-700 cursor-pointer hover:text-blue-900" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="h-5 w-5 text-red-600 cursor-pointer hover:text-red-800" />
              </a>
            </div>
          </div>

          
          <div className="w-1/6">
            <h2 className="font-semibold text-sm">About</h2>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>About Us</li>
              <li>Find more</li>
              <li>Categories</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="w-1/6">
            <h2 className="font-semibold text-sm">Partnership</h2>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Affiliates</li>
              <li>Partner Program</li>
              <li>Wholesale</li>
              <li>Influencer Program</li>
            </ul>
          </div>
          <div className="w-1/6">
            <h2 className="font-semibold text-sm">Information</h2>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="w-1/6">
            <h2 className="font-semibold text-sm">For Users</h2>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>
          
          
          <div className="w-1/6">
            <h2 className="font-semibold text-sm">Get App</h2>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer hover:text-gray-900"
              >
                <FaApple className="h-4 w-4" /> App Store
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer hover:text-gray-900"
              >
                <FaGooglePlay className="h-4 w-4" /> Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-[#DEE2E7] p-3 px-20 flex justify-between items-center text-xs text-gray-800">
        <p>&copy; 2025 E-commerce. All rights reserved.</p>
        <button className="flex items-center gap-1">
          Language <ChevronDownIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
