"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const cards = [
  {
    image: "/images/forest.jpg",
    category: "PRODUCT DESIGN",
    title: "Design Inspiration",
    author: "Alex Morgan",
    artwork: "linear-gradient(145deg, #310819, #170b31, #fa4c91)",
  },
  {
    image: "/images/culture.jpg",
    category: "PRODUCT DESIGN",
    title: "Design for Tomorrow",
    author: "Sarah Chen",
    artwork: "linear-gradient(150deg, #27051d, #b71f76, #ff9d6a)",
  },
  {
    image: "/images/mountains.jpg",
    category: "PRODUCT DESIGN",
    title: "Product for UI Designers",
    author: "Alan Turing",
    artwork: "linear-gradient(135deg, #ff574d, #8b9cf5, #f600cf)",
  },
  {
    image: "/images/valley.jpg",
    category: "PRODUCT DESIGN",
    title: "Product Vision 2023",
    author: "Alan John",
    artwork: "linear-gradient(125deg, #ffad9a, #7c12ed, #12045b, #c62cb5)",
  },
  {
    image: "/parotaktshang.png",
    category: "PRODUCT DESIGN",
    title: "Design For Impact",
    author: "Aman Kamel",
    artwork: "linear-gradient(145deg, #260516, #700d4e, #08065b, #f5429e)",
  },
  {
    image: "/images/culture.jpg",
    category: "PRODUCT DESIGN",
    title: "Creative Direction",
    author: "Mia Parker",
    artwork: "linear-gradient(140deg, #19051e, #790c54, #08004b, #ed348b)",
  },
  {
    image: "/images/forest.jpg",
    category: "PRODUCT DESIGN",
    title: "Design For Everyone",
    author: "Noah Williams",
    artwork: "linear-gradient(135deg, #3c0924, #7d105b, #070b62, #d82da1)",
  },
];

const COPIES = 5;
const CENTER_COPY = 2;
const INITIAL_CARD = 3;

const repeatedCards = Array.from({ length: COPIES }, (_, copy) =>
  cards.map((card, index) => ({
    ...card,
    logicalIndex: index,
    physicalIndex: copy * cards.length + index,
  })),
).flat();

const initialIndex = CENTER_COPY * cards.length + INITIAL_CARD;

