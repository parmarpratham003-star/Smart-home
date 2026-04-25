"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const features = [
  {
    title: "Smart Lighting",
    desc: "Control lights remotely and set the perfect mood.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c1d95" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21h6M12 3a6 6 0 00-3 11.22V17a1 1 0 001 1h4a1 1 0 001-1v-2.78A6 6 0 0012 3z" />
      </svg>
    ),
  },
  {
    title: "Security System",
    desc: "24/7 monitoring and real-time alerts for complete safety.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c1d95" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Home Automation",
    desc: "Automate your devices and routines effortlessly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c1d95" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Energy Saving",
    desc: "Save energy and reduce costs with smart solutions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4c1d95" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c1.25-1.25 2.75-2 5-2 2.5 0 4.5-1 6-3 .83-1.17 1.5-2.83 2-5 .5-2 .75-4.17.5-6.5C13 3 10.5 2 8 2 4 2 2 5 2 8c0 2 .5 3.83 2 5-.83 2.5-2 4.5-2 9z" />
        <path d="M7 15c3-1 5-3 6-6" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const badgeRef    = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const btnsRef     = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heroEls = [
      { el: badgeRef.current,    delay: 0 },
      { el: headlineRef.current, delay: 120 },
      { el: subRef.current,      delay: 240 },
      { el: btnsRef.current,     delay: 360 },
    ];

    heroEls.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    });

    const timer = setTimeout(() => {
      heroEls.forEach(({ el }) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }, 80);

    featItemRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`;
    });

    const featObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            featItemRefs.current.forEach((el) => {
              if (!el) return;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            });
            featObs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) featObs.observe(featuresRef.current);

    return () => {
      clearTimeout(timer);
      featObs.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .hero-section { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-headline { font-family: 'Cormorant Garamond', Georgia, serif; }

        @keyframes pulse-orange {
          0%, 100% { box-shadow: 0 6px 20px rgba(249,115,22,0.38); }
          50%       { box-shadow: 0 6px 28px rgba(249,115,22,0.60); }
        }
        .btn-pulse { animation: pulse-orange 2.4s ease-in-out infinite; }

        @keyframes line-draw {
          from { width: 0; }
          to   { width: 22px; }
        }
        .badge-line { animation: line-draw 0.6s ease 0.1s both; }

        @keyframes shiny-sweep {
          0%   { left: -75%; }
          100% { left: 125%; }
        }
        .btn-shiny { position: relative; overflow: hidden; }
        .btn-shiny::after {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.15) 65%, transparent 100%);
          transform: skewX(-15deg);
          pointer-events: none;
          opacity: 0;
        }
        .btn-shiny:hover::after { opacity: 1; animation: shiny-sweep 0.55s ease forwards; }
        .btn-shiny-outline::after {
          background: linear-gradient(120deg, transparent 0%, rgba(196,181,253,0.12) 35%, rgba(255,255,255,0.45) 50%, rgba(196,181,253,0.12) 65%, transparent 100%);
        }

        .feat-item { transition: background 0.2s, transform 0.25s ease; }
        .feat-item:hover { transform: translateY(-3px); }

        @media (min-width: 640px) {
          .feat-item:nth-child(odd)  { border-right: 1px solid rgba(237,233,254,0.85) !important; }
          .feat-item:nth-child(even) { border-right: none !important; }
        }
        @media (min-width: 768px) {
          .feat-item { border-bottom: none !important; }
          .feat-item:nth-child(1),
          .feat-item:nth-child(2),
          .feat-item:nth-child(3) { border-right: 1px solid rgba(237,233,254,0.85) !important; }
          .feat-item:nth-child(4) { border-right: none !important; }
        }
      `}</style>

      <section className="hero-section relative w-full overflow-hidden bg-white">

        {/* ── BACKGROUND IMAGE + OVERLAYS ── */}
        <div className="relative w-full flex items-center overflow-hidden min-h-[460px] md:min-h-[560px]">

          <img
            src="/hero1.png"
            alt="Smart Home"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Bottom fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/50" />

          {/* Mobile white overlay */}
          <div className="absolute inset-0 bg-white/80 md:hidden" />

          {/* ── HERO TEXT ── */}
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10 pt-10 pb-16 md:pt-14 md:pb-20">

            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase text-violet-700 mb-6"
            >
              <span className="inline-block h-[1.5px] bg-violet-700 badge-line" style={{ width: 22 }} />
              Welcome to SmartHome
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="hero-headline font-extrabold leading-[1.04] tracking-tight text-[#170a39] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-6xl"
            >
              Smart Living <br />
              <em className="not-italic text-purple-700">Starts Here</em>
            </h1>

            {/* Subtext */}
            <p
              ref={subRef}
              className="text-sm font-normal leading-relaxed text-purple-400 max-w-[360px] mb-9"
            >
              Control your home with advanced automation solutions for a better and smarter life.
            </p>

            {/* Buttons */}
            <div ref={btnsRef} className="flex flex-wrap gap-3">
              <button className="btn-pulse btn-shiny inline-flex items-center gap-2 text-white text-[13px] font-semibold px-6 py-3 bg-orange-500 rounded-[3px] border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
                Get Started <ArrowRight />
              </button>
              <button className="btn-shiny btn-shiny-outline inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 text-violet-700 bg-transparent border border-violet-300 rounded-[3px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-50 active:scale-95">
               <Link href="/Solutions">
                Explore Solutions</Link> <ArrowRight />
              </button>
            </div>

          </div>
        </div>

        {/* ── FEATURES BAR ── */}
        <div
          ref={featuresRef}
          className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-8 md:px-10 pb-12 -mt-7"
        >
          <div className="bg-white/98 backdrop-blur-xl border border-purple-200/50 shadow-[0_16px_56px_rgba(109,40,217,0.09),0_2px_8px_rgba(0,0,0,0.04)] rounded-[3px] overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {features.map(({ icon, title, desc }, i) => (
                <div
                  key={title}
                  ref={(el) => { featItemRefs.current[i] = el; }}
                  className="feat-item flex flex-row items-start gap-4 px-6 py-8 cursor-default hover:bg-purple-50/50 border-b border-purple-100/80 min-h-[120px]"
                >
                  <div className="flex-shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <p className="text-[14px] font-bold mb-2 leading-tight text-purple-950">{title}</p>
                    <p className="text-[12px] font-normal leading-relaxed text-purple-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}