"use client";
import { useState } from "react";
import gsap from "gsap";

export default function PricingCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message , setMessage] = useState("")
  const submit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic email validation
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/v1/auth/waitlist", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});

const data = await res.json();

if (!res.ok) {
  console.error("Error:", data.message);
  setError(data.message)
  return;
}
setMessage(data.message)
     console.log("Success:", data.message);

      setSubmitted(true);
      setEmail("");

      gsap.fromTo(
        ".cta-msg",
        { y: -10, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out" }
      );
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="relative z-10 pb-24 px-2 sm:px-6 bg-gradient-to-b from-[#0a061f] to-[#070317]">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 text-center shadow-[0_0_25px_rgba(0,0,0,0.4)]">

        <h3 className="text-3xl font-bold text-white">
          Get Early Access to{" "}
          <span className="bg-gradient-to-tr from-[#c900ff] to-[#7a00ff] bg-clip-text text-transparent">
            axeiro
          </span>
        </h3>

        <p className="text-gray-300 mt-3 text-lg">
          Join the waitlist and be among the first to try one-click deployment orchestration.
        </p>

        <form
          onSubmit={submit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            disabled={loading || submitted}
            className="px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white w-full sm:w-80 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7a00ff]/60 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={loading || submitted}
            className="px-8 py-3.5 rounded-full font-medium text-white bg-gradient-to-tr from-[#c900ff] to-[#7a00ff] hover:opacity-90 disabled:opacity-50 transition-all duration-300"
          >
            {loading ? "Joining..." : submitted ? "Joined ✓" : "Join Waitlist"}
          </button>
        </form>

        {error && (
          <div className="mt-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {message && (
          <div className="cta-msg mt-5 text-sm text-gray-300">
            {message}

          </div>
        )}
      </div>
    </section>
  );
}
