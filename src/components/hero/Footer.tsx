import React from "react";
import bgImage from "../../assets/Footer.jpg";
import { footerLinks, footerButtons, footerHeading } from "../../constant/footerSection";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white py-16 px-6 mt-5 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto text-center space-y-6">

        
        <div className="flex flex-wrap justify-center gap-4 font-medium">
          {footerLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-300 transition"
            >
              {item}
            </a>
          ))}
        </div>

      
        <div>
          <h2 className="text-xl md:text-2xl font-bold">{footerHeading}</h2>
        </div>

      
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {footerButtons.map((btn, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-2xl border border-white bg-white/20 hover:bg-white/30 transition text-sm"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
