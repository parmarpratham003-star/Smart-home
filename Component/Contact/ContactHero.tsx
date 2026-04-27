"use client";

import { useEffect, useRef } from "react";

export default function ContactHero() {
  const itemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      el.style.opacity = "0";
      el.style.transform =
        i % 2 === 0 ? "translateX(-35px)" : "translateX(35px)";
      el.style.transition = `all 0.7s ease ${i * 120}ms`;
    });

    setTimeout(() => {
      itemsRef.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      });
    }, 150);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .hero-font { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-heading { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <section
        className="hero-font w-full h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('hero4.png')" }}
      >
        <div className="w-full">
          <div className="max-w-[1250px] mx-auto px-6">

            <div className="max-w-[520px] text-white space-y-5 -mt-2 md:-mt-20">

              {/* Badge */}
              <div
                ref={(el) => {
                  if (el) itemsRef.current[0] = el;
                }}
                className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-purple-100"
              >
                <span className="h-[1.5px] w-5 bg-purple-200" />
                Contact Us
              </div>

              {/* Heading */}
              <h1
                ref={(el) => {
                  if (el) itemsRef.current[1] = el;
                }}
                className="hero-heading font-extrabold tracking-tight text-2xl sm:text-4xl md:text-5xl leading-[1.15]"
              >
                Let’s Start Your <br />
                Smart Living Journey
              </h1>

              {/* Text */}
              <p
                ref={(el) => {
                  if (el) itemsRef.current[2] = el;
                }}
                className="text-xs sm:text-sm md:text-base text-white/90 max-w-[380px] leading-relaxed"
              >
                Get in touch with our team for smart home solutions,
                interior ideas, support, and project consultations.
              </p>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}