import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        setScrolled(currentScrollY > 20);

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Service', target: 'service' },
    { name: 'Project', target: 'project' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false);
    scrollToSection(target);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: show ? 0 : -100,
          opacity: show ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-colors duration-300 ${
          scrolled || isMenuOpen
            ? 'bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <motion.button
          onClick={(e) => handleNavClick(e, 'home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white font-black text-xl md:text-2xl tracking-widest uppercase cursor-pointer relative z-50 flex items-center gap-1 group bg-transparent border-0"
        >
          <span>Dheerajj</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] group-hover:scale-150 transition-transform"></span>
        </motion.button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <motion.button
              key={item.name}
              onClick={(e) => handleNavClick(e, item.target)}
              whileHover={{ y: -2, color: '#ccff00' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="text-gray-300 text-sm transition-colors uppercase tracking-wider font-medium relative group py-1 bg-transparent border-0 cursor-pointer"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ccff00] transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white cursor-pointer hover:text-[#ccff00] transition-colors relative z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={(e) => handleNavClick(e, item.target)}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1, color: '#ccff00' }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white text-3xl font-black uppercase tracking-widest hover:text-[#ccff00] transition-colors bg-transparent border-0 cursor-pointer"
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
