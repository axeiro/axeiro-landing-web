'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Founder() {
  return (
    <section className="relative py-28 overflow-hidden bg-transparent">

      {/* SVG Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
              />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#fade)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/founder.png"
              alt="Amar Jha – Founder of Axeiro"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">
            Founder
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
            Amar Jha
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Axeiro is built by an engineer who understands systems end-to-end —
            from application code to cloud infrastructure. While rooted in
            full-stack development, Amar’s experience extends far beyond
            frameworks into deployment automation, containerized workloads,
            networking, security boundaries, and operational reliability.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Axeiro exists because modern cloud tooling is powerful but fragmented.
            This platform is being designed from first principles to remove
            operational burden — not by hiding complexity, but by engineering it
            correctly.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/amarjha01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/amarjha01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
