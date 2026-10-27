"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/travel-with-KST" : "";

const journeys = [
  {
    id: "paro",
    name: "Paro, Unhurried",
    category: "Culture",
    duration: "5 days · 4 nights",
    days: 5,
    nights: 4,
    budget: 1080,
    route: "Paro · Thimphu",
    image: "culture.jpg",
    alt: "A Bhutanese monastery set among Himalayan mountains",
    label: "A FIRST TASTE OF BHUTAN",
    description:
      "Ease into Bhutan with valley walks, living traditions, and the unforgettable climb toward Tiger’s Nest.",
    outline: [
      "Day 1 · Arrive in Paro and settle into the valley",
      "Day 2 · Paro town, Rinpung Dzong, and local craft",
      "Day 3 · Hike to the Tiger’s Nest viewpoint",
      "Day 4 · Cross to Thimphu for markets and heritage",
      "Day 5 · A slow breakfast and departure",
    ],
  },
  {
    id: "western-valleys",
    name: "The Western Valleys",
    category: "Culture",
    duration: "7 days · 6 nights",
    days: 7,
    nights: 6,
    budget: 1620,
    route: "Paro · Thimphu · Punakha",
    image: "mountains.jpg",
    alt: "A broad green valley beneath the Himalayan range",
    label: "THE CLASSIC ROUTE",
    featured: true,
    description:
      "A well-paced introduction to Bhutan’s western valleys, with time for landmark dzongs and the landscapes between them.",
    outline: [
      "Day 1 · Arrive in Paro",
      "Day 2 · Paro valley and Tiger’s Nest hike",
      "Day 3 · Drive over Dochula Pass to Punakha",
      "Day 4 · Punakha Dzong and riverside paths",
      "Day 5 · Travel to Thimphu",
      "Day 6 · Thimphu culture, crafts, and a free afternoon",
      "Day 7 · Return to Paro and depart",
    ],
  },
  {
    id: "highland-trails",
    name: "Highland Quietude",
    category: "Nature & Trekking",
    duration: "10 days · 9 nights",
    days: 10,
    nights: 9,
    budget: 2430,
    route: "Paro · Punakha · Phobjikha",
    image: "forest.jpg",
    alt: "A forest path winding through the Bhutanese highlands",
    label: "FOR THE SLOW EXPLORER",
    description:
      "Trade a packed schedule for forest paths, open highland skies, and longer stays in the country’s quiet central valleys.",
    outline: [
      "Days 1–2 · Arrive and explore Paro",
      "Day 3 · The Tiger’s Nest trail",
      "Days 4–5 · Punakha valley and village walks",
      "Days 6–8 · Phobjikha valley and gentle hikes",
      "Day 9 · Return west with time to pause",
      "Day 10 · Departure from Paro",
    ],
  },
];

