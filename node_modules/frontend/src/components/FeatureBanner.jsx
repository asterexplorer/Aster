import React from 'react';

const FeatureBanner = () => {
    return (
        <section className="container section animate-fade" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div className="glass-card" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                gap: '0',
                borderRadius: '32px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)'
            }}>
                <div style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="tag tag-software" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.05)', borderColor: 'rgba(0,0,0,0.1)' }}>Global Network</div>
                    <h2 style={{ fontSize: '3rem', margin: '0 0 1rem 0', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                        Hire The <span className="gradient-text">Top 1%</span> Of Talent Worldwide.
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                        AsterExplorer connects you with elite engineers, visionary designers, and expert strategists. Scale your team flexibly with pre-vetted professionals ready to deliver high-impact results immediately.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            "Rigorous 4-step vetting process",
                            "Secure escrow payment system",
                            "Dedicated 24/7 success managers"
                        ].map((feature, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '500' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>✓</div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div>
                        <a href="#post-job" className="btn btn-primary btn-lg" style={{ padding: '1rem 2rem' }}>
                            Start Hiring Now
                        </a>
                    </div>
                </div>
                <div style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative' }}>
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Creative team collaborating"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-secondary) 0%, transparent 40%)' }}></div>
                </div>
            </div>
        </section>
    );
};

export default FeatureBanner;
