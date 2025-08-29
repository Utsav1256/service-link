"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ProviderCard from "@/components/ProviderCard";
import Link from "next/link";
import Image from "next/image";

const mockProviders = [
  {
    id: 1,
    name: "Ramesh Kumar",
    service: "Plumber",
    location: "Delhi",
    experience: "5 years",
    qualification: "ITI",
    phone: "+91 9876543210",
    instagram: "https://instagram.com/ramesh",
    facebook: "https://facebook.com/ramesh",
    photo:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1169&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sneha Sharma",
    service: "Makeup Artist",
    location: "Mumbai",
    experience: "3 years",
    qualification: "Certified",
    phone: "+91 9123456789",
    instagram: "https://instagram.com/sneha",
    facebook: "https://facebook.com/sneha",
    photo:
      "https://images.unsplash.com/photo-1638628064365-f08ad0ec8245?q=80&w=1632&auto=format&fit=crop",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [pincode, setPincode] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = mockProviders.filter(
      (p) =>
        (query
          ? p.service.toLowerCase().includes(query.toLowerCase())
          : true) &&
        (pincode
          ? p.location.toLowerCase().includes(pincode.toLowerCase())
          : true)
    );
    setResults(filtered);
  };

  const list = useMemo(
    () => (results.length ? results : mockProviders),
    [results]
  );

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans antialiased">
      {/* ==================== HEADER ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-wider uppercase">
              ServiceLink
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <Link href="#providers" className="hover:text-white">
              Providers
            </Link>
            <Link href="#how" className="hover:text-white">
              How it works
            </Link>
            <Link href="#testimonials" className="hover:text-white">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
          <Link
            href="/provider/register"
            className="hidden rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow md:inline-block"
          >
            Become a Provider
          </Link>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-screen items-center justify-center">
        {/* Background image */}
        <Image
          src="/hero-sec.webp"
          alt="Local professionals in India"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.3),rgba(10,10,10,0.75))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black leading-tight tracking-tight md:text-6xl"
          >
            Find Trusted{" "}
            <span className="text-yellow-400">Local Professionals</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto mt-4 max-w-2xl text-base text-gray-200 md:text-lg"
          >
            Plumbers, Electricians, Tutors, Beauticians and more — verified and
            nearby.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-8 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search service (e.g., plumber, tutor)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full flex-1 rounded-xl bg-white px-4 py-3 text-black outline-none placeholder:text-gray-500"
                aria-label="Service search"
              />
              <input
                type="text"
                placeholder="City / Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full rounded-xl bg-white px-4 py-3 text-black outline-none placeholder:text-gray-500 sm:max-w-[220px]"
                aria-label="City or Pincode"
              />
              <MagneticButton
                onClick={handleSearch}
                className="btn btn-brand rounded-xl !bg-yellow-400 !px-6 !py-3 !font-semibold !text-black"
              >
                Search
              </MagneticButton>
            </div>
            <p className="mt-2 text-xs text-gray-300">
              Tip: Leave fields blank to see all providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Verified Providers", value: "1,200+" },
            { label: "Happy Clients", value: "10K+" },
            { label: "Cities Covered", value: "50+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center"
            >
              <div className="text-4xl font-bold text-yellow-400">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== PROVIDERS ==================== */}
      <section id="providers" className="mx-auto max-w-7xl px-6 py-8">
        <Header
          eyebrow="Top Rated Nearby"
          title="Explore Providers"
          subtitle="Hand-picked professionals ready to help today."
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((provider, idx) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl"
            >
              <ProviderCard provider={provider} index={idx} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <Header
          eyebrow="Simple & Fast"
          title="How it Works"
          subtitle="Find, connect, and hire with confidence."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: "Search Service",
              desc: "Tell us what you need and where you are.",
            },
            {
              title: "Connect Instantly",
              desc: "Message or call verified providers directly.",
            },
            {
              title: "Hire with Confidence",
              desc: "Check profiles, reviews, and book securely.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-lg font-semibold">{step.title}</div>
              <p className="mt-2 text-sm text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
        <Header
          eyebrow="Loved by Clients"
          title="What People Say"
          subtitle="Real stories from happy customers across India."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              name: "Amit Singh",
              text: "Found a great plumber within minutes — seamless experience!",
            },
            {
              name: "Priya Mehta",
              text: "The best platform to discover verified local professionals!",
            },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-gray-200">“{t.text}”</p>
              <div className="mt-4 font-semibold text-yellow-400">
                — {t.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== FEATURED VIDEOS (Optional) ==================== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Header
          eyebrow="From the Community"
          title="Featured Videos"
          subtitle="Tips, DIYs, and behind-the-scenes from providers."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {["Video Showcase 1", "Video Showcase 2"].map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex h-56 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
            >
              {v}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section
        id="contact"
        className="relative overflow-hidden border-y border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold uppercase md:text-4xl"
          >
            Are you a Provider?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-xl text-gray-300"
          >
            Join now, create your profile, and let clients find you
            effortlessly.
          </motion.p>
          <Link
            href="/provider/register"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-bold uppercase text-black shadow-xl hover:shadow-2xl"
          >
            🚀 Register Now
          </Link>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/10 bg-black/40 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
          {/* Refer & Earn */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-3 text-lg font-bold uppercase">Refer & Earn</h4>
            <p className="mb-4 text-sm text-gray-300">
              Invite friends and earn credits on each successful hire.
            </p>
            <div className="flex gap-3">
              <button className="rounded-xl bg-yellow-400 px-4 py-2 font-semibold text-black hover:scale-[1.02] transition">
                Copy ID
              </button>
              <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 hover:bg-white/20 transition">
                Invite
              </button>
            </div>
          </div>

          {/* Payment CTA */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto mb-4 w-full max-w-[220px] rounded-xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-300">
                QR Code
              </p>
              <p className="text-xl font-bold">₹500</p>
            </div>
            <button className="mb-2 rounded-xl bg-yellow-400 px-5 py-2 font-semibold text-black hover:scale-[1.02] transition">
              Pay to avail Discount Card
            </button>
            <button className="rounded-xl border border-white/20 bg-white/10 px-5 py-2 hover:bg-white/20 transition">
              Send us Screenshot
            </button>
          </div>

          {/* Newsletter */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-4 text-lg font-bold uppercase">
              Subscribe Newsletter
            </h4>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 rounded-xl bg-white px-4 py-3 text-black outline-none"
              />
              <button className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-black hover:scale-[1.02] transition">
                Submit
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Check your inbox and verify your subscription.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row">
            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/franchise" className="hover:text-white">
                Franchisee
              </Link>
              <Link href="/native" className="hover:text-white">
                Know Your Native
              </Link>
              <Link href="/become-native" className="hover:text-white">
                Become Our Native
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span>Rajat</span>
              <span>6574234527</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Small header component for sections ---------- */
function Header({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center">
      <div className="text-xs uppercase tracking-[0.2em] text-yellow-400/80">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
