"use client";

import { useState, useEffect, useCallback } from "react";
import Hero from "./components/Hero";
import destinations from "./components/destinationData";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDestination = destinations[activeIndex];

  const handleNavigate = useCallback((direction) => {
    setActiveIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % destinations.length;
      } else {
        return prev === 0 ? destinations.length - 1 : prev - 1;
      }
    });
  }, []);

  const handleCardSelect = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % destinations.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - next
        handleNavigate("next");
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - previous
        handleNavigate("prev");
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleNavigate("prev");
      } else if (e.key === "ArrowRight") {
        handleNavigate("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNavigate]);

  return (
    <Hero
      activeDestination={activeDestination}
      activeIndex={activeIndex}
      totalDestinations={destinations.length}
      onNavigate={handleNavigate}
      onCardSelect={handleCardSelect}
    />
  );
}
