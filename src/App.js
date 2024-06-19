import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductListingPage from "./pages/ProductListingPage";
// import CartPage from "./pages/CartPage";
import Home from "./mainpage/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<ProductListingPage />} /> */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
