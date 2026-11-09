import { notFound } from 'next/navigation'
import { destinations, getDestination } from '@/app/data/destination'
import Link from 'next/link'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/travel-with-KST' : '')

// Needed for static export (GitHub Pages): builds one page per destination
export function generateStaticParams() {
  return destinations.map((d) => ({ id: String(d.id) }))
}

export const dynamicParams = false

export default async function DestinationDetails({ params }) {
  const { id } = await params
  const place = getDestination(id)

  if (!place) notFound()

  const facts = [
    { label: 'Location', value: place.location },
    { label: 'Duration', value: place.duration },
    { label: 'Best time', value: place.bestTime },
    { label: 'Altitude', value: place.altitude },
    { label: 'Difficulty', value: place.difficulty },
  ]

  return (
    <div
      style={{
        backgroundImage: `url('${BASE}/images/Destination-background-image.jpg')`,
      }}
      className="bg-cover bg-center w-full min-h-screen p-10"
    >
      <div className="max-w-4xl mx-auto mt-20">
        <Link href="/Pages/Destination" className="text-white">
          ← Back to Destinations
        </Link>

        <div className="bg-white rounded-lg overflow-hidden mt-4">
          <img
            src={`${BASE}${place.image}`}
            alt={place.title}
            className="w-full h-72 object-cover"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-black">{place.title}</h1>
            <p className="text-black mt-4">{place.description}</p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {facts.map((fact) => (
                <div key={fact.label} className="border border-gray-200 rounded-lg p-3">
                  <p className="text-sm text-gray-500">{fact.label}</p>
                  <p className="text-black font-semibold">{fact.value}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-black mt-6">Highlights</h2>
            <ul className="list-disc pl-6 mt-2 text-black">
              {place.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button className="text-white bg-blue-600 p-2 rounded-lg mt-8">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
