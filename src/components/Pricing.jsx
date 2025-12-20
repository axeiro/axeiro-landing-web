"use client";

const plans = [
   {
  name: "Axeiro",
  price: "₹199",
  cycle: "/month",
  description: "Predictable pricing for deploying production applications",
  cta:"get started",
  features: [
    "Deploy & redeploy applications from GitHub",
    "Managed build pipeline (Docker image builds)",
    "Managed runtime on Axeiro AWS infrastructure",
    "Stable application URLs with HTTPS",
    "Cloudflare edge (DNS + TLS)",
  ],

}
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-24 px-6 text-white overflow-hidden">
      
      {/* Subtle SVG Lines Background */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="lines" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 0 L80 0 L80 80" fill="none" stroke="white" strokeWidth="0.3" opacity="0.05"/>
            <rect x="0" y="0" width="10" height="10" fill="white" opacity="0.03"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>

      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <p className="text-gray-300 mt-2">
          Scale at your own speed. No hidden costs. Cancel anytime.
        </p>
      </div>

      <div className="w-full flex justify-center relative z-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-8 w-sm rounded-3xl backdrop-blur-sm border transition
              ${
                plan.highlight
                  ? " border-blue-500/60 shadow-xl  scale-105"
                  : " border-white/10"
              }`}
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-gray-300 text-sm mt-2">{plan.description}</p>

            <p className="mt-6 text-4xl font-bold">
              {plan.price}
              <span className="text-lg font-medium text-gray-300">
                {plan.cycle}
              </span>
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <i className="ri-check-fill text-blue-400 text-lg"></i> {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full py-3 rounded-xl font-medium transition ${
                plan.highlight
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
      {/* <div className="mt-10 grid gap-6 text-sm text-gray-300">
          <div>
            <h4 className="font-semibold text-white">What’s included</h4>
            <ul className="mt-2 space-y-1">
              <li>• Manual deploy & redeploy from selected Git branch</li>
              <li>• Image build handled by Axeiro</li>
              <li>• Application runtime managed by Axeiro</li>
              <li>• HTTPS-enabled application endpoints</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Current limits</h4>
            <ul className="mt-2 space-y-1">
              <li>• Limited number of active applications per account</li>
              <li>• Limited redeploys per month (to control costs)</li>
              <li>• Manual redeploy only (auto-deploy coming later)</li>
              <li>• Shared build and runtime capacity</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Security scope (v1)</h4>
            <ul className="mt-2 space-y-1">
              <li>• Cloudflare in front for DNS & TLS</li>
              <li>• HTTPS enforced on all deployments</li>
              <li>• Private runtime networking (no public instances)</li>
              <li>• Axeiro-managed AWS infrastructure</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">How billing works</h4>
            <ul className="mt-2 space-y-1">
              <li>• ₹199/month is Axeiro’s platform fee</li>
              <li>• Cloud usage (compute, bandwidth) is billed separately</li>
              <li>• Usage is tracked per application</li>
              <li>• No auto-scaling surprise bills</li>
            </ul>
          </div>
        </div> */}
    </section>
  );
}
