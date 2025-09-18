import React, { useState } from 'react';

const Reservation = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    date: "",
    time: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation Data:", data);
    alert("Reservation submitted!");
  };

  return (
    <div className="max-w-md mx-auto mt-70 p-6 bg-white rounded-xl shadow-md" id="book">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">Book a Table</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {["name","email","phone"].map((field) => (
          <input
            key={field}
            type={field==="email"?"email":field==="phone"?"tel":"text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
            value={data[field as keyof typeof data]}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        ))}
        <select name="guests" value={data.guests} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
          {[1,2,3,4,5,6,7,8,9,10].map(n=><option key={n}>{n}</option>)}
        </select>
        <input type="date" name="date" value={data.date} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg"/>
        <input type="time" name="time" value={data.time} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg"/>
        <button className="w-full py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
