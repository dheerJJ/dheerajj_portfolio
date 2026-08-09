import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-[#ccff00] w-full px-6"
    >
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-5xl md:text-8xl font-black uppercase tracking-widest mb-8 text-center"
      >
        Coming Soon
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 text-sm md:text-lg mb-10 text-center max-w-md"
      >
        This project case study is currently being updated with live demos and documentation.
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={onBack}
        className="cursor-pointer px-8 py-3.5 rounded-full border border-[#ccff00] text-black bg-[#ccff00] font-bold text-sm md:text-base hover:bg-black hover:text-[#ccff00] transition-colors shadow-[0_0_20px_rgba(204,255,0,0.3)]"
      >
        Go Back
      </motion.button>
    </motion.div>
  );
};

export default ComingSoon;
