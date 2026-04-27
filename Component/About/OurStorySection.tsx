"use client";

import { useEffect, useRef } from "react";

export default function OurStorySection() {
  const itemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      el.style.opacity = "0";
      el.style.transform =
        i % 2 === 0 ? "translateY(50px)" : "translateY(30px)";
      el.style.transition = `all 0.9s ease ${i * 120}ms`;
    });

    setTimeout(() => {
      itemsRef.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
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

      <section className="bg-[#f8f6f3] py-14 sm:py-16 md:py-20 hero-font overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

          {/* TOP CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-10 md:mb-14">

            <div
              ref={(el) => {
                if (el) itemsRef.current[0] = el;
              }}
            >
              <p className="text-[11px] tracking-[0.28em] uppercase font-semibold text-orange-500 mb-4">
                Our Story
              </p>

              <h2 className="hero-heading text-[#55226D] text-4xl sm:text-5xl md:text-[58px] font-extrabold leading-[1.05]">
                Designing Spaces, <br />
                Defining Style.
              </h2>
            </div>

            <div
              ref={(el) => {
                if (el) itemsRef.current[1] = el;
              }}
              className="md:pt-4"
            >
              <p className="text-[#55226D] text-sm sm:text-base leading-[1.9] max-w-md mb-6">
                Since our beginning, we’ve transformed modern homes with smart
                technology, elegant interiors, and thoughtful design that
                improves everyday living.
              </p>

              <button className="bg-[#2c2c2c] hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition">
                Get It Now
              </button>
            </div>

          </div>

          {/* GRID CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[170px] md:auto-rows-[220px]">

            {/* IMAGE 1 */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[2] = el;
              }}
              className="row-span-2 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT CARD */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[3] = el;
              }}
              className="bg-white rounded-2xl p-5 flex flex-col justify-center shadow-sm"
            >
              <h3 className="hero-heading text-[#55226D] text-4xl font-bold">
                8+
              </h3>
              <p className="text-sm text-gray-500 mt-2">Years Experience</p>
            </div>

            {/* IMAGE 2 */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[4] = el;
              }}
              className="row-span-2 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Home"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT CARD */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[5] = el;
              }}
              className="bg-white rounded-2xl p-5 flex flex-col justify-center shadow-sm"
            >
              <h3 className="hero-heading text-[#55226D] text-4xl font-bold">
                50+
              </h3>
              <p className="text-sm text-gray-500 mt-2">Homes Designed</p>
            </div>

            {/* TEXT CARD */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[6] = el;
              }}
              className="bg-white rounded-2xl p-5 flex flex-col justify-center shadow-sm"
            >
              <h3 className="hero-heading text-[#55226D] text-4xl font-bold">
                150+
              </h3>
              <p className="text-sm text-gray-500 mt-2">Projects Completed</p>
            </div>

            {/* IMAGE 3 */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[7] = el;
              }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT CARD */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[8] = el;
              }}
              className="bg-white rounded-2xl p-5 flex flex-col justify-center shadow-sm"
            >
              <h3 className="hero-heading text-[#55226D] text-4xl font-bold">
                120+
              </h3>
              <p className="text-sm text-gray-500 mt-2">Happy Clients</p>
            </div>

            {/* IMAGE 4 */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[9] = el;
              }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                alt="Decor"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}