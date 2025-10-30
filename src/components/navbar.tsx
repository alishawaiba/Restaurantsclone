import { useState } from "react";
import logo from "../assets/logo.png";
import Reservation from "../pages/Reservation";

export default function Navbar() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

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

  const handleLinkClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const header = document.querySelector('header') as HTMLElement | null;
      const headerHeight = header?.offsetHeight ?? 64; // fallback to 64px (~h-16)
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetY = Math.max(elementTop - headerHeight, 0);
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <>
      
      <header className="sticky top-0 z-50">
        
        <nav className="bg-gray-600 text-white p-4 flex justify-between items-center h-16 w-full mx-auto">
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-8 w-8" alt="TAOR Logo" />
      
            <h1 className="text-lg font-bold hidden sm:block">TAOR Restaurant</h1>
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
              className="bg-green-600 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-green-700 transition text-sm font-semibold whitespace-nowrap"
            >
              Book a table
            </button>

            
            <button 
              className="text-white sm:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        
        <nav className="bg-gray-800 w-full p-3 text-white shadow-lg hidden sm:block">
          <div className="flex flex-wrap items-center space-x-6 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <button 
                key={link.section} 
                onClick={() => handleLinkClick(link.section)}
                className="hover:underline text-sm font-medium bg-transparent border-none text-white cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>

  
        <div 
          className={`bg-gray-800 absolute w-full transition-all duration-300 ease-in-out sm:hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <button 
                key={link.section} 
                onClick={() => handleLinkClick(link.section)}
                className="text-white hover:bg-gray-700 p-2 rounded block bg-transparent border-none cursor-pointer text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      
      <div
        className={`fixed right-0 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
          ${isReservationOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ top: "4rem", bottom: "1rem" }} 
      >
        <div className="p-6 h-full overflow-auto">
          
          <button
            onClick={() => setIsReservationOpen(false)}
            className="mb-4 text-gray-500 hover:text-gray-700 font-semibold"
          >
            Close
          </button>

          
          <Reservation />
        </div>
      </div>

      
      {isReservationOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsReservationOpen(false)}
        />
      )}
    </>
  );
}