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
                textAlign: 'left',
                paddingTop: '4rem'
            }}>
                <div style={{ zIndex: 2, paddingRight: '2rem' }}>
                    <h1 className="hero-title" style={{ textAlign: 'left', margin: '0 0 1.5rem 0', fontSize: '5.5rem', color: '#14a800', fontFamily: 'var(--font-heading)', lineHeight: '1.05', letterSpacing: '-0.03em' }}>
                        How work <br /><span style={{ color: 'var(--text-primary)' }}>should work</span>
                    </h1>
                    <p style={{ maxWidth: '550px', fontSize: '1.4rem', textAlign: 'left', margin: '0 0 3rem 0', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: '500' }}>
                        Forget the old rules. You can have the best people.
                        Right now. Right here.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#services" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: '100px', boxShadow: '0 10px 25px rgba(20, 168, 0, 0.3)' }}>Find Talent</a>
                        <a href="#jobs" className="btn glass-card" style={{ color: 'var(--text-primary)', border: '2px solid var(--text-primary)', padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: '100px', background: 'transparent' }}>Find Work</a>
                    </div>
                </div>

                <div style={{
                    position: 'relative',
                    height: '550px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* Clean Upwork-style Image Block */}
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        right: '0',
                        width: '85%',
                        height: '85%',
                        background: '#14a800',
                        borderRadius: '32px',
                        zIndex: 0,
                        transform: 'rotate(3deg)'
                    }}></div>

                    <div style={{
                        width: '90%',
                        height: '95%',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '32px',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                        position: 'relative',
                        zIndex: 1,
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'rgba(255,255,255,0.95)', padding: '1rem 1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#14a800', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem' }}>★</div>
                            <div>
                                <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Top 1% Talent</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Expert vetted professionals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Trust Section (Upwork-style clean banner) */}
            <section className="container animate-fade" style={{ marginTop: '3rem', padding: '3rem 4rem', display: 'flex', justifyContent: 'space-between', gap: '2rem', background: 'var(--bg-secondary)', borderRadius: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#14a800' }}>★</span> 4.9/5
                    </h4>
                    <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-secondary)', fontWeight: '500' }}>Average client rating</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, borderLeft: '1px solid var(--glass-border)', paddingLeft: '3rem' }}>
                    <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Top 1%</h4>
                    <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-secondary)', fontWeight: '500' }}>Expert Vetted Talent</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, borderLeft: '1px solid var(--glass-border)', paddingLeft: '3rem' }}>
                    <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Safe</h4>
                    <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-secondary)', fontWeight: '500' }}>Protected Payments</p>
                </div>
            </section>
        </>
    );
};

export default Hero;
