import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      {/* ========== Sticky Top Header ========== */}
      <header className="sticky top-0 z-50">
        {/* Top contact bar */}
        <nav className="bg-gray-600 text-white p-4 flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-8 w-8" />
            <h1 className="text-lg font-bold">TAOR Restaurant</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:hello@taor.com" className="hover:underline">
              hello@taor.com
            </a>
            <a href="tel:+5552323454" className="hover:underline">
              +555 (23) 234 54
            </a>
            <a
              href="#book"
              className="hover:underline bg-green-600 text-black px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Book a table
            </a>
          </div>
        </nav>

        {/* Main navigation */}
        <nav className="bg-gray-800 w-full p-3 text-white shadow-lg h-12">
          <div className="flex flex-wrap items-center space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href= "#menu-hero" className="hover:underline">Menu</a>
            <a href="#drinks" className="hover:underline">Drinks</a>
            <a href="#ourstory" className="hover:underline">Our Story</a>
            <a href="#restaurants" className="hover:underline">Restaurants</a>
            <a href="#gallery-hero" className="hover:underline">Gallery</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#offer" className="hover:underline">Offer</a>
          </div>
        </nav>
      </header>

      
    </>
  );
}
