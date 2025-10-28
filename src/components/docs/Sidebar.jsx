// src/components/docs/Sidebar.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { title: "Getting Started", href: "/docs/getting-started" },
  { title: "Deployment", href: "/docs/deployment" },
  { title: "VM Management", href: "/docs/vm-management" },
  { title: "API Reference", href: "/docs/api-reference" },
  { title: "Billing", href: "/docs/billing" },
  { title: "Security", href: "/docs/security" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="  w-64 border-r border-white/10 bg-white/5 backdrop-blur-xl p-6 hidden md:block">
      <h2 className="text-xl font-semibold mb-6 text-[#c900ff]">axeiro Docs</h2>
      <nav className="flex flex-col gap-3">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`text-sm rounded-lg px-3 py-2 transition-all ${
              pathname === s.href
                ? "bg-[#c900ff]/20 text-white font-medium"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {s.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
