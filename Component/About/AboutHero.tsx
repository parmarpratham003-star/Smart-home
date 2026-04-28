"use client";

import { useEffect, useRef } from "react";

export default function AboutHero() {
  const itemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      el.style.opacity = "0";
      el.style.transform =
        i % 2 === 0 ? "translateX(-30px)" : "translateX(30px)";
      el.style.transition = `all 0.6s ease ${i * 100}ms`;
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .hero-font { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-heading { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <section
        className="hero-font w-full h-[420px] sm:h-[460px] md:h-[500px] bg-cover bg-center flex items-start md:items-center"
        style={{ backgroundImage: "url('hero2.png')" }}
      >
        <div className="w-full pt-14 sm:pt-16 md:pt-0">
          <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
            <div className="max-w-[520px] text-white space-y-4 sm:space-y-5 md:-mt-25">

              {/* BADGE */}
              <div
                ref={(el) => {
                  if (el) itemsRef.current[0] = el;
                }}
                className="flex items-center gap-2 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-purple-100"
              >
                <span className="h-[1.5px] w-4 sm:w-5 bg-purple-200" />
                About Us
              </div>

              {/* HEADING */}
              <h1
                ref={(el) => {
                  if (el) itemsRef.current[1] = el;
                }}
                className="hero-heading font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.15] sm:leading-[1.2]"
              >
                Designing Smart Living <br />
                with <span className="text-orange-400">Elegance</span>
              </h1>

              {/* TEXT */}
              <p
                ref={(el) => {
                  if (el) itemsRef.current[2] = el;
                }}
                className="text-[13px] sm:text-sm md:text-base text-white/90 max-w-full sm:max-w-[360px] leading-relaxed"
              >
                We craft innovative smart home experiences that combine
                technology, comfort, and modern design to elevate your everyday
                living.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}