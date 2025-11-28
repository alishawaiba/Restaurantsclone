import React, { useState } from "react";
import { reservationFields, guestOptions } from "../constant/reservationSection";

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your table has been reserved successfully!");
    console.log("Reservation Details:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "1",
      date: "",
      time: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  from-purple-100 to-white p-4 relative">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-200">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">
          Book a Table
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          
          {reservationFields.map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          ))}

          
          <div>
            <label className="block text-gray-700 mb-1">Number of Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {guestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
