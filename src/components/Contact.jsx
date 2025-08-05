import React, { useState } from "react";
import { PhoneCall, Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "./shared/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://hsfl-backend.onrender.com/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl w-full bg-base-100 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left: Info */}
          <div className="bg-[#10144e] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-8 items-center text-center">
            <img
              src="/Assets/logo.png"
              className="h-32 w-32 sm:h-40 sm:w-40"
              alt="logo"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              HIMALAYAN SCHOOL FOR REGENERATIVE LEARNING
            </h1>
            <p className="font-medium text-base sm:text-lg max-w-sm">
              Outdoor Education & Environmental Study
            </p>
          </div>

          {/* Right: Form */}
          <div className="p-8 sm:p-12 md:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-8 text-center md:text-left">
              Contact Us
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="btn w-full bg-emerald-700 hover:bg-emerald-800 text-white border-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
