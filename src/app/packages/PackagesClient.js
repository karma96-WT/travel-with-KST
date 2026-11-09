"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const publicImageBase = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/travel-with-KST" : "");

/* --- Data --- */
const journeys = [
  {
    id: "paro",
    name: "Paro, Unhurried",
    category: "Culture",
    days: 5,
    nights: 4,
    budget: 1080,
    route: "Paro, Thimphu",
    image: "culture.jpg",
    alt: "A Bhutanese monastery set among Himalayan mountains",
    description:
      "Ease into Bhutan with valley walks, living traditions, and the unforgettable climb toward Tiger’s Nest.",
    outline: [
      ["Day 1", "Arrive in Paro and settle into the valley"],
      ["Day 2", "Paro town, Rinpung Dzong, and local craft"],
      ["Day 3", "Hike to the Tiger’s Nest viewpoint"],
      ["Day 4", "Cross to Thimphu for markets and heritage"],
      ["Day 5", "A slow breakfast and departure"],
    ],
  },
  {
    id: "western-valleys",
    name: "The Western Valleys",
    category: "Culture",
    days: 7,
    nights: 6,
    budget: 1620,
    route: "Paro, Thimphu, Punakha",
    image: "mountains.jpg",
    alt: "A broad green valley beneath the Himalayan range",
    featured: true,
    description:
      "A well-paced introduction to Bhutan’s western valleys, with time for landmark dzongs and the landscapes between them.",
    outline: [
      ["Day 1", "Arrive in Paro"],
      ["Day 2", "Paro valley and Tiger’s Nest hike"],
      ["Day 3", "Drive over Dochula Pass to Punakha"],
      ["Day 4", "Punakha Dzong and riverside paths"],
      ["Day 5", "Travel to Thimphu"],
      ["Day 6", "Thimphu culture, crafts, and a free afternoon"],
      ["Day 7", "Return to Paro and depart"],
    ],
  },
  {
    id: "highland-trails",
    name: "Highland Quietude",
    category: "Nature & Trekking",
    days: 10,
    nights: 9,
    budget: 2430,
    route: "Paro, Punakha, Phobjikha",
    image: "forest.jpg",
    alt: "A forest path winding through the Bhutanese highlands",
    description:
      "Trade a packed schedule for forest paths, open highland skies, and longer stays in the country’s quiet central valleys.",
    outline: [
      ["Days 1–2", "Arrive and explore Paro"],
      ["Day 3", "The Tiger’s Nest trail"],
      ["Days 4–5", "Punakha valley and village walks"],
      ["Days 6–8", "Phobjikha valley and gentle hikes"],
      ["Day 9", "Return west with time to pause"],
      ["Day 10", "Departure from Paro"],
    ],
  },
];

const filters = ["All journeys", "Culture", "Nature & Trekking"];

const included = [
  "Accommodation and daily meals",
  "Licensed Bhutanese guide and driver",
  "Standard adult SDF and visa fee",
  "Entry fees to dzongs and monuments",
];
const notIncluded = [
  "International flights",
  "Travel insurance",
  "Tips and personal spending",
  "Room or experience upgrades",
];

