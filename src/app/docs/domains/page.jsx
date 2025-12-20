export default function Domains() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">
        Domains & Application URLs
      </h1>

      <p className="text-gray-300 mb-6">
        Every application deployed with Axeiro is assigned a stable HTTPS URL.
        This URL does not change across redeployments.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Default Application Domain
      </h2>
      <p className="text-gray-400 mb-4">
        By default, each deployment is accessible at a subdomain under
        <b> axeiro.app</b>:
      </p>

      <pre className="bg-[#1b002b] border border-white/10 rounded-lg p-4 text-sm overflow-x-auto">
{`https://<app-id>.axeiro.app`}
      </pre>

      <p className="text-gray-400 mb-4">
        The <b>app-id</b> is unique and remains the same for the lifetime of the
        application.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        URL Stability
      </h2>
      <p className="text-gray-400 mb-4">
        Redeploying your application does <b>not</b> change its URL. Traffic is
        automatically routed to the latest running version without requiring
        any DNS changes.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        HTTPS by Default
      </h2>
      <p className="text-gray-400 mb-4">
        All Axeiro-provided domains are secured with HTTPS by default. TLS
        termination and certificate management are handled automatically.
      </p>

      <p className="text-gray-400 mb-4">
        Axeiro uses Cloudflare at the edge to provide secure, reliable access
        to deployed applications.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Custom Domains (Planned)
      </h2>
      <p className="text-gray-400 mb-4">
        Support for custom domains (for example, <code>app.yourdomain.com</code>)
        is planned for a future release. When available, custom domains will be
        mapped to your application without affecting redeployments.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        DNS Changes & Redeployments
      </h2>
      <p className="text-gray-400 mb-4">
        You do not need to update DNS records when redeploying your application.
        DNS configuration is only required when setting up a custom domain.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Back to →{" "}
        <a
          href="/docs/redeployments"
          className="text-[#c900ff] hover:underline"
        >
          Redeployments
        </a>
      </div>
    </article>
  );
}
