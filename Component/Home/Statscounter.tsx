"use client";

import { useEffect, useRef, useState } from "react";

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18 2 2 0 014.99 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z" />
    </svg>
  );
}

const stats = [
  { icon: <HomeIcon />,   target: 500,  suffix: "+",  label: "Smart Devices" },
  { icon: <UsersIcon />,  target: 1000, suffix: "+",  label: "Happy Customers" },
  { icon: <ShieldIcon />, target: 5,    suffix: "+",  label: "Years Experience" },
  { icon: <PhoneIcon />,  target: 24,   suffix: "/7", label: "Customer Support" },
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

function StatItem({
  stat,
  index,
  animate,
  isFirst,
}: {
  stat: (typeof stats)[0];
  index: number;
  animate: boolean;
  isFirst?: boolean;
}) {
  const count = useCountUp(stat.target, 1800, animate);
  const delay = index * 130;

  return (
    <div
      className={`flex items-center gap-4 py-9 flex-1 ${isFirst ? "pl-0 pr-8" : "px-8"}`}
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {/* Circle icon */}
      <div
        className="flex-shrink-0 w-14 h-14 rounded-full bg-[#5b45cc] flex items-center justify-center"
        style={{
          transform: animate ? "scale(1)" : "scale(0.6)",
          opacity: animate ? 1 : 0,
          transition: `transform 0.5s cubic-bezier(.34,1.56,.64,1) ${delay + 60}ms, opacity 0.4s ease ${delay + 60}ms`,
        }}
      >
        {stat.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className="text-white font-bold leading-tight"
          style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.65rem" }}
        >
          {stat.suffix === "/7"
            ? `${count}/7`
            : `${count.toLocaleString()}${stat.suffix}`}
        </span>
        <span
          className="text-white/70 text-sm font-normal mt-0.5"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap');
      `}</style>

      <div className="w-full bg-[#3d2b9e]" ref={ref}>

        {/* Desktop */}
        <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center flex-1">
                <StatItem stat={stat} index={i} animate={animate} isFirst={i === 0} />
                {i < stats.length - 1 && (
                  <div className="flex-shrink-0 w-px h-8 bg-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: 2x2 */}
        <div className="flex flex-col sm:hidden">
          <div className="flex items-center px-4">
            {stats.slice(0, 2).map((stat, i) => (
              <div key={stat.label} className="flex items-center flex-1">
                <StatItem stat={stat} index={i} animate={animate} isFirst={i === 0} />
                {i === 0 && <div className="flex-shrink-0 w-px h-8 bg-white/30" />}
              </div>
            ))}
          </div>
          <div className="border-t border-white/20 flex items-center px-4">
            {stats.slice(2).map((stat, i) => (
              <div key={stat.label} className="flex items-center flex-1">
                <StatItem stat={stat} index={i + 2} animate={animate} isFirst={i === 0} />
                {i === 0 && <div className="flex-shrink-0 w-px h-8 bg-white/30" />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}