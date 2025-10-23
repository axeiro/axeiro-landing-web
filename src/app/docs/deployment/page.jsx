export default function Deployment() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Deploying Containers & Web Apps</h1>
      <p className="text-gray-300 mb-6">
        Seradox makes it easy to deploy containers and web applications on your virtual machines.
        Follow these steps to deploy your first app.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. Choose Your App Type</h2>
      <p className="text-gray-400 mb-4">
        You can deploy Docker containers, Node.js apps, Python apps, or static websites.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. Prepare Your App</h2>
      <p className="text-gray-400 mb-4">
        Make sure your app is ready to run. For Docker, create a <code>Dockerfile</code>. For Node.js, ensure <code>package.json</code> exists.
      </p>

      <pre className="bg-[#1b002b] border border-white/10 rounded-lg p-4 text-sm overflow-x-auto">
{`# Example: Docker build
docker build -t my-app .
docker run -p 3000:3000 my-app`}
      </pre>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. Deploy via Seradox</h2>
      <p className="text-gray-400 mb-4">
        Go to <b>Dashboard → Apps → Create App</b>. Select your VM, app type, and upload your code or Docker image. Click <b>Deploy</b>.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next → <a href="/docs/vm-management" className="text-[#c900ff] hover:underline">VM Management</a>
      </div>
    </article>
  );
}
