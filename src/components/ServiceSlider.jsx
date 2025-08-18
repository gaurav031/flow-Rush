'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiMonitor, FiSmartphone, FiCode } from 'react-icons/fi';

const SERVICES = [
  {
    icon: FiGlobe,
    title: 'Website Design',
    description:
      'Beautiful, responsive websites that convert visitors into customers with cutting-edge design',
    points: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    dot: 'bg-blue-400',
    accent: 'bg-gradient-to-r from-blue-400 to-blue-500',
  },
  {
    icon: FiMonitor,
    title: 'Website Development',
    description:
      'High-performance web applications built with modern technologies and best practices',
    points: ['React/Next.js', 'Node.js Backend', 'Cloud Hosting'],
    dot: 'bg-purple-400',
    accent: 'bg-gradient-to-r from-purple-400 to-pink-400',
  },
  {
    icon: FiSmartphone,
    title: 'App Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android that users love',
    points: ['iOS & Android', 'React Native', 'App Store Ready'],
    dot: 'bg-green-400',
    accent: 'bg-gradient-to-r from-green-400 to-teal-400',
  },
  {
    icon: FiCode,
    title: 'Software Development',
    description:
      'Custom enterprise software solutions tailored to your unique business requirements',
    points: ['Enterprise Grade', 'Scalable Architecture', '24/7 Support'],
    dot: 'bg-orange-400',
    accent: 'bg-gradient-to-r from-orange-400 to-red-400',
  },
];

export default function ServiceSection() {
  return (
    <section
      className="py-20 text-white"
      style={{
        background:
          'linear-gradient(135deg, #020618 0%, #162456 50%, #0F172B 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300">
            • Our Expertise
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Premium{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Services
            </span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            From concept to deployment, we deliver excellence across all digital
            platforms
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 15px 40px rgba(3,10,28,0.5)',
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative rounded-2xl bg-white/3 backdrop-blur-sm border border-white/10 p-8 min-h-[430px] flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center mb-6">
                  <div className="w-10 h-10 rounded-md bg-white/3 flex items-center justify-center">
                    <Icon className="text-white/90 w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-300 mb-6 flex-0">{s.description}</p>

                <ul className="space-y-3 mt-auto mb-6">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-3">
                      <span className={`mt-1 inline-block w-2 h-2 rounded-full ${s.dot}`} />
                      <span className="text-sm">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <div className={`w-16 h-1 rounded-full ${s.accent}`} />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5 mix-blend-overlay" />
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Decorative three dots with line */}
      <div className="flex items-center justify-center w-full py-10">
        <div className="relative flex items-center w-40 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
          <div className="absolute left-1/4 w-2 h-2 rounded-full bg-purple-400" />
          <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400" />
          <div className="absolute right-1/4 w-2 h-2 rounded-full bg-purple-400" />
        </div>
      </div>
    </section>
  );
}
