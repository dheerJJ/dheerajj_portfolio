import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToSection } from '../utils/scrollToSection';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: '01',
    title: 'AI FULL STACK DEVELOPMENT',
    description: 'I build scalable, high-performance web applications by combining modern frontend frameworks, robust backend systems, and AI-powered solutions. From planning and architecture to deployment, I create secure, responsive, and production-ready digital experiences.',
    capabilities: [
      'Develop responsive web applications with React.js & Next.js',
      'Build secure REST APIs using FastAPI & Node.js',
      'Design scalable backend architecture and databases',
      'Integrate AI-powered features and automation',
      'Deliver clean, maintainable, production-ready code'
    ],
    buttonText: 'VIEW PROJECTS'
  },
  {
    id: '02',
    title: 'FRONTEND DEVELOPMENT',
    description: 'I create fast, responsive, and visually engaging user interfaces that provide seamless user experiences across desktop, tablet, and mobile devices.',
    capabilities: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'GSAP Animations',
      'Responsive Design'
    ]
  },
  {
    id: '03',
    title: 'BACKEND & API DEVELOPMENT',
    description: 'I develop secure and scalable backend systems with well-structured APIs, efficient databases, and authentication mechanisms to power modern web applications.',
    capabilities: [
      'FastAPI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'JWT Authentication'
    ]
  },
  {
    id: '04',
    title: 'AI & AUTOMATION',
    description: 'I integrate artificial intelligence into applications to automate workflows, improve productivity, and create intelligent user experiences using modern AI technologies.',
    capabilities: [
      'OpenAI Integration',
      'LangChain',
      'MCP',
      'Prompt Engineering',
      'AI Chatbots',
      'Workflow Automation'
    ]
  },
  {
    id: '05',
    title: 'MOBILE DEVELOPMENT',
    description: 'I build responsive cross-platform mobile applications with smooth performance, intuitive interfaces, and seamless integration with backend services.',
    capabilities: [
      'React Native',
      'API Integration',
      'Responsive UI',
      'State Management',
      'Performance Optimization'
    ]
  },
  {
    id: '06',
    title: 'DEVOPS & TOOLS',
    description: 'I streamline development workflows with modern tools for version control, deployment, testing, and collaboration, ensuring reliable and efficient software delivery.',
    capabilities: [
      'Git & GitHub',
      'Docker',
      'Postman',
      'CI/CD',
      'VS Code',
      'Cloud Deployment'
    ]
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section id="service" className="md:min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden">
      
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-end md:items-start justify-end w-full mt-0 z-0 pb-12">
        {/* Giant Title */}
        <div className="flex flex-col md:flex-row items-start justify-end gap-2 md:gap-4 lg:gap-8 pr-2 md:pr-0 text-right">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9] text-right">
            WHAT WE<br/>CAN DO
          </h2>
        </div>
      </div>

      {/* Accordion List */}
      <div className="z-10 relative mt-0 -mx-6 md:-mx-16 border-t border-white/20">
        {servicesData.map((service, index) => {
          const isHighlighted = activeIndex === index || (!isMobile && hoveredIndex === index);
          const isOpen = activeIndex === index;
          
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`border-b border-white/20 py-5 md:py-7 px-6 md:px-16 cursor-pointer transition-colors duration-300 ease-in-out ${
                isHighlighted ? 'bg-[#ccff00]' : ''
              }`}
              onClick={() => setActiveIndex(isOpen ? null : index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start">
                
                {/* Left Side: Number, Title & Capabilities */}
                <div className="flex items-start justify-between w-full lg:w-1/2 gap-2">
                  <div className="flex items-start gap-3 md:gap-16 w-full min-w-0">
                    <div className="h-7 flex items-center md:h-10 flex-shrink-0">
                      <span className={`text-lg md:text-3xl font-medium transition-colors duration-300 ease-in-out leading-none ${
                        isHighlighted ? 'text-black' : 'text-white'
                      }`}>
                        {service.id}
                      </span>
                    </div>
                    <div className="flex flex-col w-full min-w-0">
                      <div className="h-7 flex items-center md:h-10">
                        <h3 className={`text-[11px] sm:text-sm md:text-xl lg:text-2xl font-black uppercase tracking-wide leading-none transition-colors duration-300 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis ${
                          isHighlighted ? 'text-black' : 'text-white'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                      
                      {/* Expanded Capabilities via Framer Motion AnimatePresence */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="overflow-hidden w-full"
                          >
                            <div className="pt-6 lg:pt-8 flex flex-col gap-3">
                              <ul className={`transition-colors duration-300 ease-in-out text-sm md:text-base font-light space-y-2 flex flex-col ${
                                isHighlighted ? 'text-black/80' : 'text-gray-300'
                              }`}>
                                {service.capabilities.map((cap, i) => (
                                  <motion.li 
                                    key={i} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: i * 0.05 }}
                                    className="flex items-start gap-3"
                                  >
                                    <span className={`transition-colors duration-300 ease-in-out mt-1.5 opacity-70 text-[10px] ${
                                      isHighlighted ? 'text-black' : 'text-[#ccff00]'
                                    }`}>■</span>
                                    <span>{cap}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Mobile Arrow Icon */}
                  <div className="h-7 flex items-center flex-shrink-0 lg:hidden">
                    <motion.svg 
                      animate={{ rotate: isOpen ? -45 : 45 }}
                      transition={{ duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`w-6 h-6 transition-colors duration-300 ${
                        isHighlighted ? 'text-black' : 'text-[#ccff00]'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </div>

                {/* Right Side: Description, Button & Desktop Arrow */}
                <div className="flex flex-row gap-6 w-full lg:w-1/2 justify-between lg:justify-end relative items-start">
                  
                  {/* Expanded Description via Framer Motion AnimatePresence */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden flex flex-col items-start w-full"
                      >
                        <div className="pt-4 md:pt-6 lg:pt-[72px] flex flex-col gap-6 w-full pr-0 lg:pr-12">
                          <p className={`transition-colors duration-300 ease-in-out text-base md:text-lg leading-relaxed max-w-lg font-light ${
                            isHighlighted ? 'text-black/80' : 'text-gray-300'
                          }`}>
                            {service.description}
                          </p>
                          {service.buttonText && (
                            <motion.button 
                              onClick={() => scrollToSection('project')}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3 border transition-colors duration-300 ease-in-out flex items-center gap-2 mt-4 w-max cursor-pointer ${
                                isHighlighted ? 'bg-black text-[#ccff00] border-black' : 'bg-[#ccff00] text-black border-[#ccff00]'
                              }`}
                            >
                              <span className="w-2 h-2 border-t border-l border-current"></span>
                              {service.buttonText}
                              <span className="w-2 h-2 border-b border-r border-current"></span>
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Desktop Arrow Icon */}
                  <div className="hidden lg:flex flex-shrink-0 h-10 items-center">
                    <motion.svg 
                      animate={{ rotate: isOpen ? -45 : 45 }}
                      transition={{ duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`w-10 h-10 transition-colors duration-300 ${
                        isHighlighted ? 'text-black' : 'text-[#ccff00]'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </div>

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
      
    </section>
  );
};

export default Services;
