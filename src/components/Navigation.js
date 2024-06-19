import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Icons from "./Icon.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 px-4 py-2 text-white fixed top-16 w-full z-40">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={Icons} alt="Shopping" className="w-10 h-10 rounded-full" />
          <span className="text-lg font-bold">Shopping Site</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-400">
            Products
          </Link>
          <Link to="/cart" className="hover:text-gray-400">
            Cart
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Products
          </Link>
          <Link
            to="/cart"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
