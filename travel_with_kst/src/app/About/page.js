"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NODE_ENV === 'production' ? '/travel-with-KST' : '';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    `${basePath}/bg1.jpg`,
    `${basePath}/bg2.jpg`,
    `${basePath}/bg3.jpg`,
    `${basePath}/bg4.jpg`,
    `${basePath}/bg5.jpg`,
  ];

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1f0f]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((img, index) => (
            <img
              key={`${index}-${currentImage}`}
              src={img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: index === currentImage ? "scale(1.20)" : "scale(1)",
                filter: index === currentImage ? "blur(0px)" : "blur(10px)",
                transition: "transform 5s ease-out, opacity 1s ease-in-out, filter 1s ease-in-out",
              }}
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        {/* Decorative orange curve */}
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
                About Us
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
              Discover the
              <br />
              Spirit of
              <br />
              Bhutan
            </h1>

            {/* Subtitle */}
            <p
              className={`text-white/80 text-base sm:text-lg md:text-xl mb-10 max-w-lg transition-all duration-1000 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Journey beyond the ordinary into the pristine heart of the Himalayas with KST
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-[#0a1f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-[#e8572a] mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed text-center mb-8">
              At Travel with KST, we believe that travel is more than just visiting places—it&apos;s about immersing yourself in cultures, connecting with nature, and creating memories that last a lifetime. Our mission is to provide authentic, sustainable, and transformative travel experiences in the mystical kingdom of Bhutan and beyond.
            </p>
            <p className="text-white/80 text-lg leading-relaxed text-center">
              We are committed to preserving Bhutan&apos;s rich cultural heritage while sharing its beauty with the world. Every journey we craft is designed to be respectful of local traditions, environmentally conscious, and deeply enriching for our travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-[#0d2514]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-[#e8572a] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏔️",
                title: "Authenticity",
                desc: "We provide genuine experiences that connect you with the heart and soul of Bhutanese culture.",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "We are committed to eco-friendly practices that protect Bhutan's pristine environment.",
              },
              {
                icon: "🤝",
                title: "Community",
                desc: "We support local communities and ensure tourism benefits reach the people of Bhutan.",
              },
              {
                icon: "✨",
                title: "Excellence",
                desc: "We deliver exceptional service and meticulously crafted journeys that exceed expectations.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 bg-[#0a1f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-[#e8572a] mb-8 rounded-full" />
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Travel with KST was born from a deep love for Bhutan and a desire to share its magic with the world. Founded by passionate locals who have spent their lives exploring every corner of this Himalayan kingdom, we bring intimate knowledge and genuine hospitality to every journey we create.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                From the ancient monasteries perched on cliff edges to the serene valleys dotted with prayer flags, we know the hidden gems that make Bhutan truly special. Our team of expert guides, cultural experts, and adventure specialists work together to craft experiences that go beyond typical tourism.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Whether you&apos;re seeking spiritual enlightenment, thrilling adventures, or peaceful retreats, we are here to make your Bhutanese dream a reality.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20">
                <img
                  src={`${basePath}/images/logo.jpeg`}
                  alt="KST Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e8572a] rounded-2xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-[#0d2514]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-[#e8572a] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Karma Tshering",
                role: "Founder & CEO",
                desc: "With over 15 years of experience in Bhutanese tourism, Karma leads our vision of authentic travel experiences.",
              },
              {
                name: "Sonam Dorji",
                role: "Head Guide",
                desc: "An expert in Bhutanese culture and history, Sonam ensures every journey is rich with local insights.",
              },
              {
                name: "Tashi Wangmo",
                role: "Operations Manager",
                desc: "Tashi coordinates every detail of your trip, ensuring seamless and memorable experiences.",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#e8572a] flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-[#e8572a] font-semibold mb-4">{member.role}</p>
                <p className="text-white/70 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0a1f0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Let us craft your perfect Bhutanese adventure. Contact us today to start planning your transformative experience.
          </p>
          <button className="group relative inline-flex items-center gap-2 bg-[#e8572a] hover:bg-[#d44a20] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95">
            <span>Contact Us</span>
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
        </div>
      </section>
    </div>
  );
}
