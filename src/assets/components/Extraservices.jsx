import React from 'react';

const Extraservices = () => {
  const services = [
    { name: 'Service 1', image: 'src/assets/images/image 108.png', description: 'Service 1 description' },
    { name: 'Service 2', image: 'src/assets/images/image 104.png', description: 'Service 2 description' },
    { name: 'Service 3', image: 'src/assets/images/image 106.png', description: 'Service 3 description' },
    { name: 'Service 4', image: 'src/assets/images/image 107.png', description: 'Service 4 description' },
  ];

  return (
    <div className="w-full max-w-[1100px] mt-4 mx-auto p-2">
      <h2 className="text-2xl font-bold  mb-6">Extra Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="  rounded-lg  overflow-hidden">
            <div className="h-1/2">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            </div>
            <div className="h-1/2 bg-white flex flex-col justify-center items-center text-center py-4">
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extraservices;

