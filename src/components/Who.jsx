// components/Who.jsx
export default function Who() {
  return (
    <section id="who" className="reveal relative -z-50 py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-tr from-white/3 to-white/2 backdrop-blur-xl border border-white/6 p-10">
        <h2 className="text-2xl font-semibold">Who is axeiro for?</h2>
        <p className="mt-4 text-gray-300 max-w-3xl">
          axeiro is built for developers, startups, agencies, and product teams who:
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/6 border border-white/6">
            <h4 className="font-semibold">Early-stage startups</h4>
            <p className="text-sm text-gray-300 mt-2">Spin up environments quickly and iterate without managing infra.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/6 border border-white/6">
            <h4 className="font-semibold">Freelancers & agencies</h4>
            <p className="text-sm text-gray-300 mt-2">Deliver client projects with reliable deployment scripts and backups.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/6 border border-white/6">
            <h4 className="font-semibold">SRE & DevOps teams</h4>
            <p className="text-sm text-gray-300 mt-2">Use axeiro as opinionated infra for faster provisioning and cost control.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
