"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaClock,
  FaHeadset,
  FaUsers,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    if (/\d/.test(name)) {
      alert("Name cannot contain numbers");
      return;
    }

    const phoneNumber = "252612544819";
    const text = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="Contact"
      className="w-full font-sans bg-[#8DE3DD] flex flex-col"
    >
      {/* TOP */}
      <div className="flex flex-col items-center justify-center text-white relative py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          CONTACT US
        </h1>
        <p className="mt-2 text-xs sm:text-sm tracking-widest text-[#056E6B]">
          SILA IS YOUR CONNECTION TO YOUR FUTURE.
        </p>

        <h2 className="hidden sm:block absolute bottom-4 left-10 md:left-20 text-2xl md:text-3xl font-bold text-white">
          GET IN
        </h2>
      </div>

      {/* MIDDLE */}
      <div className="relative bg-[#CFF3EF] px-4 sm:px-8 pt-16 pb-40">
        <h2 className="hidden sm:block absolute top-4 left-10 md:left-20 text-2xl md:text-3xl font-bold text-[#0ABAB5]">
          TOUCH
        </h2>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center md:absolute md:top-[-70px] md:right-10">
          {[
            {
              icon: <FaUsers />,
              title: "Follow us",
              text: "We hope you will follow our all accounts in social media",
            },
            {
              icon: <FaClock />,
              title: "Working hours",
              text: "We are always open 24/7",
            },
            {
              icon: <FaHeadset />,
              title: "Support",
              text: "Working for your comfort everytime in your demand",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black text-white p-6 w-full max-w-[260px] h-[160px] rounded-md flex flex-col justify-between hover:-translate-y-2 transition"
            >
              <div className="text-2xl">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="mt-16 md:mt-0 md:absolute md:left-10 lg:left-20 md:bottom-[-220px] w-full flex justify-center">
          <div className="bg-[#E7F8F6] p-4 sm:p-6 flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-[900px] border border-[#0ABAB5] shadow-lg">
            {/* LEFT FORM */}
            <div className="bg-[#011936] p-6 w-full md:w-[320px] flex flex-col gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="p-2 text-sm outline-none"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your E-mail"
                className="p-2 text-sm outline-none"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="p-2 text-sm h-[110px] outline-none"
              />

              <button
                onClick={sendToWhatsApp}
                className="bg-[#0ABAB5] text-white py-2 text-sm hover:opacity-80 transition"
              >
                Send Message
              </button>
            </div>

            {/* RIGHT TEXT */}
            <div className="flex-1 text-[#011936] flex flex-col justify-center text-center md:text-left">
              <h2 className="text-lg sm:text-xl italic mb-4">
                Have any query?
              </h2>
              <p className="text-sm leading-relaxed">
                We'd love to hear from you! Whether you have a question, need
                support, or want to share your ideas and feedback, our team is
                always here to help. Reach out anytime and we'll respond as soon
                as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#6FE0D9] flex items-center justify-center md:justify-end px-6 md:pr-20 py-10">
        <div className="text-center md:text-right text-[#011936]">
          <h1 className="text-lg sm:text-xl font-semibold mb-3">
            Let’s talk
          </h1>
          <div className="flex gap-5 justify-center md:justify-end text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=61574514134609"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/252612544819"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/company/silatechn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/silatech.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}