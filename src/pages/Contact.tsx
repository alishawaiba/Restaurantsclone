import React from "react";
import bgImage from "../assets/Contact.jpg";
import { Phone, Mail, MessageCircle } from "lucide-react";


const CallUsCard = () => {
  const handleCall = () => {
    window.location.href = "tel:03033562739"; 
  };

  return (
    <div
      onClick={handleCall}
      className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
    >
      <Phone size={30} className="mx-auto mb-3 text-purple-500" />
      <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
      <p className="text-gray-200">0303 356 2739</p>
      <p className="text-gray-200">0303 356 2738</p>
    </div>
  );
};


const EmailUsCard = () => {
  const handleEmail = () => {
    window.location.href = "mailto:hello@taor.com"; 
  };

  return (
    <div
      onClick={handleEmail}
      className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
    >
      <Mail size={30} className="mx-auto mb-3 text-purple-400" />
      <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
      <p className="text-gray-200">hello@taor.com</p>
    </div>
  );
};

const WereHereCard = () => {
  const handleClick = () => {
    alert("We're here to help!"); 
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 transition-transform"
    >
      <MessageCircle size={30} className="mx-auto mb-3 text-purple-400" />
      <h3 className="text-xl font-bold mb-2 text-white">We’re Here</h3>
      <p className="text-gray-200 uppercase text-xs tracking-widest">
        Feel free to contact us
      </p>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div>
      
      <div id="contact" className="relative h-screen w-full overflow-hidden">
        <img
          src={bgImage}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h2 className="text-5xl font-bold mb-12 text-purple-500 drop-shadow-lg">
            Contact Us
          </h2>
          

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <CallUsCard />
            <EmailUsCard />
            <WereHereCard />
          </div>
        </div>
      </div>

      
      <div className="flex flex-row ml-30 gap-30 mt-50 pb-50">
        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 text-lg">Monday</h1>
          <h2 className="text-4xl font-bold">We are Closed</h2>
          <h3 className="text-gray-500">See you the next day</h3>
        </div>

        <span className="border border-gray-200 h-20" />

        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 text-lg">Tuesday - Saturday</h1>
          <h2 className="text-4xl font-bold">6 a.m. - 11 p.m.</h2>
          <h3 className="text-gray-500">You are welcomed</h3>
        </div>

        <span className="border border-gray-200 h-20" />

        <div className="flex flex-col items-start">
          <h1 className="text-gray-500 text-lg">Sunday</h1>
          <h2 className="text-4xl font-bold">12 p.m. - 10 p.m.</h2>
          <h3 className="text-gray-500">You are welcomed</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
