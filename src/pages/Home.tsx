import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero/Hero";

const Home = () => {
  const title = "Welcome to TAOR Restaurant";

  return (
    <div className="relative">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero section with video background */}
      <Hero />

      {/* Main content below Hero */}
      <div className="px-6 py-12 bg-gray-100 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          
          
        </h1>
  
      </div>
    </div>
  );
};

export default Home;
