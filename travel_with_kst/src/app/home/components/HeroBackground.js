"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroBackground({ destination }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setImageError(false);
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [destination.id]);

  // Fallback gradient colors based on destination theme
  const fallbackGradients = {
    paro: "from-amber-600 via-orange-700 to-amber-800",
    punakha: "from-purple-600 via-violet-700 to-purple-800",
    thimphu: "from-green-600 via-emerald-700 to-green-800",
    haa: "from-blue-600 via-sky-700 to-blue-800",
    phobjikha: "from-yellow-600 via-amber-700 to-yellow-800",
  };

  const fallbackGradient = fallbackGradients[destination.theme] || fallbackGradients.paro;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Image or Fallback */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isLoaded ? "opacity-100 scale-105" : "opacity-0 scale-100"
        }`}
      >
        {!imageError ? (
          <Image
            src={destination.image}
            alt={`${destination.location} landscape in ${destination.country}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-linear ${fallbackGradient} to-br`} />
        )}
      </div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-linear from-black/40 via-black/20 to-black/60 to-b" />
      <div className="absolute inset-0 bg-linear from-black/50 via-transparent to-black/30 to-r" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear from-black/60 via-black/20 to-transparent to-t" />
    </div>
  );
}
