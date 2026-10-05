"use client";

import { useMemo, useState } from "react";
import "./blog.css";

/* Blog data */
const CATEGORIES = [
  { id: "all", label: "All stories" },
  { id: "culture", label: "Culture" },
  { id: "sacred", label: "Sacred sites" },
  { id: "tips", label: "Travel tips" },
];

const CATEGORY_LABELS = {
  culture: "Culture",
  sacred: "Sacred sites",
  tips: "Travel tips",
};

const FEATURED = {
  id: "punakha",
  category: "culture",
  title: "A Journey into the heart of Punakha",
  excerpt:
    "Where sacred rivers meet and history still lives — explore the beauty, traditions and quiet rhythm of Punakha, Bhutan's former capital.",
  image: "/images/blog/punakha-dzong.jpg",
  href: "/blog/journey-into-punakha",
};

const STORIES = [
  {
    id: "tigers-nest",
    category: "sacred",
    title: "Walking to Tiger's Nest",
    excerpt:
      "A memorable hike through pine forests to one of Bhutan's most sacred sites, with breathtaking views at every turn.",
    image: "/images/blog/tigers-nest.jpg",
    readTime: 5,
    href: "/blog/walking-to-tigers-nest",
  },
  {
    id: "wangdue",
    category: "culture",
    title: "Discover Wangdue Phodrang",
    excerpt:
      "A riverside dzong, vibrant local life and a town that connects Bhutan's east and west.",
    image: "/images/blog/wangdue-phodrang.jpg",
    readTime: 5,
    href: "/blog/discover-wangdue-phodrang",
  },
  {
    id: "phobjikha",
    category: "tips",
    title: "Slow days in Phobjikha",
    excerpt:
      "Wide valleys, winter cranes and peaceful trails make Phobjikha a must-visit for nature lovers.",
    image: "/images/blog/phobjikha-valley.jpg",
    readTime: 5,
    href: "/blog/slow-days-in-phobjikha",
  },
];

/* Small inline icons (no extra dependencies) */
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

/* Page- */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const matches = (story) => {
    const inCategory =
      activeCategory === "all" || story.category === activeCategory;
    const q = query.trim().toLowerCase();
    const inSearch =
      !q ||
      story.title.toLowerCase().includes(q) ||
      story.excerpt.toLowerCase().includes(q);
    return inCategory && inSearch;
  };

  const showFeatured = matches(FEATURED);
  const visibleStories = useMemo(
    () => STORIES.filter(matches),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeCategory, query]
  );
  const nothingFound = !showFeatured && visibleStories.length === 0;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: connect to your newsletter service / Firebase here
    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="blog-page">
      {/* ---------- Hero ---------- */}
      <section className="blog-hero">
        <div className="blog-hero__image" role="img" aria-label="Tiger's Nest monastery clinging to a Himalayan cliff" />
        <div className="blog-hero__overlay" />
        <div className="blog-hero__content">
          <h1>Stories from Bhutan</h1>
          <p>Local insights. Sacred places. Memorable journeys.</p>
        </div>
      </section>

      {/* ---------- Filters + Search ---------- */}
      <section className="blog-container blog-toolbar">
        <div className="blog-filters" role="tablist" aria-label="Filter stories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`blog-chip ${activeCategory === cat.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <label className="blog-search">
          <SearchIcon />
          <span className="sr-only">Search stories</span>
          <input
            type="search"
            placeholder="Search stories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </section>

      {/* ---------- Featured story ---------- */}
      {showFeatured && (
        <section className="blog-container">
          <article className="blog-featured">
            <div
              className="blog-featured__image"
              style={{ backgroundImage: `url(${FEATURED.image})` }}
              role="img"
              aria-label="Punakha Dzong beside the river"
            />
            <div className="blog-featured__body">
              <span className="blog-tag">{CATEGORY_LABELS[FEATURED.category]}</span>
              <h2>{FEATURED.title}</h2>
              <p>{FEATURED.excerpt}</p>
              <a href={FEATURED.href} className="blog-link">
                Read story <ArrowIcon />
              </a>
            </div>
          </article>
        </section>
      )}

      {/* ---------- Story grid ---------- */}
      {visibleStories.length > 0 && (
        <section className="blog-container blog-grid">
          {visibleStories.map((story) => (
            <article key={story.id} className="blog-card">
              <div
                className="blog-card__image"
                style={{ backgroundImage: `url(${story.image})` }}
                role="img"
                aria-label={story.title}
              />
              <div className="blog-card__body">
                <span className="blog-tag">{CATEGORY_LABELS[story.category]}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-readtime">
                    <ClockIcon /> {story.readTime} min read
                  </span>
                  <a href={story.href} className="blog-link">
                    Read story <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {nothingFound && (
        <p className="blog-empty">
          No stories match your search. Try another word or choose a different
          category.
        </p>
      )}

      {/* ---------- Newsletter ---------- */}
      <section className="blog-newsletter">
        <div className="blog-newsletter__pattern" aria-hidden="true" />
        <div className="blog-newsletter__inner">
          <div className="blog-newsletter__text">
            <h2>A little Bhutan in your inbox</h2>
            <p>Travel inspiration, local stories and helpful tips, straight to your email.</p>
          </div>

          {subscribed ? (
            <p className="blog-newsletter__thanks" role="status">
              Thank you for subscribing. Kuzuzangpo la!
            </p>
          ) : (
            <form className="blog-newsletter__form" onSubmit={handleSubscribe}>
              <label className="blog-newsletter__field">
                <MailIcon />
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}