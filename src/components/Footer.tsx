import React from "react";
import bgImage from "../assets/footer.jpg";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white py-16 px-6 mt-5 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})`  }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Footer content */}
      <div className="relative max-w-6xl mx-auto text-center space-y-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 font-medium">
          {["Home", "Menu", "Drinks", "Ourstory", "Restaurants", "Gallery", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-300 transition"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Book a Table */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Book a Table</h2>
        </div>

        {/* Second Set of Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Home2",
            "Home3",
            "Menu2",
            "Menu3",
            "Drinks2",
            "Drinks3",
            "Restaurant2",
            "Restaurant3",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-300 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CMS & Extra Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm">
          {[
            "Menu CMS Page",
            "Meal CMS Page",
            "Drink CMS Page",
            "Restaurant CMS Page",
            "Licencing",
            "Instructors",
            "Changelog",
            "Sample Page",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-purple-300 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="px-4 py-2 rounded-2xl border border-white bg-white/20 hover:bg-white/30 transition text-sm">
            Powered by CloudNepalWeb
          </button>
          <button className="px-4 py-2 rounded-2xl border border-white bg-white/20 hover:bg-white/30 transition text-sm">
            Made by AlsihaWaiba
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
