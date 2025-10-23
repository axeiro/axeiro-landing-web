// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-semibold text-lg">Seradox</div>
          <div className="text-xs text-gray-300 mt-2">© {new Date().getFullYear()} Seradox — All rights reserved</div>
        </div>

        <div className="flex gap-4 text-sm text-gray-300">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