const filters = ["All journeys", "Culture", "Nature & Trekking"];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function PackagesClient() {
  const [activeFilter, setActiveFilter] = useState("All journeys");
  const [search, setSearch] = useState("");

  const visibleJourneys = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return journeys.filter((journey) => {
      const categoryMatches =
        activeFilter === "All journeys" || journey.category === activeFilter;
      const searchMatches =
        !needle ||
        `${journey.name} ${journey.route} ${journey.description}`
          .toLowerCase()
          .includes(needle);
      return categoryMatches && searchMatches;
    });
  }, [activeFilter, search]);

  return (
    <div className="bg-[#f8f7f2] text-[#203b33]">
      <section
        aria-labelledby="packages-heading"
        className="relative isolate flex min-h-screen items-end overflow-hidden bg-[#18332b] text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-[center_52%]"
          style={{ backgroundImage: `url('${basePath}/images/background.jpeg')` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,35,28,.86)_0%,rgba(13,35,28,.57)_45%,rgba(13,35,28,.12)_100%),linear-gradient(0deg,rgba(13,35,28,.76)_0%,transparent_65%)]"
        />

        <div className="mx-auto grid w-full max-w-[1440px] items-end gap-10 px-6 pb-14 pt-32 sm:px-10 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-16 lg:pb-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#f0d4af] backdrop-blur-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#e7aa76]" />
              Thoughtful journeys · Bhutan
            </div>
            <h1
              id="packages-heading"
              className="mt-7 max-w-[740px] font-[Georgia,serif] text-[clamp(3.4rem,8vw,7.5rem)] font-normal leading-[.92] tracking-[-.055em] text-[#fffdf6] [text-shadow:0_4px_26px_rgba(0,0,0,.26)]"
            >
              Find your
              <br />
              way into <span className="italic text-[#edc99f]">Bhutan.</span>
            </h1>
            <p className="mt-7 max-w-[510px] text-sm leading-7 text-white/85 sm:text-base">
              Small, considered itineraries made for the way you like to travel —
              with room for the unexpected moments in between.
            </p>
            <a
              href="#package-list"
              className="group mt-8 inline-flex min-h-12 items-center gap-5 rounded-md bg-[#e9c99b] px-5 text-xs font-bold text-[#20392d] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f4dbb7] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Explore the journeys
              <ArrowIcon className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <aside className="w-full max-w-[370px] rounded-2xl border border-white/35 bg-[#f8f7f2]/95 p-6 text-[#203b33] shadow-2xl backdrop-blur-md lg:mb-1 lg:justify-self-end">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#8a704e]">
                A good place to begin
              </span>
              <span className="rounded-full bg-[#e9eee5] px-2.5 py-1 text-[9px] font-semibold text-[#526c56]">
                7 DAYS
              </span>
            </div>
            <h2 className="mt-4 font-[Georgia,serif] text-[26px] leading-tight tracking-[-.025em]">
              The Western Valleys
            </h2>
            <p className="mt-2 flex items-center gap-2 text-xs text-[#6c786c]">
              <PinIcon /> Paro · Thimphu · Punakha
            </p>
            <div className="my-5 border-t border-[#dedfd4]" />
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[.13em] text-[#758070]">
                  Sample planning budget
                </p>
                <p className="mt-1 font-[Georgia,serif] text-[34px] leading-none tracking-[-.04em]">
                  $1,620<span className="ml-1 font-sans text-[11px] font-medium tracking-normal text-[#727b6d]">USD</span>
                </p>
                <p className="mt-1 text-[10px] text-[#788071]">per adult · double occupancy</p>
              </div>
              <span className="mb-1 text-right text-[10px] leading-4 text-[#697568]">A week to<br />settle in</span>
            </div>
            <p className="mt-4 text-[9px] leading-4 text-[#808779]">
              Example only; KST’s final rate depends on dates, room choice, and group size.
            </p>
          </aside>
        </div>

        <div className="absolute bottom-5 left-6 hidden items-center gap-3 text-[9px] font-medium uppercase tracking-[.16em] text-white/75 sm:flex lg:left-16">
          <span className="h-px w-8 bg-[#edc99f]" />
          Go a little further
        </div>
        <a
          href="#package-list"
          aria-label="Scroll to travel packages"
          className="absolute bottom-5 right-6 grid h-9 w-9 place-items-center rounded-full border border-white/50 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:right-16"
        >
          <span aria-hidden="true" className="-mt-1 text-xl">⌄</span>
        </a>
      </section>

      <main>
        <section id="package-list" className="mx-auto max-w-[1440px] scroll-mt-8 px-5 py-16 sm:px-9 sm:py-20 lg:px-16">
          <div className="mb-9 flex flex-col gap-7 border-b border-[#dedfd4] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[680px]">
              <p className="text-[9px] font-bold uppercase tracking-[.22em] text-[#987447]">Choose your kind of wonder</p>
              <h2 className="mt-3 font-[Georgia,serif] text-[clamp(2.2rem,4vw,3.7rem)] font-normal leading-[1.02] tracking-[-.04em]">
                Journeys with room to breathe.
              </h2>
              <p className="mt-4 max-w-[620px] text-sm leading-6 text-[#697568]">
                These sample routes are a starting point. Keep the moments you love,
                change the pace, and we can shape the rest around you.
              </p>
            </div>
            <label className="flex min-h-12 w-full max-w-[310px] items-center gap-3 rounded-md border border-[#d8ddd1] bg-white px-4 text-[#71806e] shadow-sm transition focus-within:border-[#6f896b] focus-within:ring-2 focus-within:ring-[#6f896b]/20">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4 4" />
              </svg>
              <span className="sr-only">Search journeys</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a place or experience"
                className="w-full bg-transparent text-xs text-[#203b33] outline-none placeholder:text-[#90988c]"
              />
            </label>
          </div>

          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" aria-label="Filter journeys">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-10 rounded-full border px-4 text-[11px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#41664d] ${
                    activeFilter === filter
                      ? "border-[#294b3c] bg-[#294b3c] text-white"
                      : "border-[#d8ddd1] bg-transparent text-[#667362] hover:border-[#8c9b84] hover:bg-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <p aria-live="polite" className="text-[10px] text-[#788275]">
              {visibleJourneys.length} {visibleJourneys.length === 1 ? "journey" : "journeys"}
            </p>
          </div>

          {visibleJourneys.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleJourneys.map((journey) => (
                <article
                  key={journey.id}
                  className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(32,59,51,.12)] ${
                    journey.featured
                      ? "border-[#aab89f] shadow-[0_12px_40px_rgba(32,59,51,.08)]"
                      : "border-[#e0e4d9] shadow-[0_6px_24px_rgba(32,59,51,.045)]"
                  }`}
                >
                  <div className="relative h-[235px] overflow-hidden bg-[#e6e9df]">
                    <Image
                      fill
                      src={`${basePath}/images/${journey.image}`}
                      alt={journey.alt}
                      loading="lazy"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#13291f]/65 via-transparent to-[#13291f]/10" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#173126]/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.12em] text-white backdrop-blur-sm">
                      {journey.label}
                    </span>
                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-medium text-white">
                      <PinIcon /> {journey.route}
                    </span>
                    {journey.featured && (
                      <span className="absolute right-4 top-4 rounded-full bg-[#edc99f] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.1em] text-[#284335]">
                        Most loved
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[.17em] text-[#987447]">{journey.category}</span>
                      <span className="text-[10px] font-medium text-[#778071]">{journey.duration}</span>
                    </div>
                    <h3 className="mt-3 font-[Georgia,serif] text-[25px] font-normal leading-tight tracking-[-.025em] text-[#263e32]">
                      {journey.name}
                    </h3>
                    <p className="mt-3 min-h-[72px] text-xs leading-6 text-[#6b7568]">{journey.description}</p>

                    <div className="mt-5 rounded-lg bg-[#f4f4ed] p-4">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[.12em] text-[#758070]">Sample budget · per adult</p>
                          <p className="mt-1 font-[Georgia,serif] text-[30px] leading-none tracking-[-.04em] text-[#203b33]">
                            ${journey.budget.toLocaleString("en-US")}
                            <span className="ml-1 font-sans text-[10px] font-medium tracking-normal text-[#72806f]">USD</span>
                          </p>
                        </div>
                        <p className="pb-0.5 text-right text-[9px] leading-4 text-[#7d8577]">{journey.days} days<br />{journey.nights} nights</p>
                      </div>
                      <p className="mt-2 text-[9px] leading-4 text-[#7c8478]">Example for two adults sharing; not a confirmed KST quote.</p>
                    </div>

                    <details className="group/details mt-5 border-t border-[#e5e7de] pt-4">
                      <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-3 text-[11px] font-semibold text-[#3e5c48] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#41664d] [&::-webkit-details-marker]:hidden">
                        See the day-by-day outline
                        <span aria-hidden="true" className="text-lg font-normal transition-transform group-open/details:rotate-45">+</span>
                      </summary>
                      <ol className="mt-2 grid gap-2 pb-2 text-[10px] leading-5 text-[#687566]">
                        {journey.outline.map((day) => <li key={day}>{day}</li>)}
                      </ol>
                    </details>
                    <a
                      href="#price-guide"
                      className="group/link mt-auto inline-flex min-h-11 items-center justify-between gap-3 border-t border-[#e5e7de] pt-4 text-[11px] font-semibold text-[#294b3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#41664d]"
                    >
                      What’s included in the estimate?
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[#cdd6c5] bg-white px-6 py-14 text-center">
              <h3 className="font-[Georgia,serif] text-2xl text-[#294b3c]">No journeys found</h3>
              <p className="mt-2 text-sm text-[#73806d]">Try another place or choose a different journey style.</p>
              <button
                type="button"
                onClick={() => { setActiveFilter("All journeys"); setSearch(""); }}
                className="mt-5 rounded-md bg-[#294b3c] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#3b604b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294b3c]"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>

        <section id="price-guide" className="border-y border-[#e4e5db] bg-[#eeefe6]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-9 sm:py-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-16">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#987447]">Good to know before you go</p>
              <h2 className="mt-3 max-w-[440px] font-[Georgia,serif] text-3xl font-normal leading-tight tracking-[-.03em] sm:text-4xl">
                Clear numbers.<br />No surprises.
              </h2>
              <p className="mt-4 max-w-[440px] text-xs leading-6 text-[#687466]">
                The figures above are sample planning budgets for an international adult sharing a room with one other traveller. They are design estimates, not KST’s confirmed prices.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#d9dfd2] bg-white p-5 sm:p-6">
                <span className="text-[9px] font-bold uppercase tracking-[.16em] text-[#758070]">Government fee · per night</span>
                <p className="mt-3 font-[Georgia,serif] text-4xl tracking-[-.04em] text-[#294b3c]">$100 <span className="font-sans text-[11px] font-medium tracking-normal text-[#71806e]">USD</span></p>
                <p className="mt-2 text-[10px] leading-5 text-[#6b7568]">Current adult SDF for most international visitors. The rate differs for Indian nationals and eligible visitors from Bangladesh; children have concessionary rates.</p>
              </div>
              <div className="rounded-xl border border-[#d9dfd2] bg-white p-5 sm:p-6">
                <span className="text-[9px] font-bold uppercase tracking-[.16em] text-[#758070]">Visa application · one time</span>
                <p className="mt-3 font-[Georgia,serif] text-4xl tracking-[-.04em] text-[#294b3c]">$40 <span className="font-sans text-[11px] font-medium tracking-normal text-[#71806e]">USD</span></p>
                <p className="mt-2 text-[10px] leading-5 text-[#6b7568]">The official one-off visa processing fee for visitors who need a visa. Permit and visa requirements vary by nationality.</p>
              </div>
            </div>
            <p className="text-[9px] leading-5 text-[#788071] lg:col-start-2">
              Sample package budgets assume the standard adult SDF and visa are included in the on-the-ground estimate. International flights, travel insurance, tips, personal spending, and upgrades are not included. Government rates can change; confirm your fees for your nationality and travel dates before booking.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-16 lg:px-16">
          <div className="flex flex-col justify-between gap-5 rounded-2xl bg-[#203b33] p-7 text-white sm:p-9 lg:flex-row lg:items-center lg:px-12">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#edc99f]">Made for your kind of travel</p>
              <h2 className="mt-3 font-[Georgia,serif] text-3xl font-normal tracking-[-.03em] sm:text-4xl">Your Bhutan, your pace.</h2>
              <p className="mt-3 max-w-[610px] text-xs leading-6 text-white/75">Treat these sample itineraries as a first sketch. Travel dates, room type, group size, and experiences shape the final price.</p>
            </div>
            <a href="#package-list" className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 rounded-md bg-[#e9c99b] px-5 text-xs font-bold text-[#20392d] transition hover:bg-[#f4dbb7] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-white">
              Find your starting point
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <p className="mt-5 text-center text-[9px] leading-5 text-[#7d8577]">
            Sample amounts are for design illustration only and must be confirmed by Travel with KST before publication or booking.
          </p>
        </section>
      </main>
    </div>
  );
}
