// src/components/ProductCard.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const isProductInCart = cartProducts.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    toast.info(`${product.name} removed from cart!`);
  };

  return (
    <div className="border p-4 rounded shadow-lg transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <div className="flex justify-between">
        {isProductInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-red-700"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700"
          >
            Add to Cart
          </button>
        )}
        <Link
          to={`/product/${product.id}`}
          className="bg-gray-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
