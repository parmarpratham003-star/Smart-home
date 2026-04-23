"use client";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">

          <div>
            <p className="text-sm text-violet-600 font-semibold tracking-wide">
              WHY CHOOSE US
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b69] mt-3 leading-tight">
              Smart Benefits for Modern Living Today Empowered
            </h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, 
            cubilia quis ornare aliquam odio habitasse commodo sem.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT BIG IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* TOP CARD */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-6 hover:shadow-md transition">

              <img
                src="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=200"
                className="w-24 h-32 object-contain"
              />

              <div>
                <h3 className="text-lg font-semibold text-[#2d1b69]">
                  Monitor Your Home Energy Smarter
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            {/* BOTTOM 2 CARDS */}
            <div className="grid grid-cols-2 gap-6">

              {/* CARD 1 */}
              <div className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition">
                <div className="w-10 h-10 flex items-center justify-center bg-violet-100 text-violet-600 rounded-lg mb-4">
                  📱
                </div>
                <h4 className="font-semibold text-[#2d1b69]">
                  Phone Control
                </h4>
                <p className="text-gray-500 text-xs mt-2">
                  Control devices easily from your mobile anytime.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition">
                <div className="w-10 h-10 flex items-center justify-center bg-violet-100 text-violet-600 rounded-lg mb-4">
                  🎤
                </div>
                <h4 className="font-semibold text-[#2d1b69]">
                  Voice Control
                </h4>
                <p className="text-gray-500 text-xs mt-2">
                  Use voice assistants to control your smart home.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}