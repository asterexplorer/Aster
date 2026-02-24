import React, { useState } from 'react';

const Showcase = () => {
    const [showcaseModalOpen, setShowcaseModalOpen] = useState(false);

    return (
        <>
            {/* Projects Showcase Section (With Visual Effects) */}
            <section id="showcase" className="container section project-showcase-section animate-fade">
                <div className="section-header">
                    <div className="tag tag-hardware" style={{ marginBottom: '1rem', background: 'rgba(20, 168, 0, 0.1)', color: '#14a800', borderColor: 'rgba(20, 168, 0, 0.2)' }}>Why AsterExplorer</div>
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>Trusted by leading brands</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Read how companies are innovating and growing with our talent.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.5, flexWrap: 'wrap', marginBottom: '4rem', filter: 'grayscale(100%)', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', margin: 0, fontWeight: 800 }}>Microsoft</h3>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', margin: 0, fontWeight: 700, letterSpacing: '-0.05em' }}>airbnb</h3>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', margin: 0, fontWeight: 800, textTransform: 'uppercase', fontStyle: 'italic' }}>bissell</h3>
                    <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-heading)', margin: 0, letterSpacing: '0.1em' }}>NASDAQ</h3>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    width: '100%'
                }}>
                    {[
                        {
                            title: "Microsoft",
                            category: "Agility",
                            color: "var(--text-primary)",
                            metric: "50%",
                            metricDesc: "Faster project delivery",
                            desc: "Microsoft leverages AsterExplorer to scale their development team dynamically.",
                            img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                        },
                        {
                            title: "NASDAQ",
                            category: "Innovation",
                            color: "var(--text-primary)",
                            metric: "$1M+",
                            metricDesc: "Saved in hiring costs",
                            desc: "NASDAQ accelerates product launches with on-demand expert talent.",
                            img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
                        },
                        {
                            title: "Bissell",
                            category: "Creative",
                            color: "var(--text-primary)",
                            metric: "2,000+",
                            metricDesc: "Hours of design time saved",
                            desc: "Bissell scaled their seasonal creative marketing seamlessly.",
                            img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                        }
                    ].map((project, idx) => (
                        <div key={idx} className="glass-card project-card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
                            <div style={{ height: '220px', backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'var(--bg-secondary)' }}>
                            </div>
                            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '1.8rem', margin: 0, color: project.color }}>{project.title}</h3>
                                    <span style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', background: 'rgba(20, 168, 0, 0.1)', color: '#14a800', borderRadius: '100px', fontWeight: 'bold' }}>{project.category}</span>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '50px' }}>{project.desc}</p>
                                <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-primary)', marginTop: 'auto' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 1 }}>{project.metric}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>{project.metricDesc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
                    <button onClick={() => setShowcaseModalOpen(true)} className="btn btn-primary btn-lg" style={{ padding: '1.25rem 3rem', boxShadow: '0 10px 40px rgba(20, 168, 0, 0.3)', fontSize: '1.1rem' }}>
                        Read Success Stories
                    </button>
                </div>
            </section>

            {/* Projects Showcase Modal OVERLAY */}
            {showcaseModalOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    overflowY: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '4rem 2rem'
                }}>
                    {/* Close Button */}
                    <div style={{ position: 'fixed', top: '2rem', right: '3rem', zIndex: 10000 }}>
                        <button onClick={() => setShowcaseModalOpen(false)} style={{
                            background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text-primary)', width: '50px', height: '50px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
                        }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(239,68,68,0.8)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                            ✖
                        </button>
                    </div>

                    <div className="container" style={{ maxWidth: '1400px', width: '100%', animation: 'fadeIn 0.5s ease-out' }}>
                        <div style={{ textAlign: 'center', marginBottom: '5rem', marginTop: '2rem' }}>
                            <div className="tag tag-hardware" style={{ marginBottom: '1rem', display: 'inline-block', background: 'rgba(20, 168, 0, 0.1)', color: '#14a800', borderColor: 'rgba(20, 168, 0, 0.3)' }}>Premium Case Studies</div>
                            <h2 style={{ fontSize: '4.5rem', color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0 }}>Client <span className="gradient-text">Success Stories</span></h2>
                            <p style={{ color: '#5e6d55', fontSize: '1.25rem', maxWidth: '650px', margin: '1.5rem auto 0 auto' }}>Explore a curated selection of world-class projects and outcome-driven results delivered by our global talent.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                            {[
                                { title: "Automattic Support", category: "Customer Service", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", result: "Scaled 24/7 global support" },
                                { title: "GoDaddy Development", category: "Software Engineering", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop", result: "Launched 3 new product lines" },
                                { title: "Budweiser Creative", category: "Creative & Design", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop", result: "Sourced global talent for Superbowl" },
                                { title: "GE Engineering", category: "Mechanical Engineering", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop", result: "Reduced R&D overhead by 30%" },
                                { title: "Motorola Innovation", category: "Hardware & IoT", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop", result: "Outsourced full prototyping lab" },
                                { title: "Thumbtack Analytics", category: "Data Science", img: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=1000&auto=format&fit=crop", result: "Built ML pipeline faster by 6 months" },
                            ].map((proj, idx) => (
                                <div key={idx} style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '420px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', border: '1px solid var(--glass-border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', background: 'var(--bg-secondary)' }}
                                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-15px)'; e.currentTarget.style.boxShadow = '0 35px 60px -15px rgba(56,189,248,0.4)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.15)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                                    <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease-out' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(248,250,252,0.95) 0%, rgba(248,250,252,0.4) 50%, transparent 100%)', pointerEvents: 'none' }}></div>

                                    <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', right: '2.5rem', pointerEvents: 'none' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.8rem' }}>
                                            <span style={{ color: '#1f57c3', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{proj.category}</span>
                                        </div>
                                        <h3 style={{ color: 'var(--text-primary)', fontSize: '2.4rem', margin: '0 0 1rem 0', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>{proj.title}</h3>
                                        <div style={{ display: 'inline-block', background: 'rgba(0,0,0,0.05)', backdropFilter: 'blur(10px)', color: 'var(--text-secondary)', padding: '0.6rem 1.2rem', borderRadius: '100px', fontSize: '0.95rem', border: '1px solid rgba(0,0,0,0.1)', fontWeight: '500' }}>
                                            ✨ Result: {proj.result}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Showcase;
