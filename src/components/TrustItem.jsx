'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustItem = ({ title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustItem;