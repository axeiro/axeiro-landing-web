"use client";
import Lottie from "lottie-react";
import automationAnim from "../../public/Power Mining Deploy.json"; // example Lottie

export default function Services() {
  return (
    <section
      id="services"
      className="reveal relative z-10 py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Card */}
       <div className="rounded-3xl bg-white/5 shadow-[0_0_30px_rgba(0,0,0,0.6)]  backdrop-blur-lg  p-8">
          <h3 className="text-2xl font-semibold">Services</h3>
          <p className="text-gray-300 mt-3">From provisioning to production, Seradox covers the full VM lifecycle.</p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• One-click VM provisioning (public & private clouds)</li>
            <li>• Autoscaling and health-based scaling policies</li>
            <li>• Snapshot, backup and restore automation</li>
            <li>• Logging, metrics, and integrated alerts</li>
            <li>• API-first: integrate into CI/CD pipelines</li>
          </ul>
        </div>

        {/* Right Visual */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl  animate-pulse"></div>

          <div className="relative flex flex-col items-center text-center">
            <div className="">
              <Lottie animationData={automationAnim} loop autoplay className="w-80  "/>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-semibold text-white">
                Cloud Platforms
              </div>
              <p className="mt-3 text-gray-300 text-sm">
                AWS • DigitalOcean • Linode • Private VPS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
