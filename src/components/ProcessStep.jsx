"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discovery & Alignment",
    description:
      "We start by understanding your client's goals, expectations, and timelines to ensure we're fully aligned from day one.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    number: "2",
    title: "Tailored Planning",
    description:
      "Our team creates a custom development roadmap with clear milestones, ensuring transparency and a smooth workflow.",
    color: "from-pink-400 to-purple-400",
  },
  {
    number: "3",
    title: "Rapid Prototyping",
    description:
      "We build and share early prototypes or design mockups for quick feedback—minimizing revisions and speeding up approvals.",
    color: "from-green-400 to-cyan-400",
  },
  {
    number: "4",
    title: "Development & Testing",
    description:
      "We follow agile methodologies to ensure clean coding, rigorous testing, and efficient bug fixing for reliability.",
    color: "from-yellow-400 to-orange-400",
  },
  {
    number: "5",
    title: "Launch & Support",
    description:
      "Once deployed, we provide ongoing support, maintenance, and updates to ensure long-term success.",
    color: "from-indigo-400 to-blue-500",
  },
];

export default function Process() {
  return (
    <section className="bg-[#0D1224] py-20 px-6 text-center">
      {/* Top Badge */}
      <div className="flex justify-center mb-6">
        <span className="px-6 py-2 rounded-full bg-gradient-to-r from-green-800 to-cyan-800 text-white text-sm font-medium shadow-lg">
          Our Process
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          5-Step Process
        </span>{" "}
        <span className="text-white">to Keep Your Clients Happy</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        A proven methodology that ensures success from concept to launch
      </p>

      {/* Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-[#10172D] border border-white/10 text-left shadow-xl flex flex-col justify-between"
          >
            {/* Number */}
            <div className="flex items-center mb-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold text-lg">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {step.description}
            </p>

            {/* Bottom Line */}
            <div
              className={`h-[3px] w-full rounded-full bg-gradient-to-r ${step.color}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
