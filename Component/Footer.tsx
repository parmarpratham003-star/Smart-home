  "use client";
  import { useState } from "react";

  const HomeIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" fill="#fff" opacity="0.2"/>
      <path d="M3 9.5L12 3l9 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21V12h6v9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="5" y="9" width="14" height="12" rx="1" stroke="#fff" strokeWidth="2"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );

  const quickLinks = ["Home", "Solutions", "About Us", "Contact Us"];
  const solutions = ["Smart Lighting", "Security System", "Home Automation", "Energy Saving"];
  const socialIcons = [<FacebookIcon />, <TwitterIcon />, <InstagramIcon />, <LinkedInIcon />];

  export default function Footer() {
    const [email, setEmail] = useState("");

    return (
      <footer className="bg-indigo-950 text-white font-sans">

        {/* ── MAIN FOOTER ── */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <HomeIcon />
              <span className="text-xl font-extrabold tracking-tight">
                Smart<span className="text-orange-500">Home</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-white/70 text-sm leading-relaxed">
              Smart solutions for a better tomorrow. We provide innovative and reliable smart home products to make your life easier and safer.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-1">
              {socialIcons.map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white bg-transparent hover:bg-white/15 hover:border-white/60 transition-colors duration-200 cursor-pointer"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-orange-400 transition-colors duration-200 no-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Our Solutions */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white">Our Solutions</h4>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {solutions.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-orange-400 transition-colors duration-200 no-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white">Newsletter</h4>
            <p className="text-white/70 text-sm">Subscribe to get updates and offers.</p>
            <div className="flex items-stretch rounded-lg overflow-hidden border border-white/10">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white text-gray-700 placeholder-gray-400 text-sm px-4 py-2.5 outline-none border-none min-w-0"
              />
              <button className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-4 py-2.5 border-none cursor-pointer transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/60 text-sm">© 2024 SmartHome. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors duration-200 no-underline">Privacy Policy</a>
              <span className="text-white/30">|</span>
              <a href="#" className="hover:text-white transition-colors duration-200 no-underline">Terms & Conditions</a>
            </div>
          </div>
        </div>

      </footer>
    );
  }