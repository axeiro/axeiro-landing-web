"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const partners = [
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "DigitalOcean", logo: "/logos/digitalocean.png" },
  { name: "GCP", logo: "/logos/gcp.png" },
  { name: "Azure", logo: "/logos/azure.png" },
  { name: "Docker", logo: "/logos/docker.png" },
  { name: "Kubernetes", logo: "/logos/kubernetes.png" },
];

export default function Integrations() {
  const wrapperRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const strip = stripRef.current;

      // Duplicate logos so it loops smoothly
      strip.innerHTML += strip.innerHTML;

      const totalWidth = strip.scrollWidth / 2;

      // Infinite horizontal scroll animation
      gsap.to(strip, {
        x: -totalWidth,
        duration: 15,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      });

      // Optional fade-in scroll animation
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 85%" },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="integrations" className="relative z-10 py-20 px-6 overflow-hidden">
      <div ref={wrapperRef} className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Integrations</h3>
        <p className="text-gray-300 mt-2">
          Plug into the tools you already use — cloud providers, containers, and CI/CD.
        </p>

        {/* Scrolling Logos */}
        <div className="mt-10 overflow-hidden relative">
          <div
            ref={stripRef}
            className="flex gap-8 items-center justify-center w-max"
          >
            {partners.map((p) => (
              <div
                key={p.name}
                className="p-4 rounded-xl bg-white/10 border border-white/10 w-28 h-16 flex items-center justify-center backdrop-blur-sm"
              >
                <img src={p.logo} alt={p.name} className="max-h-10 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
