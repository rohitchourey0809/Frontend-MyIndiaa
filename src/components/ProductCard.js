import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
