'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ number, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center backdrop-blur-sm"
    >
      <motion.p 
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
        animate={inView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {number}
      </motion.p>
      <p className="text-xl text-gray-300">{label}</p>
    </motion.div>
  );
};

export default StatCard;