// src/app/docs/layout.jsx
"use client";
import Sidebar from "@/components/docs/Sidebar";
import Header from "@/components/docs/Header";
import Lenis from "lenis";
import { useEffect } from "react";
import "@/app/globals.css";

export default function DocsLayout({ children }) {
  useEffect(() => {
    // initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // cleanup
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0014] text-gray-100 flex">
      {/* Sidebar scrolls independently */}
      <Sidebar />

      {/* Lenis smooth scroll area */}
      <div id="lenis-wrapper" className="flex-1 overflow-hidden">
        <div id="lenis-content">
          <Header />
          <main className="max-w-5xl mx-auto p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
