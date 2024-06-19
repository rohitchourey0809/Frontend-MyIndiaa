import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main className="p-4">
        <h2 className="text-2xl">Welcome to our E-commerce Platform</h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
