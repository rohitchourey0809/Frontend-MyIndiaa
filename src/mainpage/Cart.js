import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main className="flex-grow p-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Shopping Cart
          </h2>
          {cartProducts.length === 0 ? (
            <p className="text-gray-700 dark:text-gray-400">
              Your cart is empty
            </p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-t-lg w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300 hover:text-blue-500">
                      {product.name}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 mb-3 transition-colors duration-300 hover:text-gray-500">
                      ${product.price}
                    </p>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
