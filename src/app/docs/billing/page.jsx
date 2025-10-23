export default function Billing() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Billing & Usage</h1>
      <p className="text-gray-300 mb-6">
        Manage your plan, credits, invoices, and monitor usage metrics easily with Seradox.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. Plans & Credits</h2>
      <p className="text-gray-400 mb-4">
        Upgrade or downgrade your plan anytime. Free credits are available for testing.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. Invoices</h2>
      <p className="text-gray-400 mb-4">
        View, download, and pay invoices from the Dashboard → Billing section.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. Usage Metrics</h2>
      <p className="text-gray-400 mb-4">
        Track CPU, RAM, storage, and network usage for your VMs in real-time.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Back to → <a href="/docs/getting-started" className="text-[#c900ff] hover:underline">Getting Started</a>
      </div>
    </article>
  );
}
