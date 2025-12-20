// components/Security.jsx
export default function Security() {
  return (
    <section id="security" className="reveal relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)] p-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold">Security by Default</h3>
          <p className="text-gray-300 mt-3">
            axeiro follows a secure-by-default deployment model. Application traffic is routed
            through Cloudflare and a managed HTTPS load balancer before reaching isolated
            application runtimes on private cloud networks.
          </p>
          <ul className="mt-6 text-gray-300 space-y-2">
            <li>• HTTPS enforced for all inbound traffic</li>
            <li>• Cloudflare in front for DNS, TLS, and basic traffic protection</li>
            <li>• Private runtime networking with no direct public access</li>
            <li>• Role-based access within the Axeiro dashboard</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white/6 border border-white/6">
          <h4 className="font-semibold">Infrastructure & Network Layers</h4>
          <p className="text-sm text-gray-300 mt-2">
            axeiro deploys applications on Axeiro-managed AWS infrastructure, with Cloudflare
            handling edge traffic and AWS managing runtime isolation and networking.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-gray-300">
            <div className="p-3 rounded-lg bg-white/5">Cloudflare Edge</div>
            <div className="p-3 rounded-lg bg-white/5">HTTPS Load Balancer</div>
            <div className="p-3 rounded-lg bg-white/5">Private Subnets</div>
            <div className="p-3 rounded-lg bg-white/5">Isolated Runtimes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
