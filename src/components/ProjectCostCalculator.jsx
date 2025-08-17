'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiMonitor, FiSmartphone, FiServer } from 'react-icons/fi';

// data
const PROJECT_TYPES = [
  { id: 'web', title: 'Website Development', subtitle: 'Responsive, fast-loading websites', base: 2500, icon: FiGlobe },
  { id: 'webapp', title: 'Web Application', subtitle: 'Custom web applications', base: 5000, icon: FiMonitor },
  { id: 'mobile', title: 'Mobile App', subtitle: 'iOS & Android applications', base: 8000, icon: FiSmartphone },
  { id: 'enterprise', title: 'Enterprise Solution', subtitle: 'Large-scale custom software', base: 15000, icon: FiServer },
];

const COMPLEXITIES = [
  { id: 'simple', title: 'Simple', desc: 'Basic features, templates', mult: 1.0 },
  { id: 'medium', title: 'Medium', desc: 'Custom features, integrations', mult: 1.4 },
  { id: 'complex', title: 'Complex', desc: 'Advanced features, multiple integrations', mult: 1.8 },
  { id: 'enterprise', title: 'Enterprise', desc: 'Custom architecture, complex workflows', mult: 2.4 },
];

const TIMELINES = [
  { id: 'normal', title: 'Standard (6-8 weeks)', mult: 1.0 },
  { id: 'rush', title: 'Rush (2-4 weeks)', mult: 1.35 },
  { id: 'flex', title: 'Flexible (10-12 weeks)', mult: 0.95 },
];

const EXTRA_FEATURES = [
  { id: 'analytics', title: 'Analytics Dashboard', price: 1000 },
  { id: 'payments', title: 'Payment Integration', price: 1500 },
  { id: 'chat', title: 'Live Chat Support', price: 800 },
  { id: 'multilang', title: 'Multi-language Support', price: 1200 },
];

// easing array (used by framer-motion transitions)
const ease = [0.25, 0.1, 0.25, 1];

