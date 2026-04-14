"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "ERP Solutions",
    description: "Scalable ERP Systems For Businesses",
  },
  {
    title: "Mobile App Development",
    description: "Bespoke Mobile Software For Unique Needs",
  },
  {
    title: "Web Development",
    description: "Reliable Web Hosting and Development",
  },
  {
    title: "UI/UX Design",
    description: "Distinct Brand Identity and UI/UX",
  },
  {
    title: "Domain Registration",
    description: "Professional Domain Registration Services",
  },
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`relative w-full max-w-7xl transition-all duration-300 rounded-[40px] px-4 py-2 flex items-center justify-between border border-white/10 ${
          scrolled
            ? "bg-[#F4FFFD]/90 backdrop-blur-md shadow-lg"
            : "bg-[#F4FFFD]"
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="SILA Technologies"
            width={120}
            height={28}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link
            href="/about"
            className="text-[#011936] font-medium hover:text-[#0ABAB5] transition-colors"
          >
            About Us
          </Link>
          <div
            className="relative h-full py-4 flex items-center cursor-pointer"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center space-x-1 text-[#011936] font-medium hover:text-[#0ABAB5] transition-colors">
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] h-16 z-[55]" />
            )}
            {isServicesOpen && (
              <div className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 w-[850px] bg-[#F4FFFD] rounded-[32px] shadow-2xl p-10 grid grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in slide-in-from-top-4 duration-300 z-[60] cursor-default">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group/item flex flex-col space-y-2"
                  >
                    <h3 className="text-[#011936] text-lg font-bold group-hover/item:text-[#0ABAB5] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/blogs"
            className="text-[#011936] font-medium hover:text-[#0ABAB5] transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-[#011936] font-medium hover:text-[#0ABAB5] transition-colors"
          >
            Contact us
          </Link>
        </div>

        <Link
          href="/get-started"
          className="bg-[#0ABAB5] hover:bg-[#56DFCF] text-[#F4FFFD] px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
