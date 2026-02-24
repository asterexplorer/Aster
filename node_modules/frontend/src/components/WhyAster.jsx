import React from 'react';

const WhyAster = () => {
    return (
        <section id="showcase" className="container section animate-fade" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '6rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '3.5rem', margin: '0 0 1.5rem 0', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                        Why business turns to Aster<span style={{ color: '#14a800' }}>Explorer</span>
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(20, 168, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14a800', fontSize: '1.5rem', flexShrink: 0 }}>★</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Proof of quality</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>Check any pro’s work samples, client reviews, and identity verification to ensure you're hiring top tier talent.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(20, 168, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14a800', fontSize: '1.5rem', flexShrink: 0 }}>🛡️</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>No cost until you hire</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>Interview potential fits for your job, negotiate rates, and only pay for the work you approve.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(20, 168, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14a800', fontSize: '1.5rem', flexShrink: 0 }}>✓</div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Safe and secure</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you ever need it.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ position: 'relative', height: '100%', minHeight: '600px', width: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} alt="Professional Working" />
                    <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', left: '2rem', background: 'white', padding: '1.5rem 2rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                            <span style={{ color: '#14a800', fontSize: '1.2rem' }}>★</span>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>Enterprise Success</span>
                        </div>
                        <h4 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.5', fontStyle: 'italic' }}>
                            "AsterExplorer enables us to build incredible, high-quality remote teams faster than traditional recruitment."
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAster;
