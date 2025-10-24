"use client";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    cycle: "/month",
    highlight: false,
    description: "Perfect for indie developers and solo projects",
    features: [
      "Up to 3 VMs",
      "Basic Autoscaling",
      "Shared Compute",
      "Community Support",
      "Basic Analytics",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "₹4,999",
    cycle: "/month",
    highlight: true,
    description: "Best for growing teams and agencies",
    features: [
      "Up to 20 VMs",
      "Priority Autoscaling",
      "High-performance Compute",
      "24/7 Chat Support",
      "Advanced Monitoring",
      "Automated Backups",
    ],
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cycle: "",
    highlight: false,
    description: "Designed for scale, security & compliance",
    features: [
      "Unlimited VMs",
      "Private Infrastructure",
      "Compliance & Hardening",
      "Dedicated SRE / Architect",
      "SLAs + On-Call Support",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
  },
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-8 rounded-3xl backdrop-blur-sm border transition
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
    </section>
  );
}
