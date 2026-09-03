"use client";

export default function RecentTrackControls({ activeIndex, total, onPrevious, onNext, onDotClick }) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        aria-label="Previous destination"
        className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-110"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Progress Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            aria-label={`Go to destination ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-2 h-2 md:w-2.5 md:h-2.5 bg-white"
                : "w-1.5 h-1.5 md:w-2 md:h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        aria-label="Next destination"
        className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-110"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
