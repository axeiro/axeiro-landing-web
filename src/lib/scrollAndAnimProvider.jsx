"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollAndAnimProvider({ children }) {
  useEffect(() => {
    // Only enable Lenis on desktop
    if (window.innerWidth > 768) {
      const lenis = new Lenis({
        smooth: true,
        lerp: 0.1, // reduce easing for smoother performance
        wheelMultiplier: 0.9,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Clean up
    return () => {
      window.lenis?.destroy?.();
    };
  }, []);

  return <>{children}</>;
}
