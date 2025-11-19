import React, { useState } from "react";

import { X } from "lucide-react";

const logo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTAgMThsNS01LTEgLTcgMTIgLTMtNCAtMi01LTQgLTIgLTExLTggLTQgeiIvPjxwYXRoIGQ9Ik01IDE3bDMtMTMiLz48cGF0aCBkPSJNMTAgMTZsMTQgLTMiLz48L3N2Zz4=";


 

const Reservation = () => (
  <div className="p-4 text-center">
    <h2 className="text-2xl font-extrabold mb-4 text-gray-800">Book Your Table</h2>
    <p className="text-gray-600">Please fill out the mock form to secure your reservation.</p>
    <div className="mt-8 space-y-4">
      
      <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
      <input type="number" placeholder="Party Size (e.g., 4)" min="1" className="w-full p-3 border border-gray-300 rounded-lg" />
      <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" />
      <input type="time" className="w-full p-3 border border-gray-300 rounded-lg" />
    
      <button className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition duration-200 mt-4">Confirm Reservation</button>
    </div>
  </div>
);


 
 
const navLinks = [
  { section: "home", label: "Home" },
  { section: "menu-hero", label: "Menu" },
  { section: "drinks", label: "Drinks" },
  { section: "offer", label: "Offer" },
  { section: "ourstory", label: "Our Story" },
  { section: "restaurants", label: "Restaurants" },
  { section: "gallery-hero", label: "Gallery" },
  { section: "contact", label: "Contact" },
];


 
export default function Navbar() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const header = document.querySelector("header");
      
      const headerHeight = header?.offsetHeight ?? 64; 
      
      
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetY = Math.max(elementTop - headerHeight, 0);

      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
    
    setIsMenuOpen(false); 
  };

  const handleLogoClick = () => handleLinkClick("home");

  return (
    <>
      <header className="sticky top-0 z-50 w-full" role="banner">
        
        
        <nav
          className="bg-gray-600 text-white p-4 flex justify-between items-center h-16 w-full shadow-lg"
          role="navigation"
        >
          
          <div className="flex items-center space-x-6">
          
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleLogoClick}
            >
              <img
                src={logo}
                alt="TAOR Logo"
                className="h-10 w-10 object-contain transition-transform duration-200 hover:scale-105"
              />
              <h1 className="text-lg font-bold hidden sm:block">TAOR Restaurant</h1>
            </div>
          </div>

          
          <div className="flex items-center space-x-4 sm:space-x-6">
            
            <a href="mailto:hello@taor.com" className="hover:underline hidden md:block">
              hello@taor.com
            </a>

            <a href="tel:+5552323454" className="hover:underline hidden sm:block">
              +555 (23) 234 54
            </a>

            
            
            <button
              onClick={() => setIsReservationOpen(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition font-semibold text-sm"
            >
              Book a table
            </button>

            
            <button
              className="text-white sm:hidden"
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>
        
        
        <div className="hidden sm:block bg-gray-700 text-white w-full shadow-md">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start py-2 space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleLinkClick(link.section)}
                  className="hover:underline text-sm font-medium transition duration-150"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

      
        <div
          id="mobile-navigation"
          className={`bg-gray-700 sm:hidden w-full transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleLinkClick(link.section)}
                className="text-white hover:bg-gray-600 p-2 rounded text-left font-medium transition"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      
      <div
        className={`fixed right-0 top-16 w-full max-w-md bg-white shadow-xl z-50 h-[calc(100vh-4rem)] transition-transform duration-300 ${
          isReservationOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-auto relative">
          <button
            onClick={() => setIsReservationOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            aria-label="Close reservation form"
          >
            <X size={22} />
          </button>

          <Reservation />
        </div>
      </div>

      
      {isReservationOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsReservationOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}