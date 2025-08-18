// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import Image from 'next/image';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { name: 'Services', href: '#services' },
//     { name: 'Tools', href: '#tools' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   // Detect scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setShowHeader(false);
//       } else {
//         setShowHeader(true);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   // Smooth scroll handler
//   function handleNav(href) {
//     if (!href) return;
//     if (href.startsWith('#')) {
//       const id = href.slice(1);
//       const el = document.getElementById(id);
//       if (el) {
//         const yOffset = -80;
//         const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       } else {
//         window.location.hash = href;
//       }
//       setIsOpen(false);
//     } else {
//       window.location.href = href;
//       setIsOpen(false);
//     }
//   }

//   return (
//     <AnimatePresence>
//       {showHeader && (
//         <motion.header
//           key="header"
//           initial={{ y: -80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -80, opacity: 0 }}
//           transition={{ duration: 0.35, ease: 'easeInOut' }}
//           className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[85%] 
//           rounded-2xl bg-[#121a3d] border border-white/10" // ✅ lighter than hero (#0b1230)
//         >
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-3 items-center py-3">
//               {/* LEFT: Logo */}
//               <div className="flex items-center justify-start">
//                 <a
//                   href="#hero"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNav('#hero');
//                   }}
//                   className="flex items-center space-x-2"
//                 >
//                   <Image src="/logo.png" alt="Flowrush Logo" width={140} height={50} priority />
//                 </a>
//               </div>

//               {/* CENTER: Nav */}
//               <div className="flex items-center justify-center">
//                 <nav className="hidden md:flex space-x-8">
//                   {navLinks.map((link, i) => (
//                     <button
//                       key={i}
//                       onClick={() => handleNav(link.href)}
//                       className="text-gray-300 hover:text-white transition text-sm md:text-base bg-transparent border-0"
//                     >
//                       {link.name}
//                     </button>
//                   ))}
//                 </nav>
//               </div>

//               {/* RIGHT: CTA + mobile menu */}
//               <div className="flex items-center justify-end space-x-4">
//                 {/* Desktop CTA */}
//                 <div className="hidden md:flex items-center">
//                   <a
//                     href="https://calendly.com/sahaj-baveja"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       window.open('https://calendly.com/sahaj-baveja', '_blank', 'noopener,noreferrer');
//                     }}
//                     className="px-10 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 transition-all shadow-md"
//                   >
//                     Book a Meeting
//                   </a>
//                 </div>

//                 {/* Mobile menu button */}
//                 <div className="md:hidden">
//                   <button
//                     onClick={toggleMenu}
//                     className="text-gray-300 hover:text-white focus:outline-none"
//                   >
//                     {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu */}
//           <AnimatePresence>
//             {isOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.28, ease: 'easeInOut' }}
//                 className="md:hidden bg-[#121a3d] border-t border-white/10 overflow-hidden rounded-b-2xl"
//               >
//                 <div className="px-6 pt-4 pb-8 space-y-6">
//                   <nav className="flex flex-col space-y-4">
//                     {navLinks.map((link, i) => (
//                       <button
//                         key={i}
//                         onClick={() => handleNav(link.href)}
//                         className="text-gray-300 hover:text-white transition py-2 border-b border-white/10 text-left w-full"
//                       >
//                         {link.name}
//                       </button>
//                     ))}
//                   </nav>
//                   <div className="pt-4">
//                     <a
//                       href="https://calendly.com/sahaj-baveja"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         window.open('https://calendly.com/sahaj-baveja', '_blank', 'noopener,noreferrer');
//                         setIsOpen(false);
//                       }}
//                       className="block text-center w-full px-10 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 transition-all shadow-md"
//                     >
//                       Book a Meeting
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.header>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Header;



'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Tools', href: '#tools' },
    { name: 'Contact', href: '#contact' },
  ];


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleNav(href) {
    if (!href) return;
    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.location.hash = href;
      }
      setIsOpen(false);
    } else {
      window.location.href = href;
      setIsOpen(false);
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] 
        rounded-2xl shadow-lg px-4 py-2
        ${isScrolled ? 'bg-[#0f1630]/90 border border-white/10 backdrop-blur-md' : 'bg-[#0f1630]/70 border border-transparent backdrop-blur-sm'}
        transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        {/* LEFT: Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#hero');
          }}
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Flowrush Logo"
            width={150}
            height={50}
            priority
          />
        </a>

        {/* CENTER: Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => handleNav(link.href)}
              className={`${isScrolled
                ? 'text-gray-200 hover:text-white'
                : 'text-white/90 hover:text-white'
                } transition text-sm md:text-base bg-transparent border-0`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* RIGHT: CTA + Mobile Menu */}
        <div className="flex items-center justify-end space-x-4">
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://calendly.com/sahaj-baveja"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://calendly.com/sahaj-baveja', '_blank', 'noopener,noreferrer');
              }}
              className="px-10 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 transition-all shadow-md"

            >
              Book a Meeting
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="md:hidden bg-[#121a3d]/95 backdrop-blur-sm border-t border-white/10 overflow-hidden mt-3 rounded-xl"
        >
          <div className="px-6 pt-4 pb-8 space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => handleNav(link.href)}
                  className="text-gray-300 hover:text-white transition py-2 border-b border-white/10 text-left w-full"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="pt-4">
              <a
                href="https://calendly.com/sahaj-baveja"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://calendly.com/sahaj-baveja', '_blank', 'noopener,noreferrer');
                }}
                className="block text-center w-full px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all shadow-md"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
