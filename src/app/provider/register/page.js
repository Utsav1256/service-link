"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({});
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setForm({ ...form, [e.target.name]: file });
      setPreviewPhoto(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Provider registered:", form);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Register as a Service Provider
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          "Home",
          "Shop",
          "Office",
          "S/O",
          "Mother",
          "Brother",
          "Sister",
          "Experience",
          "Earning",
          "Qualification",
          "Website",
          "Instagram",
          "Facebook",
        ].map((field) => (
          <input
            key={field}
            type="text"
            name={field.toLowerCase()}
            placeholder={field}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        ))}

        {/* Profile Photo */}
        <div className="col-span-2">
          <label className="block mb-2 font-semibold">Profile Photo</label>
          <input
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />
          {previewPhoto && (
            <img
              src={previewPhoto}
              alt="Preview"
              className="mt-3 w-28 h-28 rounded-full object-cover"
            />
          )}
        </div>

        {/* Service Photo */}
        <div className="col-span-2">
          <label className="block mb-2 font-semibold">Service Related Photo</label>
          <input
            type="file"
            name="servicePhoto"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="col-span-2 mt-6 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
