import React from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/footer/Footer";
import Footer from"./components/footer/Footer";

import Preloader from "./pages/preloader";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Drinks from "./pages/Drinks";
import Offer from  "./pages/Offer";
import Contact from "./pages/Contact";
import Ourstory from "./pages/Ourstory";
import Restaurants from "./pages/Restaurants";
import Reservation from  "./pages/Reservation";
import Gallery from "./pages/Gallery";

function App()  {
  return(
    <>
    <Preloader />
    <Navbar />
    <Hero />
    <Home />
    <Menu />
    <Drinks />
    <Offer />
    <Contact />
    <Ourstory />
    <Restaurants />
    <Reservation />
    <Gallery />
    <Footer />
    </>
  );
}
  export default App;