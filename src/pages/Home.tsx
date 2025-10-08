import React from "react";
import { Link } from "react-router-dom";   
import Navbar from "../components/navbar";
import Hero from "../components/hero/Hero";
import bgvideo from "../assets/res.mp4"; 
import Reservation from "./Reservation";

const Home = () => {

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
    
      

      
      <video
        src={bgvideo} 
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      
      <Hero />
      
    </div>
  );
};

export default Home;
