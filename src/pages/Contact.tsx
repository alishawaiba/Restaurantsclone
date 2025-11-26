import React from "react";
import bgImage from "../assets/Contact.jpg";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { contactCards, openingHours } from "../constant/contactSection";

const icons = { Phone, Mail, MessageCircle };

const Contact = () => {
  return (
    <div>
  
      <div className="relative h-screen w-full">
        <img
          src={bgImage}
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl font-bold text-purple-500 mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {contactCards.map((card) => {
              const Icon = icons[card.icon as keyof typeof icons];
              return (
                <div
                  key={card.id}
                  onClick={() =>
                    card.action === "alert"
                      ? alert("We're here to help!")
                      : (window.location.href = card.action)
                  }
                  className="bg-white/20 backdrop-blur-md p-4 rounded shadow text-center cursor-pointer hover:scale-105 transition"
                >
                  <Icon size={28} className="mx-auto mb-2 text-purple-400" />
                  <h3 className="font-bold text-white mb-1">{card.title}</h3>
                  {card.data.map((line, i) => (
                    <p key={i} className="text-gray-200 text-sm">{line}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 pb-12 text-center md:text-left">
        {openingHours.map((item, i) => (
          <div key={i}>
            <h2 className="text-gray-500">{item.day}</h2>
            <h1 className="font-bold text-2xl">{item.time}</h1>
            <p className="text-gray-500">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
