import React from 'react';

const Hero = () => {
    return (
        <>
            <section className="container hero animate-fade" style={{
                minHeight: '85vh',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                alignItems: 'center',
                gap: '4rem',
                textAlign: 'left'
            }}>
                <div style={{ zIndex: 2 }}>
                    <h1 className="hero-title" style={{ textAlign: 'left', margin: '0 0 1.5rem 0', fontSize: '4.5rem', color: 'var(--text-primary)' }}>
                        Elite <span className="gradient-text">Solutions</span>
                    </h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.25rem', textAlign: 'left', margin: '0 0 3rem 0', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        Architecting the future through elite engineering and visionary design.
                        We deliver outcome-driven solutions that scale with your ambition.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#services" className="btn btn-primary btn-lg">Explore Expertise</a>
                        <a href="#post-job" className="btn glass-card btn-lg">Start Project</a>
                    </div>
                </div>

                <div style={{
                    position: 'relative',
                    height: '450px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* Cinematic Background Card */}
                    <div className="glass-card" style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '32px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 40px 100px -20px rgba(0,0,0,0.8)',
                        transform: 'perspective(1000px) rotateY(-5deg)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(248, 250, 252, 0.95), transparent)',
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: '2rem',
                            right: '2rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>★</div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Premium Delivery</div>
                                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Top 1% Talent Only</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Trust Section */}
            <section className="container animate-fade" style={{ padding: '2rem 0', display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.9 }}>
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ margin: 0, color: 'var(--accent-primary)', fontSize: '2rem' }}>100%</h4>
                    <p style={{ fontSize: '1rem', margin: 0 }}>Secure Payments</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ margin: 0, color: 'var(--accent-primary)', fontSize: '2rem' }}>Expert</h4>
                    <p style={{ fontSize: '1rem', margin: 0 }}>Vetted Talent</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h4 style={{ margin: 0, color: 'var(--accent-primary)', fontSize: '2rem' }}>24/7</h4>
                    <p style={{ fontSize: '1rem', margin: 0 }}>Global Support</p>
                </div>
            </section>
        </>
    );
};

export default Hero;
