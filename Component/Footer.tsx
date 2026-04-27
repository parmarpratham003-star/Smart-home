"use client";
import { useState, useEffect, useRef } from "react";

const HomeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" fill="white" opacity="0.15"/>
    <path d="M3 9.5L12 3l9 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21V12h6v9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="5" y="9" width="14" height="12" rx="1" stroke="white" strokeWidth="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const quickLinks = ["Home", "Solutions", "About Us", "Contact Us"];
const solutions = ["Smart Lighting", "Security System", "Home Automation", "Energy Saving"];
const socialIcons = [<FacebookIcon />, <TwitterIcon />, <InstagramIcon />, <LinkedInIcon />];

/* ── SLIDE-IN ANIMATION HOOK ── */
function useSlideIn(direction: "left" | "right" | "up" = "up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tx = direction === "left" ? "-56px" : direction === "right" ? "56px" : "0px";
    const ty = direction === "up" ? "32px" : "0px";

    el.style.opacity = "0";
    el.style.transform = `translate(${tx}, ${ty})`;
    el.style.transition = `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0, 0)";
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction, delay]);

  return ref;
}

export default function Footer() {
  const [email, setEmail] = useState("");

  /* Brand & Quick Links slide from LEFT, Solutions & Newsletter from RIGHT */
  const brandRef      = useSlideIn("left",  0);
  const linksRef      = useSlideIn("left",  120);
  const solutionsRef  = useSlideIn("right", 120);
  const newsletterRef = useSlideIn("right", 0);
  const bottomRef     = useSlideIn("up",    240);

  return (
    <footer className="bg-[#0f0820] text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        /* Hero body font applied to the whole footer */
        footer { font-family: 'Plus Jakarta Sans', sans-serif !important; }

        /* All text elements inside footer inherit Plus Jakarta Sans */
        footer *, footer h4, footer p, footer a, footer input, footer button, footer li {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Brand name uses the hero display serif font */
        .footer-brand-name {
          font-family: 'Cormorant Garamond', Georgia, serif !important;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
      `}</style>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND — slides from left */}
        <div ref={brandRef} className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <HomeIcon />
            <span className="footer-brand-name font-extrabold tracking-tight" style={{ color: "white" }}>
              Smart<span style={{ color: "#f97316" }}>Home</span>
            </span>
          </div>

          <p className="text-white/60 text-sm leading-relaxed">
            Smart solutions for a better tomorrow. We provide innovative and reliable smart home products.
          </p>

          <div className="flex items-center gap-2 mt-1">
            {socialIcons.map((icon, i) => (
              <button
                key={i}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-orange-400 hover:border-orange-400/40 hover:bg-orange-400/10 transition"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* QUICK LINKS — slides from left */}
        <div ref={linksRef}>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-white/70 text-sm hover:text-orange-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOLUTIONS — slides from right */}
        <div ref={solutionsRef}>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Our Solutions</h4>
          <ul className="space-y-3">
            {solutions.map((item) => (
              <li key={item}>
                <a href="#" className="text-white/70 text-sm hover:text-orange-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER — slides from right */}
        <div ref={newsletterRef}>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5">Newsletter</h4>
          <p className="text-white/60 text-sm mb-4 leading-relaxed">
            Subscribe to get the latest updates and offers.
          </p>

          <div className="flex rounded-[3px] overflow-hidden border border-white/10 bg-white/5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 min-w-0 bg-transparent text-white placeholder-white/25 px-4 py-2.5 text-sm outline-none"
            />
            <button className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 text-sm font-bold transition">
              Subscribe
            </button>
          </div>

          <p className="text-white/25 text-xs mt-2">No spam. Unsubscribe anytime.</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div ref={bottomRef} className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex   items-center justify-center">
          <p className="text-white/40 text-sm">© 2024 SmartHome. All rights reserved.</p>

        </div>
      </div>

    </footer>
  );
}