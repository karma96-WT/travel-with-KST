"use client";

import { useEffect, useState } from "react";

export default function HeroContent({ destination }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [destination.id]);

  return (
    <div
      className={`relative z-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Eyebrow */}
      <p className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6">
        Discover Bhutan
      </p>

      {/* Main Title */}
      <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6 md:mb-8 tracking-tight">
        {destination.location}
      </h1>

      {/* Description */}
      <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-md lg:max-w-lg">
        {destination.description}
      </p>

      {/* CTA */}
      <button className="group inline-flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-white/95 transition-all duration-300 hover:gap-4">
        Explore Destination
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}
