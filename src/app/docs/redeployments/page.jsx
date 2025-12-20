export default function Redeployments() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">
        Redeployments
      </h1>

      <p className="text-gray-300 mb-6">
        Redeployments allow you to update your application when your source code
        changes. Axeiro makes redeploying predictable and safe, without changing
        your application URL.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        How Redeployments Work
      </h2>
      <p className="text-gray-400 mb-4">
        A redeployment follows the same lifecycle as an initial deployment:
      </p>

      <ul className="text-gray-400 space-y-2 ml-4 list-disc">
        <li>Fetch the latest code from your selected branch</li>
        <li>Build a new application image</li>
        <li>Deploy the new version to the runtime</li>
        <li>Route traffic to the updated version</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Manual Redeployments (v1)
      </h2>
      <p className="text-gray-400 mb-4">
        In the current version of Axeiro, redeployments are triggered manually
        from the dashboard. This gives you full control over when new code is
        deployed to production.
      </p>

      <p className="text-gray-400 mb-4">
        After pushing changes to your Git repository, open your application in
        the dashboard and click <b>Redeploy</b>.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Deployment Limits
      </h2>
      <p className="text-gray-400 mb-4">
        Your subscription plan may define limits on the number of deployments
        or redeployments allowed within a billing cycle. These limits are shown
        clearly in the dashboard.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Automatic Redeployments (Planned)
      </h2>
      <p className="text-gray-400 mb-4">
        Automatic redeployments triggered by Git events (such as pushes to a
        branch) are planned for a future release. This feature will be optional
        and configurable per application.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next →{" "}
        <a
          href="/docs/domains"
          className="text-[#c900ff] hover:underline"
        >
          Domains & application URLs
        </a>
      </div>
    </article>
  );
}
