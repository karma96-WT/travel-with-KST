// import BlogPage from "./blog";

// export default function Page() {
//   return <BlogPage />;
// }

import Link from 'next/link';
import Image from 'next/image';

const publicImageBase = process.env.NODE_ENV === 'production' ? '/travel-with-KST' : '';

// --- Mock Data ---
const blogPosts = [
  {
    id: 1,
    category: 'ADVENTURE',
    date: 'Aug 12, 2026',
    title: 'Hiking to Tiger’s Nest: A Journey of a Lifetime',
    excerpt: 'Experience the spiritual and natural beauty of Paro Taktsang, one of the most iconic treks in the world.',
    image: 'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=400%2Cheight=265%2Cdpr=2/tour_img/ed099352c0a761caa45d6c64b737f14aab4a33f35025b08a19f2198ae8acb472.png',
    link: '#'
  },
  {
    id: 2,
    category: 'CULTURE',
    date: 'Aug 5, 2026',
    title: 'Exploring Punakha Dzong: History, Beauty and Beyond',
    excerpt: 'Discover the rich history, stunning architecture and serene landscapes of Bhutan’s most beautiful dzong.',
    image: 'https://i0.wp.com/lifetoreset.wordpress.com/wp-content/uploads/2017/12/dscf6738.jpg?fit=1200%2C900&ssl=1',
    link: '#'
  },
  {
    id: 3,
    category: 'TRAVEL TIPS',
    date: 'Jul 28, 2026',
    title: 'A Complete Travel Guide to Bumthang',
    excerpt: 'From ancient temples to peaceful valleys, find out why Bumthang is the cultural heartland of Bhutan.',
    image: 'https://www.swantour.com/blogs/wp-content/uploads/2019/10/bhutan-4.jpg',
    link: '#'
  },
  {
    id: 4,
    category: 'FESTIVALS',
    date: 'Jul 18, 2026',
    title: 'Thimphu Tshechu: A Celebration of Bhutanese Culture',
    excerpt: 'A guide to the most vibrant and meaningful festivals that showcase Bhutan’s unique culture and traditions.',
    image: 'https://cdn.drukasia.com/content/images/media/7-day-thimphu-tshechu-festival-experience2.jpg',
    link: '#'
  },
  {
    id: 5,
    category: 'Thimphu Dromchoe',
    date: 'Jul 10, 2026',
    title: 'Bhutanese Cuisine: A Culinary Journey Through the Land of the Thunder Dragon',
    excerpt: 'From Ema Datshi to traditional butter tea, explore the unique flavors and ingredients of Bhutan.',
    image: 'https://www.heavenlybhutan.com/wp-content/uploads/2019/09/Thimphu-Dromche-1024x640.jpg',
    link: '#'
  },
  {
    id: 6,
    category: 'SUSTAINABLE TRAVEL',
    date: 'Jul 2, 2026',
    title: 'Sustainable Travel in Bhutan: How You Can Make a Difference',
    excerpt: 'Practical tips for responsible travel and supporting local communities while exploring the Land of the Thunder Dragon.',
    image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
];

// --- SVG Icons ---
const CalendarIcon = () => (
  <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);


// --- Main Page Component ---
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <section
        aria-labelledby="blog-heading"
        className="relative isolate mb-[26px] flex min-h-screen w-full items-center overflow-hidden bg-[#244235] px-6 pb-[75px] pt-10 text-[#fffdf5] min-[441px]:px-7 min-[761px]:px-[clamp(28px,6vw,110px)] min-[761px]:pb-[84px] min-[761px]:pt-[58px]"
      >
        {/* Background photo */}
        <figure className="absolute inset-0 -z-20 m-0">
          <div className="absolute inset-0">
            <Image
              src={`${publicImageBase}/images/background.jpeg`}
              alt="A golden-roofed Bhutanese temple surrounded by trees and a forested hillside"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[65%_center] min-[761px]:object-[65%_62%]"
            />
          </div>

          <figcaption className="absolute bottom-[23px] left-6 right-6 z-10 flex items-center gap-[22px] text-[10px] leading-normal text-white min-[441px]:left-7 min-[441px]:right-7 min-[761px]:bottom-[25px] min-[761px]:left-auto min-[761px]:right-[clamp(28px,6vw,110px)]">
            <span className="inline-flex items-center gap-[7px]">
              <span className="h-[5px] w-[5px] rounded-full bg-[#edcfa4]" aria-hidden="true" />
              Bhutan, through a different lens
            </span>
          </figcaption>
        </figure>

        {/* Dark green gradient so the text is readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 [background-image:linear-gradient(90deg,#10291ce8,#10291ca6_65%,#10291c70),linear-gradient(0deg,#10291c80,transparent_35%)] min-[761px]:[background-image:linear-gradient(90deg,rgba(12,32,25,.88)_0%,rgba(12,32,25,.69)_33%,rgba(12,32,25,.19)_65%,rgba(12,32,25,.05)_100%),linear-gradient(0deg,rgba(12,32,25,.5),transparent_28%)]"
        />

        {/* Text */}
       <div className="max-w-[470px] font-sans min-[761px]:max-w-[620px]">
  <h1
    id="blog-heading"
    className="my-6 font-[Georgia,'Times_New_Roman',serif] text-[clamp(29px,8.6vw,36px)] font-bold leading-[1.15] tracking-[.015em] text-[#fffdf5] [text-shadow:0_4px_24px_rgba(0,0,0,0.6)] min-[441px]:text-[clamp(32px,5.8vw,44px)] min-[441px]:tracking-[.025em] min-[761px]:text-[clamp(36px,4.25vw,60px)]"
  >
    A PLACE TO WANDER<br />
    <span className="font-semibold text-[#f1d7b2]">
      A STORY TO KEEP
    </span>
  </h1>
  <a
    href="#latest-stories"
    className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#d97c52] to-[#b3562d] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white 
      /* Transitions */
      transition-all duration-300 ease-out
      /* Hover State: Shifts colors to a richer, deeply saturated sunlit orange-red, pulls upward slightly, and brightens overall values */
      hover:-translate-y-0.5 hover:from-[#e38960] hover:to-[#c45f34] hover:brightness-105 hover:shadow-[0_10px_20px_rgba(179,86,45,0.3)]
      /* Active State: Presses down smoothly when clicked */
      active:translate-y-0 active:shadow-[0_4px_10px_rgba(179,86,45,0.2)]
      /* Accessible Focus Ring: Keeps an outline explicitly tuned to your new color family */
      focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#d97c52] 
      /* Performance Optimization */
      motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-8 sm:py-3 sm:text-base"
  >
    Explore more
  </a>
</div>


      </section>

      {/* --- Main Content Area --- */}
      <main id="latest-stories" className="max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-8">

        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a]">Latest Travel Stories</h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Discover articles, guides and experiences to help you plan your next journey to Bhutan.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-300 flex flex-col h-full border border-gray-100">

              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-400">
                    <CalendarIcon />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link href={post.link} className="text-[#b88a44] text-sm font-semibold flex items-center group mt-auto w-fit">
                  Read More <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}
