"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: "erp",
    label: "ERP solutions",
    title: "ERP Solutions",
    description: "ERP systems help businesses manage and connect their core operations in one place. As companies grow, using spreadsheets and separate tools leads to scattered data, repeated work, and limited visibility. Our ERP solutions bring finance, sales, inventory, and HR into a single system built around your workflows. You can automate processes, reduce inefficiencies, and gain real-time insights...",
    image: "https://i.pinimg.com/736x/2e/46/cc/2e46cc2eb7bbf228197f44b35559ccef.jpg",
  },
  {
    id: "app",
    label: "App development",
    title: "App Development",
    description: "We create powerful, user-centric mobile applications that provide seamless experiences across all platforms. Our team focuses on delivering high-performance apps that engage users and drive business growth. From concept to launch, we handle the entire development lifecycle, ensuring your app is robust, scalable, and tailored to your specific business objectives.",
    image: "https://i.pinimg.com/1200x/ad/3a/f8/ad3af8a503f70a5c48f23782fe5e77f2.jpg",
  },
  {
    id: "web",
    label: "Web development",
    title: "Web Development",
    description: "Our web development services focus on building responsive, secure, and fast-loading websites that convert visitors into customers. We utilize the latest technologies to create dynamic web experiences. Whether you need a simple landing page or a complex e-commerce platform, we deliver solutions that are optimized for performance and search engine visibility.",
    image: "https://i.pinimg.com/1200x/95/39/a7/9539a75cae6999cbd219029ff0ab939f.jpg",
  },
  {
    id: "uiux",
    label: "UI/UX design",
    title: "UI/UX Design",
    description: "Design is more than just aesthetics; it's about how users interact with your product. Our UI/UX experts focus on creating intuitive interfaces that enhance user satisfaction and loyalty. We conduct thorough research and testing to ensure every design decision is backed by user data, resulting in products that are both beautiful and highly functional.",
    image: "https://i.pinimg.com/1200x/ad/3a/f8/ad3af8a503f70a5c48f23782fe5e77f2.jpg",
  },
  {
    id: "domain",
    label: "Domain registration",
    title: "Domain Registration",
    description: "Securing the right domain name is the first step in building your online presence. We provide easy and reliable domain registration services to help you establish your brand on the web. With our competitive pricing and robust management tools, you can easily manage your domains and ensure your online identity is protected and always accessible.",
    image: "https://i.pinimg.com/1200x/5c/04/4d/5c044dfa3ddd5ef809f1c8e473d9bf35.jpg",
  },
];

const FlipText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-2">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                duration: 0.2,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

const FlipDescription = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: wordIndex * 0.02,
            duration: 0.3,
          }}
          className="inline-block mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  const maskStyle = {
    clipPath: "polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)",
  };

  return (
    <section className="w-full bg-[#F4FFFD] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="bg-[#B5F1EB] text-[#0ABAB5] px-6 py-1.5 rounded-full text-sm font-medium mb-3">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#011936]">
            What <span className="text-[#0ABAB5]">We Do</span>
          </h2>
        </div>

        <div className="relative border-b border-gray-200 mb-12 overflow-x-auto scroll-hidden">
          <div className="flex justify-between items-center min-w-max md:min-w-0">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative px-4 py-3 text-lg font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeTab === service.id ? "text-[#0ABAB5]" : "text-gray-500"
                }`}
              >
                {service.label}
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#0ABAB5] z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col h-full">
            <div className="min-h-[420px] sm:min-h-[320px] lg:min-h-[340px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab}>
                  <FlipText 
                    text={activeService.title} 
                    className="text-3xl md:text-4xl font-bold text-[#011936] mb-6"
                  />
                  <FlipDescription 
                    text={activeService.description} 
                    className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-[#0ABAB5] hover:bg-[#089691] text-white px-10 py-3.5 rounded-full transition text-lg font-medium shadow-lg shadow-[#0ABAB5]/20">
                Read More
              </button>
              <button className="border-2 border-[#0ABAB5] text-[#0ABAB5] hover:bg-[#0ABAB5] hover:text-white px-8 py-3.5 rounded-full transition text-lg font-medium flex items-center gap-2 group">
                Book a Demo{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  &gt;
                </span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end p-8">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[300px]">
              <div 
                className="absolute inset-0 translate-x-5 translate-y-5 bg-[#0ABAB5]/20 rounded-2xl z-0"
                style={maskStyle}
              />
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full overflow-hidden shadow-2xl z-10"
                  style={maskStyle}
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
