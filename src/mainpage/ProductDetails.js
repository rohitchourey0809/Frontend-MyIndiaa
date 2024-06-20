// src/pages/ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === parseInt(id))
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Header />
      <Navigation />
      <main className="p-4 mt-60 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 text-lg mb-4">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
