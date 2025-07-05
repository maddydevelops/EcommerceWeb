import React from 'react';

const items = [
  { title: "Smart Watch", price: "From USD 49", image: "src/assets/images/watch.png" },
  { title: "Camera", price: "From USD 29", image: "src/assets/images/camera.png" },
  { title: "Headphone", price: "From USD 299", image: "src/assets/images/headphone.png" },
  { title: "smart watch", price: "From USD 25", image: "src/assets/images/lamp.png" },
  { title: "Tablet Cases", price: "From USD 15", image: "src/assets/images/juscier.png" },
  { title: "LAptop and Pc", price: "From USD 89", image: "src/assets/images/laptop.png" },
  { title: "Mobiles", price: "From USD 39", image: "src/assets/images/mobile.png" },
  { title: "Portable Charger", price: "From USD 20", image: "src/assets/images/headphone.png" },
];

const Gadget = () => {
  return (
    <div className="w-full max-w-[1100px] mt-4 mx-auto bg-white border border-gray-300 rounded-lg p-6 shadow-md">
      <div className="grid grid-cols-5 gap-4">
        {/* Left side */}
        <div className="col-span-1 relative h-full min-h-[300px]">
          <img
            src="src/assets/images/image 98 (1).png"
            alt="Gadgets"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
            <h2 className="text-xl font-semibold text-black drop-shadow">
              Consumer electronics and gadgets
            </h2>
            <button className="border border-white text-black bg-white px-4 py-2 rounded hover:bg-black hover:text-white transition">
              Source now
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="col-span-4 grid grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className=" rounded-md p-4 text-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-20 w-20 object-contain mb-3"
              />
              <h3 className="font-semibold text-sm text-gray-800">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadget;

