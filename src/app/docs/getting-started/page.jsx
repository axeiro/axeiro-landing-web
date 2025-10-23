// src/app/docs/getting-started/page.jsx
export default function GettingStarted() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Getting Started with Seradox</h1>
      <p className="text-gray-300 mb-6">
        Seradox lets you deploy, manage, and scale virtual machines across multiple clouds —
        without mastering DevOps. This guide walks you through your first setup.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. Create an Account</h2>
      <p className="text-gray-400 mb-4">
        Sign up on <span className="text-[#c900ff]">seradox.com</span>. You’ll get free credits
        to test VM orchestration across AWS and DigitalOcean.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. Connect a Cloud Provider</h2>
      <p className="text-gray-400 mb-4">
        Go to <b>Dashboard → Integrations</b> and link your AWS or DigitalOcean API keys.
      </p>

      <pre className="bg-[#1b002b] border border-white/10 rounded-lg p-4 text-sm overflow-x-auto">
{`# Example (via CLI)
seradox connect aws --key <your-access-key> --secret <your-secret-key>`}
      </pre>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. Launch a Virtual Machine</h2>
      <p className="text-gray-400 mb-4">
        Once connected, click <b>“Create VM”</b>. Choose your preferred region, size, and OS.
        Seradox handles provisioning, security groups, and SSH access automatically.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next → <a href="/docs/deployment" className="text-[#c900ff] hover:underline">Deploy your first app</a>
      </div>
    </article>
  );
}
