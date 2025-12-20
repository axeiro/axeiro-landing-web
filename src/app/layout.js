import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import { poppins400 } from "@/fonts/fonts";
import ScrollAndAnimProvider from "@/lib/scrollAndAnimProvider";





export const metadata = {
  title: "Axeiro — Application Deployment Platform",
  description:
    "Axeiro lets teams deploy and redeploy applications directly from Git repositories onto managed cloud infrastructure, without managing servers, pipelines, or networking.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
  href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
  rel="stylesheet"
/>

      </head>
      <body className={`bg-[#0a061e] text-white min-h-screen antialiased ${poppins400.className} `}>
        
        <div className="">
          <ScrollAndAnimProvider>{children}</ScrollAndAnimProvider>
        </div>
      </body>
    </html>
  );
}
