"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 py-14 px-6 bg-black/20 backdrop-blur-md border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start text-gray-300">

        {/* Branding Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white">axeiro</h3>
          <p className="mt-2 text-sm">
            Automating application deployments so you focus on building.
          </p>
          <p className="text-xs mt-4 text-gray-400">
            © {new Date().getFullYear()} axeiro. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-sm">
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#integrations" className="hover:text-white transition">Integrations</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="text-sm">
          <h4 className="text-white font-semibold mb-3">Connect with Us</h4>

          <div className="flex gap-4 text-xl mt-2">
            <a
              href="https://twitter.com/axeirohq"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
              aria-label="Twitter"
            >
              <i className="ri-twitter-x-line"></i>
            </a>

            <a
              href="https://linkedin.com/company/axeiro"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-line"></i>
            </a>

            <a
              href="https://github.com/axeiro"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
              aria-label="GitHub"
            >
              <i className="ri-github-line"></i>
            </a>

            <a
              href="https://youtube.com/@axeirohq"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
              aria-label="YouTube"
            >
              <i className="ri-youtube-line"></i>
            </a>

            <a
              href="mailto:contact@axeiro.com"
              className="text-gray-300 hover:text-white transition"
              aria-label="Email"
            >
              <i className="ri-mail-line"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
