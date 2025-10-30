import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Preloader from "./pages/preloader";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Drinks from "./pages/Drinks";
import OurStory from "./pages/Ourstory";
import Restaurants from "./pages/Restaurants";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    
    const preloaderTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 4000);

  
    const mainContentTimer = setTimeout(() => {
      setShowMainContent(true);
    }, 4500); 

    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(mainContentTimer);
    };
  }, []);

  return (
    <>
      {showPreloader && <Preloader />}
      
      {showMainContent && (
        <>
          <Navbar />
          
          <div className="animate-fade-in">
            <Home />
            <Menu />
            <Drinks />
            <Offer />
            <OurStory />
            <Restaurants />
            <Gallery />
            <Contact />
          </div>
          
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
