"use client";

import React, { useState, useEffect, useRef } from "react";

const products = [
  {
    name: "Smart CCTV Camera",
    price: "₹4,999",
    desc: "HD video monitoring with night vision and mobile alerts.",
    img: "https://images.unsplash.com/photo-1729839206142-d03c98f921fd?q=80&w=870&auto=format&fit=crop",
  },
  {
    name: "Smart LED Bulb",
    price: "₹1,299",
    desc: "Energy efficient smart bulb with remote control.",
    img: "https://images.unsplash.com/photo-1619559451460-b15f60bcdfdd?w=500",
  },
  {
    name: "Smart Plug",
    price: "₹899",
    desc: "Control your appliances remotely from anywhere.",
    img: "https://plus.unsplash.com/premium_photo-1729491126310-5686343f468c?w=500",
  },
  {
    name: "Home Automation Hub",
    price: "₹5,999",
    desc: "Control all your smart devices from a single hub.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400",
  },
  {
    name: "Smart Doorbell",
    price: "₹3,499",
    desc: "See and speak to visitors from anywhere with HD video.",
    img: "https://plus.unsplash.com/premium_photo-1729436833449-225649403fc0?w=500",
  },
];

const CARD_WIDTH = 300;
const CARD_HEIGHT = 420;

export default function PopularSolutions() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<any>(null);
  const isPausedRef = useRef(false);
  const total = products.length;

  const goTo = (idx: number) =>
    setCurrent(((idx % total) + total) % total);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) setCurrent((c: number) => (c + 1) % total);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const getStyle = (i: number): React.CSSProperties => {
    const offset = ((i - current + total) % total + total) % total;
    const norm = offset > total / 2 ? offset - total : offset;
    const abs = Math.abs(norm);
    const sign = norm >= 0 ? 1 : -1;

    let translateX = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;

    if (abs === 0) {
      translateX = 0;
      scale = 1;
      zIndex = 10;
    } else if (abs === 1) {
      translateX = sign * CARD_WIDTH * 0.75;
      scale = 0.88;
      opacity = 0.9;
      zIndex = 8;
    } else if (abs === 2) {
      translateX = sign * CARD_WIDTH * 1.3;
      scale = 0.75;
      opacity = 0.7;
      zIndex = 6;
    } else {
      translateX = sign * CARD_WIDTH * 1.9;
      scale = 0.6;
      opacity = 0;
      zIndex = 1;
    }
return {
  position: "absolute",
  width: `${CARD_WIDTH}px`,
  height: `${CARD_HEIGHT}px`,
  borderRadius: "3px",
  overflow: "hidden",
  left: "50%",
  marginLeft: `-${CARD_WIDTH / 2}px`,
  top: "45%",
  transform: `translateY(-45%) translateX(${translateX}px) scale(${scale})`,
  opacity,
  zIndex,
  background: "#fff",
  transition: "all 0.5s ease",

  boxShadow: "none", // removed
  border: "1px solid #eee", // ✅ FIX
  filter: abs === 0 ? "none" : "blur(1px)", // ✅ OPTIONAL PREMIUM

  cursor: abs === 0 ? "default" : "pointer",
};
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <section
        className="bg-white pt-6 pb-15 overflow-hidden"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">

          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#55226D]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "-0.015em",
              }}
            >
              Popular <span className="text-orange-500">Solutions</span>
            </h2>

            <p className="text-[#55226D] mt-3 text-sm max-w-md mx-auto">
              Discover our most trusted smart home products designed for comfort, security, and control.
            </p>
          </div>

          <div
            className="relative flex items-center justify-center"
            style={{ height: "480px" }}
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
          >
            {products.map((item, i) => {
              const offset = ((i - current + total) % total + total) % total;
              const norm = offset > total / 2 ? offset - total : offset;
              const abs = Math.abs(norm);

              return (
                <div
                  key={i}
                  style={getStyle(i)}
                  onClick={() => abs !== 0 && goTo(i)}
                >
                  <div className="h-[55%] bg-gray-100">
                    <img
                      src={item.img}
                      alt={item.name}
                      className={`w-full h-full object-cover transition duration-500 ${
                        abs === 0 ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>

                  <div className="h-[45%] p-5 flex flex-col justify-between">

                    <div>
                      <h3 className="font-bold text-[#55226D] text-lg">
                        {item.name}
                      </h3>

                      <p className="text-purple-950 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <p className="text-orange-600 font-bold">
                          {item.price}
                        </p>
                        <span className="text-xs text-gray-400">
                          + free setup
                        </span>
                      </div>

                      <button className="bg-[#55226D] text-white px-4 py-2 rounded-[3px] text-sm font-semibold hover:bg-orange-600 transition">
                        Add
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}