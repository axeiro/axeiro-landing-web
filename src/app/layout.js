import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import ScrollAndAnimProvider from "@/lib/scrollAndAnimProvider";

export const metadata = {
  title: "Seradox — VM Orchestration Platform",
  description:
    "Seradox helps teams deploy, scale and manage virtual machines across AWS, DigitalOcean and private infrastructure with one-click deployments and automated scaling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a061e] text-white min-h-screen antialiased">
        
        <div className="">
          <ScrollAndAnimProvider>{children}</ScrollAndAnimProvider>
        </div>
      </body>
    </html>
  );
}
