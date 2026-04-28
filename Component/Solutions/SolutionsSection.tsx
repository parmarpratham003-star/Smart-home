"use client";

import React, { useState, useEffect, useRef } from "react";

const categories = [
  { label: "All Solutions", value: "All" },
  { label: "Security", value: "Security" },
  { label: "Lighting", value: "Lighting" },
  { label: "Automation", value: "Automation" },
  { label: "Energy Saving", value: "Energy" },
];

const solutions = [
  {
    category: "Security",
    name: "Smart CCTV Camera",
    price: "₹4,999",
    desc: "HD video monitoring with night vision and mobile alerts.",
    img: "https://images.unsplash.com/photo-1729839206142-d03c98f921fd?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Lighting",
    name: "Smart LED Bulb",
    price: "₹1,299",
    desc: "Energy efficient smart bulb with remote control.",
    img: "https://images.unsplash.com/photo-1619559451460-b15f60bcdfdd?w=500",
  },
  {
    category: "Automation",
    name: "Smart Plug",
    price: "₹899",
    desc: "Control your appliances remotely from anywhere.",
    img: "https://plus.unsplash.com/premium_photo-1729491126310-5686343f468c?w=500",
  },
  {
    category: "Automation",
    name: "Home Automation Hub",
    price: "₹5,999",
    desc: "Control all your smart devices from a single hub.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=500",
  },
  {
    category: "Security",
    name: "Smart Doorbell",
    price: "₹3,499",
    desc: "See and speak to visitors from anywhere with HD video.",
    img: "https://plus.unsplash.com/premium_photo-1729436833449-225649403fc0?w=500",
  },
  {
    category: "Energy",
    name: "Smart Energy Monitor",
    price: "₹2,499",
    desc: "Track usage in real time and cut electricity bills.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=500",
  },
  {
    category: "Lighting",
    name: "Ambient Strip Kit",
    price: "₹899",
    desc: "Adhesive LED strips for accent and task lighting.",
    img: "https://images.unsplash.com/photo-1493564738392-d148cfbd6eda?q=80&w=500",
  },
  {
    category: "Security",
    name: "Smart Security Install",
    price: "₹2,999",
    desc: "Professional camera and sensor setup at your door.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500",
  },
  {
    category: "Energy",
    name: "Smart Smoke Detector",
    price: "₹1,799",
    desc: "Instant alerts on your phone when smoke or fire is detected.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=500",
  },
];

const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#55226D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 12l2.5 2.5L16 9"/>
      </svg>
    ),
    title: "Smart & Easy to Use",
    desc: "Simple interface and easy control from anywhere.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#55226D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Best solutions at competitive prices.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#55226D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h2l1 3 2-6 1 3h2"/>
      </svg>
    ),
    title: "Latest Technology",
    desc: "We use advanced and reliable technology.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#55226D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 10.8 19.79 19.79 0 0 1 1.07 2.18 2 2 0 0 1 3.05 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 14.92z"/>
      </svg>
    ),
    title: "Expert Support",
    desc: "24/7 customer support and assistance.",
  },
];

