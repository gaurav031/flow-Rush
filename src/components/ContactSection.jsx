// components/ContactSection.jsx
"use client";

import React from "react";

export default function ContactSection() {
  const features = [
    { text: "Teams across multiple time zones", color: "from-[#007CF0] to-[#00DFD8]" },
    { text: "Real-time communication channels", color: "from-[#00FF87] to-[#60EFFF]" },
    { text: "24/7 project monitoring and updates", color: "from-[#A18CD1] to-[#FBC2EB]" },
    { text: "Instant response guarantee", color: "from-[#FF6B6B] to-[#FFD93D]" },
  ];

  return (
    <section
      className="relative w-full py-20 px-6 text-white"
      style={{
        background: "linear-gradient(135deg, #0b1230 0%, #101836 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="relative">
          {/* Tag */}
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#0a3d62] to-[#1e5fad] text-white font-medium shadow-md">
            Global Connectivity
          </div>

          {/* Heading — forced into three equal lines */}
          <h2 className="mt-8 font-bold leading-tight">
            <span className="block text-4xl md:text-5xl lg:text-6xl text-[#1dd1a1]">24/7 Global</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-white">Connectivity That</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-white">Works Around You</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            No matter where you are, we're always within reach. With teams across time zones,
            Flowrush ensures round-the-clock communication, seamless collaboration, and real-time
            updates—because your deadlines don't wait, and neither do we.
          </p>

          {/* Features list */}
          <div className="mt-10 space-y-4">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0f1a34]/60 border border-white/5"
              >
                {/* rotated gradient square with light corner + inner blur */}
                <div
                  className={`relative w-14 h-14 rounded-lg transform rotate-3 p-[2px] bg-gradient-to-br ${f.color} flex items-center justify-center`}
                >
                  <div className="w-full h-full rounded-md bg-[#0b1230]/50 backdrop-blur-sm" />
                  <div
                    className="absolute top-1 left-1 w-3 h-3 rounded-full"
                    style={{ background: "rgba(255,255,255,0.04)", transform: "rotate(10deg)" }}
                  />
                </div>

                <span className="text-base text-gray-100">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Contact Form */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Let’s Connect
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 rounded-lg bg-white/6 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-3 py-2 rounded-lg bg-white/6 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">Company Name</label>
              <input
                type="text"
                placeholder="Your Company Ltd."
                className="w-full px-3 py-2 rounded-lg bg-white/6 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">City</label>
                <input
                  type="text"
                  placeholder="London"
                  className="w-full px-3 py-2 rounded-lg bg-white/6 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Country</label>
                <input
                  type="text"
                  placeholder="United Kingdom"
                  className="w-full px-3 py-2 rounded-lg bg-white/6 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">WhatsApp Number</label>
              <input
                type="text"
                placeholder="+44 123 456 7890"
                className="w-full px-3 py-2 rounded-lg bg-white/6 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">Short Message</label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-3 py-2 rounded-lg bg-white/6 text-white placeholder-gray-400 border border-white/8 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-95 transition"
              >
                Connect Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
