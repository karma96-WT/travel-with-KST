'use client'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/Pages/Destination')}
      className="relative z-10 text-white underline"
    >
      Back to destinations
    </button>
  )
}