/* --- Icons --- */
const ClockIcon = () => (
  <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5l3 2" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-4 h-4 mr-1.5 shrink-0 text-[#b88a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" strokeWidth={1.6} />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#244235]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

const DashIcon = () => (
  <svg className="w-5 h-5 mt-0.5 shrink-0 text-[#b88a44]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeWidth={2} d="M6 12h12" />
  </svg>
);

/* --- Journey card --- */
function JourneyCard({ journey }) {
  const perDay = Math.round(journey.budget / journey.days);

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-300 flex flex-col border border-gray-100">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          fill
          src={`${publicImageBase}/images/${journey.image}`}
          alt={journey.alt}
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover hover:scale-105 transition-transform duration-500 motion-reduce:transition-none"
        />
        {journey.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-[#b3562d] px-3 py-1.5 text-xs font-bold text-white shadow-md">
            Most loved
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-gray-100 text-gray-600 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
            {journey.category}
          </span>
          <div className="flex items-center text-xs text-gray-400">
            <ClockIcon />
            {journey.days} days, {journey.nights} nights
          </div>
        </div>

        <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-2 leading-snug">{journey.name}</h3>

        <p className="flex items-center text-sm text-gray-500 mb-3">
          <PinIcon />
          {journey.route}
        </p>

        <p className="text-gray-600 text-sm leading-6 mb-5">{journey.description}</p>

        {/* Price */}
        <div className="mb-4 flex items-end justify-between gap-3 rounded-xl bg-[#f6f3ec] px-5 py-4">
          <div>
            <p className="text-xs text-gray-500">Sample budget per adult</p>
            <p className="mt-1 font-display text-3xl font-bold leading-none text-[#244235]">
              ${journey.budget.toLocaleString("en-US")}
              <span className="ml-1.5 font-sans text-xs font-medium text-gray-500">USD</span>
            </p>
          </div>
          <p className="text-right text-xs leading-5 text-gray-500">
            about ${perDay.toLocaleString("en-US")}
            <br />
            per day
          </p>
        </div>

        {/* Outline */}
        <details className="group/details mb-6 border-t border-gray-100 pt-3">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#244235] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244235] [&::-webkit-details-marker]:hidden">
            See the day-by-day outline
            <span aria-hidden="true" className="text-xl font-normal transition-transform group-open/details:rotate-45 motion-reduce:transition-none">+</span>
          </summary>
          <ol className="mt-3 ml-1 space-y-3 border-l border-gray-200 pl-5">
            {journey.outline.map(([when, what]) => (
              <li key={when} className="relative">
                <span aria-hidden="true" className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-[#d97c52]" />
                <p className="text-xs font-bold text-[#b88a44]">{when}</p>
                <p className="text-sm leading-6 text-gray-600">{what}</p>
              </li>
            ))}
          </ol>
        </details>

        <Link href="/contact" className="text-[#b88a44] text-sm font-semibold flex items-center group mt-auto w-fit">
          Plan this journey <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}

/* --- Page --- */
export default function PackagesClient() {
  const [activeFilter, setActiveFilter] = useState("All journeys");
  const [search, setSearch] = useState("");

  const visibleJourneys = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return journeys.filter((j) => {
      const categoryMatches = activeFilter === "All journeys" || j.category === activeFilter;
      const searchMatches = !needle || `${j.name} ${j.route} ${j.description}`.toLowerCase().includes(needle);
      return categoryMatches && searchMatches;
    });
  }, [activeFilter, search]);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* ───────── HERO (same structure as Blog) ───────── */}
      <section
        aria-labelledby="packages-heading"
        className="relative isolate mb-[26px] flex min-h-screen w-full items-center overflow-hidden bg-[#244235] px-6 pb-[75px] pt-10 text-[#fffdf5] min-[441px]:px-7 min-[761px]:px-[clamp(28px,6vw,110px)] min-[761px]:pb-[84px] min-[761px]:pt-[58px]"
      >
        <figure className="absolute inset-0 -z-20 m-0">
          <div className="absolute inset-0">
            <Image
              src={`${publicImageBase}/images/package-background.jpg`}
              alt="Prayer flags and mountains in the Bhutanese Himalayas"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[65%_center] min-[761px]:object-[65%_62%]"
            />
          </div>

          <figcaption className="absolute bottom-[23px] left-6 right-6 z-10 flex items-center gap-[22px] text-[10px] leading-normal text-white min-[441px]:left-7 min-[441px]:right-7 min-[761px]:bottom-[25px] min-[761px]:left-auto min-[761px]:right-[clamp(28px,6vw,110px)]">
            <span className="inline-flex items-center gap-[7px]">
              <span className="h-[5px] w-[5px] rounded-full bg-[#edcfa4]" aria-hidden="true" />
              Journeys shaped around you
            </span>
          </figcaption>
        </figure>

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 [background-image:linear-gradient(90deg,#10291ce8,#10291ca6_65%,#10291c70),linear-gradient(0deg,#10291c80,transparent_35%)] min-[761px]:[background-image:linear-gradient(90deg,rgba(12,32,25,.88)_0%,rgba(12,32,25,.69)_33%,rgba(12,32,25,.19)_65%,rgba(12,32,25,.05)_100%),linear-gradient(0deg,rgba(12,32,25,.5),transparent_28%)]"
        />

        <div className="max-w-[470px] font-sans min-[761px]:max-w-[620px]">
          <h1
            id="packages-heading"
            className="mb-4 mt-6 font-[Georgia,'Times_New_Roman',serif] text-[clamp(29px,8.6vw,36px)] font-bold leading-[1.15] tracking-[.015em] text-[#fffdf5] [text-shadow:0_4px_24px_rgba(0,0,0,0.6)] min-[441px]:text-[clamp(32px,5.8vw,44px)] min-[441px]:tracking-[.025em] min-[761px]:text-[clamp(36px,4.25vw,60px)]"
          >
            FIND YOUR WAY
            <br />
            <span className="font-semibold text-[#f1d7b2]">INTO BHUTAN</span>
          </h1>

          <a
            href="#package-list"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#d97c52] to-[#b3562d] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:from-[#e38960] hover:to-[#c45f34] hover:brightness-105 hover:shadow-[0_10px_20px_rgba(179,86,45,0.3)] active:translate-y-0 active:shadow-[0_4px_10px_rgba(179,86,45,0.2)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#d97c52] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-8 sm:py-3 sm:text-base"
          >
            Explore journeys
          </a>
        </div>
      </section>

      {/* ───────── MAIN ───────── */}
      <main
        id="package-list"
        className="mx-auto w-full max-w-[1920px] px-6 pb-24 pt-8 scroll-mt-4 min-[441px]:px-7 min-[761px]:px-[clamp(28px,6vw,110px)]">        {/* Section header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="mb-2 text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">Our Journeys</h2>
            <p className="max-w-[560px] text-gray-600 text-sm md:text-base">
              Each route is a starting point. Change the pace, add a festival, or stay longer where you feel at home.
            </p>
          </div>

          <label className="flex min-h-12 w-full max-w-[340px] items-center gap-3 rounded-full border border-gray-200 bg-white px-5 text-gray-400 transition focus-within:border-[#244235] focus-within:ring-4 focus-within:ring-[#244235]/10">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 4 4" />
            </svg>
            <span className="sr-only">Search journeys</span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search a place or experience"
              className="w-full bg-transparent text-sm text-[#1a1a1a] outline-none placeholder:text-gray-400"
            />
          </label>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-y border-gray-100 py-4">
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter journeys">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`min-h-10 rounded-full border px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244235] ${
                  activeFilter === filter
                    ? "border-[#244235] bg-[#244235] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#244235] hover:text-[#244235]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <p aria-live="polite" className="text-sm text-gray-500">
            Showing {visibleJourneys.length} of {journeys.length} journeys
          </p>
        </div>

        {/* Grid */}
        {visibleJourneys.length > 0 ? (
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleJourneys.map((journey) => (
              <JourneyCard key={journey.id} journey={journey} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center">
            <h3 className="font-display text-2xl font-bold text-[#1a1a1a]">No journeys match your search</h3>
            <p className="mx-auto mt-2 max-w-[40ch] text-sm text-gray-600">
              Try a different place, or clear the filters to see every journey.
            </p>
            <button
              type="button"
              onClick={() => { setActiveFilter("All journeys"); setSearch(""); }}
              className="mt-6 min-h-11 rounded-full bg-[#244235] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1a3329] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244235]"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* ───────── PRICE GUIDE ───────── */}
        <section id="price-guide" className="mt-24 scroll-mt-4">
          <h2 className="mb-2 text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">What the estimate covers</h2>
          <p className="mb-10 max-w-[620px] text-gray-600 text-sm md:text-base">
            Budgets are samples for one adult sharing a room with another traveller. Your final price depends on dates, room choice, and group size.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-100 bg-[#f6f3ec] p-6">
              <p className="text-xs font-semibold text-gray-500">Government fee, per night</p>
              <p className="mt-3 font-display text-4xl font-bold text-[#244235]">
                $100<span className="ml-1.5 font-sans text-xs font-medium text-gray-500">USD</span>
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Adult SDF for most international visitors. Indian nationals and eligible visitors from Bangladesh pay a different rate; children are concessionary.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#f6f3ec] p-6">
              <p className="text-xs font-semibold text-gray-500">Visa application, one time</p>
              <p className="mt-3 font-display text-4xl font-bold text-[#244235]">
                $40<span className="ml-1.5 font-sans text-xs font-medium text-gray-500">USD</span>
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Official processing fee for visitors who need a visa. Requirements vary by nationality.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
              <h3 className="font-display text-lg font-bold text-[#1a1a1a]">Included</h3>
              <ul className="mt-4 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-gray-600">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
              <h3 className="font-display text-lg font-bold text-[#1a1a1a]">Not included</h3>
              <ul className="mt-4 space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-gray-600">
                    <DashIcon /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="mt-24 flex flex-col gap-8 rounded-3xl bg-[#244235] p-8 text-[#fffdf5] sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-[560px]">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Your Bhutan, at your pace</h2>
            <p className="mt-3 text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              Tell us when you’d like to travel and what you hope to see. We’ll reply with a plan and a clear price.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#d97c52] to-[#b3562d] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:from-[#e38960] hover:to-[#c45f34] hover:shadow-[0_10px_20px_rgba(179,86,45,0.3)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#d97c52] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:text-base"
          >
            Start planning
          </Link>
        </section>
      </main>
    </div>
  );
}
