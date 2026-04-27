"use client";

import { motion } from "framer-motion";

type CardProps = {
  title: string;
  desc: string;
  img: string;
  direction: "left" | "right" | "bottom";
  big?: boolean;
  tall?: boolean;
  extraTitle?: string;
  extraDesc?: string;
};

export default function AboutWhyChoose() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <section
        className="bg-white pb-15 py-15 overflow-hidden"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">

          {/* HEADER */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-14">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="tracking-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px,4vw,48px)",
                fontWeight: 800,
                letterSpacing: "-0.015em",
              }}
            >
              <span className="text-[#55226D]">Why </span>
              <span className="text-orange-400">Choose</span>
              <span className="text-orange-400"> Us</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#55226D] text-sm md:text-base leading-relaxed max-w-md md:ml-auto"
            >
              We are a technology-driven company focused on delivering innovative smart home solutions.
            </motion.p>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="md:col-span-2 grid sm:grid-cols-2 gap-6"
            >

              <Card
                title="Experienced & Certified Team"
                desc="Our skilled professionals ensure high-quality installation and reliable service."
                img="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800"
                direction="left"
              />

              <Card
                title="Latest Smart Home Technology"
                desc="We use cutting-edge technology to provide advanced and efficient home automation solutions."
                img="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
                direction="left"
              />

              <Card
                title="Affordable Pricing"
                desc="Get premium smart home solutions at competitive and budget-friendly prices."
                img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
                direction="bottom"
                big
              />

            </motion.div>

            <Card
              title="24/7 Customer Support"
              desc="Our support team is available anytime to assist you with your smart home needs."
              img="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
              direction="right"
              tall
            />

          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  title,
  desc,
  img,
  direction,
  big,
  tall,
}: CardProps) {
  const animation =
    direction === "left"
      ? { x: -100, opacity: 0 }
      : direction === "right"
      ? { x: 100, opacity: 0 }
      : { y: 80, opacity: 0 };

  return (
    <motion.div
      variants={{
        hidden: animation,
        visible: { x: 0, y: 0, opacity: 1 },
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative overflow-hidden group ${
        big ? "sm:col-span-2 h-[260px]" : ""
      } ${tall ? "min-h-[420px]" : "h-[200px]"}`}
      style={{ borderRadius: "3px" }}
    >
      <img
        src={img}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* BASE OVERLAY */}
    <div className="absolute inset-0 
                bg-gradient-to-t 
                from-black/40 
                via-black/10 
                to-transparent"></div>

      {/* HOVER BLACK OVERLAY */}
     <div className="absolute inset-0 
                bg-black/30 
                opacity-0 
                group-hover:opacity-100 
                transition duration-500"></div>
      {/* TITLE */}
      <h3 className="absolute bottom-5 left-5 text-white text-lg font-semibold z-10 drop-shadow-md
                     transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
        {title}
      </h3>

      {/* HOVER CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white z-20
                      opacity-0 translate-y-full
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-500">

        <p className="text-sm leading-relaxed drop-shadow-md">
          {desc}
        </p>

      </div>
    </motion.div>
  );
}