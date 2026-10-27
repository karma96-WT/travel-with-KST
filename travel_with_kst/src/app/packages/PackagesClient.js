"use client";

import Image from "next/image";
import { useState } from "react";

/* ------------------------------------------------------------------
   Package data — edit freely. Put images in /public/images/packages/
   Each image box has a gradient fallback so the layout holds without photos.
------------------------------------------------------------------- */
const PACKAGES = [
  {
    id: "dragon-kingdom",
    days: 10,
    nights: 9,
    region: "Paro, Thimphu & Punakha",
    season: "Spring",
    type: "Cultural",
    title: "The Dragon Kingdom Odyssey",
    description:
      "An unhurried journey through Bhutan's sacred heart: ancient dzongs, prayer-flag ridges and quiet valleys, with time to sit with monks and local families along the way.",
    highlights: [
      "Guided ascent to Tiger's Nest monastery at first light",
      "Sunlit pass between Dochula's 108 chortens",
      "Festival-season stays in family-run farmhouses",
    ],
    price: 3850,
    badge: "Tiger's Nest, Paro",
    image: "/images/packages/dragon-kingdom.jpg",
  },
  {
    id: "sacred-valleys",
    days: 7,
    nights: 6,
    region: "Gangtey & Phobjikha",
    season: "Winter",
    type: "Retreat",
    title: "Sacred Valleys & Silent Hermitages",
    description:
      "Designed for contemplation, silence and nature. Walk through pine-scented ridges and glacial valleys, with morning meditation beside black-necked crane habitat.",
    highlights: [
      "Guided walks through Phobjikha's glacial valley rim",
      "Private meditation session at a hillside monastery",
      "Crane-watching with a local naturalist",
    ],
    price: 2750,
    badge: "Black-necked cranes, Phobjikha",
    image: "/images/packages/sacred-valleys.jpg",
  },
  {
    id: "druk-path",
    days: 11,
    nights: 10,
    region: "Paro to Thimphu",
    season: "Autumn",
    type: "Trek",
    title: "Druk Path Celestial Trek",
    description:
      "Traverse the ancient footpath connecting Paro and Thimphu, crossing high alpine lakes and rhododendron forests, supported by our attentive trek crew.",
    highlights: [
      "Camp by the sacred lakes of Jimilang Tsho",
      "Dedicated expedition chef, pack yaks and warm gear",
      "Rest-day recovery night in a village guesthouse",
    ],
    price: 3420,
    badge: "Jimilang Tsho, 4,000 m",
    image: "/images/packages/druk-path.jpg",
  },
];

const SEASONS = ["All seasons", "Spring", "Summer", "Autumn", "Winter"];
const LENGTHS = ["Any length", "Up to 7 days", "8–10 days", "11+ days"];
const TYPES = ["Cultural & Private", "Cultural", "Retreat", "Trek"];

const fitsLength = (days, length) => {
  if (length === "Any length") return true;
  if (length === "Up to 7 days") return days <= 7;
  if (length === "8–10 days") return days >= 8 && days <= 10;
  return days >= 11;
};

/* ------------------------------------------------------------------
   Small pieces
------------------------------------------------------------------- */
function Select({ label, value, onChange, options }) {
  return (
    <label className="flex items-center gap-2 text-[11px] text-stone-500">
      <span className="uppercase tracking-wider">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer rounded-sm border-0 bg-transparent py-1 pr-5 text-xs font-medium text-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function PackageRow({ pkg, flip }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      {/* Image */}
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-md bg-gradient-to-br from-emerald-900 via-stone-500 to-amber-600 shadow-[0_18px_40px_-18px_rgba(40,30,10,0.45)] ${
          flip ? "md:order-2" : ""
        }`}
      >
        <div
          role="img"
          aria-label={pkg.badge}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <span className="absolute left-3 top-3 rounded-sm bg-white/85 px-2 py-1 text-[10px] font-medium text-stone-700 backdrop-blur">
          {pkg.badge}
        </span>
      </div>

      {/* Text */}
      <div className={flip ? "md:order-1" : ""}>
        <p className="text-[11px] text-stone-500">
          <span className="font-semibold text-stone-700">
            {pkg.days} Days / {pkg.nights} Nights
          </span>
          <span className="mx-2 text-stone-300">|</span>
          {pkg.region}
        </p>

        <h3 className="mt-3 font-[Cormorant_Garamond,Georgia,serif] text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl">
          {pkg.title}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-600">
          {pkg.description}
        </p>

        <ul className="mt-5 max-w-md space-y-2 border-t border-stone-200 pt-4">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-xs text-stone-600">
              <span
                aria-hidden="true"
                className="mt-[7px] h-1 w-1 flex-none rounded-full bg-amber-600"
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex max-w-md items-end justify-between gap-4 border-t border-stone-200 pt-4">
          <div>
            <p className="font-[Cormorant_Garamond,Georgia,serif] text-3xl font-semibold text-red-900">
              ${pkg.price.toLocaleString()}
            </p>
            <p className="text-[10px] text-stone-400">
              per person, twin-share, all-inclusive
            </p>
          </div>

          <a
            href={`/packages/${pkg.id}`}
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
          >
            View itinerary
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------
   Page section
------------------------------------------------------------------- */
export default function PackagesPage() {
  const [season, setSeason] = useState("All seasons");
  const [length, setLength] = useState("Any length");
  const [type, setType] = useState("Cultural & Private");

  const visible = PACKAGES.filter(
    (p) =>
      (season === "All seasons" || p.season === season) &&
      fitsLength(p.days, length) &&
      (type === "Cultural & Private" || p.type === type)
  );

  return (
    <main className="bg-[#fbf8f1] text-stone-800">
      {/* Header */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-700 to-sky-700">
        {/* Decorative background photo */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src="/travel-with-KST/images/package.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent"
        />

        <div className="max-w-none px-4 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12">
          <h1 className="font-[Playfair_Display,Georgia,'Times_New_Roman',serif] text-[clamp(3rem,11vw,7.5rem)] font-normal uppercase leading-[0.92] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.3)]">
            <span className="block">Journey's</span>
            <span className="block">through the </span>
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: "clamp(1px, 0.18vw, 2px) #fff" }}
            >
              Last Sharing - La
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
            Get your finest packages for a journey !
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="mx-auto max-w-5xl border-y border-stone-200 px-6 py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <Select label="Season" value={season} onChange={setSeason} options={SEASONS} />
          <Select label="Duration" value={length} onChange={setLength} options={LENGTHS} />
          <Select label="Type" value={type} onChange={setType} options={TYPES} />
        </div>
      </div>

      {/* Packages */}
      <section className="mx-auto max-w-5xl space-y-16 px-6 py-14 sm:space-y-20 sm:py-20">
        {visible.length > 0 ? (
          visible.map((pkg, i) => (
            <PackageRow key={pkg.id} pkg={pkg} flip={i % 2 === 1} />
          ))
        ) : (
          <p className="py-16 text-center text-sm text-stone-500">
            No journeys match these filters. Try a different season, duration
            or type.
          </p>
        )}
      </section>
    </main>
  );
}