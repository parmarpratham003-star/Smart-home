"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "SmartHome transformed the way we live. The automation and security solutions are reliable, easy to use, and truly smart!",
    name: "Rahul Sharma",
    role: "Homeowner",
    avatar: "RS",
  },
  {
    quote:
      "The installation was seamless and the support team was incredibly helpful. Our home feels safer and more efficient than ever.",
    name: "Priya Mehta",
    role: "Interior Designer",
    avatar: "PM",
  },
  {
    quote:
      "I love how everything connects together. Controlling lights, locks, and cameras from one app is a game changer for our family.",
    name: "Arjun Patel",
    role: "Software Engineer",
    avatar: "AP",
  },
  {
    quote:
      "Exceptional product quality and outstanding customer service. SmartHome has exceeded all my expectations in every way.",
    name: "Neha Kapoor",
    role: "Business Owner",
    avatar: "NK",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef<any>(null);

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  };

  const prev = () => {
    const idx = (current - 1 + testimonials.length) % testimonials.length;
    goTo(idx, -1);
  };

  const next = () => {
    const idx = (current + 1) % testimonials.length;
    goTo(idx, 1);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const t = testimonials[current];

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <section
        className="bg-white pt-14 sm:pt-16 md:pt-24 pb-16 sm:pb-18 md:pb-24 overflow-hidden"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="flex flex-wrap justify-center gap-x-2 gap-y-1 leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px,8vw,48px)",
                  fontWeight: 800,
                }}
              >
                <span className="text-[#55226D] border-b-[3px] border-[#55226D] pb-1">
                  What Our
                </span>

                <span className="text-orange-600 border-b-[3px] border-orange-600 pb-1">
                  Customers Say
                </span>
              </h2>
              <p className="text-[#55226D] text-sm leading-relaxed mt-2">
                Smart solutions designed to make your home safer and more comfortable.
              </p>

            </motion.div>
          </div>

          {/* Slider */}
          <div className="relative">

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-0 sm:left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-purple-200 text-purple-500 shadow-sm flex items-center justify-center"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-0 sm:right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-purple-200 text-purple-500 shadow-sm flex items-center justify-center"
            >
              ›
            </button>

            {/* Card */}
            <div className="max-w-3xl mx-auto px-10 sm:px-14 md:px-16">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45 }}
                  className="bg-purple-50 rounded-[3px] px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 text-center min-h-[320px] sm:min-h-[290px]"
                >
                  {/* Quote */}
                  <div className="flex justify-center mb-4 sm:mb-5">
                    <span
                      className="text-[#55226D] font-bold"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "44px",
                        lineHeight: 1,
                        letterSpacing: "-8px",
                      }}
                    >
                      “
                    </span>
                  </div>

                  {/* Text */}
                  <p className="text-[#55226D] text-sm sm:text-base leading-relaxed mb-7 max-w-xl mx-auto">
                    {t.quote}
                  </p>

                  {/* User */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-orange-600 text-white text-sm font-semibold flex items-center justify-center">
                      {t.avatar}
                    </div>

                    <div className="text-left">
                      <p className="text-[#55226D] font-semibold text-sm sm:text-base">
                        {t.name}
                      </p>
                      <p className="text-[#55226D] text-xs sm:text-sm">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 bg-[#55226D]"
                    : "w-2 bg-[#55226D]"
                }`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}