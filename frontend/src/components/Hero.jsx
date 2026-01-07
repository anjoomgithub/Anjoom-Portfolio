import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Terminal, Cpu, Code2, Globe } from 'lucide-react';

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    return (
        <section ref={targetRef} id="home" className="hero-section">
            {/* Ambient Vertical Lines (Tech Effect) */}
            <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)' }}></div>
            <div style={{ position: 'absolute', top: 0, right: '10%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)' }}></div>

            <div className="container responsive-grid-auto-fit" style={{ alignItems: 'center', width: '100%', position: 'relative', zIndex: 1, gap: '4rem' }}>

                {/* Left Content */}
                <motion.div
                    style={{ opacity, scale, y }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mono-text"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            background: 'rgba(0, 243, 255, 0.05)',
                            border: '1px solid rgba(0, 243, 255, 0.2)',
                            padding: '0.6rem 1rem',
                            borderRadius: '4px',
                            marginBottom: '2rem',
                            fontSize: '0.8rem',
                            color: 'var(--primary)',
                            boxShadow: '0 0 15px rgba(0, 243, 255, 0.1)'
                        }}
                    >
                        <Terminal size={14} />
                        <span style={{ letterSpacing: '0.05em' }}>SYSTEM STATUS: <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>ONLINE</span></span>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            style={{ display: 'inline-block', width: '8px', height: '12px', background: 'var(--accent)' }}
                        />
                    </motion.div>

                    {/* Main Title */}
                    <h1 style={{ lineHeight: '1.1', marginBottom: '1.5rem', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
                        <span className="neon-text">Mohammed Anjoom V</span>
                    </h1>

                    <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem', fontWeight: '500' }}>
                        Software Developer | Django | React
                    </h2>

                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '540px', lineHeight: '1.8' }} className="mono-text">
                        // Professional Summary <br />
                        <span style={{ color: 'var(--text-dim)' }}>
                            Experienced in building, deploying, and optimizing scalable web applications using Django, PostgreSQL, and modern frontend technologies.
                        </span>
                    </p>

                    <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-cyber">
                            Initialize Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn-glitch">
                            Contact_Me
                        </a>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <SocialLink href="https://github.com/anjoomgithub" icon={Github} delay={0.1} />
                            <SocialLink href="https://www.linkedin.com/in/mohammed-anjoom-343929229/" icon={Linkedin} delay={0.2} />
                            <SocialLink href="mailto:anjoomvkkl@gmail.com" icon={Mail} delay={0.3} />
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - 3D Holographic Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ position: 'relative', perspective: '1000px', display: 'flex', justifyContent: 'center' }}
                >
                    <motion.div
                        className="glass-panel"
                        whileHover={{ rotateY: -5, rotateX: 5 }}
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            borderRadius: '16px', // Sharper corners
                            padding: '2.5rem',
                            width: '100%',
                            maxWidth: '500px',
                            background: 'rgba(10, 10, 10, 0.8)',
                            border: '1px solid var(--primary)',
                            boxShadow: '0 20px 50px -20px rgba(0, 243, 255, 0.15)',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* Card Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <div style={{ width: '10px', height: '10px', background: 'var(--primary)', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                                <span className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>USER_PROFILE.EXE</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <div style={{ width: '30px', height: '2px', background: 'var(--text-dim)' }}></div>
                                <div style={{ width: '10px', height: '10px', border: '1px solid var(--text-dim)' }}></div>
                            </div>
                        </div>

                        {/* Code Content */}
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.95rem', lineHeight: '1.7' }}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <span style={{ color: 'var(--secondary)' }}>class</span> <span style={{ color: 'var(--primary)' }}>Mohammed_Anjoom</span> <span style={{ color: '#fff' }}>extends</span> <span style={{ color: '#e5c07b' }}>Developer</span> {'{'}
                            </div>
                            <div style={{ paddingLeft: '1.5rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                                <div>
                                    <span style={{ color: 'var(--secondary)' }}>constructor</span>() {'{'}
                                </div>
                                <div style={{ paddingLeft: '1.5rem' }}>
                                    <div><span style={{ color: 'var(--primary)' }}>this</span>.location = <span style={{ color: 'var(--accent)' }}>"Kerala, India"</span>;</div>
                                    <div><span style={{ color: 'var(--primary)' }}>this</span>.stack = [<span style={{ color: 'var(--accent)' }}>"Django"</span>, <span style={{ color: 'var(--accent)' }}>"React"</span>, <span style={{ color: 'var(--accent)' }}>"PostgreSQL"</span>];</div>
                                    <div><span style={{ color: 'var(--primary)' }}>this</span>.active = <span style={{ color: '#d19a66' }}>true</span>;</div>
                                </div>
                                <div>{'}'}</div>
                            </div>
                            <div style={{ marginTop: '0.5rem' }}>{'}'}</div>
                        </div>

                        {/* Stats / Hud Elements */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>PROJECTS</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>24+</div>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>EXPERIENCE</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>3 Years</div>
                            </div>
                        </div>

                        {/* Floating Icons - Techy Style */}
                        <FloatingIcon icon={Code2} top="-20px" right="-20px" delay={0} color="var(--primary)" />
                        <FloatingIcon icon={Cpu} bottom="-20px" left="-20px" delay={1.5} color="var(--secondary)" />
                        <FloatingIcon icon={Globe} bottom="40%" right="-30px" delay={0.8} color="var(--accent)" />

                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ position: 'absolute', bottom: '2rem', left: '50%', translateX: '-50%', color: 'var(--primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="mono-text" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>SCROLL</span>
                <ChevronDown size={20} />
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon: Icon, delay }) => (
    <motion.a
        href={href}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 + delay }}
        style={{ color: 'var(--text-muted)', transition: 'all 0.3s' }}
        className="social-link"
    >
        <Icon size={24} />
        <style>{`.social-link:hover { color: var(--primary) !important; transform: translateY(-3px); filter: drop-shadow(0 0 10px var(--primary)); }`}</style>
    </motion.a>
);

const FloatingIcon = ({ icon: Icon, top, left, right, bottom, delay, color }) => (
    <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: delay }}
        style={{
            position: 'absolute',
            top, left, right, bottom,
            background: 'rgba(5, 5, 5, 0.9)',
            padding: '0.8rem',
            borderRadius: '12px',
            boxShadow: `0 0 20px -5px ${color}`,
            border: `1px solid ${color}`,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color
        }}
    >
        <Icon size={28} />
    </motion.div>
);

export default Hero;
