"use client";

import Lottie from "lottie-react";

// components/FutureGoals.jsx
export default function FutureGoals() {
  return (
    <section className="reveal relative py-20 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto rounded-3xl backdrop-blur-lg  p-10 shadow-[0_0_30px_rgba(0,0,0,0.6)] ">
        <h3 className="text-2xl font-semibold text-white">Future Goals & Roadmap</h3>
        <p className="text-gray-300 mt-3">
          We’re building Seradox to become the easiest and most secure VM orchestration
          tool for teams worldwide.
        </p>

        <ul className="mt-6 text-gray-300 grid md:grid-cols-3 gap-6">
          <li className="bg-white/6 p-4 rounded-xl">Kubernetes/Container integrations</li>
          <li className="bg-white/6 p-4 rounded-xl">Managed private cloud connectors</li>
          <li className="bg-white/6 p-4 rounded-xl">Adaptive cost optimization engine</li>
          <li className="bg-white/6 p-4 rounded-xl">First-class developer CLI & SDKs</li>
          <li className="bg-white/6 p-4 rounded-xl">Marketplace for infra blueprints</li>
          <li className="bg-white/6 p-4 rounded-xl">Enterprise SSO & compliance tooling</li>
        </ul>
      </div>
    </section>
  );
}
