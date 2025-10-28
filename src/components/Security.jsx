// components/Security.jsx
export default function Security() {
  return (
    <section id="security" className="reveal relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl  backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)]  p-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold">Data Security & Compliance</h3>
          <p className="text-gray-300 mt-3">
            Security-first design: role-based access control, encrypted disks, TLS at rest and transit, and audit logs.
            Use axeiro with AWS (EC2, EBS), DigitalOcean Droplets, or bring-your-own servers.
          </p>
          <ul className="mt-6 text-gray-300 space-y-2">
            <li>• Encrypted storage and backups (AES-256)</li>
            <li>• RBAC and 2FA</li>
            <li>• Audit trails & activity logs</li>
            <li>• SOC-ready operational practices</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white/6 border border-white/6">
          <h4 className="font-semibold">Supported Hosting</h4>
          <p className="text-sm text-gray-300 mt-2">AWS, DigitalOcean, Linode, Hetzner, and private cloud via SSH/VPN.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-gray-300">
            <div className="p-3 rounded-lg bg-white/5">AWS</div>
            <div className="p-3 rounded-lg bg-white/5">DigitalOcean</div>
            <div className="p-3 rounded-lg bg-white/5">Linode</div>
            <div className="p-3 rounded-lg bg-white/5">Private VPS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
