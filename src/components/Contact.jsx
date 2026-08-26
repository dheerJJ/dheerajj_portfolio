import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import contactBgVideo from '../assets/contact_assets/contact_bg.mp4';

const ContactSection = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

    const sendEmail = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(formRef.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone') || '';
        const subject = formData.get('subject') || 'New Portfolio Contact Message';
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            setStatusMessage({ text: 'Please fill in all required fields.', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        setStatusMessage({ text: '', type: '' });

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        try {
            // Option 1: Web3Forms (simplest direct delivery to dheerajjkumawat@gmail.com)
            if (web3FormsKey && web3FormsKey !== 'your_access_key') {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        access_key: web3FormsKey,
                        name,
                        email,
                        phone,
                        subject: subject || `Portfolio Inquiry from ${name}`,
                        message,
                        from_name: 'Dheerajj Portfolio'
                    })
                });
                const data = await response.json();
                if (data.success) {
                    setStatusMessage({ text: 'Message sent successfully! I will get back to you soon.', type: 'success' });
                    formRef.current.reset();
                    return;
                }
                throw new Error(data.message || 'Web3Forms submission failed');
            }

            // Option 2: EmailJS
            if (serviceId && serviceId !== 'your_service_id' && publicKey && publicKey !== 'your_public_key') {
                await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
                setStatusMessage({ text: 'Message sent successfully! I will get back to you soon.', type: 'success' });
                formRef.current.reset();
                return;
            }

            // Fallback: If no API keys are configured, open mail client
            const mailtoUrl = `mailto:dheerajjkumawat@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`)}`;
            window.open(mailtoUrl, '_blank');
            setStatusMessage({ text: 'Opening your email client to send to dheerajjkumawat@gmail.com...', type: 'success' });
            formRef.current.reset();
        } catch (error) {
            console.error('Contact error:', error);
            setStatusMessage({ text: 'Failed to send automatically. Please email directly at dheerajjkumawat@gmail.com', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="relative min-h-screen text-white font-sans flex items-center overflow-hidden [clip-path:inset(0)]">
            
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="fixed top-0 left-0 w-full h-screen object-cover z-0"
            >
                <source src={contactBgVideo} type="video/mp4" />
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16 flex flex-col lg:flex-row gap-16 lg:gap-28 relative z-10">
                
                {/* Left Side: Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full lg:w-5/12 flex flex-col justify-start"
                >
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl mb-12">
                        Get in touch
                    </h2>

                    <div className="flex flex-col gap-8">
                        {/* Email */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="hidden md:block"
                        >
                            <p className="text-gray-400 text-sm mb-1">Email:</p>
                            <a href="mailto:dheerajjkumawat@gmail.com" className="text-xl tracking-wide hover:text-[#ccff00] transition-colors">
                                dheerajjkumawat@gmail.com
                            </a>
                        </motion.div>

                        {/* Phone */}
                        {import.meta.env.VITE_PHONE_NUMBER && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden md:block"
                            >
                                <p className="text-gray-400 text-sm mb-1">Phone:</p>
                                <p className="text-xl tracking-wide">{import.meta.env.VITE_PHONE_NUMBER}</p>
                            </motion.div>
                        )}

                        {/* Follow Us */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-4 flex flex-col items-center md:items-start"
                        >
                            <p className="text-gray-400 text-sm mb-4">Follow us</p>
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <motion.a 
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://www.instagram.com/lema.web/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#ccff00]/20 hover:border-[#ccff00]/50 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white hover:text-[#ccff00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                    </svg>
                                </motion.a>
                                <motion.a 
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://www.linkedin.com/in/dheerajj-kumawat-1b4b7b366/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#ccff00]/20 hover:border-[#ccff00]/50 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white hover:text-[#ccff00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                        <rect width="4" height="12" x="2" y="9"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </motion.a>
                                <motion.a 
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://github.com/dheerJJ/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#ccff00]/20 hover:border-[#ccff00]/50 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white hover:text-[#ccff00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full lg:w-7/12 flex flex-col lg:pt-4"
                >
                    <form ref={formRef} className="flex flex-col gap-5 w-full bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl" onSubmit={sendEmail}>
                        
                        {/* Name and Email Row */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your full name" 
                                    required
                                    className="w-full bg-[#111]/80 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ccff00] transition-all placeholder:text-gray-600 border border-white/10"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Email address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Your email address" 
                                    required
                                    className="w-full bg-[#111]/80 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ccff00] transition-all placeholder:text-gray-600 border border-white/10"
                                />
                            </div>
                        </div>

                        {/* Phone and Subject Row */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Phone</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="Your phone number" 
                                    className="w-full bg-[#111]/80 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ccff00] transition-all placeholder:text-gray-600 border border-white/10"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    placeholder="Subject" 
                                    className="w-full bg-[#111]/80 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ccff00] transition-all placeholder:text-gray-600 border border-white/10"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <label className="text-xs text-gray-400 font-medium">Message</label>
                            <textarea 
                                name="message"
                                placeholder="Write something...." 
                                rows="5"
                                required
                                className="w-full bg-[#111]/80 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#ccff00] transition-all placeholder:text-gray-600 border border-white/10 resize-none"
                            ></textarea>
                        </div>

                        {/* Status Message */}
                        {statusMessage.text && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-sm px-4 py-3 rounded-xl border ${statusMessage.type === 'success' ? 'bg-green-500/10 border-green-500/50 text-green-400' : 'bg-red-500/10 border-red-500/50 text-red-400'}`}
                            >
                                {statusMessage.text}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-white text-black text-sm font-semibold rounded-xl py-3.5 hover:bg-[#ccff00] transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </motion.button>

                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default ContactSection;
