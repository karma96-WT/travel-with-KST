"use client";
import React, { useState } from "react";
import Link from "next/link";
import { destinations as places } from "@/app/data/destination";

const PER_PAGE = 2;
const BASE = process.env.NODE_ENV === "production" ? "/travel-with-KST" : "";

// Reused on the Destination page grid and the homepage preview.
export function DestinationCard({ place }) {
  return (
    <Link
      href={`/Pages/Destination/${place.id}`}
      className="block border-2 border-white rounded-lg w-full bg-white overflow-hidden"
    >
      <img
        src={`${BASE}${place.image}`}
        alt={place.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="font-bold text-black p-1 text-xl">{place.title}</p>
      <p className="text-black p-1">{place.text}</p>
      <div className="flex justify-center">
        <span className="text-white p-1 m-1 bg-blue-600 rounded-lg">
          Read More
        </span>
      </div>
    </Link>
  );
}

function Destination() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(places.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = places.slice(start, start + PER_PAGE);

  const goPrev = () => setPage((p) => Math.max(p - 1, 0));
  const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  const arrowClass =
    "shrink-0 w-10 h-10 rounded-full bg-white text-blue-600 text-2xl font-bold flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <div
      style={{
        backgroundImage: `url('${BASE}/images/Destination-background-image.jpg')`,
      }}
      className="flex justify-around p-10 bg-cover bg-center w-full min-h-screen"
    >
      <div className="w-[45%]">
        <h1 className="text-white">EXPLORE</h1>
        <h1 className="text-white">DREAM</h1>
        <h1 className="text-transparent [text-stroke:2px_#ffffff] [-webkit-text-stroke:2px_#ffffff] tracking-wider uppercase">
          DESTINATION
        </h1>
        <p className="text-white">
          Journey beyond the ordinary into the pristine heart of the Himalayas
          with KST. From ancient fortress dzongs to legendary mountain passes,
          discover tailored trekking routes crafted to awaken your spirit of
          adventure.
        </p>
      </div>

      <div className="w-[55%] p-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous destinations"
            className={arrowClass}
          >
            &#8249;
          </button>

          <div className="flex gap-4 flex-1">
            {visible.map((place) => (
              <div key={place.id} className="w-[50%]">
                <DestinationCard place={place} />
              </div>
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next destinations"
            className={arrowClass}
          >
            &#8250;
          </button>
        </div>

        <p className="text-white text-sm">
          {page + 1} / {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Destination;
