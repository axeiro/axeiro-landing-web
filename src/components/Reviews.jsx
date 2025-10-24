"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './temp.css'
const reviewsData = [
  {
    id: 1,
    name: "Aisha R.",
    role: "Founder • Fintech",
    photo: "/users/aisha.jpg",
    text: "Working with Seradox felt like unlocking a cheat code. I sent them a design and a week later, we had a production-ready infrastructure.",
  },
  {
    id: 2,
    name: "David P.",
    role: "CTO • SaaS",
    photo: "/users/david.jpg",
    text: "Our CI/CD pipelines deployed faster than ever. The integrated monitoring and logging saved hours every week.",
  },
  {
    id: 3,
    name: "Sunita M.",
    role: "DevOps Contractor",
    photo: "/users/sunita.jpg",
    text: "Seradox made infra-as-code effortless. I use it for all my freelance projects now — smooth, powerful, elegant.",
  },
];

export default function Reviews() {
  const [selected, setSelected] = useState(reviewsData[0].id);
  const current = reviewsData.find((r) => r.id === selected);

  return (
    <section
      id="reviews"
      className="relative py-20 px-6 flex flex-col items-center justify-center text-center "
    >
      {/* Background gradient glow */}
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] bg-gradient-to-tr from-[#7a00ff] via-[#c900ff] to-[#24043a] opacity-30 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Avatars */}
        <div className="flex justify-center gap-5 mb-8">
          {reviewsData.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelected(r.id)}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                selected === r.id
                  ? "border-[#c900ff] scale-110 shadow-[0_0_20px_#c900ff66]"
                  : "border-white/20 hover:border-[#7a00ff]"
              }`}
            >
              <img
                src={r.photo}
                alt={r.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Glass Review Bubble */}
        <div className="relative backdrop-blur-[20px] bg-white/10 border border-white/10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] p-6 sm:p-8 overflow-hidden">
          {/* Decorative gradient ring glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#c900ff22] to-[#7a00ff22] rounded-3xl blur-2xl opacity-50"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="text-gray-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                “{current.text}”
              </p>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={current.photo}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white text-sm">
                      {current.name}
                    </div>
                    <div className="text-xs text-gray-300">{current.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
           <div className="pointer-events-none absolute inset-0 z-30 opacity-20 mix-blend-overlay noise-pattern"></div>
      </div>

      {/* <div className="loader">
  <div className="circle"></div>
</div> */}
    </section>
  );
}
