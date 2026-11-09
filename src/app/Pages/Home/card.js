"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { destinations } from "@/app/data/destination";
import { journeys } from "@/app/packages/PackagesClient";
import { blogPosts } from "@/app/blog/page.js";

const BASE = process.env.NODE_ENV === "production" ? "/travel-with-KST" : "";

// Gradient shown as a backdrop/fallback behind each hero card, keyed by the
// page the content came from.
const artworkByType = {
  destination: "linear-gradient(145deg, #06261a, #17492f, #2e7d54)",
  package: "linear-gradient(140deg, #2a1608, #6d3a15, #d4691f)",
  story: "linear-gradient(135deg, #0b213f, #1c3f6e, #3a72b0)",
};

// One flat pool built from the existing exported data of the Destination,
// Packages and Blog pages, so the hero cards reuse real site content instead
// of the old placeholder "PRODUCT DESIGN" cards. No page component is copied.
const cardPool = [
  ...destinations.map((place) => ({
    id: `destination-${place.id}`,
    type: "destination",
    image: `${BASE}${place.image}`,
    category: "DESTINATION",
    title: place.title,
    author: place.location,
    artwork: artworkByType.destination,
    href: `/Pages/Destination/${place.id}`,
  })),
  ...journeys.map((journey) => ({
    id: `package-${journey.id}`,
    type: "package",
    image: `${BASE}/images/${journey.image}`,
    category: "JOURNEY",
    title: journey.name,
    author: `${journey.route} \u00b7 ${journey.days} days`,
    artwork: artworkByType.package,
    href: "/packages",
  })),
  ...blogPosts.map((post) => ({
    id: `story-${post.id}`,
    type: "story",
    image: post.image,
    category: post.category ? post.category.toUpperCase() : "STORY",
    title: post.title,
    author: post.date,
    artwork: artworkByType.story,
    href: "/blog",
  })),
];

// Number of cards in the carousel (kept the same as the original layout).
const CARD_COUNT = 7;

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// A random draw from the pool.
const pickCards = () => shuffle(cardPool).slice(0, CARD_COUNT);

export default function Card() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const activeRef = useRef(0);
  const router = useRouter();

  // Deterministic first draw keeps the server render and hydration identical;
  // a random shuffle is applied on mount and re-rolled every minute.
  const [cards, setCards] = useState(() => cardPool.slice(0, CARD_COUNT));
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = useCallback((index, behavior = "smooth") => {
    const track = trackRef.current;
    const card = cardRefs.current[index];

    if (!track || !card) return;

    const left = card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2;

    track.scrollTo({ left, behavior });
  }, []);

  const moveTo = useCallback(
    (requestedIndex, behavior = "smooth") => {
      const index = Math.max(0, Math.min(requestedIndex, CARD_COUNT - 1));

      activeRef.current = index;
      setActiveIndex(index);
      scrollToCard(index, behavior);
    },
    [scrollToCard],
  );

  const updateActiveCard = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

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

    activeRef.current = nearestIndex;
    setActiveIndex((current) =>
      current === nearestIndex ? current : nearestIndex,
    );
  }, []);

  // Center the starting card on first render.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      scrollToCard(activeRef.current, "instant");
      updateActiveCard();
    });

    return () => cancelAnimationFrame(frame);
  }, [scrollToCard, updateActiveCard]);

  // Update the active card as the user scrolls.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = null;

    const handleScroll = () => {
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

  // Re-roll the hero content once on mount (replacing the deterministic SSR
  // draw with a random one) and then every 60 seconds.
  useEffect(() => {
    let frame = null;

    const roll = () => {
      setCards(pickCards());
      activeRef.current = 0;
      setActiveIndex(0);
      if (frame !== null) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scrollToCard(0, "instant");
        updateActiveCard();
        frame = null;
      });
    };

    roll();
    const timer = setInterval(roll, 60000);
    return () => {
      clearInterval(timer);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [scrollToCard, updateActiveCard]);

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
        aria-label="Featured destinations, journeys and stories"
      >
        {cards.map((card, index) => {
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
              key={card.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              onClick={() => router.push(card.href)}
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

              {isActive && index < cards.length - 1 && (
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
