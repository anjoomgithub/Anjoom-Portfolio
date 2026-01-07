import React from 'react';
import { Code, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '3rem 2rem', background: 'rgba(3, 0, 20, 0.5)' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                    <Code color="var(--accent-primary)" />
                    <span>Dev<span className="gradient-text">Portfolio</span></span>
                </a>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}><Github size={24} /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}><Linkedin size={24} /></a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }}><Twitter size={24} /></a>
                </div>

                <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved. <br />
                    Built with Django & React for You.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
