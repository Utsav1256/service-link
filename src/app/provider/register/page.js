"use client";

import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({});
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setForm({ ...form, [e.target.name]: file });
      if (e.target.name === "profilePhoto") {
        setPreviewPhoto(URL.createObjectURL(file));
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Provider registered:", form);
    // TODO: send to API
  };

  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto py-16 px-6 bg-[#0d0d0d] text-white pt-28">
      <h2 className="text-4xl font-extrabold text-center uppercase tracking-wider mb-12">
        Register as a Service Provider
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6 border border-white/10"
      >
        {/* Basic Info */}
        <div>
          <label className="block mb-2 font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-white border border-gray-300 
                       focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-white border border-gray-300 
                       focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Address */}
        {["Home", "Shop", "Office", "S/O"].map((field) => (
          <div key={field}>
            <label className="block mb-2 font-semibold">{field} Address</label>
            <input
              type="text"
              name={field.toLowerCase()}
              placeholder={`Enter ${field} details`}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-300 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-400"
            />
          </div>
        ))}

        {/* Service Type */}
        <div>
          <label className="block mb-2 font-semibold">Service Type</label>
          <select
            name="service"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-white border border-gray-300 
                       focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            <option className="bg-black text-white" value="">
              Select your service
            </option>
            <option className="bg-black text-white" value="Plumber">
              Plumber
            </option>
            <option className="bg-black text-white" value="Electrician">
              Electrician
            </option>
            <option className="bg-black text-white" value="Teacher">
              Teacher
            </option>
            <option className="bg-black text-white" value="Carpenter">
              Carpenter
            </option>
            <option className="bg-black text-white" value="Makeup Artist">
              Makeup Artist
            </option>
            <option className="bg-black text-white" value="Other">
              Other
            </option>
          </select>
        </div>

        {/* If Other is selected → show custom service input */}
        {form.service === "Other" && (
          <div>
            <label className="block mb-2 font-semibold">Specify Service</label>
            <input
              type="text"
              name="customService"
              placeholder="Enter your service name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-300 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-400"
            />
          </div>
        )}

        {/* Extra Details */}
        {/* {[
          "Mother",
          "Brother",
          "Sister",
          "Experience",
          "Earning",
          "Qualification",
        ].map((field) => (
          <div key={field}>
            <label className="block mb-2 font-semibold">{field}</label>
            <input
              type="text"
              name={field.toLowerCase()}
              placeholder={`Enter ${field}`}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-300 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-400"
            />
          </div>
        ))} */}

        {/* Social Media */}
        {["Website", "Instagram", "Facebook"].map((field) => (
          <div key={field}>
            <label className="block mb-2 font-semibold">{field}</label>
            <input
              type="url"
              name={field.toLowerCase()}
              placeholder={`Enter ${field} URL`}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-300 
                         focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-400"
            />
          </div>
        ))}

        {/* Profile Photo */}
        <div className="col-span-2">
          <label className="block mb-2 font-semibold">Profile Photo</label>
          <input
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black text-white border border-gray-300"
          />
          {previewPhoto && (
            <Image
              src={previewPhoto}
              alt="Preview"
              width={112}
              height={112}
              className="mt-3 w-28 h-28 rounded-full object-cover border-2 border-yellow-400"
            />
          )}
        </div>

        {/* Service Photo */}
        <div className="col-span-2">
          <label className="block mb-2 font-semibold">
            Service Related Photo
          </label>
          <input
            type="file"
            name="servicePhoto"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black text-white border border-gray-300"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="col-span-2 mt-6 bg-yellow-400 text-white px-8 py-4 rounded-2xl font-bold 
                     hover:bg-yellow-500 transition transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
