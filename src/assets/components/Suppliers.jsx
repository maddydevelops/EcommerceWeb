import React from 'react';

const Suppliers = () => {
  const suppliers = [
    { country: 'USA', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
    { country: 'Canada', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg' },
    { country: 'Germany', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg' },
    { country: 'France', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' },
    { country: 'Italy', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg' },
    { country: 'UK', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' },
    { country: 'Australia', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg' },
    { country: 'Japan', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg' },
    { country: 'Spain', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg' },
    { country: 'India', shop: 'shopname.ae', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' },
  ];

  return (
    <div className="w-full max-w-[1100px] mt-4 mx-auto p-6 ">
      <h2 className="text-xl font-bold mb-4">Suppliers by Region</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {suppliers.map((supplier, index) => (
          <div key={index} className="p-4 rounded-lg flex items-center space-x-4">
            <img src={supplier.flag} alt={supplier.country} className="w-12 h-12 object-cover" />
            <div>
              <h3 className=" font-semibold">{supplier.country}</h3>
              <p className="text-sm text-gray-500">{supplier.shop}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
