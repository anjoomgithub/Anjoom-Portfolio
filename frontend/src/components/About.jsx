import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Layout, Server, Cpu, Code2, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                {/* Intro Section */}
                <div style={{ marginBottom: '6rem', maxWidth: '800px' }}>
                    <div className="mono-text" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>// WHO_AM_I</div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1' }}>
                        Integrating <span className="neon-text">Precision</span> with <br /> Creative Solutions.
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        Software Developer with hands-on experience in building, deploying, and optimizing scalable web applications using <strong style={{ color: 'white' }}>Django</strong>, <strong style={{ color: 'white' }}>PostgreSQL</strong>, and modern frontend technologies. Proven ability to deliver real-world projects for startups and enterprises.
                    </p>
                </div>

                <div className="responsive-grid-auto-fit" style={{ gap: '4rem' }}>

                    {/* Professional Experience (Changelog Style) */}
                    <div>
                        <h3 className="cyber-text" style={{ marginBottom: '2rem' }}>// PROFESSIONAL_EXPERIENCE</h3>
                        <div style={{ borderLeft: '1px solid var(--glass-border)', paddingLeft: '2rem' }}>

                            <ExperienceItem
                                role="Software Development Intern"
                                company="KodNest Technologies, Bengaluru"
                                date="Nov 2025 - Present"
                                desc="Contributing to real-world development tasks under professional mentorship. Practical experience in Java, MySQL, and testing."
                                active={true}
                            />

                            <ExperienceItem
                                role="Python Full Stack Developer"
                                company="CR8 Advertising Pvt. Ltd, Kochi"
                                date="Jun 2024 - Aug 2025"
                                desc="Developed and maintained full-stack web applications using Python and Django. Optimized backend logic slightly and improved ecommerce performance."
                            />

                            <ExperienceItem
                                role="Python Full Stack Intern"
                                company="Inmakes Infotech Pvt. Ltd, Kochi"
                                date="May 2023 - Aug 2023"
                                desc="Built dynamic web applications and ecommerce projects. Strengthened debugging, logical reasoning, and clean coding practices."
                            />

                        </div>
                    </div>

                    {/* Tech Stack & Education */}
                    <div>
                        <h3 className="cyber-text" style={{ marginBottom: '2rem' }}>// TECHNICAL_ARSENAL</h3>
                        <div className="responsive-grid-2">
                            <SkillCard icon={Code2} title="Languages" skills="Python, Java, JavaScript" />
                            <SkillCard icon={Layout} title="Frontend" skills="React, HTML5, CSS3" />
                            <SkillCard icon={Server} title="Backend" skills="Django, REST API" />
                            <SkillCard icon={Database} title="Database" skills="PostgreSQL, MySQL" />
                        </div>

                        <h3 className="cyber-text" style={{ marginBottom: '2rem' }}>// EDUCATION_LOGS</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <EducationItem degree="Bachelor of Computer Applications (BCA)" school="Krupanidhi Degree College, Bangalore" year="2025" grade="CGPA: 9.05" />
                            <EducationItem degree="Higher Secondary (12th)" school="Isha Uloom Higher Secondary School" year="2022" grade="97.58%" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const ExperienceItem = ({ role, company, date, desc, active }) => (
    <div style={{ position: 'relative', marginBottom: '3rem' }}>
        <div style={{
            position: 'absolute',
            left: '-2.4rem',
            top: '0.2rem',
            width: '12px',
            height: '12px',
            background: active ? 'var(--accent)' : 'var(--bg-primary)',
            border: `2px solid ${active ? 'var(--accent)' : 'var(--text-muted)'}`,
            borderRadius: '50%',
            boxShadow: active ? '0 0 10px var(--accent)' : 'none'
        }}></div>
        <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white' }}>{role}</h4>
        <div className="mono-text" style={{ fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{company} | {date}</div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{desc}</p>
    </div>
);

const SkillCard = ({ icon: Icon, title, skills }) => (
    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <Icon size={20} color="var(--primary)" />
            <span style={{ fontWeight: '700', color: 'white' }}>{title}</span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4' }}>{skills}</p>
    </div>
);

const EducationItem = ({ degree, school, year, grade }) => (
    <div className="glass-card" style={{ padding: '1.2rem', borderRadius: '12px', borderLeft: '3px solid var(--secondary)' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'white' }}>{degree}</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{school}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.85rem' }} className="mono-text">
            <span style={{ color: 'var(--primary)' }}>{year}</span>
            <span style={{ color: 'var(--text-dim)' }}>{grade}</span>
        </div>
    </div>
);

export default About;
