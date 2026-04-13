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
    <section className="h-screen w-full flex flex-col overflow-hidden font-sans">

      {/* TOP */}
      <div className="bg-[rgba(10,186,181,0.5)] flex-1 relative flex flex-col items-center justify-center text-white">

        <h1 className="text-2xl font-semibold">CONTACT US</h1>

        <p className="mt-2 text-sm tracking-widest">
          <span className="text-[#056E6B] font-semibold">SILA</span> IS YOUR CONNECTION TO YOUR FUTURE.
        </p>

        <h2 className="absolute bottom-1 left-[200px] text-2xl font-bold">
          GET IN
        </h2>
      </div>

      {/* MIDDLE */}
      <div className="bg-[rgba(212,240,237,0.7)] flex-1 relative flex items-start pt-10 px-6">

        <div className="w-full flex justify-between">

          <h2 className="absolute top-1 left-[200px] text-2xl font-bold text-[#0ABAB5]">
            TOUCH
          </h2>

          {/* CARDS */}
          <div className="flex gap-6 absolute top-[-40px] right-6">
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
                className="bg-black text-white p-5 w-[240px] h-[160px] flex flex-col justify-between rounded-md
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-2xl">{item.icon}</div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="text-[12px] text-gray-300 leading-snug">
                  {item.text}
                </p>

                <div className="flex items-center justify-between text-sm mt-2">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="absolute bottom-[-200px] left-[80px]">

          <div className="bg-[#CEF0EC] p-6 flex gap-8 border border-[#0ABAB5] rounded-md w-[850px] shadow-lg">

            {/* LEFT FORM */}
            <div className="bg-[#011936] p-5 flex flex-col gap-3 w-[320px]">

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#E5E5E5] p-2 text-sm outline-none"
                placeholder="Your name"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#E5E5E5] p-2 text-sm outline-none"
                placeholder="Your E-mail"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#E5E5E5] p-2 text-sm h-[110px] outline-none"
                placeholder="Message"
              />

              <button
                onClick={sendToWhatsApp}
                className="bg-[#0ABAB5] text-white text-sm py-2 mt-2 hover:opacity-80 transition"
              >
                Send Message
              </button>

            </div>

            {/* RIGHT TEXT */}
            <div className="flex-1 text-[#011936] flex flex-col justify-center -mt-20">

              <h2 className="text-xl italic mb-4">
                Have any query?
              </h2>

              <p className="text-sm leading-relaxed">
                We&apos;d love to hear from you! Whether you have a question, need support, or want to
                share your ideas and feedback, our team is always here and ready to help. Your voice
                matters to us, and we are committed to providing fast, friendly, and reliable support
                whenever you reach out. Simply send us a message at any time, and we&apos;ll make sure
                to respond as quickly as possible with the help you need and the answers you are looking for.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="bg-[rgba(10,186,181,0.5)] flex-1 flex items-center justify-end pr-16">

        <div className="text-[#011936] text-right">

          <h1 className="text-xl font-semibold mb-3">
            Let’s talk
          </h1>

          <div className="flex items-center justify-end gap-4 text-lg">

            <a href="https://www.facebook.com/profile.php?id=61574514134609" target="_blank">
              <FaFacebookF className="cursor-pointer hover:text-white transition text-xl" />
            </a>

            <a href="https://wa.me/252612544819" target="_blank">
              <FaWhatsapp className="cursor-pointer hover:text-white transition text-xl" />
            </a>

            <a href="https://www.linkedin.com/company/silatechn/" target="_blank">
              <FaLinkedin className="cursor-pointer hover:text-white transition text-xl" />
            </a>

            <a href="https://www.instagram.com/silatech.co" target="_blank">
              <FaInstagram className="cursor-pointer hover:text-white transition text-xl" />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}