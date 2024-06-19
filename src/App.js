import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductListingPage from "./pages/ProductListingPage";
// import CartPage from "./pages/CartPage";
import Home from "./mainpage/Home";
import ProductListing from "./mainpage/ProductListing";
import Cart from "./mainpage/Cart";
import ProductDetails from "./mainpage/ProductDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
