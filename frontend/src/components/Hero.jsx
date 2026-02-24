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
                    <div style={{ position: 'relative', maxWidth: '550px', marginBottom: '1.5rem', display: 'flex' }}>
                        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1.5rem', opacity: 0.5, fontSize: '1.1rem' }}>🔍</div>
                        <input type="text" placeholder="Search for any service..." style={{ width: '100%', padding: '1.2rem 1.5rem 1.2rem 3.5rem', borderRadius: '100px', border: '2px solid rgba(0,0,0,0.1)', background: 'transparent', color: 'var(--text-primary)', fontSize: '1.1rem', outline: 'none', transition: 'all 0.3s' }} onFocus={(e) => { e.target.style.borderColor = '#14a800'; e.target.style.boxShadow = '0 10px 30px rgba(20, 168, 0, 0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.boxShadow = 'none'; }} />
                        <button style={{ position: 'absolute', right: '0.4rem', top: '0.4rem', bottom: '0.4rem', background: '#14a800', border: 'none', color: 'white', padding: '0 1.8rem', borderRadius: '100px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.target.style.background = '#108900'} onMouseOut={(e) => e.target.style.background = '#14a800'}>Search</button>
                    </div>

                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 'bold', marginRight: '0.4rem' }}>Popular:</span>
                        {['Website Design', 'WordPress', 'Logo Design', 'AI Services'].map(skill => (
                            <span key={skill} style={{ fontSize: '0.85rem', padding: '0.4rem 1rem', border: '1px solid var(--glass-border)', borderRadius: '100px', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: '500' }} onMouseOver={(e) => { e.target.style.borderColor = '#14a800'; e.target.style.color = '#14a800'; e.target.style.background = 'rgba(20, 168, 0, 0.05)' }} onMouseOut={(e) => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.color = 'var(--text-secondary)'; e.target.style.background = 'transparent' }}>{skill}</span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#services" className="btn btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '1rem', borderRadius: '100px', boxShadow: '0 10px 25px rgba(20, 168, 0, 0.3)' }}>Find Talent</a>
                        <a href="#jobs" className="btn glass-card" style={{ color: 'var(--text-primary)', border: '2px solid rgba(0,0,0,0.1)', padding: '0.8rem 1.8rem', fontSize: '1rem', borderRadius: '100px', background: 'transparent', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>Find Work</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '3.5rem' }}>
                        <div style={{ display: 'flex' }}>
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', zIndex: 3, objectFit: 'cover' }} alt="User" />
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', marginLeft: '-15px', zIndex: 2, objectFit: 'cover' }} alt="User" />
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', marginLeft: '-15px', zIndex: 1, objectFit: 'cover' }} alt="User" />
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500', lineHeight: 1.4 }}>
                            Trusted by <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>10k+</span> businesses<br /> worldwide.
                        </div>
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
                        <div style={{ position: 'absolute', top: '2rem', left: '0', background: 'white', padding: '0.8rem 1.5rem', borderRadius: '0 16px 16px 0', display: 'flex', alignItems: 'center', gap: '0.8rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)' }}>
                            <div style={{ width: '35px', height: '35px', borderRadius: '10px', background: 'rgba(20, 168, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14a800', fontWeight: 'bold' }}>✓</div>
                            <div>
                                <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Proof of Quality</div>
                            </div>
                        </div>

                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'rgba(255,255,255,0.95)', padding: '1rem 1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)', transition: 'transform 0.3s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#14a800', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem' }}>★</div>
                            <div>
                                <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Top 1% Talent</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Expert vetted professionals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container animate-fade" style={{ marginTop: '2rem', opacity: 0.6 }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Trusted by leading brands</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>Microsoft</span>
                    <span style={{ fontSize: '1.6rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', letterSpacing: '-0.05em' }}>airbnb</span>
                    <span style={{ fontSize: '1.6rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>BISSELL</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: '900', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', letterSpacing: '0.02em', fontStyle: 'italic' }}>NASDAQ</span>
                </div>
            </div>

            {/* Why Us / Trust Section (Upwork-style clean banner) */}
            <section className="container animate-fade" style={{ marginTop: '4rem', padding: '3.5rem 4rem', display: 'flex', justifyContent: 'space-between', gap: '2rem', background: '#14a800', borderRadius: '24px', color: 'white', boxShadow: '0 20px 40px rgba(20, 168, 0, 0.15)', backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <h4 style={{ margin: 0, color: 'white', fontSize: '2.5rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        ★ 4.9/5
                    </h4>
                    <p style={{ fontSize: '1.1rem', margin: 0, color: 'rgba(255,255,255,0.9)', fontWeight: '500' }}>Average client rating</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '3rem' }}>
                    <h4 style={{ margin: 0, color: 'white', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Top 1%</h4>
                    <p style={{ fontSize: '1.1rem', margin: 0, color: 'rgba(255,255,255,0.9)', fontWeight: '500' }}>Expert Vetted Talent</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '3rem' }}>
                    <h4 style={{ margin: 0, color: 'white', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Safe</h4>
                    <p style={{ fontSize: '1.1rem', margin: 0, color: 'rgba(255,255,255,0.9)', fontWeight: '500' }}>Protected Payments</p>
                </div>
            </section>
        </>
    );
};

export default Hero;
