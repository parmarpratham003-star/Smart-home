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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const t = testimonials[current];

  const cardVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">

        {/* Heading — centered */}
        <div className="text-center mb-12 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-3"
          >
            <span className="text-violet-300">What Our </span>
            <span className="text-violet-600">Customers</span>
            <span className="text-orange-400"> Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-500 text-sm md:text-base leading-relaxed"
          >
            Trusted by homeowners across the country.
          </motion.p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute -left-2 sm:-left-10 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-300 transition-colors shadow-sm"
            aria-label="Previous"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Card */}
          <div className="w-full max-w-2xl overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-violet-50 border border-violet-100 rounded-2xl px-6 sm:px-10 md:px-12 py-8 md:py-10 text-center shadow-sm"
              >
                {/* Quote mark */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                  className="text-5xl leading-none mb-4 font-serif text-violet-600"
                >
                  "
                </motion.div>

                {/* Quote text — from left */}
                <motion.p
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                  className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8"
                >
                  {t.quote}
                </motion.p>

                {/* Avatar + name — from right */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm md:text-base tracking-tight">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">{t.role}</p>
                  </div>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute -right-2 sm:-right-10 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-300 transition-colors shadow-sm"
            aria-label="Next"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "#7c3aed" : "#ddd6fe",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}