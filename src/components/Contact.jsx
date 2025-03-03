"use client";

import { useState } from "react";
import contact from "../assets/contact.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-black px-4 sm:px-8 md:px-12 lg:px-20 py-10 lg:py-20 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          Contact Me
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mt-4 sm:mt-6 text-center">
          Let's connect and create something amazing together!
        </p>

        <div className="flex flex-col lg:flex-row mt-10 lg:mt-10 gap-10 lg:gap-20 items-center w-full">
          <img
            src={contact || "/placeholder.svg"}
            alt="Contact illustration"
            className="w-full lg:w-6/12 mx-auto lg:mx-0"
          />
          <div className="bg-gray-900/50 p-6 sm:p-8 rounded-lg shadow-lg border border-purple-500/20 w-full lg:w-7/12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-purple-400">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white h-32"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300 flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
