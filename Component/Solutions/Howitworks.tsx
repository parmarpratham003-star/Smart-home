"use client";

import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Choose Solution",
    desc: "Browse and select the best solution for your home.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55226D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    number: "2",
    title: "Book / Buy",
    desc: "Book a service or place an order online.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55226D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Installation / Delivery",
    desc: "We install the system or deliver the product at your door.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55226D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    number: "4",
    title: "Enjoy Smart Living",
    desc: "Experience a smarter, safer and more efficient home.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#55226D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

const cardOffsets = ["mt-0", "mt-0", "mt-0", "mt-0"];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function Howitworks() {
  const { ref: headingRef, visible: headingVisible } = useInView(0.3);
  const { ref: stepsRef, visible: stepsVisible } = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .hiw-word-left {
          display: inline-block;
          opacity: 0;
          transform: translateX(-50px);
        }
        .hiw-word-left.show {
          animation: slideFromLeft 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
        }

        .hiw-word-right {
          display: inline-block;
          opacity: 0;
          transform: translateX(50px);
        }
        .hiw-word-right.show {
          animation: slideFromRight 0.65s cubic-bezier(0.22,1,0.36,1) 0.2s forwards;
        }

        .hiw-label {
          opacity: 0;
          transform: translateX(-30px);
        }
        .hiw-label.show {
          animation: slideFromLeft 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hiw-card {
          opacity: 0;
          transform: translateY(28px);
        }
        .hiw-card.show {
          animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .hiw-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1.5px solid #e2c9f0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .hiw-card-inner:hover .hiw-icon-circle {
          background: #ede4f5;
        }

        @media (max-width: 767px) {
          .hiw-card-inner {
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 14px;
            padding: 16px 0 !important;
            border-bottom: 1px solid #e8dff0 !important;
          }
          .hiw-mobile-last {
            border-bottom: none !important;
          }
          .hiw-icon-circle {
            flex-shrink: 0;
            margin-bottom: 0 !important;
          }
          .stagger-offset { margin-top: 0 !important; }
          .hiw-vdivider { display: none !important; }
        }
      `}</style>

      <section
        className="bg-[#f5f5f7] pt-6 pb-10 md:pt-8 md:pb-12"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">

          {/* HEADING — no divider line below */}
          <div ref={headingRef} className="text-center mb-6 md:mb-8">

            <div className={`hiw-label inline-flex items-center gap-3 mb-3 ${headingVisible ? "show" : ""}`}>
              <div className="w-7 h-[2px] bg-[#55226D]" />
              <span className="text-[11px] font-semibold tracking-[.12em] uppercase text-[#55226D]">
                Process
              </span>
              <div className="w-7 h-[2px] bg-[#55226D]" />
            </div>

            <h2
              className="text-3xl sm:text-5xl font-bold text-[#55226D] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "-0.015em" }}
            >
              <span className={`hiw-word-left ${headingVisible ? "show" : ""}`}>How It&nbsp;</span>
              <span className={`hiw-word-right text-orange-600 ${headingVisible ? "show" : ""}`}>Works</span>
            </h2>

            <p
              className={`hiw-word-left text-sm mt-3 max-w-md mx-auto leading-relaxed ${headingVisible ? "show" : ""}`}
              style={{ animationDelay: "0.3s", color: "#55226D", opacity: headingVisible ? undefined : 0 }}
            >
              From choosing your solution to enjoying smart living — it&apos;s simple, fast, and hassle-free.
            </p>
          </div>

          {/* STEPS GRID */}
          <div
            ref={stepsRef}
            className="flex flex-col md:flex-row md:items-start"
          >
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div
                  className={`hiw-card flex-1 ${cardOffsets[i]} stagger-offset ${stepsVisible ? "show" : ""}`}
                  style={{ animationDelay: stepsVisible ? `${i * 0.13}s` : "0s" }}
                >
                  <div className={`hiw-card-inner flex flex-col items-start text-left px-4 md:px-8 py-2 ${i === steps.length - 1 ? "hiw-mobile-last" : ""}`}>

                    <div className="hiw-icon-circle mb-5">
                      {step.icon}
                    </div>

                    <h3 className="font-semibold text-[#55226D] text-[15px] sm:text-base leading-snug mb-2">
                      {step.title}
                    </h3>

                    <p className="text-[13px] text-[#55226D] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Vertical divider — desktop only */}
                {i < steps.length - 1 && (
                  <div className="hiw-vdivider hidden md:flex items-center self-stretch py-4">
                    <div className="w-px h-full bg-[#e2c9f0]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}