function useInView(threshold = 0.1) {
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

export default function SolutionsSection() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const { ref: gridRef, visible: gridVisible } = useInView(0.05);
  const { ref: featRef, visible: featVisible } = useInView(0.2);

  const filtered =
    active === "All"
      ? solutions
      : solutions.filter((item) => item.category === active);

  const handleTab = (val: string) => {
    setActive(val);
    setHovered(null);
    setAnimKey((k) => k + 1);
  };

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (tabsRef.current) {
      const activeBtn = tabsRef.current.querySelector(".tab-active") as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [active]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .card-anim {
          opacity: 0;
          transform: translateX(-50px);
        }
        .card-anim.show {
          animation: slideInLeft 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .feat-item {
          opacity: 0;
          transform: translateX(-40px);
        }
        .feat-item.show {
          animation: slideInLeft 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        /* Tabs: scrollable strip, centered when enough space */
        .tabs-strip {
          display: flex;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          border-bottom: 1px solid #e5e7eb;
          justify-content: flex-start;
        }
        .tabs-strip::-webkit-scrollbar { display: none; }

        @media (min-width: 540px) {
          .tabs-strip {
            justify-content: center;
          }
        }

        .tab-link {
          background: none;
          border: none;
          border-bottom: 2.5px solid transparent;
          padding: 0 12px 12px 12px;
          margin-bottom: -1.5px;
          font-size: 14px;
          font-weight: 500;
          color: #888;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.2s, border-color 0.2s;
          font-family: 'Plus Jakarta Sans', sans-serif;
          min-height: 44px;
          display: flex;
          align-items: flex-end;
        }
        .tab-link:hover {
          color: #55226D;
        }
        .tab-link.tab-active {
          border-bottom-color: #55226D;
          color: #55226D;
          font-weight: 600;
        }

        /* Features bar: fix dividers for 2-col on mobile */
        @media (max-width: 767px) {
          .feat-bar > div:nth-child(odd)  { border-right: 1px solid #f3f4f6; }
          .feat-bar > div:nth-child(1),
          .feat-bar > div:nth-child(2)    { border-bottom: 1px solid #f3f4f6; }
        }
      `}</style>

      <section
        className="bg-[#f5f5f7] py-14"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">

          {/* HEADING */}
         {/* HEADING */}
{/* HEADING */}
<div className="text-center mb-8">
  <div className="flex items-center justify-center gap-3 mb-3">
    <div className="w-7 h-[2px] bg-[#55226D]" />
    <span className="text-[11px] font-semibold tracking-[.12em] uppercase text-[#55226D]">
      Smart Home
    </span>
    <div className="w-7 h-[2px] bg-[#55226D]" />
  </div>

  <h2
    className="text-3xl sm:text-5xl font-bold leading-tight"
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: "-0.015em",
    }}
  >
    <span className="text-[#55226D] inline-block">
      Our
      <span className="block  h-[3px] w-full bg-[#55226D]"></span>
    </span>{" "}
    <span className="text-orange-600 inline-block ml-2">
      Solutions
      <span className="block  h-[3px] w-full bg-orange-600"></span>
    </span>
  </h2>

  <p className="text-sm text-[#55226D] mt-4 opacity-70">
    Discover our most trusted smart home products designed for comfort,
    security, and control.
  </p>
</div>
          {/* CATEGORY TABS — scrollable on mobile, centered on desktop */}
          <div ref={tabsRef} className="tabs-strip mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleTab(cat.value)}
                className={`tab-link${active === cat.value ? " tab-active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID — 1 col mobile, 2 col from 480px, 3 col md+ */}
          <div
            key={animKey}
            ref={gridRef}
            className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {filtered.map((item, i) => (
              <div
                key={`${item.name}-${animKey}`}
                className={`card-anim bg-white overflow-hidden relative group flex flex-col ${gridVisible ? "show" : ""}`}
                style={{
                  borderRadius: "3px",
                  border: `1.5px solid ${hovered === i ? "#55226D" : "#e5e7eb"}`,
                  transition: "border-color .25s",
                  cursor: "pointer",
                  animationDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Purple tint overlay */}
                <div
                  className="absolute inset-0 bg-[#55226D] pointer-events-none z-10 transition-opacity duration-300"
                  style={{ opacity: hovered === i ? 0.05 : 0 }}
                />

                {/* Image */}
                <div className="aspect-video sm:h-[220px] overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-[#55226D] text-sm leading-snug mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#55226D] leading-relaxed flex-grow opacity-70">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-orange-600 font-bold text-[15px]">{item.price}</p>
                      <span className="text-[10px] text-gray-400">+ free setup</span>
                    </div>
                    <button
                      className="text-xs font-semibold text-white px-4 py-[9px] sm:py-[7px] transition-colors duration-200"
                      style={{ background: "#55226D", borderRadius: "3px" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#ea580c")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#55226D")}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
}