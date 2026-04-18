"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "ERP Solutions", description: "Scalable ERP Systems For Businesses" },
  {
    title: "Mobile App Development",
    description: "Bespoke Mobile Software For Unique Needs",
  },
  {
    title: "Web Development",
    description: "Reliable Web Hosting and Development",
  },
  { title: "UI/UX Design", description: "Distinct Brand Identity and UI/UX" },
  {
    title: "Domain Registration",
    description: "Professional Domain Registration Services",
  },
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center px-4 pt-8">
      <nav className="relative flex items-center justify-between w-full max-w-7xl rounded-[40px] px-6 py-3 bg-[#F4FFFD] border border-white/10 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="SILA Technologies"
            width={120}
            height={28}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            href="#AboutUs"
            className="text-[#011936] font-medium hover:text-[#0ABAB5] transition-colors"
          >
            About Us
          </Link>

          {/* Services Dropdown (Desktop) */}
          <div
            className="relative h-full py-4 flex items-center cursor-pointer"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center space-x-1 text-[#011936] font-medium hover:text-[#0ABAB5] transition-colors">
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {isServicesOpen && (
              <>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] h-16 z-[55]" />
                <div className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 w-[850px] bg-[#F4FFFD] rounded-[32px] shadow-2xl p-10 grid grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in slide-in-from-top-4 duration-300 z-[60]">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={`/#services/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="group flex flex-col space-y-2"
                    >
                      <h3 className="text-[#011936] text-lg font-bold group-hover:text-[#0ABAB5] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-500">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link
            href="#WhyChooseUs"
            className="text-[#011936] font-medium hover:text-[#0ABAB5] transition-colors"
          >
            Why Us
          </Link>

          <Link
            href="#Contact"
            className="text-[#011936] font-medium hover:text-[#0ABAB5] transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Get Started Button — Desktop */}
        <Link
          href="https://wa.me/252612544819"
          className="hidden md:inline-flex bg-[#0ABAB5] hover:bg-[#56DFCF] text-[#F4FFFD] px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#011936]"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-[#F4FFFD] rounded-3xl shadow-xl p-6 md:hidden space-y-4">
            <Link href="#AboutUs" className="block font-medium text-[#011936]">
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <button
              onClick={() =>
                setIsMobileServicesOpen(!isMobileServicesOpen)
              }
              className="flex justify-between w-full font-medium text-[#011936]"
            >
              Services
              <span>{isMobileServicesOpen ? "−" : "+"}</span>
            </button>

            {isMobileServicesOpen && (
              <div className="pl-4 space-y-3">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/#services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block text-sm text-zinc-600"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            <Link href="#WhyChooseUs" className="block font-medium text-[#011936]">
              Why Us
            </Link>

            <Link href="#Contact" className="block font-medium text-[#011936]">
              Contact us
            </Link>

            <Link
              href="https://wa.me/252612544819"
              className="block text-center bg-[#0ABAB5] text-[#F4FFFD] py-2 rounded-full font-semibold"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}