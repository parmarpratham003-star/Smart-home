"use client";

import React, { useState, useEffect, useRef } from "react";

const products = [
  {
    name: "Smart CCTV Camera",
    price: "₹4,999",
    desc: "HD video monitoring with night vision and mobile alerts.",
    img: "https://images.unsplash.com/photo-1729839206142-d03c98f921fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smart LED Bulb",
    price: "₹1,299",
    desc: "Energy efficient smart bulb with remote control.",
    img: "https://images.unsplash.com/photo-1619559451460-b15f60bcdfdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNtYXJ0JTIwTEVEJTIwQnVsYnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Smart Plug",
    price: "₹899",
    desc: "Control your appliances remotely from anywhere.",
    img: "https://plus.unsplash.com/premium_photo-1729491126310-5686343f468c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBQbHVnfGVufDB8fDB8fHww",
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
    img: "https://plus.unsplash.com/premium_photo-1729436833449-225649403fc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBEb29yYmVsbHxlbnwwfHwwfHx8MA%3D%3D",
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
      borderRadius: "20px",
      overflow: "hidden",
      left: "50%",
      marginLeft: `-${CARD_WIDTH / 2}px`,
      top: "45%",
      transform: `translateY(-45%) translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
      background: "#fff",
      transition: "all 0.5s ease",
      boxShadow:
        abs === 0
          ? "0 20px 60px rgba(124,58,237,0.25)"
          : "0 8px 20px rgba(0,0,0,0.08)",
      cursor: abs === 0 ? "default" : "pointer",
    };
  };

  return (
    <section className="bg-white pt-12 pb-20 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b69]">
            Popular <span className="text-orange-500">Solutions</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
            Discover our most trusted smart home products designed for comfort, security, and control.
          </p>
        </div>

        {/* CAROUSEL */}
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
                {/* IMAGE */}
                <div className="h-[55%] bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`w-full h-full object-cover transition duration-500 ${
                      abs === 0 ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>

                {/* CONTENT */}
                <div className="h-[45%] p-5 flex flex-col justify-between">

                  <div>
                    <h3 className="font-bold text-[#2d1b69] text-lg">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-orange-500 font-bold">
                        {item.price}
                      </p>
                      <span className="text-xs text-gray-400">
                        + free setup
                      </span>
                    </div>

                    <button className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-violet-700 transition">
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