// src/components/docs/Header.jsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#0b0014]/80 backdrop-blur-md border-b border-white/10 px-6 py-3 flex justify-between items-center">
      <Link href="/" className="font-semibold text-lg text-white">
        axeiro
      </Link>
      <div className="flex gap-4 text-sm">
        <Link href="/" className="hover:text-[#c900ff]">Home</Link>
      </div>
    </header>
  );
}
