"use client";

export default function HeroIndicator({ activeIndex, total }) {
  const currentNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <div className="absolute top-24 md:top-28 right-6 md:right-12 lg:right-16 z-20">
      <div className="text-white font-light text-sm md:text-base tracking-wider">
        <span className="font-medium">{currentNumber}</span>
        <span className="mx-2 opacity-50">/</span>
        <span className="opacity-70">{totalNumber}</span>
      </div>
    </div>
  );
}
