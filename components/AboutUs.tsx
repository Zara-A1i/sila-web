"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slots = [
  "left-12 top-0 w-[280px] h-[360px] z-20",              // MAIN
  "right-0 bottom-16 w-[100px] h-[140px]",
  "left-4 bottom-6 w-[160px] h-[120px]",
  "right-85 top-0 w-[72px] h-[72px]",
  "left-45 top-75 w-[120px] h-[100px]",
];

const images = [
  { src: "/robbot.jpg", alt: "Robot" },
  { src: "/finger.jpg", alt: "Finger" },
  { src: "/rol.jpg", alt: "Rol" },
  { src: "/3d digital spacce.jpg", alt: "Digital" },
  { src: "/rop.jpg", alt: "Rop" },
];

export default function AboutUs() {
  const [mainIndex, setMainIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="AboutUs"
      className="w-full bg-[linear-gradient(135deg,#D4F0ED_9%,#56DFCF_100%)] py-24 px-6"
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          About <span className="text-teal-500">Us</span>
        </h2>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* IMAGE COMPOSITION */}
        <div className="flex justify-center">
          <div className="relative w-[360px] h-[420px]">

            {images.map((img, i) => {
              // Rotate slots so each image becomes MAIN in turn
              const slotIndex =
                (i - mainIndex + images.length) % images.length;

              return (
                <div
                  key={img.src}
                  className={`absolute transition-all duration-700 ease-in-out overflow-hidden shadow-xl rounded-2xl ${slots[slotIndex]}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}

          </div>
        </div>

        {/* TEXT */}
        <div>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            <span className="text-teal-500 font-semibold">Sila</span> is a
            forward‑thinking company founded by a group of talented founders
            with a shared vision of empowering businesses through innovative
            technology. Driven by passion and creativity, Sila transforms ideas
            into impactful digital solutions for the future.
          </p>

          <button className="inline-flex items-center gap-3 rounded-full bg-teal-400 px-6 py-3 text-white font-medium shadow-md hover:bg-teal-500 transition">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
}