export default function WhiteLabelCalculator() {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[2].id); // Mobile App
  const [complexity, setComplexity] = useState(COMPLEXITIES[1].id); // Medium
  const [timeline, setTimeline] = useState(TIMELINES[1].id); // Rush
  const [teamSize, setTeamSize] = useState(4);
  const [features, setFeatures] = useState([]);

  const toggleFeature = (id) =>
    setFeatures(prev => (prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]));

  const project = PROJECT_TYPES.find(p => p.id === projectType);
  const complexityObj = COMPLEXITIES.find(c => c.id === complexity);
  const timelineObj = TIMELINES.find(t => t.id === timeline);

  const estimate = useMemo(() => {
    const base = project.base;
    const complexityMultiplier = complexityObj.mult;
    const timelineMultiplier = timelineObj.mult;

    const perDev = 2500;
    const teamCost = Math.max(0, teamSize - 1) * perDev;

    const featuresCost = features.reduce((acc, id) => {
      const f = EXTRA_FEATURES.find(x => x.id === id);
      return acc + (f ? f.price : 0);
    }, 0);

    const subtotal = base * complexityMultiplier;
    const total = Math.round((subtotal * timelineMultiplier) + teamCost + featuresCost);

    return { raw: total, subtotal: Math.round(subtotal), teamCost, featuresCost };
  }, [project, complexityObj, timelineObj, teamSize, features]);

  const formatCurrency = (n) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  // percent used for slider fill (1..8)
  const sliderPercent = Math.round(((teamSize - 1) / (8 - 1)) * 100);

  // small motion variant helper
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.42, ease } }),
  };

  return (
    <section
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-10"
      style={{
        background: 'linear-gradient(135deg, #020618 0%, #162456 50%, #0F172B 100%)',
      }}
    >
      {/* slider thumb CSS for WebKit + Firefox, thumb vertically centered */}
      <style>{`
        /* WebKit */
        input[type=range].range {
          -webkit-appearance: none;
          appearance: none;
          height: 12px;
          border-radius: 9999px;
        }
        input[type=range].range::-webkit-slider-runnable-track {
          height: 12px;
          border-radius: 9999px;
        }
        input[type=range].range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 3px solid #0b1220;
          box-shadow: 0 4px 8px rgba(0,0,0,0.45);
          margin-top: -3px; /* center the thumb on the track */
        }
        /* Firefox */
        input[type=range].range::-moz-range-track {
          height: 12px;
          border-radius: 9999px;
        }
        input[type=range].range::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 3px solid #0b1220;
          box-shadow: 0 4px 8px rgba(0,0,0,0.45);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-10">
          <motion.span initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500 to-teal-400/40 text-green-200">
            Instant Pricing
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.6 }} className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight text-white">
            Project{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
              Cost Calculator
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.6 }} className="mt-3 text-gray-300 max-w-3xl mx-auto">
            Get an instant estimate for your project. Customize options to see real-time pricing updates.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* left (controls) — slightly narrower: 8/12 */}
          <div className="lg:col-span-8 space-y-6">
            {/* Project Type */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: {} }} className="rounded-xl border border-white/6 p-4 bg-white/3 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">⚡ Project Type</h3>
              </div>

              {/* 2 columns on md+ for two per row (2x2 layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((p, idx) => {
                  const Icon = p.icon;
                  const selected = projectType === p.id;
                  return (
                    <motion.button
                      key={p.id}
                      onClick={() => setProjectType(p.id)}
                      custom={idx}
                      variants={cardVariants}
                      whileHover={{ y: -4 }}
                      className={`h-full flex flex-col justify-between w-full text-left p-3 rounded-lg border transition relative overflow-hidden
                        ${selected ? 'border-blue-400/60 ring-1 ring-blue-400/30 bg-gradient-to-br from-white/4 to-white/2' : 'border-white/10 hover:border-white/20'}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-md flex items-center justify-center bg-white/6 border ${selected ? 'border-blue-400/40' : 'border-white/8'}`}>
                          <Icon className="text-white/90 w-5 h-5" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-semibold text-white">{p.title}</h4>
                          </div>
                          <p className="text-gray-300 mt-1 text-sm">{p.subtitle}</p>
                          <p className="text-sm mt-2 text-blue-300">Starting from {formatCurrency(p.base)}</p>
                        </div>
                      </div>

                      {/* centered indicator bar under starting price */}
                      <div className="mt-4 flex items-center justify-center">
                        <div className={`w-20 h-0.5 rounded-full ${selected ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-white/5'}`} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Complexity + Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-xl border border-white/6 p-4 bg-white/3 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-white mb-3">Complexity</h3>
                <div className="space-y-3">
                  {COMPLEXITIES.map(c => {
                    const selected = complexity === c.id;
                    return (
                      <motion.button key={c.id} onClick={() => setComplexity(c.id)} whileHover={{ scale: 1.01 }} className={`w-full text-left rounded-lg px-3 py-3 border transition ${selected ? 'bg-gradient-to-r from-purple-600/30 to-pink-500/10 border-purple-400/40' : 'bg-white/3 border-white/10 hover:border-white/20'}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-white text-sm">{c.title}</div>
                            <div className="text-xs text-gray-300 mt-1">{c.desc}</div>
                          </div>
                          <div className="text-sm text-gray-200">{c.mult}x</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }} className="rounded-xl border border-white/6 p-4 bg-white/3 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-white mb-3">Timeline</h3>
                <div className="space-y-3">
                  {TIMELINES.map(t => {
                    const selected = timeline === t.id;
                    return (
                      <button key={t.id} onClick={() => setTimeline(t.id)} className={`w-full text-left rounded-lg px-3 py-3 border transition ${selected ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/10 border-teal-400/40' : 'bg-white/3 border-white/10 hover:border-white/20'}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-white text-sm">{t.title}</div>
                          </div>
                          <div className="text-sm text-gray-200">{t.mult}x</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Team Size (thinner look) */}
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="rounded-xl border border-white/6 p-4 bg-white/3 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-2">Team Size: <span className="text-teal-300">{teamSize} devs</span></h3>
              <div className="mb-2 text-xs text-gray-300">Choose the number of developers</div>

              <div className="mt-4">
                <input
                  type="range"
                  min={1}
                  max={8}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="range w-full"
                  style={{
                    height: 12,
                    borderRadius: 9999,
                    background: `linear-gradient(90deg, #11c77c ${sliderPercent}%, rgba(255,255,255,0.06) ${sliderPercent}%)`,
                    outline: 'none',
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2"><span>1</span><span>8</span></div>
              </div>
            </motion.div>

            {/* Additional Features */}
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.14 }} className="rounded-xl border border-white/6 p-4 bg-white/3 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white mb-3">Additional Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {EXTRA_FEATURES.map((f) => {
                  const checked = features.includes(f.id);
                  return (
                    <button key={f.id} onClick={() => toggleFeature(f.id)} className={`text-left rounded-lg p-3 border transition flex justify-between items-center ${checked ? 'bg-gradient-to-r from-green-500/20 to-teal-400/10 border-green-400/30' : 'bg-white/3 border-white/10 hover:border-white/20'}`}>
                      <div>
                        <div className="font-medium text-white text-sm">{f.title}</div>
                        <div className="text-xs text-gray-300 mt-1">+{formatCurrency(f.price)}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-full ${checked ? 'bg-green-400' : 'bg-white/6'}`} />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* right (sticky estimate) — slightly larger: 4/12 */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="rounded-xl border border-white/6 p-6 lg:p-8 bg-white/4 backdrop-blur-sm shadow-2xl"
              >
                <h4 className="text-lg font-semibold text-white mb-5">Project Estimate</h4>

                <motion.div key={estimate.raw} initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.45, ease }} className="text-center mb-4">
                  {/* Slightly larger but not too heavy */}
                  <div className="text-3xl md:text-4xl font-semibold text-teal-300">{formatCurrency(estimate.raw)}</div>
                  <div className="text-sm text-gray-300">Estimated total cost</div>
                </motion.div>

                <div className="space-y-2 mt-5">
                  <div className="flex items-center justify-between bg-white/6 rounded-md px-4 py-2">
                    <div className="text-xs text-gray-300">Project Type</div>
                    <div className="text-sm font-medium text-white">{project.title}</div>
                  </div>

                  <div className="flex items-center justify-between bg-white/6 rounded-md px-4 py-2">
                    <div className="text-xs text-gray-300">Complexity</div>
                    <div className="text-sm font-medium text-white">{complexityObj.title}</div>
                  </div>

                  <div className="flex items-center justify-between bg-white/6 rounded-md px-4 py-2">
                    <div className="text-xs text-gray-300">Timeline</div>
                    <div className="text-sm font-medium text-white">{timelineObj.title}</div>
                  </div>

                  <div className="flex items-center justify-between bg-white/6 rounded-md px-4 py-2">
                    <div className="text-xs text-gray-300">Team Size</div>
                    <div className="text-sm font-medium text-white">{teamSize} devs</div>
                  </div>
                </div>

                {/* FULL-WIDTH CTA (long) */}
                <div className="mt-6">
                  <button
                    className="w-full inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-white font-semibold text-sm"
                    style={{
                      background: 'linear-gradient(90deg, #11c77c 0%, #7b4bff 100%)',
                      boxShadow: '0 12px 36px rgba(123,75,255,0.16)',
                    }}
                    aria-label="Get Detailed Quote"
                  >
                    Get Detailed Quote
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>

                <div className="mt-4 text-xs text-gray-400">Final pricing may vary based on specific requirements. This estimate is for planning purposes only.</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Dots with Line */}
<div className="flex items-center justify-center w-full py-10">
  <div className="relative flex items-center w-40 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
    <div className="absolute left-1/4 w-2 h-2 rounded-full bg-purple-400"></div>
    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400"></div>
    <div className="absolute right-1/4 w-2 h-2 rounded-full bg-purple-400"></div>
  </div>
</div>
    </section>
  );
}
