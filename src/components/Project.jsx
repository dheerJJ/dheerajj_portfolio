import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'INSTAGRAM ai AUTOMATION PLATFORM',
    title: (
      <>
        INSTAGRAM <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        AUTOMATION PLATFORM
      </>
    ),
    description: "An AI-powered Instagram chat automation platform that instantly responds to customer messages, qualifies leads, automates conversations, and helps businesses improve engagement while saving time through intelligent workflows.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'LiveMeet Translate',
    title: (
      <>
        LIVEMEET <br />
        TRANSLATE
      </>
    ),
    description: "A real-time AI-powered Google Meet translation platform that listens to live conversations, converts speech to text, translates it into the user's preferred language, and automatically generates organized meeting notes with AI-powered summaries and key action items.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'AI Smart Keyboard APP',
    title: (
      <>
        AI SMART <br />
        KEYBOARD APP
      </>
    ),
    description: "An AI-powered mobile keyboard application built with Flutter that enhances typing through real-time grammar correction, spelling fixes, intelligent word prediction, and AI-driven sentence rewriting. It delivers fluent, natural English while providing a fast, responsive, and seamless typing experience across mobile applications.A next-generation keyboard application that utilizes artificial intelligence to learn your typing habits and provide context-aware predictions.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'Nova AI – Intelligent Desktop Assistant',
    title: (
      <>
        JARVIS <span className="font-light italic text-gray-300 lowercase font-serif">ai</span><br />
        DESKTOP ASSISTANT
      </>
    ),
    description: "An AI-powered desktop assistant that enables hands-free laptop control through natural voice commands. It can open applications, manage files, browse the web, answer questions, automate tasks, and execute system commands using advanced speech recognition and large language models.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
  }
];

const Project = ({ onCtaClick }) => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16 overflow-hidden">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Giant Title */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-7/12 overflow-visible"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </motion.div>

        {/* Right Description */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4"
        >
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            As a frontend developer using modern ideas, simplicity design and universal visual identification tailored to dedicated and current market.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCtaClick} 
            className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div 
              key={proj.name} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}
            >

              {/* Image Side */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-2xl border border-white/10 shadow-2xl group"
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 px-3 py-1 bg-[#ccff00]/10 rounded-full border border-[#ccff00]/30 inline-block"
                >
                  0{idx + 1}
                </motion.span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6 group-hover:text-gray-100 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
                  {proj.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <motion.button 
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={onCtaClick} 
                    className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.2)] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)]"
                  >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={onCtaClick} 
                    className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
                  >
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </motion.button>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
