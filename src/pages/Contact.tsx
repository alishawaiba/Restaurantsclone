import React from "react";
import bgImage from "../assets/Contact.jpg";
import { Mail, MessageCircle, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="relative mt-50 h-screen w-full overflow-hidden"id="contact">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Contact"
        className="absolute inset-0 w-full h-full object-cover"
      />

    

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h2 className="text-5xl font-bold mb-10 text-purple-500 drop-shadow-lg">
          Contact Us
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {/* Call Us Card */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
            <Phone size={30} className="mx-auto mb-3 text-purple-500" />
            <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
            <p className="text-gray-200">0303 356 2739</p>
            <p className="text-gray-200">0303 356 2738</p>
          </div>

          {/* Email Us Card */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
            <Mail size={30} className="mx-auto mb-3 text-purple-400" />
            <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
            <p className="text-gray-200">hello@taor.com</p>
          </div>

          {/* Message Card */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
            <MessageCircle size={30} className="mx-auto mb-3 text-purple-400" />
            <h3 className="text-xl font-bold mb-2 text-white">We’re Here</h3>
            <p className="text-gray-200 uppercase text-xs tracking-widest">
              Feel free to contact us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
