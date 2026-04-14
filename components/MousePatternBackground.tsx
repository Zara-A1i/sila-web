"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export const MousePatternBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Create the mask for the highlight layer
  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Base Layer: Low opacity dots */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#56DFCF20_1px,transparent_1px)] [background-size:24px_24px]" 
      />
      
      {/* Highlight Layer: Higher opacity dots revealed by mouse mask */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(#56DFCF80_1px,transparent_1px)] [background-size:24px_24px]"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
    </div>
  );
};
