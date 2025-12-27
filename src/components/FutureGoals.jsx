"use client";

// components/FutureGoals.jsx
export default function FutureGoals() {
  return (
    <section className="reveal relative px-2 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl backdrop-blur-lg p-5 border border-white/10 sm:p-10 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
        <h3 className="text-2xl font-semibold text-white">
          Platform Direction & Future Capabilities
        </h3>
        <p className="text-gray-300 mt-3 max-w-4xl">
          Axeiro is starting with a focused deployment experience and is designed to
          grow over time. These are areas we plan to explore as the platform and user
          needs evolve.
        </p>

        <ul className="mt-6 text-gray-300 grid md:grid-cols-3 gap-6">
          <li className="bg-white/6 p-4 rounded-xl">
            Support for additional application runtimes and languages through
            container-based deployments
          </li>
          <li className="bg-white/6 p-4 rounded-xl">
            Optional automation for deployment and redeployment workflows
          </li>
          <li className="bg-white/6 p-4 rounded-xl">
            Improved cost visibility and usage insights across deployed applications
          </li>
          <li className="bg-white/6 p-4 rounded-xl">
            Ability to deploy applications into customer-owned cloud accounts (BYOC)
          </li>
          <li className="bg-white/6 p-4 rounded-xl">
            Expansion beyond AWS to additional cloud providers as the platform matures
          </li>
          <li className="bg-white/6 p-4 rounded-xl">
            Enhanced team collaboration and access controls for growing organizations
          </li>
        </ul>
      </div>
    </section>
  );
}
