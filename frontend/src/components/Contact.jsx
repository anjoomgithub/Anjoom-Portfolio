import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '600px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.1, borderRadius: '50%', zIndex: -1 }}></div>

            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card contact-card"
                >
                    <div style={{ width: '60px', height: '60px', background: 'var(--primary-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                        <Mail size={30} />
                    </div>

                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Have a project in mind?</h2>

                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        I'm currently available for freelance work and new opportunities. Let's build something amazing together.
                    </p>

                    <a href="mailto:anjoomvkkl@gmail.com" className="btn-cyber" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
                        Say Hello <ArrowRight />
                    </a>
                </motion.div>

                <footer style={{ marginTop: '5rem', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <a href="https://www.linkedin.com/in/mohammed-anjoom-343929229/" className="mono-text" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>LinkedIn</a>
                        <a href="https://github.com/anjoomgithub" className="mono-text" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>GitHub</a>
                        <a href="https://www.instagram.com/4njoom_/" className="mono-text" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Instagram</a>
                        <a href="mailto:anjoomvkkl@gmail.com" className="mono-text" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Email</a>
                    </div>
                    <p className="mono-text">© {new Date().getFullYear()} Mohammed Anjoom V. Built with React & Django.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
