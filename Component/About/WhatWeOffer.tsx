"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Smart Security",
    desc: "Advanced CCTV cameras, sensors, and systems to keep your home safe.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Smart Lighting",
    desc: "Intelligent lighting solutions to set the perfect mood and save energy.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Home Automation",
    desc: "Automate lights, fans, appliances and more from anywhere.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Energy Saving",
    desc: "Smart solutions to reduce energy consumption and lower your bills.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.08 4a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: "Installation & Support",
    desc: "Professional installation and 24/7 support for a hassle-free experience.",
  },
];

export default function WhatWeOffer() {
  const itemsRef = useRef<HTMLElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = i % 2 === 0 ? "translateY(50px)" : "translateY(30px)";
      el.style.transition = `all 0.9s ease ${i * 120}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          itemsRef.current.forEach((el) => {
            if (!el) return;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .hero-font    { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-heading { font-family: 'Cormorant Garamond', serif; }

        .offer-img {
          transition: transform 0.5s ease;
        }
        .offer-img-wrap:hover .offer-img {
          transform: scale(1.05);
        }

        .icon-card:hover {
          box-shadow: 0 12px 32px rgba(85,34,109,0.12);
          transform: translateY(-3px);
          transition: all 0.3s ease;
        }
        .icon-card:hover .icon-bg {
          background: #55226D;
          color: white;
        }
        .icon-bg {
          transition: background 0.3s ease, color 0.3s ease;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-[#f8f6f3] py-14 sm:py-16 md:py-20 hero-font overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

          {/* TOP CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-10 md:mb-14">

            <div ref={(el) => { if (el) itemsRef.current[0] = el; }}>
              <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-orange-500 mb-4">
                What We Offer
              </p>
              <h2 className="hero-heading text-[#55226D] text-4xl sm:text-5xl md:text-[58px] font-extrabold leading-[1.05]">
                Smart Living, <br />
                Smarter Spaces.
              </h2>
            </div>

            <div
              ref={(el) => { if (el) itemsRef.current[1] = el; }}
              className="md:pt-4"
            >
              <p className="text-[#55226D] text-sm sm:text-base leading-[1.9] max-w-md mb-6">
                From intelligent security to seamless home automation, we bring
                cutting-edge technology and thoughtful design together for a
                better everyday experience.
              </p>
             
            </div>

          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[170px] md:auto-rows-[220px]">

            {/* IMAGE 1 — tall, spans 2 rows */}
            <div
              ref={(el) => { if (el) itemsRef.current[2] = el; }}
              className="offer-img-wrap row-span-2 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                alt="Smart Security"
                className="offer-img w-full h-full object-cover"
              />
            </div>

            {/* ICON CARD 1 */}
            <div
              ref={(el) => { if (el) itemsRef.current[3] = el; }}
              className="icon-card bg-white rounded-2xl p-5 flex flex-col justify-center shadow-sm cursor-default"
            >
              <div className="icon-bg w-11 h-11 rounded-full bg-[#f3e8ff] text-[#55226D] flex items-center justify-center mb-3">
                {services[0].icon}
              </div>
              <h3 className="text-[#55226D] font-bold text-[14px] leading-snug">{services[0].title}</h3>
              <p className="text-[#55226D]/55 text-[12px] mt-1 leading-relaxed">{services[0].desc}</p>
            </div>

            {/* IMAGE 2 — tall, spans 2 rows */}
            <div
              ref={(el) => { if (el) itemsRef.current[4] = el; }}
              className="offer-img-wrap row-span-2 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
                alt="Smart Lighting"
                className="offer-img w-full h-full object-cover"
              />
            </div>

            {/* ICON CARD 2 */}
            <div
              ref={(el) => { if (el) itemsRef.current[5] = el; }}
              className="icon-card bg-white rounded-2xl p-5 flex flex-col justify-center shadow-sm cursor-default"
            >
              <div className="icon-bg w-11 h-11 rounded-full bg-[#f3e8ff] text-[#55226D] flex items-center justify-center mb-3">
                {services[1].icon}
              </div>
              <h3 className="text-[#55226D] font-bold text-[14px] leading-snug">{services[1].title}</h3>
              <p className="text-[#55226D]/55 text-[12px] mt-1 leading-relaxed">{services[1].desc}</p>
            </div>

            {/* ICON CARD 3 */}
            <div
              ref={(el) => { if (el) itemsRef.current[6] = el; }}
              className="icon-card bg-white rounded-2xl p-5 flex flex-col justify-center shadow-sm cursor-default"
            >
              <div className="icon-bg w-11 h-11 rounded-full bg-[#f3e8ff] text-[#55226D] flex items-center justify-center mb-3">
                {services[2].icon}
              </div>
              <h3 className="text-[#55226D] font-bold text-[14px] leading-snug">{services[2].title}</h3>
              <p className="text-[#55226D]/55 text-[12px] mt-1 leading-relaxed">{services[2].desc}</p>
            </div>

            {/* IMAGE 3 */}
            <div
              ref={(el) => { if (el) itemsRef.current[7] = el; }}
              className="offer-img-wrap rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                alt="Home Automation"
                className="offer-img w-full h-full object-cover"
              />
            </div>

            {/* ICON CARD 4 */}
            <div
              ref={(el) => { if (el) itemsRef.current[8] = el; }}
              className="icon-card bg-white rounded-2xl p-5 flex flex-col justify-center shadow-sm cursor-default"
            >
              <div className="icon-bg w-11 h-11 rounded-full bg-[#f3e8ff] text-[#55226D] flex items-center justify-center mb-3">
                {services[3].icon}
              </div>
              <h3 className="text-[#55226D] font-bold text-[14px] leading-snug">{services[3].title}</h3>
              <p className="text-[#55226D]/55 text-[12px] mt-1 leading-relaxed">{services[3].desc}</p>
            </div>

            {/* IMAGE 4 */}
            <div
              ref={(el) => { if (el) itemsRef.current[9] = el; }}
              className="offer-img-wrap rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Energy Saving"
                className="offer-img w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}