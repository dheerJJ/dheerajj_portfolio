import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import { scrollToSection } from './utils/scrollToSection';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Clean initial hash and handle deep linking on browser back/forward
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Convert any lingering # hash into clean pathname
    if (window.location.hash) {
      const cleanRoute = window.location.hash.replace('#', '');
      window.history.replaceState(null, '', cleanRoute ? `/${cleanRoute}` : '/');
    }

    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/+/, '');
      scrollToSection(path || 'home', false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // When preloader completes, if user visited a specific route, scroll to it
  useEffect(() => {
    if (!preloaderComplete || typeof window === 'undefined') return;

    const path = window.location.pathname.replace(/^\/+/, '');
    if (path && path !== 'home') {
      setTimeout(() => {
        scrollToSection(path, false);
      }, 200);
    }
  }, [preloaderComplete]);

  // Scroll spy to update route in URL bar without #
  useEffect(() => {
    if (!preloaderComplete || typeof window === 'undefined') return;

    const sections = ['home', 'about', 'service', 'project', 'contact'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + window.innerHeight * 0.35;
          let current = 'home';

          for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                current = id;
                break;
              }
            }
          }

          const targetPath = current === 'home' ? '/' : `/${current}`;
          if (window.location.pathname !== targetPath) {
            window.history.replaceState(null, '', targetPath);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [preloaderComplete]);

  if (showComingSoon) {
    return <ComingSoon onBack={() => setShowComingSoon(false)} />;
  }

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#ccff00] selection:text-black">
      <Hero onPreloadComplete={() => setPreloaderComplete(true)} />
      
      <AnimatePresence>
        {preloaderComplete && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Navbar />
            <About />
            <Services />
            <Project onCtaClick={() => setShowComingSoon(true)} />
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
