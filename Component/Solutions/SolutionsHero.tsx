"use client";

export default function SolutionsHero() {
  return (
    <>
      {/* HERO FONTS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <section
        className="w-full min-h-[520px] md:min-h-[600px] lg:min-h-[650px] bg-no-repeat bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('shero1.png')", // 👉 your image path
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* OVERLAY */}
        <div className="w-full ">

          <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10 py-16 md:py-20">

            {/* CONTENT */}
            <div className="max-w-[520px] text-white">

              {/* LABEL */}
              <p className="text-purple-200 text-xs tracking-widest mb-3 font-semibold">
                OUR SOLUTIONS
              </p>

              {/* HEADING */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 800,
                }}
              >
                Smart Solutions <br />
                for Your <span className="text-orange-400">Home</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-white/80 text-sm mb-6 max-w-[420px]">
                Explore our range of smart home products and services designed to make your life easier, safer, and more efficient.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3">

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm rounded-[3px] font-semibold transition">
                  Explore Solutions →
                </button>

                <button className="bg-white/10 border border-white/30 text-white px-6 py-3 text-sm rounded-[3px] font-semibold hover:bg-white/20 transition">
                  Need Help?
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}