'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiClock, FiAward } from 'react-icons/fi';

export default function WhiteLabel() {
  const stats = [
    {
      value: '5000+',
      label: 'Projects Done',
      icon: <FiAward size={28} />,
      gradient: 'from-sky-400 to-blue-500',
      border: 'from-sky-400 to-blue-500',
    },
    {
      value: '300+',
      label: 'Happy Clients',
      icon: <FiUsers size={28} />,
      gradient: 'from-pink-500 to-purple-500',
      border: 'from-pink-500 to-purple-500',
    },
    {
      value: '8+',
      label: 'Years Expertise',
      icon: <FiClock size={28} />,
      gradient: 'from-green-400 to-teal-500',
      border: 'from-green-400 to-teal-500',
    },
  ];

  return (
    <section
      className="relative text-white py-20"
      style={{
        background: 'linear-gradient(135deg, #020618 0%, #162456 50%, #0F172B 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block px-5 py-1.5 text-sm rounded-full bg-purple-900/40 border border-purple-500/40 text-purple-300 mb-8">
            Premium Partnership
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-snug mb-8">
            <span className="text-purple-400">White-Label</span><br />
            Development You Can Rely On
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Focus on growing your business while we handle the technical execution behind
            the scenes. Our white-label development services are designed for agencies
            and consultants who need a dependable partner.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300 text-lg mb-8">
            We deliver high-quality web, software, and app solutions—on time, on brand,
            and under strict confidentiality.
          </div>

          <button className="px-8 py-4 rounded-full text-white font-medium text-lg flex items-center gap-2 
            bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition shadow-lg">
            About Flowrush Technologies →
          </button>
        </div>

        {/* Right Content → Stats */}
        <div className="grid gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-md relative"
            >
              {/* Icon Top Right */}
              <div
                className={`absolute top-5 right-5 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${stat.gradient} bg-opacity-20`}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <h3
                className={`text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.value}
              </h3>
              <p className="text-gray-300 text-xl mt-2">{stat.label}</p>

              {/* Bottom Line */}
              <div className={`h-[3px] w-full mt-6 rounded-full bg-gradient-to-r ${stat.border}`}></div>
            </motion.div>
          ))}
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
