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
    <>
      {/* FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .hero-font { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-heading { font-family: 'Cormorant Garamond', serif; }

        @keyframes shiny-sweep {
          0% { left: -75%; }
          100% { left: 125%; }
        }

        .btn-shiny {
          position: relative;
          overflow: hidden;
        }

        .btn-shiny::after {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.15) 35%,
            rgba(255,255,255,0.55) 50%,
            rgba(255,255,255,0.15) 65%,
            transparent 100%
          );
          transform: skewX(-15deg);
          opacity: 0;
        }

        .btn-shiny:hover::after {
          opacity: 1;
          animation: shiny-sweep 0.55s ease forwards;
        }
      `}</style>

      <section
        className="hero-font w-full min-h-[480px] sm:min-h-[540px] md:min-h-[500px] bg-cover bg-center flex items-start pt-8 sm:pt-10 md:pt-12"
        style={{ backgroundImage: "url('shero1.png')" }}
      >
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

            <div className="max-w-[520px] text-white space-y-4 sm:space-y-5 md:space-y-6">

              {/* BADGE */}
              <div
                ref={(el) => { if (el) itemsRef.current[0] = el; }}
                className="flex items-center gap-2 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-purple-100"
              >
                <span className="h-[1.5px] w-5 bg-purple-200" />
                Our Solutions
              </div>

              {/* HEADING */}
              <h1
                ref={(el) => { if (el) itemsRef.current[1] = el; }}
                className="hero-heading font-extrabold tracking-tight text-white 
                text-2xl sm:text-3xl md:text-5xl 
                leading-[1.2]"
              >
                Smart Solutions <br />
                for Your <span className="text-orange-400">Home</span>
              </h1>

              {/* TEXT */}
              <p
                ref={(el) => { if (el) itemsRef.current[2] = el; }}
                className="text-xs sm:text-sm md:text-base 
                text-white/80 
                max-w-[280px] sm:max-w-[320px] md:max-w-[350px] 
                leading-relaxed mt-1"
              >
                Explore our range of smart home products and services designed to make your life easier, safer, and more efficient.
              </p>

              {/* BUTTON */}
              <div ref={(el) => { if (el) itemsRef.current[3] = el; }}>
                <button className="btn-shiny flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 text-xs sm:text-sm rounded-[3px] font-semibold transition">
                  Need Help →
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}