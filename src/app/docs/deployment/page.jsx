export default function Deployment() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">
        Application Deployment Lifecycle
      </h1>

      <p className="text-gray-300 mb-6">
        Axeiro deploys applications by building container images from your Git
        repository and running them on managed cloud infrastructure. You do not
        need to manage virtual machines, containers, or deployment pipelines.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        1. Select a Repository
      </h2>
      <p className="text-gray-400 mb-4">
        From the dashboard, choose <b>New App</b> and select a connected GitHub
        or GitLab repository along with the branch you want to deploy.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        2. Review Deployment Configuration
      </h2>
      <p className="text-gray-400 mb-4">
        Axeiro inspects your repository to detect the runtime and start command.
        You can review and adjust these settings before deploying.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        3. Build the Application Image
      </h2>
      <p className="text-gray-400 mb-4">
        When you click <b>Deploy</b>, Axeiro creates a build job that generates a
        container image for your application. If no Dockerfile is present,
        Axeiro generates one automatically based on the detected runtime.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        4. Deploy to Runtime
      </h2>
      <p className="text-gray-400 mb-4">
        After the image is built, Axeiro deploys it to a managed runtime and
        exposes the application through a stable HTTPS endpoint.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        5. Redeploy Updates
      </h2>
      <p className="text-gray-400 mb-4">
        To deploy new code, push updates to your repository and trigger a
        redeploy from the dashboard. Your application URL remains the same
        across deployments.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next →{" "}
        <a
          href="/docs/runtime"
          className="text-[#c900ff] hover:underline"
        >
          Runtime & resource management
        </a>
      </div>
    </article>
  );
}