export default function Card() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const activeRef = useRef(initialIndex);
  const resumeTimerRef = useRef(null);
  const repositioningRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [paused, setPaused] = useState(false);

  const scrollToCard = useCallback((index, behavior = "smooth") => {
    const track = trackRef.current;
    const card = cardRefs.current[index];

    if (!track || !card) return;

    const left = card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2;

    track.scrollTo({ left, behavior });
  }, []);

  // Reposition to an identical card in the center copy without skipping it.
  const normalizeIndex = useCallback(
    (index) => {
      const logicalIndex =
        ((index % cards.length) + cards.length) % cards.length;

      const centeredIndex = CENTER_COPY * cards.length + logicalIndex;

      if (index === centeredIndex) return centeredIndex;

      repositioningRef.current = true;
      activeRef.current = centeredIndex;
      setActiveIndex(centeredIndex);
      scrollToCard(centeredIndex, "instant");

      requestAnimationFrame(() => {
        repositioningRef.current = false;
      });

      return centeredIndex;
    },
    [scrollToCard],
  );

  const moveTo = useCallback(
    (requestedIndex, behavior = "smooth") => {
      const copyIndex = Math.floor(requestedIndex / cards.length);

      // Keep navigation inside the middle copies for endless scrolling.
      const index =
        copyIndex <= 1 || copyIndex >= 3
          ? normalizeIndex(requestedIndex)
          : requestedIndex;

      activeRef.current = index;
      setActiveIndex(index);
      scrollToCard(index, behavior);
    },
    [normalizeIndex, scrollToCard],
  );

  const updateActiveCard = useCallback(() => {
    const track = trackRef.current;

    if (!track || repositioningRef.current) return;

    const center = track.getBoundingClientRect().left + track.clientWidth / 2;

    let nearestIndex = activeRef.current;
    let nearestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    const copyIndex = Math.floor(nearestIndex / cards.length);

    if (copyIndex <= 1 || copyIndex >= 3) {
      normalizeIndex(nearestIndex);
      return;
    }

    activeRef.current = nearestIndex;
    setActiveIndex((current) =>
      current === nearestIndex ? current : nearestIndex,
    );
  }, [normalizeIndex]);

  // Center the starting card on first render.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      scrollToCard(activeRef.current, "instant");
      updateActiveCard();
    });

    return () => cancelAnimationFrame(frame);
  }, [scrollToCard, updateActiveCard]);

  // Auto-advance every five seconds.
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      moveTo(activeRef.current + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, moveTo]);

  // Detect the card closest to the center while swiping.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = null;

    const handleScroll = () => {
      if (repositioningRef.current) return;

      if (frame !== null) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        updateActiveCard();
        frame = null;
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [updateActiveCard]);

  const pauseAutoplay = useCallback(() => {
    setPaused(true);

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const resumeAutoplay = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    resumeTimerRef.current = setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, 1500);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const goToNext = useCallback(() => {
    moveTo(activeRef.current + 1);
  }, [moveTo]);

  return (
    <section className="relative w-full overflow-visible bg-transparent py-8 sm:py-10">
      <div
        ref={trackRef}
        className="
          flex h-[360px] w-full items-center
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory select-none
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
        style={{
          paddingLeft: "calc(50% - 120px)",
          paddingRight: "calc(50% - 120px)",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x pan-y",
        }}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onTouchStart={pauseAutoplay}
        onTouchEnd={resumeAutoplay}
        onTouchCancel={resumeAutoplay}
        onFocusCapture={pauseAutoplay}
        onBlurCapture={resumeAutoplay}
        aria-label="Featured product design cards"
      >
        {repeatedCards.map((card, index) => {
          const distance = Math.abs(index - activeIndex);
          const isActive = distance === 0;

          // Progressively shrink cards as they move away from the center.
          const scale =
            distance === 0
              ? 1
              : distance === 1
                ? 0.83
                : distance === 2
                  ? 0.73
                  : 0.64;

          const rotation = isActive ? 0 : index < activeIndex ? -1.5 : 1.5;

          const zIndex = 30 - distance;

          return (
            <article
              key={`${card.physicalIndex}-${card.title}`}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              onClick={() => moveTo(index)}
              className="
                relative isolate flex flex-none flex-col justify-end
                overflow-hidden rounded-[17px] snap-center cursor-pointer
                transition-[transform,box-shadow]
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                -ml-[88px] sm:-ml-[88px]
                h-[300px] w-[240px]
                sm:h-[360px] sm:w-[240px]
              "
              style={{
                zIndex,
                background: card.artwork,
                transform: `scale(${scale}) rotate(${rotation}deg)`,
                transformOrigin: "center center",
                boxShadow: isActive
                  ? "0 18px 45px rgba(32,10,50,0.12)"
                  : "none",
                willChange: "transform",
              }}
              aria-current={isActive ? "true" : undefined}
            >
              <div
                className="absolute inset-0 -z-10"
                style={{ background: card.artwork }}
              />

              <img
                src={card.image}
                alt={card.title}
                draggable={false}
                loading={distance <= 2 ? "eager" : "lazy"}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
                className="pointer-events-none absolute inset-0 -z-[1] h-full w-full object-cover"
              />

              <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,0,35,0.72) 0%, rgba(15,0,35,0.28) 35%, rgba(15,0,35,0.02) 75%)",
                }}
              />

              <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.08), transparent 45%, rgba(30,0,60,0.12))",
                }}
              />

              <div className="pointer-events-none relative z-10 p-5 text-white">
                <p className="mb-2 text-[9px] font-medium tracking-wide">
                  {card.category}
                </p>

                <h2 className="max-w-[190px] text-[18px] font-bold leading-[1.18] tracking-[-0.35px]">
                  {card.title}
                </h2>

                <p className="mt-2 text-[9px] font-normal opacity-90">
                  {card.author}
                </p>
              </div>

              {isActive && (
                <button
                  type="button"
                  aria-label="Go to next card"
                  onClick={(event) => {
                    event.stopPropagation();
                    goToNext();
                  }}
                  className="
                    absolute bottom-7 right-7 z-20
                    flex h-8 w-8 items-center justify-center
                    rounded-full text-white
                    transition-transform duration-300
                    hover:translate-x-1
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-white
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12H19M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
