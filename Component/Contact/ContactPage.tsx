"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const itemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `all 0.7s ease ${i * 120}ms`;
    });

    setTimeout(() => {
      itemsRef.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }, 120);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .hero-font { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-heading { font-family: 'Cormorant Garamond', serif; }

        input::placeholder,
        textarea::placeholder {
          color: #9ca3af;
          opacity: 1;
        }

        @keyframes shiny-sweep {
          0% { left: -75%; }
          100% { left: 125%; }
        }
        .btn-shiny { position: relative; overflow: hidden; }
        .btn-shiny::after {
          content: "";
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.15) 35%,
            rgba(255,255,255,0.55) 50%,
            rgba(255,255,255,0.15) 65%,
            transparent 100%
          );
          transform: skewX(-15deg);
          opacity: 0;
        }
        .btn-shiny:hover::after {
          opacity: 1;
          animation: shiny-sweep 0.55s ease forwards;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .anim-l-1 { animation: slideInLeft  0.7s ease 0.05s both; }
        .anim-r-1 { animation: slideInRight 0.7s ease 0.05s both; }
        .anim-l-2 { animation: slideInLeft  0.7s ease 0.2s  both; }
        .anim-r-2 { animation: slideInRight 0.7s ease 0.2s  both; }
        .anim-l-3 { animation: slideInLeft  0.7s ease 0.35s both; }
        .anim-r-3 { animation: slideInRight 0.7s ease 0.35s both; }
        .anim-l-4 { animation: slideInLeft  0.7s ease 0.5s  both; }
        .anim-r-4 { animation: slideInRight 0.7s ease 0.5s  both; }
      `}</style>

      <section className="hero-font bg-white overflow-hidden">

        {/* ── TOP SPACER ── */}
        <div className="pt-16 sm:pt-20 md:pt-24" />

        {/* ── TOP HERO ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 min-h-[480px] rounded-[3px] overflow-hidden border border-gray-100">

            {/* LEFT: Image — hidden on mobile */}
            <div
              ref={(el) => { if (el) itemsRef.current[0] = el as HTMLElement; }}
              className="relative overflow-hidden hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Interior"
                className="w-full h-full object-cover min-h-[320px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#55226D]/40 to-transparent" />
              <div className="absolute top-7 left-7 bg-white/90 rounded-[3px] px-4 py-3 anim-l-1">
                <p className="uppercase tracking-[0.22em] text-[10px] font-semibold text-orange-500 mb-1">
                  Smart Living
                </p>
                <p className="hero-heading text-[#55226D] text-2xl font-extrabold leading-tight">
                  Designed<br />for you.
                </p>
              </div>
            </div>

            {/* RIGHT: Heading + contact info */}
            <div
              ref={(el) => { if (el) itemsRef.current[1] = el as HTMLElement; }}
              className="bg-white px-6 sm:px-10 py-10 sm:py-12 flex flex-col justify-center"
            >
              <p className="anim-l-1 uppercase tracking-[0.24em] text-[10px] font-semibold text-[#55226D] mb-4">
                Contact Us
              </p>

              <h2 className="hero-heading text-[#55226D] font-extrabold leading-[1.05] mb-5 text-4xl sm:text-5xl md:text-6xl">
                <span className="block anim-l-2">Love to hear</span>
                <span className="block anim-r-2">from you,</span>
                <span className="block anim-l-3">get in touch!</span>
              </h2>

              <p className="anim-r-3 text-[#55226D] text-sm leading-relaxed max-w-sm mb-10">
                We'd love to answer your questions, discuss your project,
                and help bring your smart living ideas to life.
              </p>

              <div className="anim-l-4 border-t border-gray-100 pt-7 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">
                {[
                  { icon: <Mail size={16} />, label: "Email", value: "support@smarthome.com" },
                  { icon: <Phone size={16} />, label: "Phone", value: "+91 9876543210" },
                  { icon: <MapPin size={16} />, label: "Address", value: "Tech City, India" },
                ].map(({ icon, label, value }, i) => (
                  <div
                    key={i}
                    className={`flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0
                      ${i < 2 ? "sm:border-r sm:border-gray-100 sm:pr-4 pb-4 sm:pb-0 border-b sm:border-b-0 border-gray-100" : ""}`}
                  >
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#55226D] flex items-center justify-center text-white sm:mb-3">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[#55226D] text-[10px] font-semibold uppercase tracking-[0.12em] mb-0.5">
                        {label}
                      </p>
                      <p className="text-[#55226D] text-xs leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Form + Map ── */}
        <div
          ref={(el) => { if (el) itemsRef.current[2] = el as HTMLElement; }}
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">

            {/* LEFT: Form */}
            <div>
              <div className="mb-8">
                <p className="anim-l-1 uppercase tracking-[0.24em] text-[10px] font-semibold text-orange-500 mb-2">
                  Contact Us
                </p>
                <h3 className="hero-heading text-[#55226D] font-extrabold mb-1 text-3xl sm:text-4xl">
                  <span className="block anim-l-2">Send us a message</span>
                </h3>
                <p className="anim-r-2 text-sm text-gray-400">
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full h-12 px-4 border border-gray-200 rounded-[3px] outline-none focus:border-[#55226D] text-sm text-[#55226D]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full h-12 px-4 border border-gray-200 rounded-[3px] outline-none focus:border-[#55226D] text-sm text-[#55226D]"
                  />
                </div>

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-4 border border-gray-200 rounded-[3px] outline-none focus:border-[#55226D] text-sm text-[#55226D]"
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-gray-400">
                    We typically respond within one business day.
                  </p>
                  <button
                    type="submit"
                    className="btn-shiny w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-3 rounded-[3px] text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT: Map */}
            <div className="rounded-[6px] overflow-hidden border border-gray-100 shadow-sm h-[300px] sm:h-[400px] lg:h-full lg:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.99883878408!2d72.74945487460933!3d23.02157400843855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              />
            </div>

          </div>
        </div>

      </section>
    </>
  );
}