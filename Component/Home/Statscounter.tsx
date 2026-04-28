"use client";

import { useEffect, useRef, useState } from "react";

function HomeIcon() {
  return (
    <svg
      className="block mx-auto w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7" />
      <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
      <path d="M9 22v-10h6v10" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      className="block mx-auto w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M7 18c0-3 2.2-5 5-5s5 2 5 5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="block mx-auto w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="block mx-auto w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.12-6.12A19.79 19.79 0 0 1 3 4.99 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.67 2.6a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.82.32 1.7.55 2.6.67A2 2 0 0 1 22 16.92z" />
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

function StatItem({
  stat,
  animate,
}: {
  stat: typeof stats[0];
  animate: boolean;
}) {
  const count = useCountUp(stat.target, 1800, animate);

  return (
    <div className="flex items-center gap-3 sm:gap-4 justify-center py-5 sm:py-7 md:py-9 w-full">

      {/* Icon Circle */}
      <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#6b2d85] flex items-center justify-center">
        {stat.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col text-left min-w-0">
        <span className="font-bold text-white text-lg sm:text-[22px] leading-tight">
          {stat.suffix === "/7"
            ? `${count}/7`
            : `${count.toLocaleString()}${stat.suffix}`}
        </span>

        <span className="text-[11px] sm:text-[13px] mt-0.5 text-purple-200 font-medium whitespace-nowrap">
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
    <div className="w-full bg-[#55226D]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        <div className="grid grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center min-h-[110px] sm:min-h-auto"
            >
              <StatItem stat={stat} animate={animate} />

              {/* Mobile Vertical Divider */}
              {i % 2 === 0 && (
                <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />
              )}

              {/* Desktop Divider */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />
              )}

              {/* Mobile Horizontal Divider */}
              {i < 2 && (
                <div className="lg:hidden absolute bottom-0 left-4 right-4 h-px bg-white/20" />
              )}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}