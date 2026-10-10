"use client";

// home.js
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1f0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Forest Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Replace the src below with your actual forest image path */}
          <img
            src="/parotaktshang.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        {/* Decorative orange curve - bottom right */}
        <div className="absolute bottom-0 right-0 z-10 pointer-events-none">
          <svg
            width="300"
            height="200"
            viewBox="0 0 300 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-52 opacity-70"
          >
            <path
              d="M0 200 Q 50 100, 150 120 T 300 50"
              stroke="#c25a1a"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M0 200 Q 60 110, 160 130 T 300 60"
              stroke="#d4691f"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Tagline badge */}
            <div
              className={`inline-block mb-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Your Trusted Travel Pertner
              </span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Discover a World
              <br />
              of Possibilities
              <br />
              with Godee
            </h1>

            {/* Subtitle */}
            <p
              className={`text-white/80 text-base sm:text-lg md:text-xl mb-10 max-w-lg transition-all duration-1000 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Discover a world of possibilities with Godee
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button className="group relative inline-flex items-center gap-2 bg-[#e8572a] hover:bg-[#d44a20] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95">
                <span>Find a Destinations</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full border-2 border-white/40 hover:border-white/70 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm">
                Get the app
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-[#0a1f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Explore Destinations",
                desc: "Discover breathtaking locations around the world curated by travel experts.",
              },
              {
                icon: "🎒",
                title: "Curated Packages",
                desc: "Handpicked travel packages designed for every type of adventurer.",
              },
              {
                icon: "📱",
                title: "Easy Booking",
                desc: "Seamless booking experience with our intuitive mobile app.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
