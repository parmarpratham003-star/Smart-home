"use client";

export default function ContactHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .hero-font { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-heading { font-family: 'Cormorant Garamond', serif; }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide {
          opacity: 0;
          animation: slideInLeft 0.8s ease forwards;
        }

        .animate-slide:nth-child(1) { animation-delay: 150ms; }
        .animate-slide:nth-child(2) { animation-delay: 290ms; }
        .animate-slide:nth-child(3) { animation-delay: 430ms; }
      `}</style>

      <section
        className="hero-font w-full h-[420px] sm:h-[470px] md:h-[500px] bg-cover bg-center flex items-start pt-12 sm:pt-16 md:pt-20"
        style={{ backgroundImage: "url('hero5.png')" }}
      >
        <div className="w-full">
          <div className="max-w-[1250px] mx-auto px-5 sm:px-8 md:px-8 md:-mt-8">
            <div className="max-w-[620px] text-white space-y-4">

              {/* Badge */}
              <div className="animate-slide flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-purple-100">
                <span className="h-[1.5px] w-5 bg-purple-200" />
                Contact Us
              </div>

              {/* Heading */}
              <h1 className="animate-slide hero-heading font-extrabold tracking-tight text-[28px] leading-[1.08] sm:text-[44px] md:text-[56px]">
                Let's Create Your{" "}
                <span className="text-orange-400">Dream</span>
              </h1>

              {/* Description */}
              <p className="animate-slide text-[13px] sm:text-base md:text-lg text-white/90 max-w-[560px] leading-relaxed">
                Connect with our experts for smart home ideas,
                interior guidance, and seamless support.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}