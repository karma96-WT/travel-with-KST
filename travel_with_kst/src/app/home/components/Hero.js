"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroIndicator from "./HeroIndicator";
import RecentTrack from "./RecentTrack";

export default function Hero({
  activeDestination,
  activeIndex,
  totalDestinations,
  onNavigate,
  onCardSelect,
}) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with overlays */}
      <HeroBackground destination={activeDestination} />

      {/* Hero Content - Bottom Left */}
      <div className="absolute bottom-12 md:bottom-20 lg:bottom-24 left-6 md:left-12 lg:left-16 max-w-xl lg:max-w-2xl">
        <HeroContent destination={activeDestination} />
      </div>

      {/* Indicator - Top Right */}
      <HeroIndicator activeIndex={activeIndex} total={totalDestinations} />

      {/* Recent Track - Bottom Right */}
      <div className="absolute bottom-12 md:bottom-20 lg:bottom-24 right-6 md:right-12 lg:right-16">
        <RecentTrack
          activeIndex={activeIndex}
          onNavigate={onNavigate}
          onCardSelect={onCardSelect}
        />
      </div>
    </section>
  );
}
