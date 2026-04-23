"use client";

import React, { useState, useEffect, useRef } from "react";

const products = [
  {
    name: "Smart CCTV Camera",
    price: "₹4,999",
    desc: "HD video monitoring with night vision and mobile alerts.",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=400",
  },
  {
    name: "Smart LED Bulb",
    price: "₹1,299",
    desc: "Energy efficient smart bulb with remote control.",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=400",
  },
  {
    name: "Smart Plug",
    price: "₹899",
    desc: "Control your appliances remotely from anywhere.",
    img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=400",
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
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400",
  },
];

const CARD_WIDTH = 300;
const CARD_HEIGHT = 420;

const pillStyle = {
  fontSize: "10px",
  padding: "4px 10px",
  borderRadius: "999px",
  background: "#f3f3f0",
  color: "#6b7280",
};

export default function PopularSolutions() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);
  const total = products.length;

  const goTo = (idx: number) =>
    setCurrent(((idx % total) + total) % total);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) setCurrent((c) => (c + 1) % total);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // 🔥 TIGHT SPACING FIX HERE
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
      opacity = 1;
      zIndex = 10;
    } else if (abs === 1) {
      translateX = sign * CARD_WIDTH * 0.75; // ✅ tighter
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
      borderRadius: "22px",
      overflow: "hidden",
      left: "50%",
      marginLeft: `-${CARD_WIDTH / 2}px`,
    top: "40%", // 👈 moves cards up
transform: `translateY(-40%) translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
      background: "#fff",
      transition: "all 0.55s ease",
      boxShadow:
        abs === 0
          ? "0 20px 60px rgba(124,58,237,0.22)"
          : "0 8px 24px rgba(0,0,0,0.08)",
      cursor: abs === 0 ? "default" : "pointer",
    };
  };

  return (
   <section className="bg-white pt-10 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2d1b69]">
            Popular Solutions
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Discover our most trusted smart home products and services.
          </p>
        </div>

        {/* Carousel */}
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
                onClick={() => {
                  if (abs !== 0) goTo(i);
                }}
              >
                {/* Image */}
                <div style={{ height: "55%", background: "#f3f3f0" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: abs === 0 ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    height: "45%",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: abs === 0 ? "18px" : "14px",
                        color: "#2d1b69",
                      }}
                    >
                      {item.name}
                    </h3>

                    <div style={{ display: "flex", gap: "8px", fontSize: "11px", color: "#9ca3af" }}>
                      <span>Smart</span>
                      <span>Wireless</span>
                      <span>Secure</span>
                    </div>

                    <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "6px" }}>
                      {item.desc}
                    </p>

                    <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                      <span style={pillStyle}>AI</span>
                      <span style={pillStyle}>Cloud</span>
                      <span style={pillStyle}>HD</span>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <p style={{ color: "#f97316", fontWeight: 700 }}>
                        {item.price}
                      </p>
                      <span style={{ fontSize: "10px", color: "#9ca3af" }}>
                        + free setup
                      </span>
                    </div>

                    <button
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: "#7c3aed",
                        color: "#fff",
                        padding: "8px 14px",
                        borderRadius: "999px",
                        border: "none",
                        fontSize: "12px",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
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
  );
}