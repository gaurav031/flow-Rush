'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Button = ({ text, variant = 'primary', className = '', type = 'button', ...props }) => {
  const [hover, setHover] = useState(false);
  
  const baseClasses = 'relative px-8 py-4 rounded-full font-medium text-lg overflow-hidden transition-all duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900',
  };
  
  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.span 
        className="relative z-10"
        initial={false}
        animate={{ 
          x: hover ? [0, 2, -2, 2, 0] : 0,
          transition: { duration: 0.5 }
        }}
      >
        {text}
      </motion.span>
      
      {variant === 'primary' && (
        <>
          <motion.div 
            className="absolute inset-0 bg-white opacity-0"
            animate={{ 
              opacity: hover ? 0.1 : 0,
              transition: { duration: 0.3 }
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-white opacity-0"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: hover ? 1.5 : 0.5,
              opacity: hover ? 0 : 0,
              transition: { duration: 0.5 }
            }}
          />
        </>
      )}
    </motion.button>
  );
};

export default Button;