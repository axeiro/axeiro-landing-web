"use client";
import Lottie from "lottie-react";
import animation from "../../public/Animated Dashboards.json";

export default function DashboardPreview() {
  return (
    <section className="reveal relative z-50 py-20 px-6 overflow-hidden">
      {/* SVG Grid with fade */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              opacity="0.08"
            />
          </pattern>

          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <mask id="mask" maskUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          mask="url(#mask)"
        />
      </svg>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Deployment Dashboard
          </h3>
          <p className="text-gray-400 mt-3">
            A focused dashboard to manage application deployments, monitor status,
            and control redeployments — designed for clarity and reliability.
          </p>

          <ul className="mt-6 text-gray-400 space-y-2">
            <li>• View application deployment status</li>
            <li>• Trigger manual redeploys</li>
            <li>• Track build and deployment history</li>
          </ul>
        </div>

        <div>
          <Lottie animationData={animation} loop autoplay className="w-full h-80" />
        </div>
      </div>
    </section>
  );
}
