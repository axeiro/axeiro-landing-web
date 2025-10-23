export default function Security() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Security Best Practices</h1>
      <p className="text-gray-300 mb-6">
        Keep your VMs and apps secure with 2FA, SSH keys, encryption, and network rules.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. Enable 2FA</h2>
      <p className="text-gray-400 mb-4">
        Protect your account by enabling two-factor authentication via Authenticator apps.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. SSH Key Management</h2>
      <p className="text-gray-400 mb-4">
        Always use SSH keys instead of passwords. Upload your public key to Seradox Dashboard → SSH Keys.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. Encryption & Network Rules</h2>
      <p className="text-gray-400 mb-4">
        Enable disk encryption for sensitive data. Use firewall rules to control incoming and outgoing traffic.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next → <a href="/docs/api-reference" className="text-[#c900ff] hover:underline">API Reference</a>
      </div>
    </article>
  );
}
