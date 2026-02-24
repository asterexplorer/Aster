import React, { useState } from 'react';

const Showcase = () => {
    const [showcaseModalOpen, setShowcaseModalOpen] = useState(false);

    return (
        <>
            {/* Projects Showcase Section (With Visual Effects) */}
            <section id="showcase" className="container section project-showcase-section animate-fade">
                <div className="section-header">
                    <div className="tag tag-hardware" style={{ marginBottom: '1rem' }}>Success Stories</div>
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>Project Showcase</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>A look at the elite-level results delivered by our talent pool.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '3rem',
                    width: '100%'
                }}>
                    {[
                        {
                            title: "CloudScale ERP",
                            category: "Enterprise",
                            budget: "$25,000",
                            result: "99% Process Automation"
                        },
                        {
                            title: "Vortex NFT Hub",
                            category: "Web3/Design",
                            budget: "$12,500",
                            result: "1.2M Weekly Users"
                        },
                        {
                            title: "IronSync AI",
                            category: "AI/ML",
                            budget: "$40,000",
                            result: "4x Efficiency Boost"
                        }
                    ].map((project, idx) => (
                        <div key={idx} className="glass-card project-card" style={{ padding: '2rem' }}>
                            <div className="project-image-box">
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: '3rem',
                                    opacity: 0.1
                                }}>⚡</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{project.category}</span>
                                <span style={{ fontSize: '0.8rem', opacity: 0.6, color: 'var(--text-primary)' }}>{project.budget}</span>
                            </div>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                            <div className="tag tag-software" style={{ fontSize: '0.8rem' }}>Result: {project.result}</div>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
                    <button onClick={() => setShowcaseModalOpen(true)} className="btn btn-primary btn-lg" style={{ padding: '1.25rem 3rem', boxShadow: '0 10px 40px rgba(56, 189, 248, 0.4)', fontSize: '1.1rem' }}>
                        View Extended Showcase
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
                            <div className="tag tag-hardware" style={{ marginBottom: '1rem', display: 'inline-block', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.3)' }}>Premium Case Studies</div>
                            <h2 style={{ fontSize: '4.5rem', color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0 }}>The <span className="gradient-text">Elite</span> Portfolio</h2>
                            <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '650px', margin: '1.5rem auto 0 auto' }}>Explore a curated selection of world-class projects and outcome-driven results delivered by our top 1% global talent.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                            {[
                                { title: "NeuroSync Medical Dash", category: "Healthcare UI/UX", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", result: "Reduced cognitive load by 45%" },
                                { title: "Apex Trading Algorithm", category: "Fintech & Data", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop", result: "$1.2B volume processed instantly" },
                                { title: "Zenith Automotive UI", category: "Automotive HMI", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop", result: "Integrated into 50k+ luxury vehicles" },
                                { title: "Lumina 3D Game Engine", category: "C++ / Game Dev", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop", result: "144 FPS steady across all platforms" },
                                { title: "Aura Smart Home", category: "IoT Architecture", img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop", result: "Connected 12M home devices" },
                                { title: "Nova Protocol DeFi", category: "Solidity / Web3", img: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=1000&auto=format&fit=crop", result: "Zero vulnerabilities found" },
                            ].map((proj, idx) => (
                                <div key={idx} style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '420px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', border: '1px solid var(--glass-border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', background: 'var(--bg-secondary)' }}
                                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-15px)'; e.currentTarget.style.boxShadow = '0 35px 60px -15px rgba(56,189,248,0.4)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.15)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                                    <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease-out' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(248,250,252,0.95) 0%, rgba(248,250,252,0.4) 50%, transparent 100%)', pointerEvents: 'none' }}></div>

                                    <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', right: '2.5rem', pointerEvents: 'none' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.8rem' }}>
                                            <span style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{proj.category}</span>
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
