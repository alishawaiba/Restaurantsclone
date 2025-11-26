import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/hero/Footer";

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

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main>
        <Home />
        <Menu />
        <Drinks />
        <Menu/>
        <Offer />
        <Contact/>
        <Ourstory />
        <Restaurants />
        <Reservation />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
