import React from 'react';
import bgImage from '../images/Group 982.png'; // Import your background image here

const Inquiryform = () => {
  return (
    <div
      className="w-full max-w-[1100px] mt-4 mx-auto rounded-lg p-0 shadow-md overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col md:flex-row backdrop-brightness-90">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-white p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            An easy way to send <br /> requests to all suppliers
          </h2>
          <p className="text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-[400px] bg-white text-black rounded-lg p-6 m-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Send quote to suppliers</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="What item you need?"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Type more details"
              className="w-full p-2 border border-gray-300 rounded h-24 resize-none"
            />
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Quantity"
                className="w-1/2 p-2 border border-gray-300 rounded"
              />
              <select className="w-1/2 p-2 border border-gray-300 rounded">
                <option>Pcs</option>
                <option>Kgs</option>
                <option>Liters</option>
                <option>Boxes</option>
              </select>
            </div>

            {/* ✅ Button aligned left */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiryform;
