"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animation from "../../public/Power Mining Deploy.json";

gsap.registerPlugin(ScrollTrigger);
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Services() {
  const wrapperRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);



  return (
    <section
      id="services"
      className="relative z-10 py-24 px-6 overflow-hidden"
      ref={wrapperRef}
    >
      {/* Background SVG unchanged */}
      <svg
        className="absolute inset-0 -z-20 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="bigSquares" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="white" rx="5" ry="5" opacity="0.1" />
          </pattern>

          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <mask id="mask" maskUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="url(#bigSquares)" mask="url(#mask)" />
      </svg>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Card */}
        <div
          ref={leftCardRef}
          className="rounded-3xl backdrop-blur-xl p-8 shadow-md shadow-[#0e092b] relative z-10"
        >
          <h3 className="text-2xl font-semibold">What Axeiro Handles</h3>
          <p className="text-gray-300 mt-3">
            Axeiro manages the complete deployment flow so you can ship applications without
            configuring cloud infrastructure or DevOps pipelines.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• Build images directly from your Git repository</li>
            <li>• Deploy and redeploy applications with a single click</li>
            <li>• Stable URLs with managed HTTPS</li>
            <li>• Isolated runtime per application</li>
            <li>• Safe redeploys without breaking production access</li>
          </ul>
        </div>

        {/* Right Visual */}
        <div ref={rightCardRef} className="flex flex-col items-center text-center relative z-10">
          <div className="pointer-events-none overflow-hidden scale-112 md:scale-110">
            <div className="h-86">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="sm:w-90"
                style={{ transform: "translateZ(0)", willChange: "transform" }}
              >
                <source src="/animations/Power Mining Deploy.webm" type="video/webm" />
              </video>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-2xl font-semibold text-white">Managed Cloud Runtime</h4>
            <p className="mt-3 text-gray-300 text-sm">
              AWS (Axeiro-managed infrastructure)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
