"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { poppins400 } from "../fonts/fonts.js";
export default function NavbarWrapper() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <nav className="pointer-events-auto w-full max-w-6xl mx-4 rounded-full backdrop-blur-xs border border-white/8 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
             <div className={`text-2xl tracking-wide ${poppins400.className}`}>
            axeiro
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-200">
            <Link href="#who">Who</Link>
            <Link href="#services">Services</Link>
            <Link href="#security">Security</Link>
            <Link href="#integrations">Integrations</Link>
            <Link href="#reviews">Reviews</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`${process.env.NEXT_PUBLIC_APPLICATION_URL}/auth/login`}
            className="px-4 py-1.5 rounded-full bg-white/10 border border-white/12 text-sm"
          >
            Login
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_APPLICATION_URL}/auth/register`}
            className="px-4 py-1.5 rounded-full bg-gradient-to-tr from-[#c900ff] to-[#7a00ff] text-white text-sm shadow-sm"
          >
            Get Early Access
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
