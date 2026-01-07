import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, BookOpen, X, FileText } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'https://anjoom-portfolio-backend.vercel.app';
                const response = await axios.get(`${apiUrl}/api/projects/`);

                console.log("Projects loaded:", response.data);
                setProjects(response.data);
            } catch (error) {
                console.error("Error loading projects:", error);
                // Keep default/fallback data just in case
            }
        };
        fetchProjects();
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1rem' }}>
                            Featured <span className="neon-text">Projects</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>A selection of my recent work.</p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }} // Reduced margin offset
                    className="responsive-grid-projects"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            className="hud-card"
                            whileHover={{ y: -5, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{
                                // borderRadius removed for HUD look
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                position: 'relative',
                                group: 'project-card',
                                // perspective: '1000px', // Removed to reduce flickering
                                // transformStyle: 'preserve-3d' // Removed to reduce flickering
                            }}
                        >
                            {/* Image Container */}
                            <div style={{
                                height: '240px',
                                position: 'relative',
                                overflow: 'hidden',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                background: '#050505'
                            }}>
                                {project.image ? (
                                    <>
                                        {/* Blurred Backdrop for Fill */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'blur(20px) brightness(0.3)',
                                            transform: 'scale(1.2)', // Prevent blur edges
                                            opacity: 0.8
                                        }}></div>

                                        {/* Main Image - Fully Visible */}
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            style={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                zIndex: 1,
                                                padding: '1rem', // Add breathing room
                                                filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
                                            }}
                                        />
                                    </>
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        background: 'radial-gradient(circle at center, #1e293b, #0f172a)'
                                    }}></div>
                                )}

                                {/* Subtle Overlay for Integration */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(5,5,5, 1) 0%, transparent 20%)',
                                    zIndex: 2,
                                    pointerEvents: 'none'
                                }}></div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', lineHeight: 1.3, color: 'white', fontFamily: 'var(--font-heading)' }}>{project.title}</h3>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}></span>
                                    </div>
                                </div>

                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1, fontSize: '0.9rem', lineHeight: '1.6' }}>
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                    {project.tech_stack.split(',').slice(0, 3).map(tech => (
                                        <span key={tech} className="mono-text" style={{
                                            fontSize: '0.7rem',
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            padding: '0.3rem 0.6rem',
                                            borderRadius: '2px',
                                            color: 'var(--text-dim)',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons - Permanently Visible */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1rem',
                                    marginTop: 'auto',
                                    paddingTop: '1.5rem',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="btn-cyber"
                                        style={{
                                            fontSize: '0.8rem',
                                            padding: '0.8rem',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            width: '100%'
                                        }}
                                    >
                                        <FileText size={16} /> SYSTEM_LOGS
                                    </button>

                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="btn-glitch"
                                            style={{
                                                fontSize: '0.8rem',
                                                padding: '0.8rem',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                textDecoration: 'none',
                                                textAlign: 'center'
                                            }}
                                        >
                                            LIVE_DEMO <ExternalLink size={16} />
                                        </a>
                                    ) : (
                                        <button disabled className="btn-glitch" style={{ opacity: 0.5, cursor: 'not-allowed', fontSize: '0.8rem' }}>OFFLINE</button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                    <a href="https://github.com/anjoomgithub" target="_blank" className="btn-cyber">
                        View GitHub Profile <Github size={20} />
                    </a>
                </div>

                {/* Documentation Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'rgba(0,0,0,0.8)',
                                backdropFilter: 'blur(10px)',
                                zIndex: 9999,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '2rem'
                            }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="glass-panel"
                                style={{
                                    width: '100%',
                                    maxWidth: '900px',
                                    height: '85vh',
                                    borderRadius: '24px',
                                    border: '1px solid var(--primary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    background: '#050505',
                                    boxShadow: '0 0 50px rgba(0, 243, 255, 0.1)'
                                }}
                            >
                                {/* Modal Header */}
                                <div style={{
                                    padding: '1.5rem 2rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'rgba(255,255,255,0.02)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <BookOpen size={24} color="var(--primary)" />
                                        <h3 className="mono-text" style={{ fontSize: '1.2rem', color: 'white' }}>
                                            DOCS // {selectedProject.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }}
                                    >
                                        <X size={28} />
                                    </button>
                                </div>

                                {/* Modal Content - Markdown */}
                                <div
                                    className="markdown-content"
                                    data-lenis-prevent
                                    style={{ flex: 1, overflowY: 'auto', padding: '3rem', scrollBehavior: 'smooth' }}
                                >
                                    {selectedProject.readme_content ? (
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                h1: ({ node, ...props }) => <h1 style={{ color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }} {...props} />,
                                                h2: ({ node, ...props }) => <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
                                                h3: ({ node, ...props }) => <h3 style={{ color: 'var(--secondary)', marginTop: '1.5rem', marginBottom: '0.8rem' }} {...props} />,
                                                p: ({ node, ...props }) => <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1rem' }} {...props} />,
                                                li: ({ node, ...props }) => <li style={{ color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '0.5rem' }} {...props} />,
                                                code: ({ node, inline, className, children, ...props }) => {
                                                    const match = /language-(\w+)/.exec(className || '')
                                                    return !inline ? (
                                                        <div style={{ background: '#0a0a0a', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', margin: '1rem 0', overflowX: 'auto' }}>
                                                            <code className={className} style={{ fontFamily: 'var(--font-mono)', color: '#e5c07b' }} {...props}>
                                                                {children}
                                                            </code>
                                                        </div>
                                                    ) : (
                                                        <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.9em' }} {...props}>
                                                            {children}
                                                        </code>
                                                    )
                                                }
                                            }}
                                        >
                                            {selectedProject.readme_content}
                                        </ReactMarkdown>
                                    ) : (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)', gap: '1rem' }}>
                                            <FileText size={48} opacity={0.5} />
                                            <p className="mono-text">NO DOCUMENTATION_FOUND</p>
                                            <p style={{ fontSize: '0.9rem' }}>Please locate the README file in the repository.</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
