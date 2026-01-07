import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                padding: scrolled ? '1rem 0' : '2rem 0',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: '1.5rem', color: '#fff', textDecoration: 'none', letterSpacing: '-0.02em' }}>
                    <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '8px', borderRadius: '8px', display: 'flex', boxShadow: '0 0 15px var(--primary-glow)' }}>
                        <Code2 size={24} strokeWidth={2.5} color="black" />
                    </div>
                    <span>Anjoom<span style={{ color: 'var(--primary)' }}>.</span></span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '3rem' }} className="hidden md:flex">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mono-text"
                            style={{
                                color: 'var(--text-muted)',
                                fontWeight: '500',
                                textDecoration: 'none',
                                transition: 'all 0.3s',
                                fontSize: '0.9rem',
                                position: 'relative',
                                letterSpacing: '0.05em'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'var(--primary)';
                                e.target.style.textShadow = '0 0 10px var(--primary-glow)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'var(--text-muted)';
                                e.target.style.textShadow = 'none';
                            }}
                        >
                            <span style={{ color: 'var(--secondary)', marginRight: '5px', fontSize: '0.8em' }}>0{index + 1}.</span>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden" onClick={() => setIsOpen(true)} style={{ color: 'var(--primary)', cursor: 'pointer' }}>
                    <Menu size={32} />
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100vh',
                            width: '85%',
                            maxWidth: '350px',
                            background: 'var(--bg-secondary)',
                            zIndex: 1001,
                            padding: '3rem 2rem',
                            boxShadow: '-20px 0 50px rgba(0,0,0,0.8)',
                            borderLeft: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                                <X onClick={() => setIsOpen(false)} style={{ color: 'white', cursor: 'pointer' }} size={24} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="mono-text"
                                    style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                >
                                    {link.name}
                                    <span style={{ fontSize: '1rem', color: 'var(--primary)' }}>0{i + 1}</span>
                                </motion.a>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                            <p className="mono-text" style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>// SYSTEM: ONLINE</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .hidden.md\\:flex { display: none !important; }
                    .md\\:hidden { display: block !important; }
                }
                @media (min-width: 769px) {
                     .md\\:hidden { display: none !important; }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
