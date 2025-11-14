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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftCardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
        }
      });
      
      gsap.from(rightCardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.3,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
        }
      });

      gsap.to(rightCardRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      className="relative z-10 py-24 px-6 overflow-hidden"
      ref={wrapperRef}
    >
      {/* Big Transparent Squares Background */}
      <svg
        className="absolute inset-0 -z-20 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Squares pattern */}
          <pattern id="bigSquares" width="100" height="100" patternUnits="userSpaceOnUse">
<rect width="80" height="80" fill="white" rx="5" ry="5" opacity="0.1" />
          </pattern>

          {/* Vertical fade mask (top & bottom invisible, middle visible) */}
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
        {/* Left Card with animation */}
        <div
          ref={leftCardRef}
          className="rounded-3xl backdrop-blur-xl p-8 shadow-md shadow-[#0e092b] relative z-10"
        >
          <h3 className="text-2xl font-semibold">Services</h3>
          <p className="text-gray-300 mt-3">
            From provisioning to production, axeiro covers the full VM lifecycle.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• One-click VM provisioning</li>
            <li>• Autoscaling & health-based scaling</li>
            <li>• Snapshot, backup & restore automation</li>
            <li>• Logging, metrics & alerts</li>
            <li>• API-first for CI/CD</li>
          </ul>
        </div>

        {/* Right Visual with floating animation */}
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
            <h4 className="text-2xl font-semibold text-white">Cloud Platforms</h4>
            <p className="mt-3 text-gray-300 text-sm">
              AWS • DigitalOcean • Linode • Private VPS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
