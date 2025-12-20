export default function APIReference() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">
        API Reference
      </h1>

      <p className="text-gray-300 mb-6">
        Axeiro provides internal APIs used by the dashboard to manage deployments,
        builds, and application lifecycles. A public, stable API is not yet
        available.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        API Access Model
      </h2>
      <p className="text-gray-400 mb-4">
        API requests are authenticated using secure sessions established through
        the Axeiro dashboard. These APIs are designed for internal use and may
        change without notice.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Core Resources
      </h2>
      <p className="text-gray-400 mb-4">
        Internally, Axeiro APIs operate on the following core resources:
      </p>

      <ul className="text-gray-400 space-y-2 ml-4 list-disc">
        <li><b>Deployments</b> – application configuration and runtime state</li>
        <li><b>Build Jobs</b> – container image build lifecycle</li>
        <li><b>Integrations</b> – source control and provider connections</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Public API (Coming Later)
      </h2>
      <p className="text-gray-400 mb-4">
        A public API and CLI are planned for a future release. These will enable
        programmatic deployment management, CI/CD integration, and automation.
      </p>

      <p className="text-gray-400 mb-4">
        Until then, all application management should be performed through the
        Axeiro dashboard.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Back to →{" "}
        <a
          href="/docs/billing"
          className="text-[#c900ff] hover:underline"
        >
          Billing & Usage
        </a>
      </div>
    </article>
  );
}
