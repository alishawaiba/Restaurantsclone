import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Restaurants from "./pages/Restaurants";
import Footer from "./components/Footer";
import OurStory from "./pages/Ourstory";
import Offer from "./pages/Offer";
import Navbar from "./components/navbar"; 

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
       
          <Navbar />
          
         <Menu/>
         
         <Drinks/>
         <Offer/>
         <OurStory/>
         <Reservation/>
         <Contact/>
         <Gallery/>
         <Restaurants/>
         

      </div>
      <Footer />
    </div>
  );
}

export default App;
