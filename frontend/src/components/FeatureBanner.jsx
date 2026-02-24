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
                    <div className="tag tag-software" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem', background: 'rgba(20, 168, 0, 0.1)', borderColor: 'rgba(20, 168, 0, 0.2)', color: '#14a800' }}>For Enterprise</div>
                    <h2 style={{ fontSize: '3rem', margin: '0 0 1rem 0', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                        A talent solution that <span className="gradient-text">scales with you</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                        AsterExplorer Enterprise helps you get more done. Access the top 1% of talent on AsterExplorer, and a full suite of hybrid workforce management tools.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            "Access expert talent to fill your skill gaps",
                            "Control your workflow with advanced reporting",
                            "Consolidated billing & success management"
                        ].map((feature, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: '500' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>✓</div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div>
                        <a href="#post-job" className="btn btn-primary btn-lg" style={{ padding: '1rem 2rem', background: 'var(--text-primary)', color: 'white' }}>
                            Learn More
                        </a>
                    </div>
                </div>
                <div style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative' }}>
                    <img
                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                        alt="Enterprise collaboration"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-secondary) 0%, transparent 40%)' }}></div>
                </div>
            </div>
        </section>
    );
};

export default FeatureBanner;
