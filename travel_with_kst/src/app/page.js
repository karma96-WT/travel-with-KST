"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { image: "mountains", eyebrow: "SMALL KINGDOM. EXTRAORDINARY JOURNEYS.", first: "Some journeys", last: "stay with", accent: "you.", description: "Find your own kind of wonder in Bhutan. Quiet trails, living traditions, and moments that mean a little more.", location: "The Himalayas", caption: "A little closer to the extraordinary" },
  { image: "forest", eyebrow: "TAKE THE SCENIC ROUTE.", first: "Less rush.", last: "More", accent: "wonder.", description: "Follow forest paths, breathe in the mountain air, and make room for the unexpected. Adventure at your own pace.", location: "Into the wilderness", caption: "Let nature set the pace" },
  { image: "valley", eyebrow: "GO BEYOND THE EVERYDAY.", first: "A new view.", last: "A new", accent: "outlook.", description: "From your first mountain sunrise to your last cup of local tea, discover a journey thoughtfully made for you.", location: "Along the mountain trails", caption: "Beautiful places. Meaningful connections." },
];
const sections = {
  About: { label: "A LOCAL PERSPECTIVE", title: "Your journey. Our home.", intro: "Travel with KST is a Bhutan-focused travel concept built around a simple idea: the best journeys leave you with a connection to a place. Discover a slower, more personal way to explore.", cards: [["Thoughtfully planned", "Unhurried itineraries with time for the little discoveries."], ["Rooted in culture", "Explore Bhutan’s architecture, food, festivals, and living traditions."], ["Made for you", "A starting point for a journey shaped around your interests."]] },
  Destination: { label: "FIND YOUR SOMEWHERE", title: "One kingdom. So much to discover.", intro: "From peaceful valleys to mountain monasteries, explore the places that make Bhutan special.", cards: [["Paro", "Forest trails, traditional farmhouses, and the iconic Tiger’s Nest monastery."], ["Punakha", "A riverside dzong, suspension bridges, and lush valley landscapes."], ["Thimphu", "A capital where contemporary life meets centuries of tradition."]] },
  Blog: { label: "NOTES FROM THE JOURNEY", title: "A little inspiration goes a long way.", intro: "A preview of the stories and practical guides coming to our travel journal.", cards: [["Your first time in Bhutan", "A thoughtful introduction to the kingdom. Coming soon."], ["The art of travelling slowly", "Why leaving space in your itinerary makes a difference. Coming soon."], ["A taste of Bhutan", "Local flavours, warm hospitality, and a love of chillies. Coming soon."]] },
  Packages: { label: "YOUR NEXT CHAPTER", title: "Good journeys begin here.", intro: "Sample itineraries to spark your imagination. Full details, availability, and pricing will be added soon.", cards: [["A glimpse of Bhutan · 5 days", "Paro & Thimphu — a gentle introduction to culture and mountain scenery."], ["The valley explorer · 7 days", "Paro, Thimphu & Punakha — three valleys, countless discoveries."], ["The slow adventure · 10 days", "More space for trails, traditions, and time outdoors."]] },
  Events: { label: "CULTURE, IN FULL COLOUR", title: "Be part of something beautiful.", intro: "A glimpse of Bhutan’s festival traditions. Dates and travel arrangements are to be confirmed before planning your visit.", cards: [["Thimphu Tshechu", "Masked dances, vibrant costumes, and a gathering that brings the community together."], ["Black-necked Crane Festival", "A celebration of conservation and culture in the beautiful Phobjikha Valley."], ["Paro Tshechu", "Discover one of Bhutan’s best-known cultural celebrations."]] },
  Contact: { label: "LET’S MAKE IT PERSONAL", title: "Where would you like to go?", intro: "Our full travel enquiry experience is coming soon. For now, explore the sample itineraries and start imagining your Bhutan journey.", cards: [["Choose your pace", "A short cultural escape or a longer adventure?"], ["Find your inspiration", "Mountain trails, local food, festivals, or a little of everything."], ["Make it yours", "Personal travel planning and contact details will be available here soon."]] },
};
function Icon({ name, ...props }) {
  const paths = { arrow: "M4 12h16m-6-6 6 6-6 6", pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM12 7v6m-3-3h6", mountain: "m2 19 7-13 5 8 3-5 5 10H2Zm4-7 3 2 3-2", mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7", globe: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18", leaf: "M20 4C8 2 2 9 6 16s16 2 14-12ZM4 21 16 9", close: "m6 6 12 12M6 18 18 6", calendar: "M4 5h16v16H4V5Zm0 5h16M8 2v6m8-6v6" };
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name] || paths.arrow} /></svg>;
}
function Brand() {
  return (
    <div className="text-center">
      Travel with KST
    </div>
  );
}
export default function Home() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6500);
    return () => clearInterval(timer);
  }, [paused]);
  function openSection(name) { setMenuOpen(false); setSection(name); dialog.current.showModal(); }
  const slide = slides[current];
  return <div className="site-shell">
    <header className="header">
      <a href="#home" className="brand-link" aria-label="Travel with KST home"><Brand /></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close ✕" : "Menu ☰"}</button>
      <nav aria-label="Main navigation" className={menuOpen ? "navigation open" : "navigation"}>{["Home", "About", "Destination", "Blog", "Packages"].map((name) => <button key={name} className={name === "Home" ? "nav-link active" : "nav-link"} onClick={() => name === "Home" ? (setMenuOpen(false), document.getElementById("home").scrollIntoView({ behavior: "smooth" })) : openSection(name)}>{name}{name === "Packages" && <Icon name="arrow" width="15" height="15" />}</button>)}</nav>
      <span className="header-note"><span /> A world of wonder awaits</span>
    </header>
    <main id="home">
      <section className="hero" aria-label="Discover Bhutan">
        {slides.map((item, index) => <div key={item.image} className={`hero-photo ${index === current ? "visible" : ""}`} style={{ backgroundImage: `url(/images/${item.image}.jpg)` }} />)}
        <div className="hero-shade" />
        <div className="hero-content" key={current}><div className="eyebrow"><span className="short-rule" />{slide.eyebrow}</div><h1>{slide.first}<br />{slide.last} <em>{slide.accent}</em></h1><p>{slide.description}</p><div className="hero-actions"><button className="primary-button" onClick={() => openSection("Packages")}>Explore our journeys <Icon name="arrow" /></button><button className="story-button" onClick={() => openSection("About")}><span className="play-icon">▷</span>Get to know us</button></div></div>
        <aside className="events-card"><div className="events-heading"><span className="eyebrow">A LITTLE INSPIRATION</span><span className="live-dot" /></div><h2>Happening in Bhutan</h2><div className="event-image"><span>Culture worth travelling for</span><Icon name="calendar" /></div><div className="event-body"><span className="event-tag">FESTIVALS & TRADITIONS</span><h3>Thimphu Tshechu</h3><p>A swirl of colour. A rhythm of tradition.<br />A memory to bring home.</p><button className="text-button" onClick={() => openSection("Events")}>Discover the celebrations <Icon name="arrow" width="17" height="17" /></button></div></aside>
        <div className="hero-bottom"><div className="location"><Icon name="pin" /><div>{slide.location}<small>{slide.caption}</small></div></div><div className="slider-controls"><span className="slide-number">0{current + 1}<span> / 03</span></span><div className="slide-dots">{slides.map((item, index) => <button key={item.image} className={current === index ? "selected" : ""} aria-label={`Show slide ${index + 1}`} aria-pressed={current === index} onClick={() => setCurrent(index)} />)}</div><button className="pause-button" aria-label={paused ? "Play slideshow" : "Pause slideshow"} onClick={() => setPaused(!paused)}>{paused ? "▷" : "Ⅱ"}</button></div></div>
      </section>
      <section className="intro-strip" aria-label="Our approach"><div className="intro-title"><span className="small-star"></span><p>Not just a destination.<br /><strong>A different way to feel.</strong></p></div><div className="intro-feature"><Icon name="mountain" /><span>Local roots.<br /><b>Real experiences.</b></span></div><div className="intro-feature"><Icon name="leaf" /><span>Thoughtful travel.<br /><b>A lighter footprint.</b></span></div><button className="intro-link" onClick={() => openSection("About")}>Meet your travel companions <span><Icon name="arrow" /></span></button></section>
    </main>
    <footer className="footer"><div className="footer-top"><div className="footer-brand"><a href="#home" className="brand-link"><Brand /></a><p>Far from the ordinary.<br />Closer to what matters.</p></div><div className="footer-links"><h2>A few helpful links</h2><div className="links-grid"><a href="https://bhutan.travel/" target="_blank" rel="noreferrer">Department of Tourism ↗</a><a href="https://www.drukair.com.bt/" target="_blank" rel="noreferrer">Drukair ↗</a><a href="https://www.bhutanairlines.bt/" target="_blank" rel="noreferrer">Bhutan Airlines ↗</a><a href="https://www.doi.gov.bt/" target="_blank" rel="noreferrer">Department of Immigration ↗</a></div></div><div className="footer-contact"><h2>Every adventure starts with hello.</h2><button className="contact-link" onClick={() => openSection("Contact")}>Let’s plan something wonderful <Icon name="arrow" width="17" height="17" /></button><div className="contact-buttons"><button aria-label="Travel enquiries" onClick={() => openSection("Contact")}><Icon name="mail" /></button><button aria-label="Explore destinations" onClick={() => openSection("Destination")}><Icon name="globe" /></button><button aria-label="Find us in Bhutan" onClick={() => openSection("Contact")}><Icon name="pin" /></button><span>Made with a love for exploring.</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Travel with KST. All rights reserved.</span><span>Inspired by Bhutan. Open to the world. <span className="tiny-sun">✳</span></span></div></footer>
    <dialog ref={dialog} className="detail-dialog" aria-labelledby="detail-title" onClick={(event) => { if (event.target === dialog.current) dialog.current.close(); }}><button className="dialog-close" aria-label="Close section" onClick={() => dialog.current.close()}><Icon name="close" /></button>{section && <><span className="eyebrow">{sections[section].label}</span><h2 id="detail-title">{sections[section].title}</h2><p className="dialog-intro">{sections[section].intro}</p><div className="detail-cards">{sections[section].cards.map(([title, description], index) => <article key={title}><span className="detail-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div><button className="primary-button" onClick={() => dialog.current.close()}>Keep exploring <Icon name="arrow" /></button></>}</dialog>
  </div>;
}

