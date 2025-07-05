import React, { useState, useEffect } from "react";


const Homedecore = () => {
  const targetDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 1 month from now

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[1100px] mt-4 mx-auto bg-white border border-gray-300 rounded-lg p-6 shadow-md">
      <div className="flex">
        {/* Left Section - Deals & Timer */}
        <div className="w-[250px] flex flex-col space-y-3 pr-4">
          <div>
            <h1 className="text-xl font-bold">Deals and Offers</h1>
            <p className="text-gray-500 text-sm">Hygiene equipments</p>
          </div>

          {/* Timer */}
          <div className="flex space-x-2">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={index}
                className="bg-gray-700 text-white px-3 py-2 rounded-md text-center w-[50px]"
              >
                <p className="text-lg font-bold">{value.toString().padStart(2, "0")}</p>
                <p className="text-xs uppercase">{unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Product Grid with Full-Height Border */}
        <div className="flex-grow border-l border-gray-300 pl-4 flex items-center">
          <div className="grid grid-cols-5 gap-3 w-full">
            {[
              { img: "src/assets/images/watch.png", title: "Smart watches", discount: "-25%" },
              { img: "src/assets/images/laptop.png", title: "Laptops", discount: "-15%" },
              { img: "src/assets/images/camera.png", title: "GoPro cameras", discount: "-40%" },
              { img: "src/assets/images/headphone.png", title: "Headphones", discount: "-25%" },
              { img: "src/assets/images/mobile.png", title: "Canon cameras", discount: "-25%" },
            ].map((product, index) => (
              <div
                key={index}
                className="text-center p-3 w-[150px] border-r border-gray-300 last:border-none"
              >
                <img src={product.img} alt={product.title} className="w-[70px] h-[70px] mx-auto" />
                <h1 className="text-xs font-semibold mt-2">{product.title}</h1>
                <p className="text-red-500 text-xs font-bold bg-red-100 inline-block px-2 py-1 rounded-full mt-1">
                  {product.discount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homedecore;
