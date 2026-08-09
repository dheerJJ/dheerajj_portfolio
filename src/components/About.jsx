import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about_section/about_section.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Material UI", "HTML5"];
const backendSkills = ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "Database", "MongoDB", "PostgreSQL"];
const aiSkills = ["ChatGPT", "Claude", "Cursor AI", "GitHub Copilot", "Google Gemini", "LangChain", "MCP", "Prompt Engineering", "Agentic AI"];
const toolsSkills = ["Git", "GitHub", "Docker", "Postman", "VS Code", "CI/CD"];

const aboutWords = [
  { text: "Hey," }, { text: "I'm" },
  { text: "Dheerajj.", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "A" }, { text: "full-stack" }, { text: "developer" }, { text: "who" }, { text: "loves" }, { text: "to" }, { text: "build" }, { text: "state-of-the-art" }, { text: "web" }, { text: "and" }, { text: "mobile" }, { text: "applications." },
  { text: "I" }, { text: "love" }, { text: "turning" }, { text: "concepts" }, { text: "into" }, { text: "scalable" }, { text: "products" }, { text: "using" }, { text: "tech" }, { text: "stack" }, { text: "like" },
  { text: "React,", className: "text-white font-medium" },
  { text: "FastAPI,", className: "text-white font-medium" },
  { text: "Node.js,", className: "text-white font-medium" },
  { text: "and" }, { text: "artificial" }, { text: "intelligence" }, { text: "technologies." },
  { text: "I" }, { text: "always" }, { text: "strive" }, { text: "to" }, { text: "keep" }, { text: "my" }, { text: "code" }, { text: "clean" }, { text: "and" }, { text: "design" }, { text: "great" }, { text: "user" }, { text: "experience" }, { text: "along" }, { text: "with" }, { text: "learning" }, { text: "new" }, { text: "technologies" }, { text: "like" },
  { text: "LLMs,", className: "text-white font-medium" },
  { text: "Langchain,", className: "text-white font-medium" },
  { text: "and" },
  { text: "MCP.", className: "text-white font-medium" }
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];
    
    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">

      <div className="max-w-7xl mx-auto w-full z-10">

        {/* Mobile Intro Text */}
        <h2 ref={introMobileRef} className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-10 md:mb-16">
          Intro
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Column - Image with Framer Motion Entrance & Floating */}
          <motion.div 
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-start pl-0 lg:pl-20"
          >
            <motion.img
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              src={aboutImage}
              alt="About Character Graphic"
              className="w-100 md:w-70 lg:w-100 object-contain drop-shadow-2xl cursor-pointer"
            />
          </motion.div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            {/* Desktop Intro Text */}
            <h2 ref={introDesktopRef} className="hidden lg:block text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none">
              Intro
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-center lg:text-left"
            >
              <p ref={textRef} className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>
                      {wordObj.text}
                    </span>
                    {index < aboutWords.length - 1 && " "}
                  </React.Fragment>
                ))}
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scrolling Skills Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16"
      >
        {/* First Row */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((item, i) => (
              <div key={`front-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-[#ccff00] font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Second Row */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills].map((item, i) => (
              <div key={`back-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-[#ccff00] font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Third Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...aiSkills, ...aiSkills, ...aiSkills, ...aiSkills].map((item, i) => (
              <div key={`ai-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-[#ccff00] font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Fourth Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-[#ccff00] font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default About;
