// src/app/docs/layout.jsx
"use client";
import Sidebar from "@/components/docs/Sidebar";
import Header from "@/components/docs/Header";
import Lenis from "lenis";
import { useEffect } from "react";
import "@/app/globals.css";

export default function DocsLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0b0014] text-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Header />
        <div className="max-w-5xl mx-auto p-8">{children}</div>
      </main>
    </div>
  );
}
