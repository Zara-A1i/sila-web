"use client";

import React from "react";
import Link from "next/link";
import LogoModel from "./LogoModel";
import { MousePatternBackground } from "./MousePatternBackground";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#011936] flex flex-col items-center justify-center pt-24 sm:pt-32 px-4 sm:px-8 lg:px-16">
      <MousePatternBackground />

      <div className="w-full max-w-7xl relative flex flex-col lg:flex-row justify-between items-center z-10 py-8 lg:py-20">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F4FFFD] leading-tight">
            Connecting Today to the <br className="hidden sm:block" />
            <span className="text-[#56DFCF]">Future You Imagine.</span>
          </h1>

          <p className="text-lg text-[#F4FFFD]/70 max-w-lg leading-relaxed">
            Bridge the gap between today and tomorrow, connecting your business
            with the customers and growth it deserves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 relative z-30">
            <Link
              href="/contact"
              className="group flex items-center justify-center space-x-2 border-2 border-[#56DFCF] text-[#56DFCF] hover:bg-[#56DFCF] hover:text-[#011936] px-8 py-3.5 rounded-full font-bold transition-all text-base bg-[#011936]/50 backdrop-blur-sm"
            >
              <span>Let&apos;s talk</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Overlapping Column: 3D Model */}
        <div className="w-full lg:w-5/12 h-[350px] lg:h-[450px] mt-12 lg:mt-0 z-20 animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
          <div className="w-full h-full scale-100 flex items-center justify-center">
            <LogoModel />
          </div>
        </div>
      </div>

      {/* Aesthetic bottom blur/gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#011936] to-transparent pointer-events-none" />
    </section>
  );
}
