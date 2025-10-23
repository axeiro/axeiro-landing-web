export default function VMManagement() {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Managing Virtual Machines</h1>
      <p className="text-gray-300 mb-6">
        Learn how to manage your VM instances, snapshots, scaling, and maintenance using Seradox.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">1. View & Access VMs</h2>
      <p className="text-gray-400 mb-4">
        Go to <b>Dashboard → VMs</b> to view all your instances. Click an instance to see details or access via SSH.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. Snapshots & Backups</h2>
      <p className="text-gray-400 mb-4">
        Take snapshots to save the current state of a VM. Useful for rolling back changes.
      </p>

      <pre className="bg-[#1b002b] border border-white/10 rounded-lg p-4 text-sm overflow-x-auto">
{`# Example: create snapshot
seradox snapshot create --vm <vm-id> --name "pre-update-backup"`}
      </pre>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. Scaling Instances</h2>
      <p className="text-gray-400 mb-4">
        Increase CPU, RAM, or disk space via the Dashboard. Seradox handles resizing without downtime in most cases.
      </p>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Next → <a href="/docs/security" className="text-[#c900ff] hover:underline">Security</a>
      </div>
    </article>
  );
}
