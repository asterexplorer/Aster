import React from 'react';

const Services = () => {
    return (
        <section id="services" className="container section animate-fade" style={{ paddingTop: '2rem' }}>
            <div className="section-header">
                <div className="tag tag-software" style={{ marginBottom: '1rem' }}>Expert Portfolio</div>
                <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)' }}>Service Excellence</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Detailed solutions engineered for performance and scalability.</p>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2.5rem',
                width: '100%'
            }}>
                {[
                    {
                        title: "AutoCAD",
                        desc: "Precision 2D/3D modeling for architecture and product design.",
                        features: ["Phase-ready blueprints", "3D Rendering", "BIM Integration"],
                        metric: "ISO Standard"
                    },
                    {
                        title: "Graphic Design",
                        desc: "Strategic visual storytelling and branding that captures market attention.",
                        features: ["Identity Systems", "Motion Graphics", "UX/UI Design"],
                        metric: "100% Unique"
                    },
                    {
                        title: "Flutter Mobile App",
                        desc: "High-performance apps with native feel and fluid animations.",
                        features: ["Fast Deployment", "Single Codebase", "API Integration"],
                        metric: "60 FPS"
                    },
                    {
                        title: "CCNA Networking",
                        desc: "Robust enterprise network architecture and proactive security.",
                        features: ["Intrusion Detection", "Zero-trust Setup", "Optimization"],
                        metric: "99.9% Uptime"
                    },
                    {
                        title: "Website Design",
                        desc: "Conversion-centric web experiences built on modern technology stacks.",
                        features: ["SEO Optimized", "Mobile First", "High Performance"],
                        metric: "90+ Score"
                    },
                    {
                        title: "Digital Marketing",
                        desc: "ROI-driven growth campaigns powered by advanced data analytics.",
                        features: ["Growth Hacking", "PPC Management", "Content Strategy"],
                        metric: "3x ROI"
                    },
                    {
                        title: "Prompt Engineering",
                        desc: "Maximizing LLM efficiency with specialized prompt architecture.",
                        features: ["LLM Optimization", "Automation", "Model Tuning"],
                        metric: "AI Ready"
                    },
                    {
                        title: "Ethical Hacking",
                        desc: "Comprehensive security audits to protect your digital assets.",
                        features: ["Pen-testing", "Risk Assessment", "Vulnerability Fixes"],
                        metric: "Bank-grade"
                    },
                    {
                        title: "SAP S/4HANA",
                        desc: "Next-gen ERP implementation for intelligent business operations.",
                        features: ["Real-time Analytics", "Automation", "Migration"],
                        metric: "Cloud-Ready"
                    }
                ].map((s, idx) => (
                    <div key={idx} className="glass-card" style={{
                        padding: '2.5rem 2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        borderTop: '4px solid var(--accent-primary)',
                        textAlign: 'left'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span className="tag tag-software" style={{ fontSize: '0.7rem' }}>{s.metric}</span>
                        </div>
                        <h3 style={{ fontSize: '1.6rem', margin: 0, color: 'var(--text-primary)' }}>{s.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{s.desc}</p>
                        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                {s.features.map((f, i) => (
                                    <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-primary)', background: 'rgba(0,0,0,0.04)', padding: '0.4rem 0.8rem', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.06)' }}>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#post-job" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', padding: '0.8rem', fontSize: '0.95rem' }}>
                            Select Service
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
