import Link from 'next/link';

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

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.504 2.504 0 0 1 1.768-1.768C5.745 5 12 5 12 5s6.255 0 7.812.418zM9.998 15.5l6.002-3.5-6.002-3.5v7z" clipRule="evenodd" /></svg>
);

// --- Main Page Component ---
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* --- Navbar --- */}
      {/* Using absolute positioning to sit on top of the hero image */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent text-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            {/* Simple SVG Logo Placeholder */}
            <svg className="w-10 h-6 text-[#b88a44]" viewBox="0 0 50 30" fill="currentColor">
               <path d="M25 0 L35 20 L25 15 L15 20 Z" />
               <path d="M10 10 L20 25 L10 25 Z" opacity="0.6"/>
               <path d="M40 10 L30 25 L40 25 Z" opacity="0.6"/>
            </svg>
            <span className="font-serif font-bold text-lg leading-none tracking-wider text-gray-900 mt-1">BHUTAN</span>
            <span className="text-[0.55rem] tracking-[0.2em] text-gray-500 uppercase">Travel Stories</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black-700">
          <Link href="#" className="hover:text-[#b88a44] transition-colors">Home</Link>
          <Link href="#" className="hover:text-[#b88a44] transition-colors">About</Link>
          <Link href="#" className="hover:text-[#b88a44] transition-colors">Destination</Link>
          <Link href="#" className="text-[#b88a44] border-b-2 border-[#b88a44] pb-1">Blog</Link>
          <Link href="#" className="hover:text-[#b88a44] transition-colors">Packages</Link>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative w-full h-[650px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqzx8sYFtHBJ9wcooecl8kbl2duxqUw3xW66ISQZZR1Xkry-YGvkG9XI&s=10" 
            alt="Bhutan Landscape" 
            className="w-full h-full object-cover object-center"
          />
          {/* White Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-full md:w-4/5"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-4xl pt-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#b88a44] text-xs font-bold tracking-[0.2em] uppercase">Stories from the Land of Happiness</span>          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] leading-tight mb-6">
            Travel Stories & Guides<br />
            from Bhutan
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg max-w-xl mb-10">
            Explore real travel experiences, cultural insights, helpful tips and hidden gems from the heart of the Himalayas.
          </p>
          
          <button className="bg-[#b88a44] hover:bg-yellow-700 text-white text-sm font-medium py-3 px-8 rounded-full flex items-center transition-colors group">
            Read Our Latest Stories <ArrowRightIcon />
          </button>
        </div>

        {/* Faint Mountain Graphic */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 pointer-events-none">
            <svg className="w-24 h-12 text-gray-400" viewBox="0 0 100 50" fill="currentColor">
                <path d="M50 0 L65 30 L50 20 L35 30 Z" />
                <path d="M20 15 L35 40 L20 40 Z" opacity="0.5" />
                <path d="M80 15 L65 40 L80 40 Z" opacity="0.5" />
            </svg>
        </div>
      </section>
      
      {/* --- Main Content Area --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-8">
        
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

      {/* --- Footer --- */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center">
             <svg className="w-10 h-6 text-white mb-1" viewBox="0 0 50 30" fill="currentColor">
               <path d="M25 0 L35 20 L25 15 L15 20 Z" />
               <path d="M10 10 L20 25 L10 25 Z" opacity="0.6"/>
               <path d="M40 10 L30 25 L40 25 Z" opacity="0.6"/>
            </svg>
            <span className="font-serif font-bold text-lg tracking-wider leading-none">BHUTAN</span>
            <span className="text-[0.55rem] tracking-[0.2em] text-gray-400 uppercase">Travel Stories</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-gray-300">
            <Link href="#" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Destination</Link>
            <Link href="#" className="hover:text-white transition-colors">Blog</Link>
            <Link href="#" className="hover:text-white transition-colors">Packages</Link>
          </div>

          <div className="flex gap-4 text-gray-300">
             <Link href="#" className="hover:text-white transition-colors"><FacebookIcon /></Link>
             <Link href="#" className="hover:text-white transition-colors"><InstagramIcon /></Link>
             <Link href="#" className="hover:text-white transition-colors"><YoutubeIcon /></Link>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gray-700/50 text-center text-xs text-gray-400">
          © 2026 Bhutan Travel Stories. All rights reserved.
        </div>
      </footer>
    </div>
  );
}