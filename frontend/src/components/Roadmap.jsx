import React from 'react';

const Roadmap = () => {
    return (
        <section id="future-updates" className="container section animate-fade" style={{ paddingTop: '5rem', paddingBottom: '7rem' }}>
            <div style={{ width: '100%', textAlign: 'center', marginBottom: '4rem' }}>
                <p style={{ color: '#14a800', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 1rem 0', fontSize: '0.9rem' }}>Innovation</p>
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 1.5rem 0', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                    The Future of Work
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.6' }}>
                    We are constantly innovating to build the next-generation tools. Get ready for features designed to completely revolutionize how you hire and work online.
                </p>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {/* Main Innovation Banner */}
                <div style={{ width: '100%', height: '400px', borderRadius: '24px', overflow: 'hidden', position: 'relative', background: '#14a800' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2, mixBlendMode: 'multiply' }}></div>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(20, 168, 0, 0.95), rgba(20, 168, 0, 0.4))' }}></div>
                    <div style={{ position: 'absolute', inset: 0, padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', color: 'white' }}>
                        <div style={{ background: 'white', color: '#14a800', padding: '0.4rem 1rem', borderRadius: '100px', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>AsterExplorer Labs</div>
                        <h3 style={{ margin: '0 0 1rem 0', fontSize: '3rem', maxWidth: '600px', fontFamily: 'var(--font-heading)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>Pioneering the Next Era of Distributed Teams</h3>
                        <p style={{ margin: 0, fontSize: '1.1rem', maxWidth: '500px', opacity: 0.9, lineHeight: '1.6' }}>Building native AI integrations, predictive matchmaking, and seamless global payroll infrastructure.</p>
                    </div>
                </div>

                {/* Upcoming Features Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%' }}>
                    {[
                        { title: "AsterExplorer AI Pro", desc: "Advanced AI that writes code, generates designs, and auto-bids on projects.", status: "Q3 2026", color: "#14a800" },
                        { title: "Global Crypto Payroll", desc: "Instant, zero-fee global transactions using stablecoins and major cryptocurrencies.", status: "Coming Soon", color: "#1f57c3" },
                        { title: "Predictive Talent Match", desc: "Neural networks to perfectly match enterprise clients with top 1% freelancers.", status: "In Development", color: "#c084fc" }
                    ].map((feature, i) => (
                        <div key={i} style={{ padding: '2.5rem', background: 'white', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <div style={{ width: '40px', height: '4px', background: feature.color, borderRadius: '2px' }}></div>
                                <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderRadius: '100px', fontWeight: '600' }}>{feature.status}</span>
                            </div>
                            <h4 style={{ margin: '0 0 0.8rem 0', color: 'var(--text-primary)', fontSize: '1.4rem' }}>{feature.title}</h4>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Beta Access CTA */}
                <div style={{ marginTop: '2rem', background: 'var(--bg-secondary)', padding: '3rem 4rem', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '2rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>Enable Beta Access</h4>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0 }}>Join the waitlist to get early access to future platform updates.</p>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); alert('You are on the waitlist for future updates!'); }} style={{ display: 'flex', gap: '1rem', flex: '1', minWidth: '350px' }}>
                        <input type="email" placeholder="Enter your email address" required style={{ flex: '1', padding: '1rem 1.5rem', borderRadius: '100px', border: '1px solid var(--glass-border)', background: 'white', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = '#14a800'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                        <button type="submit" className="btn btn-primary" style={{ padding: '1rem 2rem', borderRadius: '100px', fontSize: '1rem', whiteSpace: 'nowrap' }}>Enable Updates</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
