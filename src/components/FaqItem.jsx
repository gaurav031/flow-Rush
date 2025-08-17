'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <motion.div 
      layout 
      className="border-b border-gray-800 pb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Question Header */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
      >
        <motion.h3
          animate={{ color: isActive ? "#60A5FA" : "#fff" }} // blue-400 when active
          transition={{ duration: 0.3 }}
          className="text-xl font-medium"
        >
          {question}
        </motion.h3>

        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <FiChevronDown className="text-blue-400 text-xl" />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="pb-4 text-gray-300"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;
