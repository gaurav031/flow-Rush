'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      <motion.header
        key="header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[85%] rounded-2xl border border-white/6 bg-transparent backdrop-blur-sm"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* grid layout: left (logo), center (nav), right (cta / menu) */}
          <div className="grid grid-cols-3 items-center py-3">
            {/* LEFT: Logo */}
            <div className="flex items-center justify-start">
              <a href="#hero" className="flex items-center space-x-2" aria-label="Home">
                <Image src="/logo.png" alt="Flowrush Logo" width={140} height={50} priority />
              </a>
            </div>

            {/* CENTER: Nav (centered on desktop, hidden on mobile) */}
            <div className="flex items-center justify-center">
              <nav className="hidden md:flex space-x-8" aria-label="Primary">
                {navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-gray-200 hover:text-white transition text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* RIGHT: CTA + mobile menu */}
            <div className="flex items-center justify-end space-x-4">
              {/* Desktop CTA (simple style, no glow) */}
              <div className="hidden md:flex items-center">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition"
                >
                  Get Started
                </a>
              </div>

              {/* Mobile menu button (right corner) */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-200 hover:text-white focus:outline-none"
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                  {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu content (simple) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="md:hidden bg-transparent border-t border-white/8 overflow-hidden rounded-b-2xl"
            >
              <div className="px-6 pt-4 pb-8 space-y-6">
                <nav className="flex flex-col space-y-4" aria-label="Mobile">
                  {navLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="text-gray-200 hover:text-white transition py-2 border-b border-white/6"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="block text-center px-4 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
