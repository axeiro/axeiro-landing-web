// components/Hero.jsx
"use client";
import Lottie from "lottie-react";
import animationData from "../../public/Technology Network.json"; 
import animationDataa from "../../public/Abstract animation for apps.json"; 
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-visible px-6 top-16">
      {/* big circular Lottie backdrop */}
      <div className="absolute -z-20 top-4 lg:-top-20 left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="absolute -inset-8 sm:-inset-10 lg:-inset-14 rounded-full blur-3xl opacity-50 lg:opacity-60 bg-gradient-to-tr from-[#7a00ff] via-[#c900ff] to-[#24043a]"></div>
          <div className="rounded-full overflow-hidden opacity-95 flex justify-center items-center">
            <div className="w-[80vw] sm:w-[60vw] lg:w-[740px] h-auto">
              <Lottie animationData={animationData} loop autoplay className="w-[440px] lg:w-[740px]"/>
            </div>
          </div>
        </div>
      </div>

      {/* glass plate centered-left */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-2/3 w-full lg:backdrop-blur-[2px] rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-3xl font-bold leading-tight">
                Outsourced <span className="text-[#c900ff]">Deployment Orchestration</span> Team
              </h1>

              <p className="mt-3 text-gray-300 max-w-xl">
                axeiro lets teams build, deploy, and redeploy applications on managed cloud
                infrastructure — without setting up servers, networking, or DevOps pipelines.
                Push code, deploy with confidence, and stay focused on product.
              </p>

              <div className="mt-6 flex gap-4">
                <a href={`${process.env.NEXT_PUBLIC_APPLICATION_URL}/auth/register`} className="px-5 py-2 rounded-full transition font-medium shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                  Get Started
                </a>
                <Link href="/docs/getting-started" className="px-5 py-2 rounded-full bg-white/6 border border-white/10">
                  View Docs
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="text-xs text-gray-300">
                  Built for founders, startups, and agencies shipping production apps fast.
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-[260px] rounded-2xl backdrop-blur-xl shadow-[0_5px_10px_rgba(0,0,0,0.6)]">
              <div className="rounded-2xl p-2">
                <p className="text-sm text-gray-200">
                  “We stopped worrying about deployments and focused entirely on shipping features.”
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c900ff] to-[#7a00ff] flex items-center justify-center text-sm font-bold">
                    S
                  </div>
                  <div className="text-xs text-gray-300">Founder • early-stage startup</div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* right column with glass strip and cards */}
        <div className="lg:w-1/3 w-full flex flex-col gap-4">
          <div className="lg:backdrop-blur-[10px] backdrop-blur-[2px] rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] px-4 py-3">
            <h3 className="text-sm text-gray-200 font-medium">What Axeiro is</h3>
            <p className="text-xs text-gray-300 mt-2">
              A deployment platform that manages builds, runtime, networking, and security —
              so teams can deploy apps without managing cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="lg:backdrop-blur-[10px] backdrop-blur-[2px] rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] px-4 py-3">
              <h4 className="font-semibold">Predictable deployments</h4>
              <p className="text-xs text-gray-300 mt-1">
                Controlled deploys, stable URLs, and safe redeploys with zero infra setup.
              </p>
            </div>
            <div className="lg:backdrop-blur-[10px] backdrop-blur-[2px] rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] px-4 py-3">
              <h4 className="font-semibold">Production by default</h4>
              <p className="text-xs text-gray-300 mt-1">
                HTTPS, private networking, and sensible defaults baked in from day one.
              </p>
            </div>
            <div className="lg:backdrop-blur-[10px] backdrop-blur-[2px] rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] px-4 py-3">
              <h4 className="font-semibold">Built to scale later</h4>
              <p className="text-xs text-gray-300 mt-1">
                Start simple, evolve into advanced workflows as your product grows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* noise overlay */}
      <div className="pointer-events-none absolute inset-0 z-30 opacity-20 mix-blend-overlay noise-pattern"></div>
    </section>
  );
}
