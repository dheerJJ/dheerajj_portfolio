import React from 'react';
import { motion } from 'framer-motion';
import footerBg from '../assets/Footer/Footer.png';
import { scrollToSection } from '../utils/scrollToSection';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12 px-6 md:px-16 min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Scale and translate the image to crop the top */}
        <div
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        {/* Dark overlay at the top to blend the background smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between flex-1">

        {/* Top Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10"
        >
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div>
              <p className="text-gray-400 text-sm mb-2">Connect with me</p>
              <a 
                href="mailto:dheerajjkumawat@gmail.com" 
                className="text-xl md:text-5xl font-medium hover:text-[#ccff00] transition-colors break-words"
              >
                dheerajjkumawat@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-[#ccff00] transition-colors bg-transparent border-0 cursor-pointer p-0 text-sm text-gray-300">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#ccff00] transition-colors bg-transparent border-0 cursor-pointer p-0 text-sm text-gray-300">About</button>
              <button onClick={() => scrollToSection('service')} className="hover:text-[#ccff00] transition-colors bg-transparent border-0 cursor-pointer p-0 text-sm text-gray-300">Services</button>
              <button onClick={() => scrollToSection('project')} className="hover:text-[#ccff00] transition-colors bg-transparent border-0 cursor-pointer p-0 text-sm text-gray-300">Projects</button>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <h3 className="text-lg md:text-2xl font-medium mb-2">Let's build something</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Open for full-time remote opportunities & freelance projects.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')} 
              className="bg-white text-black px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#ccff00] transition-colors shadow-lg cursor-pointer border-0"
            >
              Get in touch
            </motion.button>
          </div>
        </motion.div>

        {/* Middle Section - Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-between items-center py-6 border-t border-white/10 mb-4 text-sm md:text-lg font-medium"
        >
          <motion.a whileHover={{ y: -2, color: '#ccff00' }} href="https://www.instagram.com/lema.web/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">Instagram</motion.a>
          <motion.a whileHover={{ y: -2, color: '#ccff00' }} href="https://www.linkedin.com/in/dheerajj-kumawat-1b4b7b366/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">LinkedIn</motion.a>
          <motion.a whileHover={{ y: -2, color: '#ccff00' }} href="https://github.com/dheerJJ/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">Github</motion.a>
        </motion.div>

        {/* Huge Text Section */}
        <div className="w-full text-center flex-1 flex items-center justify-center min-h-[160px] md:min-h-[220px]">
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[12vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl select-none" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            DHEERAJJ
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6 border-t border-white/5">
          <p>© {new Date().getFullYear()} Dheerajj. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors bg-transparent border-0 cursor-pointer text-xs text-gray-400 p-0">Privacy policy</button>
            <button onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors bg-transparent border-0 cursor-pointer text-xs text-gray-400 p-0">Terms and conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
