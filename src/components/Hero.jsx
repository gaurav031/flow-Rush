'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Star, Users, Award } from 'lucide-react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

// ✅ Stats Data
const stats = [
  { value: '500+', label: 'Projects Delivered', color: 'text-blue-400' },
  { value: '98%', label: 'Client Satisfaction', color: 'text-green-400' },
  { value: '24/7', label: 'Support Available', color: 'text-pink-400' },
  { value: '15+', label: 'Countries Served', color: 'text-orange-400' },
];

// ✅ Trust Badges
const badges = [
  { icon: ShieldCheck, text: 'SSL Secured', color: 'bg-green-600/20 text-green-400' },
  { icon: Award, text: 'Top Rated', color: 'bg-yellow-600/20 text-yellow-400' },
  { icon: Users, text: '500+ Clients', color: 'bg-blue-600/20 text-blue-400' },
  { icon: Star, text: '4.9/5 Rating', color: 'bg-purple-600/20 text-purple-400' },
];

export default function Hero() {
  return (
    <section
      style={{
        background:
          'linear-gradient(135deg, #020618 0%, #162456 50%, #0F172B 100%)',
      }}
      className="relative text-white"
    >
      {/* ✅ HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Build Your <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Dream Products
          </span>
          <br />
          Without the Hassle
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg text-gray-300 mx-auto"
        >
          We're your invisible tech team. You focus on clients, we handle the code.
          Professional, fast, and completely white-label.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 
            bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 transition shadow-lg">
            Start Your Project <FiArrowRight />
          </button>
          <button className="px-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 
            bg-white/10 border border-white/20 hover:bg-white/20 transition">
            <FiPlay /> Watch Demo
          </button>
        </motion.div>
      </div>

      {/* ✅ STATS + BADGES SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 shadow-lg hover:shadow-blue-500/20 transition"
            >
              <motion.h3
                className={`text-3xl font-bold mb-2 ${stat.color}`}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${badge.color}`}
            >
              <badge.icon size={16} />
              {badge.text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative three dots with line */}
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
