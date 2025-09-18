import { Link } from "react-router-dom";
import logo from "../assets/image copy 2.png";
import bgVideo from "../assets/res.mp4";

export default function Navbar() {
 
  return (


    
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Text content centered */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500">
          Welcome to TAOR Restaurant
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl max-w-2xl" id="explore">
          Explore our delicious menu, browse our drinks, and discover the story
          of our restaurant.
        </p>
      </div>

      {/* Navbars wrapper */}
      <div className="relative z-30">
        {/* First Navbar */}
        <nav className="bg-gray-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="h-8 w-8" />
            <h1 className="text-lg font-bold">TAOR Restaurant</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:hello@taor.com" className="hover:underline">
              hello@taor.com
            </a>
            <a href="tel:+5552323454" className="hover:underline">
              +555 (23) 234 54
            </a>
          
            <a href="#book" className="hover:underline bg-green-600 text-black px-4 py-2 rounded-md hover:bg-green-700">Book a table</a>
          </div>
        </nav>

        {/* Second Navbar */}
        <nav className="bg-gray-800 w-full p-3 text-white shadow-lg">
          <div className="flex flex-wrap space-x-6 justify-start">
            <Link to="/" className="hover:underline">
              Home
            </Link>
         <a href="#menu">Menu </a>
            
            <a href="#drinks" className="hover:underline ">Drinks</a>
           
            <a href="#ourstory" className="hover:underline">Our Story</a>
           
            
            <a href="#restaurants" className="hover:underline">Restaurants</a>
           
            <a href="#gallery" className="hover:underline">Gallery</a>
           
            <a href="#contact" className="hover:underline">Contact</a>
            
            <a href="#offer" className="hover:underline">Offer</a>
          </div>
        </nav>
      </div>
    </div>
  
  );
}
