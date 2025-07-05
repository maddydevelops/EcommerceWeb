import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Canon Camera EOS 2000D",
    price: "$998.00",
    rating: 4.5,
    orders: 154,
    shipping: "Free Shipping",
    image: "src/assets/images/camera.png",
  },
  {
    id: 2,
    title: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    rating: 4.7,
    orders: 215,
    shipping: "Free Shipping",
    image: "src/assets/images/gopro.png",
  },
  {
    id: 3,
    title: "iPhone 14 Pro Max",
    price: "$998.00",
    rating: 4.8,
    orders: 350,
    shipping: "Free Shipping",
    image: "src/assets/images/mobile.png",
  },
];

const ProductsPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 flex">
      {/* Filters */}
      <div className="w-1/4 pr-6 space-y-4 border-r">
        <div>
          <h2 className="font-semibold text-lg mb-2">Category</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Mobile accessories</li>
            <li>Electronics</li>
            <li>Smartphones</li>
            <li>Modern tech</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Brands</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Samsung</li>
            <li>Apple</li>
            <li>Huawei</li>
            <li>Lenovo</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Ratings</h2>
          <div className="flex flex-col space-y-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <span key={star}>{`${"⭐".repeat(star)} & up`}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1 pl-6 space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center border rounded p-4 shadow-sm justify-between"
          >
            <div className="flex items-center space-x-4">
              <img src={product.image} alt={product.title} className="w-24 h-24 object-contain" />
              <div>
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-gray-700">{product.price}</p>
                <p className="text-sm text-yellow-600">
                  {product.rating} ⭐ | {product.orders} orders
                </p>
                <p className="text-sm text-green-500">{product.shipping}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  View details
                </Link>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500 text-2xl">♡</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
