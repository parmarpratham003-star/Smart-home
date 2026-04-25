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
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <section
        className="bg-white pt-8 pb-14 md:pt-10 md:pb-16 overflow-hidden"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10">

          {/* ✅ HEADING FIXED */}
          <div className="text-center mb-8 md:mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                letterSpacing: "-0.015em",
              }}
            >
              <span className="text-purple-400">What Our </span>
              <span className="text-purple-700">Customers</span>
              <span className="text-orange-400"> Say</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-purple-400 text-sm mt-2"
            >
              Trusted by homeowners across the country.
            </motion.p>
          </div>

          {/* SLIDER */}
          <div className="relative">

            {/* PREV */}
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-purple-200 text-purple-500 hover:text-purple-700 flex items-center justify-center shadow-sm"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-purple-200 text-purple-500 hover:text-purple-700 flex items-center justify-center shadow-sm"
            >
              ›
            </button>

            {/* CARD */}
            <div className="max-w-2xl mx-auto">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="bg-purple-50 border border-purple-100 rounded-[3px] px-5 sm:px-10 py-6 text-center"
                >
                 <div className="flex justify-center mb-4">
                  <div className="text-purple-700 text-5xl leading-none font-bold">
                    “
                  </div>
                </div>

                  <p className="text-purple-500 text-sm md:text-base max-w-xl mx-auto mb-6">
                    {t.quote}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold text-sm">
                      {t.avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-purple-900 text-sm">
                        {t.name}
                      </p>
                      <p className="text-purple-400 text-xs">
                        {t.role}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-purple-700" : "w-2 bg-purple-300"
                }`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}