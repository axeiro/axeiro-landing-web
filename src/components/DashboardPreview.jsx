"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import animation from '../../public/Animated Dashboards.json'
export default function DashboardPreview() {
  return (
    <section className="reveal relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Dashboard Preview</h3>
          <p className="text-gray-300 mt-3">
            A unified dashboard for deployments, logs, metrics, and team management — built for speed and clarity.
          </p>

          <ul className="mt-6 text-gray-300 space-y-2">
            <li>• Real-time metrics & logs</li>
            <li>• One-click snapshots & restores</li>
            <li>• API keys, teams, and role management</li>
          </ul>
        </div>

        <div className="">
          {/* Replace with image or R3F preview */}
          {/* <img src="/preview/dashboard-mock.svg" alt="Dashboard preview" className="w-full h-auto rounded-xl" /> */}
           <Lottie animationData={animation} loop autoplay className="w-full h-80"/>
        </div>
      </div>
    </section>
  );
}
