export default function Security() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">
        Security Overview
      </h1>

      <p className="text-gray-300 mb-6">
        Security in Axeiro is designed to be opinionated and default-secure.
        You deploy applications without managing servers, SSH access, or
        network rules directly.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        1. Account Security
      </h2>
      <p className="text-gray-400 mb-4">
        Axeiro supports strong authentication mechanisms, including secure
        session handling and optional multi-factor authentication.
        Access to the dashboard is protected using modern authentication
        standards.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        2. Application Isolation
      </h2>
      <p className="text-gray-400 mb-4">
        Each deployment runs in an isolated runtime environment. Applications
        do not share execution contexts, filesystems, or network namespaces
        with other users’ deployments.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        3. Network Security
      </h2>
      <p className="text-gray-400 mb-4">
        All applications are exposed through HTTPS endpoints. Traffic is
        protected using TLS in transit, and inbound requests are routed
        through a managed edge layer.
      </p>

      <p className="text-gray-400 mb-4">
        Axeiro uses Cloudflare to provide DDoS protection, edge security,
        and secure request handling by default.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        4. Infrastructure Security
      </h2>
      <p className="text-gray-400 mb-4">
        Underlying infrastructure is managed by Axeiro. Servers do not expose
        public SSH access, and applications run in private networks with
        controlled ingress and egress.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        5. Secrets & Configuration
      </h2>
      <p className="text-gray-400 mb-4">
        Application secrets and environment variables should be managed through
        the Axeiro dashboard. Secrets are never committed to source control
        and are injected securely at runtime.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        6. Responsibility Model
      </h2>
      <p className="text-gray-400 mb-4">
        Axeiro is responsible for securing the platform, infrastructure, and
        deployment runtime. You are responsible for the security of your
        application code and dependencies.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next →{" "}
        <a
          href="/docs/api-reference"
          className="text-[#c900ff] hover:underline"
        >
          API Reference
        </a>
      </div>
    </article>
  );
}
