import React, { useState } from "react";
import { X } from "lucide-react";
import { logo, navLinks } from "../../constant/navbarSection";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gray-600 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center cursor-pointer" onClick={() => scrollTo("home")}>
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="hidden sm:block font-bold ml-2">TAOR Restaurant</span>
        </div>

        <div className="hidden sm:flex space-x-4">
          {navLinks.map((link) => (
            <button key={link.section} onClick={() => scrollTo(link.section)}>
              {link.label}
            </button>
          ))}
          <button onClick={() => setReservationOpen(true)} className="bg-green-600 px-2 rounded">
            Book
          </button>
        </div>

        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <span className="text-2xl">&#9776;</span>}
        </button>
      </header>

      {menuOpen && (
        <div className="sm:hidden bg-gray-700 flex flex-col p-2">
          {navLinks.map((link) => (
            <button key={link.section} onClick={() => scrollTo(link.section)} className="p-2 text-white">
              {link.label}
            </button>
          ))}
          <button onClick={() => setReservationOpen(true)} className="bg-green-600 text-white p-2 mt-1 rounded">
            Book
          </button>
        </div>
      )}

      {reservationOpen && (
        <div className="fixed top-16 right-0 w-full max-w-md bg-white shadow z-50 p-4">
          <button className="absolute right-4 top-4" onClick={() => setReservationOpen(false)}>
            <X size={22} />
          </button>
          <h2 className="text-xl font-bold mb-2">Book Your Table</h2>
          <input type="text" placeholder="Name" className="w-full p-2 border mb-2 rounded" />
          <input type="number" placeholder="Party Size" className="w-full p-2 border mb-2 rounded" />
          <input type="date" className="w-full p-2 border mb-2 rounded" />
          <input type="time" className="w-full p-2 border mb-2 rounded" />
          <button className="w-full bg-green-600 text-white p-2 rounded">Confirm</button>
        </div>
      )}

      {reservationOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setReservationOpen(false)} />}
    </>
  );
};

export default Navbar;
