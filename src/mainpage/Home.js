import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-auto bg-gradient-to-r from-purple-700 via-blue-500 to-red-500 animate-gradient bg-400">
      <Header />
      <Navigation />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-6 text-white">
          Welcome to our E-commerce Platform
        </h2>
        <Link
          to="/products"
          className="relative inline-block px-6 py-3 font-bold text-white bg-blue-600 rounded-lg group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 bg-pink-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-pink-800 border-2 border-pink-700 rounded-lg"></span>
          <span className="relative">View Products</span>
        </Link>
      </main>
      <Footer />
      <div className="relative">
        <div className="wave bg-white/25 rounded-t-full fixed w-[200%] h-48 animate-wave opacity-80 bottom-0 left-0 z-[-1]"></div>
        <div className="wave bg-white/25 rounded-t-full fixed w-[200%] h-48 animate-wave-reverse opacity-80 bottom-[-1.25em] left-0 z-[-1]"></div>
        <div className="wave bg-white/25 rounded-t-full fixed w-[200%] h-48 animate-wave-reverse-delay opacity-90 bottom-[-2.5em] left-0 z-[-1]"></div>
      </div>
    </div>
  );
};

export default Home;
