// src/app/docs/getting-started/page.jsx
export default function GettingStarted() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">
        Getting Started with Axeiro
      </h1>

      <p className="text-gray-300 mb-6">
        Axeiro is a deployment platform that builds and deploys applications from your
        Git repository onto managed cloud infrastructure. You don’t need to configure
        servers, networking, or deployment pipelines.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        1. Create an Account
      </h2>
      <p className="text-gray-400 mb-4">
        Sign up on <span className="text-[#c900ff]">axeiro.com</span> and log in to the
        dashboard. Axeiro is a paid platform from day one, with clear usage limits
        and transparent billing.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        2. Connect Your Git Repository
      </h2>
      <p className="text-gray-400 mb-4">
        Go to <b>Dashboard → New App</b> and connect your GitHub or GitLab account.
        Select the repository and branch you want to deploy.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        3. Configure Your Application
      </h2>
      <p className="text-gray-400 mb-4">
        Axeiro detects your runtime and start command automatically. You can review
        and adjust the configuration before deploying.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        4. Deploy Your Application
      </h2>
      <p className="text-gray-400 mb-4">
        Click <b>Deploy</b> to build and deploy your application. Axeiro handles the
        image build, runtime setup, HTTPS, and networking for you.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        5. Redeploy Updates
      </h2>
      <p className="text-gray-400 mb-4">
        When you push new code, return to the dashboard and trigger a redeploy to
        ship the latest version. Your application URL remains stable across redeploys.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next →{" "}
        <a
          href="/docs/deployment"
          className="text-[#c900ff] hover:underline"
        >
          Understanding the deployment lifecycle
        </a>
      </div>
    </article>
  );
}
