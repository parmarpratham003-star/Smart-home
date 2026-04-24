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

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">

        {/* HEADING + DESCRIPTION */}
        <div className="grid md:grid-cols-2 gap-6 items-center mb-14">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            <span className="text-violet-300">Why </span>
            <span className="text-violet-600">Choose</span>
            <span className="text-orange-400"> Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md md:ml-auto"
          >
            We are a technology-driven company focused on delivering innovative smart home solutions. 
            Our goal is to make homes safer, smarter, and more energy efficient.
          </motion.p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
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

          {/* RIGHT SIDE */}
          <Card
            title="24/7 Customer Support"
            desc="Our support team is available anytime to assist you with your smart home needs."
            extraTitle="Reliable Assistance"
            extraDesc="We ensure quick response and complete customer satisfaction."
            img="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
            direction="right"
            tall
          />

        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  desc,
  img,
  direction,
  big,
  tall,
  extraTitle,
  extraDesc,
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
      className={`relative rounded-2xl overflow-hidden group ${
        big ? "sm:col-span-2 h-[260px]" : ""
      } ${tall ? "min-h-[420px]" : "h-[200px]"}`}
    >
      {/* IMAGE */}
      <img
        src={img}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent 
                      opacity-0 group-hover:opacity-100 transition duration-500"></div>

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

        <p className="text-sm leading-relaxed mb-3 drop-shadow-md">
          {desc}
        </p>

        {extraTitle && (
          <div>
            <h4 className="font-medium">{extraTitle}</h4>
            <p className="text-sm opacity-80">{extraDesc}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}