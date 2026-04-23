"use client";

// Add to your index.html / _document.tsx:
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

import { useEffect, useRef } from "react";

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const features = [
  {
    title: "Smart Lighting",
    desc: "Control lights remotely and set the perfect mood.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21h6M12 3a6 6 0 00-3 11.22V17a1 1 0 001 1h4a1 1 0 001-1v-2.78A6 6 0 0012 3z" />
      </svg>
    ),
  },
  {
    title: "Security System",
    desc: "24/7 monitoring and real-time alerts for complete safety.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Home Automation",
    desc: "Automate your devices and routines effortlessly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Energy Saving",
    desc: "Save energy and reduce costs with smart solutions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c1.25-1.25 2.75-2 5-2 2.5 0 4.5-1 6-3 .83-1.17 1.5-2.83 2-5 .5-2 .75-4.17.5-6.5C13 3 10.5 2 8 2 4 2 2 5 2 8c0 2 .5 3.83 2 5-.83 2.5-2 4.5-2 9z" />
        <path d="M7 15c3-1 5-3 6-6" />
      </svg>
    ),
  },
];

const avatarGradients = [
  "linear-gradient(135deg,#c4b5fd,#7c3aed)",
  "linear-gradient(135deg,#fbbf24,#f97316)",
  "linear-gradient(135deg,#6ee7b7,#059669)",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Staggered entrance for hero text elements
    const heroEls = [
      { el: badgeRef.current,    delay: 0 },
      { el: headlineRef.current, delay: 120 },
      { el: subRef.current,      delay: 240 },
      { el: btnsRef.current,     delay: 360 },
      { el: socialRef.current,   delay: 480 },
    ];

    heroEls.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    });

    // Trigger after a tiny paint delay
    const timer = setTimeout(() => {
      heroEls.forEach(({ el }) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }, 80);

    // Features bar: animate in when scrolled into view
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

        /* Pulse animation on orange button */
        @keyframes pulse-orange {
          0%, 100% { box-shadow: 0 6px 20px rgba(249,115,22,0.38); }
          50%       { box-shadow: 0 6px 28px rgba(249,115,22,0.60); }
        }
        .btn-pulse { animation: pulse-orange 2.4s ease-in-out infinite; }

        /* Slow float on bg image */
        @keyframes float-bg {
          0%, 100% { transform: scale(1.03) translateY(0px); }
          50%       { transform: scale(1.03) translateY(-8px); }
        }
        .bg-float { animation: float-bg 8s ease-in-out infinite; }

        /* Star shimmer */
        @keyframes shimmer {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.55; }
        }
        .star-shimmer { animation: shimmer 1.8s ease-in-out infinite; }
        .star-shimmer:nth-child(2) { animation-delay: 0.2s; }
        .star-shimmer:nth-child(3) { animation-delay: 0.4s; }
        .star-shimmer:nth-child(4) { animation-delay: 0.6s; }
        .star-shimmer:nth-child(5) { animation-delay: 0.8s; }

        /* Feature hover lift */
        .feat-item {
          transition: background 0.2s, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .feat-item:hover {
          transform: translateY(-3px);
        }

        /* Badge line draw */
        @keyframes line-draw {
          from { width: 0; }
          to   { width: 22px; }
        }
        .badge-line { animation: line-draw 0.6s ease 0.1s both; }
      `}</style>

      <section
        className="relative w-full overflow-hidden bg-white"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        ref={heroRef}
      >
        {/* ── BACKGROUND IMAGE + OVERLAYS ── */}
        <div
          className="relative w-full flex items-center overflow-hidden"
          style={{ minHeight: "clamp(420px, 60vw, 580px)" }}
        >
          {/* Floating bg image */}
          <img
            src="/hero1.png"
            alt="Smart Home"
            className="absolute inset-0 w-full h-full object-cover object-center bg-float"
          />

          {/* Left white fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(transparent 100%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.22) 82%, rgba(255,255,255,0.52) 100%)",
            }}
          />
          {/* Mobile: stronger full overlay so text is always readable */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: "rgba(255,255,255,0.78)" }}
          />

          {/* ── HERO TEXT CONTENT ── */}
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10 py-12 md:py-16">

            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#6d28d9" }}
            >
              <span
                className="inline-block h-[1.5px] badge-line"
                style={{ background: "#6d28d9", width: 22 }}
              />
              Welcome to SmartHome
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-extrabold leading-[1.04] tracking-tight text-gray-900 mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                letterSpacing: "-0.015em",
                fontSize: "clamp(36px, 5.5vw, 64px)",
              }}
            >
              Smart Living <br />
              <em className="not-italic" style={{ color: "#6d28d9" }}>Starts Here</em>
            </h1>

            {/* Subtext */}
            <p
              ref={subRef}
              className="text-sm font-normal text-gray-600 leading-relaxed mb-7"
              style={{ maxWidth: 360 }}
            >
              Control your home with advanced automation solutions for a better and smarter life.
            </p>

            {/* Buttons */}
            <div ref={btnsRef} className="flex flex-wrap gap-3 mb-7">
              <button
                className="btn-pulse inline-flex items-center gap-2 text-white text-[13px] font-semibold px-6 py-3 rounded-xl border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{ background: "#f97316" }}
              >
                Get Started <ArrowRight />
              </button>
              <button
                className="inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-50 active:scale-95"
                style={{
                  color: "#6d28d9",
                  background: "transparent",
                  border: "1.5px solid #c4b5fd",
                }}
              >
                Explore Solutions <ArrowRight />
              </button>
            </div>

            {/* Social proof */}
            <div ref={socialRef} className="flex items-center gap-3">
              <div className="flex">
                {avatarGradients.map((bg, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-[2.5px] border-white flex-shrink-0"
                    style={{
                      background: bg,
                      marginLeft: i === 0 ? 0 : -10,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                    }}
                  />
                ))}
              </div>
              <div>
                <span className="block text-[13px] font-bold text-gray-900 leading-tight">
                  1,000+ Happy Customers
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star-shimmer">
                      <StarIcon />
                    </span>
                  ))}
                  <span className="text-[11px] text-gray-400 ml-1">4.8 (230 Reviews)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── FEATURES BAR ── */}
        <div
          ref={featuresRef}
          className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-8 md:px-10 pb-10"
          style={{ marginTop: -28 }}
        >
          <div
            className="rounded-[22px] overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(221,214,254,0.5)",
              boxShadow: "0 16px 56px rgba(109,40,217,0.09), 0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            {/* 1 col on mobile, 2 on sm, 4 on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {features.map(({ icon, title, desc }, i) => (
                <div
                  key={title}
                  ref={(el) => { featItemRefs.current[i] = el; }}
                  className="feat-item flex flex-row items-start gap-4 px-6 py-7 cursor-default hover:bg-violet-50/50"
                  style={{
                    borderRight: "none",
                    borderBottom: "1px solid rgba(237,233,254,0.85)",
                    minHeight: 110,
                  }}
                >
                  <div className="flex-shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <p className="text-[14px] font-bold text-gray-900 mb-1.5 leading-tight m-0">
                      {title}
                    </p>
                    <p className="text-[12px] font-normal text-gray-400 leading-relaxed m-0">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inline responsive border fix: on md+ use right borders, remove bottom */}
        <style>{`
          @media (min-width: 640px) {
            .feat-item:nth-child(odd)  { border-right: 1px solid rgba(237,233,254,0.85) !important; }
            .feat-item:nth-child(even) { border-right: none !important; }
          }
          @media (min-width: 768px) {
            .feat-item                 { border-bottom: none !important; }
            .feat-item:nth-child(1),
            .feat-item:nth-child(2),
            .feat-item:nth-child(3)    { border-right: 1px solid rgba(237,233,254,0.85) !important; }
            .feat-item:nth-child(4)    { border-right: none !important; }
          }
        `}</style>

      </section>
    </>
  );
}