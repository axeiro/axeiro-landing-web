export default function APIReference() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">API Reference</h1>
      <p className="text-gray-300 mb-6">
        Interact with axeiro programmatically using our REST API. Authenticate, query resources, and manage VMs.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. Authentication</h2>
      <p className="text-gray-400 mb-4">
        Use your API token in headers to authenticate requests.
      </p>

      <pre className="bg-[#1b002b] border border-white/10 rounded-lg p-4 text-sm overflow-x-auto">
{`curl -H "Authorization: Bearer <API_TOKEN>" https://api.axeiro.com/v1/vms`}
      </pre>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. Endpoints & Payloads</h2>
      <p className="text-gray-400 mb-4">
        Example: Create VM
      </p>

      <pre className="bg-[#1b002b] border border-white/10 rounded-lg p-4 text-sm overflow-x-auto">
{`POST /v1/vms
{
  "name": "my-vm",
  "provider": "aws",
  "region": "us-east-1",
  "size": "t2.micro",
  "os": "ubuntu-22.04"
}`}
      </pre>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next → <a href="/docs/billing" className="text-[#c900ff] hover:underline">Billing & Plans</a>
      </div>
    </article>
  );
}
