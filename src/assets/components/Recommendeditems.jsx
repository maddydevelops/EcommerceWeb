import React from 'react';

const RecommendedItems = () => {
  const products = [
    { name: 'Product 1', price: '$20', description: 'A short description of Product 1', image: 'src/assets/images/1.png' },
    { name: 'Product 2', price: '$30', description: 'A short description of Product 2', image: 'src/assets/images/3.png' },
    { name: 'Product 3', price: '$25', description: 'A short description of Product 3', image: 'src/assets/images/4.png' },
    { name: 'Product 4', price: '$15', description: 'A short description of Product 4', image: 'src/assets/images/5.png' },
    { name: 'Product 5', price: '$40', description: 'A short description of Product 5', image: 'src/assets/images/6.png' },
    { name: 'Product 6', price: '$35', description: 'A short description of Product 6', image: 'src/assets/images/7.png' },
    { name: 'Product 7', price: '$50', description: 'A short description of Product 7', image: 'src/assets/images/8.png' },
    { name: 'Product 8', price: '$60', description: 'A short description of Product 8', image: 'src/assets/images/9.png' },
    { name: 'Product 9', price: '$45', description: 'A short description of Product 9', image: 'src/assets/images/10.png' },
    { name: 'Product 10', price: '$55', description: 'A short description of Product 10', image: 'src/assets/images/headphone.png' },
  ];

  return (
    <div className="w-full max-w-[1100px] mt-4 mx-auto p-6 ">
      <h2 className="text-xl font-bold mb-4">Recommended Items</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <h1 className="text-lg font-semibold">{product.price}</h1>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
