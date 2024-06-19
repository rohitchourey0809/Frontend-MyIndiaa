
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
    <div>
      <Header />
      <Navigation/>
      <main className="p-4">
        <h2 className="text-2xl mb-4">Shopping Cart</h2>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-xl mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-2">${product.price}</p>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
