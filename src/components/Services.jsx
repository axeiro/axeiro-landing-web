"use client";
import dynamic from "next/dynamic";
import animation from "../../public/Power Mining Deploy.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 py-24 px-6  "
      style={{
        transform: "translateZ(0)",
        willChange: "transform"
      }}
    >
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        style={{ willChange: "transform" }}
      >
        {/* Left Card */}
        <div
          className="rounded-3xl bg-white/5 backdrop-blur-md p-8 shadow-lg"
          style={{
            transform: "translateZ(0)",
            willChange: "opacity, transform"
          }}
        >
          <h3 className="text-2xl font-semibold">Services</h3>
          <p className="text-gray-300 mt-3">
            From provisioning to production, Seradox covers the full VM lifecycle.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• One-click VM provisioning</li>
            <li>• Autoscaling & health-based scaling</li>
            <li>• Snapshot, backup & restore automation</li>
            <li>• Logging, metrics & alerts</li>
            <li>• API-first for CI/CD</li>
          </ul>
        </div>

        {/* Right Visual */}
        <div
          className="flex flex-col items-center text-center scale-115 md:scale-110   "
          style={{
            transform: "translateZ(0)",
            willChange: "transform"
          }}
        >
          <div className="pointer-events-none overflow-hidden " style={{ contain: "layout paint" }}>
          <div className="  h-86 ">
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
            <h4 className="text-2xl font-semibold text-white">
              Cloud Platforms
            </h4>
            <p className="mt-3 text-gray-300 text-sm">
              AWS • DigitalOcean • Linode • Private VPS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
