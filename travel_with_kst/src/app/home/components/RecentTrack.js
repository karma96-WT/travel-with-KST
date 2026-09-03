"use client";

import destinations from "./destinationData";
import RecentTrackCard from "./RecentTrackCard";
import RecentTrackControls from "./RecentTrackControls";

export default function RecentTrack({ activeIndex, onNavigate, onCardSelect }) {
  const handlePrevious = () => {
    onNavigate("prev");
  };

  const handleNext = () => {
    onNavigate("next");
  };

  const handleDotClick = (index) => {
    onCardSelect(index);
  };

  return (
    <div className="flex flex-col items-center gap-6 md:gap-8">
      {/* Label */}
      <h2 className="text-white text-xs md:text-sm tracking-[0.25em] uppercase opacity-80">
        Recent Track
      </h2>

      {/* Card Deck */}
      <div className="relative w-[280px] md:w-[320px] lg:w-[360px] h-[380px] md:h-[420px] lg:h-[460px]">
        {destinations.map((_, index) => (
          <RecentTrackCard
            key={index}
            index={index}
            activeIndex={activeIndex}
            onClick={onCardSelect}
          />
        ))}
      </div>

      {/* Controls */}
      <RecentTrackControls
        activeIndex={activeIndex}
        total={destinations.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onDotClick={handleDotClick}
      />
    </div>
  );
}
