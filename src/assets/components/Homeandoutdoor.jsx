import React from "react";

const items = [
  { title: "Soft chairs", price: "From USD 19", image: "src/assets/images/chair.png" },
  { title: "Sofa & chair", price: "From USD 19", image: "src/assets/images/lamp.png" },
  { title: "Kitchen dishes", price: "From USD 19", image: "src/assets/images/kitchen.png" },
  { title: "Smart watches", price: "From USD 19", image: "src/assets/images/mixxor.png" },
  { title: "Kitchen mixer", price: "From USD 100", image: "src/assets/images/juscier.png" },
  { title: "Blenders", price: "From USD 39", image: "src/assets/images/mixxor.png" },
  { title: "Home appliance", price: "From USD 19", image: "src/assets/images/dishes.png" },
  { title: "Coffee maker", price: "From USD 10", image: "src/assets/images/mixxor.png" },
];

const Homeandoutdoor = () => {
  return (
    <div className="w-full max-w-[1100px] mt-4 mx-auto bg-white border border-gray-300 rounded-lg p-6 shadow-md">
      <div className="grid grid-cols-5 gap-4">
        {/* Left side */}
        <div className="col-span-1 relative h-full min-h-[300px]">
  {/* Full background image */}
  <img
    src="src/assets/images/image 92 (1).png"
    alt="Living Room"
    className="w-full h-full object-cover rounded-lg"
  />

  {/* Overlay content (top left) */}
  <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
    <h2 className="text-xl font-semibold text-black drop-shadow">
      Home and outdoor
    </h2>
    <button className="border rounded border-white text-black bg-white px-4 py-2  hover:bg-black hover:text-white transition">
      Source now
    </button>
  </div>
</div>


        {/* Right side */}
        <div className="col-span-4 grid grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-4 text-center shadow-sm hover:shadow-md transition border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-24 w-24 object-contain mb-3"
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

export default Homeandoutdoor;
