// components/Footer.jsx
"use client";

import React from "react";

const stats = [
  { value: "500+", label: "Projects Delivered", icon: "code" },
  { value: "100+", label: "Happy Clients", icon: "users" },
  { value: "99.2%", label: "Satisfaction Rate", icon: "award" },
  { value: "24/7", label: "Support Available", icon: "bolt" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "Enterprise Solutions",
  "API Development",
  "Consultation",
];

const solutions = [
  "White-Label Partnership",
  "Custom Development",
  "Technical Audits",
  "Team Augmentation",
  "Pricing Calculator",
];

const resources = ["Case Studies", "Process Overview", "FAQ", "Technology Stack", "Blog"];
const company = ["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-[#0b1230] via-[#0f1830] to-[#0b1230] text-white"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center mb-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* rounded stroke square with subtle bg */}
              <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-white/3 border border-white/6">
                {/* icon uses currentColor from wrapper class; increased size */}
                <div className="text-cyan-400">
                  {s.icon === "code" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="block">
                      <path d="M8.5 16.5L3.5 12L8.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.5 7.5L20.5 12L15.5 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}

                  {s.icon === "users" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="block">
                      <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 20c0-2.8 2.7-5 6-5s6 2.2 6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}

                  {s.icon === "award" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="block">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 18l2-2 2 1 2-1 2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}

                  {s.icon === "bolt" && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="block">
                      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>

              <div className="text-2xl md:text-3xl font-extrabold">{s.value}</div>
              <div className="text-sm text-gray-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Thin divider */}
        <div className="border-t border-white/5 mb-12" />

        {/* Footer main area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pb-12">
          {/* Left column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg p-[2px] bg-white/3 border border-white/6 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                  <path d="M8 12l2-2-2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 12l-2 2 2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-xl font-semibold">Flowrush</div>
            </div>

            <p className="text-gray-300 mb-6">
              Transforming agencies with premium white-label development solutions. We deliver cutting-edge
              technology that empowers your business growth.
            </p>

            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 8l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>hello@flowrush-tech.com</span>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V21a1 1 0 01-1.09 1A19 19 0 013 5.09 1 1 0 014 4h4.09a1 1 0 01.95.68l.72 2.16a1 1 0 01-.24 1l-1.27 1.27a11 11 0 005.06 5.06l1.27-1.27a1 1 0 011-.24l2.16.72a1 1 0 01.68.95z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>+1 (555) FLOW-RUSH</span>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span>San Francisco, CA</span>
              </li>
            </ul>

            {/* newsletter small card */}
            <div className="mt-8 rounded-2xl bg-white/2 border border-white/6 p-6 shadow-md max-w-md">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 mb-4">Get the latest insights on development trends and our new services.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/6 placeholder-gray-400 border border-white/8 text-white focus:outline-none"
                />
                {/* subscribe button styled like your image: pill gradient, stronger glow */}
                <button
                  className="px-5 py-2 rounded-full text-white font-medium shadow-lg"
                  style={{
                    background: "linear-gradient(90deg,#1fb6ff,#7c4dff,#ff49db)",
                    boxShadow: "0 10px 30px rgba(124,77,255,0.18), 0 6px 18px rgba(31,182,255,0.08)",
                  }}
                >
                  Subscribe
                  <svg className="inline-block ml-3 w-4 h-4 align-middle" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:col-span-3 gap-6">
            <div>
              <h5 className="text-white font-semibold mb-4">Services</h5>
              <ul className="space-y-3 text-gray-300">
                {services.map((s, i) => (
                  <li key={i} className="text-sm hover:text-white transition">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">Solutions</h5>
              <ul className="space-y-3 text-gray-300">
                {solutions.map((s, i) => (
                  <li key={i} className="text-sm hover:text-white transition">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">Resources</h5>
              <ul className="space-y-3 text-gray-300">
                {resources.map((r, i) => (
                  <li key={i} className="text-sm hover:text-white transition">{r}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-3 text-gray-300">
                {company.map((c, i) => (
                  <li key={i} className="text-sm hover:text-white transition">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* bottom divider */}
        <div className="border-t border-white/5" />

        {/* Bottom-most row: copyright left, socials right (removed 'Made with passion') */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6 pb-8">
          {/* left copyright */}
          <div className="flex items-center gap-3 text-gray-300">
            <span>© {new Date().getFullYear()} Flowrush Technologies. All rights reserved.</span>
          </div>

          {/* right social icons (stroke-only inside rounded box) - made slightly larger */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-lg border border-white/6 flex items-center justify-center bg-white/3 hover:bg-white/4 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-14h4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-lg border border-white/6 flex items-center justify-center bg-white/3 hover:bg-white/4 transition"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3 1 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-lg border border-white/6 flex items-center justify-center bg-white/3 hover:bg-white/4 transition"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.57.11.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18A11.05 11.05 0 0112 6.8c.98.01 1.97.13 2.9.38 2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.67.42.36.8 1.07.8 2.16 0 1.55-.02 2.8-.02 3.18 0 .31.21.68.79.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-lg border border-white/6 flex items-center justify-center bg-white/3 hover:bg-white/4 transition"
              aria-label="Website"
            >
              <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2"/><path d="M2 12h20M12 2v20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>

        {/* legal links centered */}
        <div className="pt-6 pb-12 border-t border-white/5 mt-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 text-sm">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
