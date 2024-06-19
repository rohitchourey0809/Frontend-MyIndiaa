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
    toast.success(`Added to cart!`);
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    toast.info(`Removed from cart!`);
  };

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700 mb-6">
      <Link to={`/product/${product.id}`} className="block">
        <img
          className="rounded-t-lg w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-110"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-500">
            {product.title}
          </h5>
        </Link>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 transition-colors duration-300 hover:text-gray-500">
          ${product.price}
        </p>
        <div className="flex justify-between items-center">
          {isProductInCart ? (
            <button
              onClick={handleRemoveFromCart}
              className="bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Add to Cart
            </button>
          )}
          <Link
            to={`/product/${product.id}`}
            className="bg-gray-600 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 mt-2 sm:mt-0"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
