import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationMenu from "../components/Navigation";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Header />
      <NavigationMenu />
      <main className="p-4">
        <h2 className="text-2xl mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
