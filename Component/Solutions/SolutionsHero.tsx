"use client";

import { useEffect, useRef } from "react";

export default function SolutionsHero() {
  const itemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      el.style.opacity = "0";
      el.style.transform =
        i % 2 === 0 ? "translateX(-40px)" : "translateX(40px)";
      el.style.transition = `all 0.7s ease ${i * 120}ms`;
    });

    setTimeout(() => {
      itemsRef.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      });
    }, 100);
  }, []);

  return (
    <section
      className="w-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[600px] bg-cover bg-center flex items-start pt-12 md:pt-16"
      style={{ backgroundImage: "url('shero1.png')" }}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">

          <div className="max-w-[520px] text-white space-y-7 sm:space-y-8 md:space-y-9">

            {/* BADGE */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[0] = el;
              }}
              className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-purple-200"
            >
              <span className="h-[1.5px] w-5 bg-purple-200" />
              Our Solutions
            </div>

            {/* HEADING */}
            <h1
              ref={(el) => {
                if (el) itemsRef.current[1] = el;
              }}
              className="font-extrabold tracking-tight text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] md:leading-[1.15]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Smart Solutions <br />
              for Your <span className="text-orange-400">Home</span>
            </h1>

            {/* TEXT */}
            <p
              ref={(el) => {
                if (el) itemsRef.current[2] = el;
              }}
              className="text-xs sm:text-sm text-white/80 max-w-[380px] leading-[1.7]"
            >
              Explore our range of smart home products and services designed to make your life easier, safer, and more efficient.
            </p>

            {/* BUTTON */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[3] = el;
              }}
            >
              <button className="relative overflow-hidden group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm rounded-[3px] font-semibold transition">

                Need Help →

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/40 skew-x-[-20deg] group-hover:animate-[shine_0.6s_forwards]" />
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes shine {
          100% { left: 150%; }
        }
      `}</style>
    </section>
  );
}