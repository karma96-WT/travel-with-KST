"use client";

import destinations from "./destinationData";

// Color mapping for each destination
const cardColors = {
  warmIvory: "bg-[#F5F1E8] dark:bg-[#2A2620] text-gray-900 dark:text-gray-100",
  softLavender: "bg-[#E8E4F3] dark:bg-[#252233] text-gray-900 dark:text-gray-100",
  mutedOlive: "bg-[#E8EBE0] dark:bg-[#252820] text-gray-900 dark:text-gray-100",
  dustyBlue: "bg-[#DCE4EB] dark:bg-[#1F2630] text-gray-900 dark:text-gray-100",
  warmSand: "bg-[#EDE8DC] dark:bg-[#282620] text-gray-900 dark:text-gray-100",
};

export default function RecentTrackCard({ index, activeIndex, onClick }) {
  const destination = destinations[index];
  const isActive = index === activeIndex;

  // Calculate position relative to active card
  const diff = index - activeIndex;

  // Determine card position and styling
  let positionClasses = "";
  let rotation = 0;
  let scale = 1;
  let opacity = 1;
  let zIndex = 10;
  let translateX = 0;
  let translateY = 0;

  if (isActive) {
    // Active card - center, front
    rotation = 0;
    scale = 1;
    opacity = 1;
    zIndex = 50;
    translateX = 0;
    translateY = 0;
  } else if (diff === 1 || diff === -4) {
    // Right near
    rotation = 5;
    scale = 0.90;
    opacity = 0.7;
    zIndex = 20;
    translateX = 40;
    translateY = 20;
  } else if (diff === 2 || diff === -3) {
    // Right far
    rotation = 9;
    scale = 0.82;
    opacity = 0.5;
    zIndex = 15;
    translateX = 80;
    translateY = 40;
  } else if (diff === -1 || diff === 4) {
    // Left near
    rotation = -5;
    scale = 0.90;
    opacity = 0.7;
    zIndex = 20;
    translateX = -40;
    translateY = 20;
  } else {
    // Left far
    rotation = -8;
    scale = 0.82;
    opacity = 0.5;
    zIndex = 15;
    translateX = -80;
    translateY = 40;
  }

  const colorClass = cardColors[destination.color] || cardColors.warmIvory;

  return (
    <button
      onClick={() => onClick(index)}
      className={`absolute top-0 left-1/2 -translate-x-1/2 w-[240px] md:w-[280px] lg:w-[320px] rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-700 ease-out ${colorClass} ${
        !isActive ? "hover:scale-[1.02] hover:opacity-90 cursor-pointer" : "cursor-default"
      }`}
      style={{
        transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
        opacity,
        zIndex,
      }}
      aria-label={`Select ${destination.location}`}
      tabIndex={isActive ? -1 : 0}
    >
      <div className="p-6 md:p-8 space-y-4">
        {/* Card Number */}
        <div className="text-xs md:text-sm opacity-50 font-light">
          {String(destination.id).padStart(2, "0")}
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg md:text-xl font-bold tracking-tight">
            {destination.location}
          </h3>
          <p className="text-xs md:text-sm opacity-70 tracking-wider uppercase mt-1">
            {destination.country}
          </p>
        </div>

        {/* Title */}
        <p className="text-2xl md:text-3xl font-bold leading-tight">
          {destination.title}
        </p>

        {/* Description */}
        <p className="text-xs md:text-sm opacity-80 leading-relaxed">
          {destination.description}
        </p>

        {/* Category */}
        <div className="pt-2">
          <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-60">
            {destination.category}
          </span>
        </div>

        {/* Progress indicator for active card */}
        {isActive && (
          <div className="pt-4 flex items-center justify-between border-t border-current/10">
            <span className="text-xs opacity-50">
              {String(activeIndex + 1).padStart(2, "0")} / {String(destinations.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2 text-xs opacity-70">
              Explore {destination.location.split(" ")[0]}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </button>
  );
}
