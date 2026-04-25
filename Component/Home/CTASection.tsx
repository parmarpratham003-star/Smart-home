"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* HERO FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <section
        className="bg-[#f5f5f7] py-12 md:py-16"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* HEADER PADDING MATCH */}
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 bg-white rounded-[3px] overflow-hidden shadow-md"
          >

            {/* LEFT IMAGE */}
            <div className="h-[220px] sm:h-[260px] md:h-full">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
                className="w-full h-full object-cover"
                alt="Smart Home"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-5 sm:p-6 md:p-10 flex flex-col justify-center">

              {/* HEADING (HERO STYLE) */}
              <h2
                className="text-2xl sm:text-3xl font-bold text-purple-700 leading-snug"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: "-0.015em",
                }}
              >
                Get <span className="text-orange-500">10% Off</span> On Your Home Setup
              </h2>

              <p className="text-purple-400 text-sm mt-3 mb-5 sm:mb-6 max-w-md">
                Join our community and receive exclusive offers and setup discounts.
              </p>

              {/* INPUT + BUTTON */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border border-gray-300 px-4 py-3 text-purple-400 rounded-[3px] text-sm outline-none focus:border-violet-500"
                />

                <button className="bg-purple-700 hover:bg-orange-600 text-white px-6 py-3 rounded-[3px] text-sm font-semibold transition w-full sm:w-auto">
                  Get Quote
                </button>
              </div>

            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
}