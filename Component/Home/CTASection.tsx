"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#f5f5f7] py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-md"
        >

          {/* LEFT IMAGE */}
          <div className="h-[250px] md:h-full">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
              className="w-full h-full object-cover"
              alt="Smart Home"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-6 md:p-10 flex flex-col justify-center">

            <h2 className="text-2xl md:text-3xl font-bold text-[#2d1b69] leading-snug">
              Get <span className="text-orange-500">10% Off</span> On Your Home Setup
            </h2>

            <p className="text-gray-500 text-sm mt-3 mb-6 max-w-md">
              Join our community and receive exclusive offers and setup discounts.
            </p>

            {/* INPUT + BUTTON */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-300 px-4 py-3 text-violet-400 rounded-md text-sm outline-none focus:border-violet-500"
              />

              <button className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-md text-sm font-semibold transition">
                Get Quote
              </button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}