"use client";

import { useEffect, useRef, useState } from "react";

function HomeIcon() {
  return (
    <svg className="block mx-auto" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="block mx-auto" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="block mx-auto" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="block mx-auto" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 
               19.79 19.79 0 01-8.63-3.07 
               19.5 19.5 0 01-6.12-6.12 
               A19.79 19.79 0 013 4.99 
               2 2 0 015 3h3a2 2 0 012 1.72 
               c.12.9.35 1.78.67 2.6 
               a2 2 0 01-.45 2.11L9.1 10.9 
               a16 16 0 006 6l1.47-1.47 
               a2 2 0 012.11-.45 
               c.82.32 1.7.55 2.6.67 
               A2 2 0 0122 16.92z" />
    </svg>
  );
}

const stats = [
  { icon: <HomeIcon />, target: 500, suffix: "+", label: "Smart Devices" },
  { icon: <UsersIcon />, target: 1000, suffix: "+", label: "Happy Customers" },
  { icon: <ShieldIcon />, target: 5, suffix: "+", label: "Years Experience" },
  { icon: <PhoneIcon />, target: 24, suffix: "/7", label: "Customer Support" },
];

function easeOutQuart(t: number) {
  return 1 - --t * t * t * t;
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(easeOutQuart(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, animate }: any) {
  const count = useCountUp(stat.target, 1800, animate);

  return (
    <div className="flex items-center gap-4 py-8 md:py-9 justify-center">

      {/* ICON */}
      <div className="w-14 h-14 rounded-full bg-[#5b45cc] flex items-center justify-center">
        {stat.icon}
      </div>

      {/* TEXT */}
      <div className="flex flex-col">
        <span className="font-bold text-white text-[22px] leading-tight">
          {stat.suffix === "/7"
            ? `${count}/7`
            : `${count.toLocaleString()}${stat.suffix}`}
        </span>

        <span className="text-[13px] mt-0.5 text-purple-300 font-medium whitespace-nowrap">
          {stat.label}
        </span>
      </div>

    </div>
  );
}

export default function StatsCounter() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#3d2b9e]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* FLEX RESPONSIVE (STYLE SAME) */}
        <div className="flex flex-wrap items-center justify-center">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-full sm:w-1/2 lg:w-1/4 relative"
            >

              <StatItem stat={stat} animate={animate} />

              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />
              )}

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}