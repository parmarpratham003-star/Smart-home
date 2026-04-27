"use client";

import { useEffect, useRef } from "react";

export default function AboutIntroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textItemsRef = useRef<HTMLElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Image: start off-screen to the LEFT
    if (imageRef.current) {
      imageRef.current.style.opacity = "0";
      imageRef.current.style.transform = "translateX(-60px)";
      imageRef.current.style.transition = "opacity 0.85s ease 0ms, transform 0.85s ease 0ms";
    }

    // Text items: start off-screen to the RIGHT
    textItemsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateX(60px)";
      el.style.transition = `opacity 0.8s ease ${i * 150}ms, transform 0.8s ease ${i * 150}ms`;
    });

    // Trigger on scroll into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (imageRef.current) {
            imageRef.current.style.opacity = "1";
            imageRef.current.style.transform = "translateX(0)";
          }
          textItemsRef.current.forEach((el) => {
            if (!el) return;
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
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
          content: "";
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
        ref={sectionRef}
        className="relative bg-white overflow-hidden pt-8 sm:pt-10 md:pt-14 pb-3 hero-font"
      >

        {/* Left Lamp */}
        <div className="hidden lg:block absolute left-6 top-0 z-20">
          <img
            src="/lamp2.png"
            alt="Lamp Left"
            className="w-20 xl:w-28 h-auto object-contain"
          />
        </div>

        {/* Right Lamp */}
        <div className="hidden lg:block absolute right-4 top-0 z-20">
          <img
            src="/lamp1.png"
            alt="Lamp Right"
            className="w-36 xl:w-44 h-auto object-contain"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* LEFT IMAGE — slides in from left */}
            <div ref={imageRef} className="h-full">
              <div className="rounded-[3px] overflow-hidden shadow-md h-full">
                <img
                  src="/About1.png"
                  alt="Interior Design"
                  className="w-full h-[260px] sm:h-[340px] md:h-[430px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT — each item slides in from right */}
            <div className="max-w-xl flex flex-col justify-center h-full">

              <p
                ref={(el) => { if (el) textItemsRef.current[0] = el; }}
                className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-semibold text-orange-500 mb-3"
              >
                Who We Are
              </p>

              <h2
                ref={(el) => { if (el) textItemsRef.current[1] = el; }}
                className="hero-heading text-[#55226D] text-[30px] sm:text-4xl md:text-[54px] font-extrabold leading-[1.08] mb-5"
              >
                Creative Solutions by <br />
                Professional Designers
              </h2>

              <p
                ref={(el) => { if (el) textItemsRef.current[2] = el; }}
                className="text-[#55226D] text-sm sm:text-base leading-relaxed max-w-lg mb-6"
              >
                We create elegant interiors and smart living spaces that blend
                comfort, style, and functionality. Our expert team transforms
                ideas into modern spaces with premium design quality.
              </p>

              <div
                ref={(el) => { if (el) textItemsRef.current[3] = el; }}
              >
                <button className="btn-shiny bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-7 py-3 rounded-[3px] text-sm font-semibold transition-all duration-300 w-fit">
                  Discover More
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}