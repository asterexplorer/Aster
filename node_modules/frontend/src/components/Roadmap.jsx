import React from 'react';

const Roadmap = () => {
    return (
        <section id="future-updates" className="container section animate-fade" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
            <div className="glass-card" style={{ padding: '4rem 2rem', width: '100%', position: 'relative', overflow: 'hidden', textAlign: 'center', background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.05), rgba(79, 70, 229, 0.05))' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent 70%)', filter: 'blur(40px)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1), transparent 70%)', filter: 'blur(40px)' }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div className="tag tag-hardware" style={{ marginBottom: '1rem', display: 'inline-block' }}>Roadmap 2026</div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Future <span className="gradient-text">Updates</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
                        We are constantly innovating. Get ready for next-gen features designed to revolutionize how you hire and work online.
                    </p>

                    <div style={{ width: '100%', height: '350px', borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', position: 'relative', border: '1px solid var(--glass-border)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.3)' }}>
                        <img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Pioneering Technology Concept" />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(248,250,252,0.95), transparent)' }}></div>
                        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div className="tag tag-software" style={{ alignSelf: 'flex-start', background: 'rgba(0,0,0,0.05)', backdropFilter: 'blur(10px)', color: 'rgba(0,0,0,0.9)', borderColor: 'rgba(0,0,0,0.1)' }}>AsterExplorer Labs</div>
                            <h3 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '2.5rem', letterSpacing: '-0.02em' }}>Pioneering The Next Era Of Work</h3>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '4rem' }}>
                        {[
                            { title: "AsterExplorer AI Pro", desc: "Advanced AI that writes code, generates designs, and auto-bids on projects.", status: "Q3 2026" },
                            { title: "Crypto Payments", desc: "Instant, zero-fee global transactions using stablecoins and major cryptocurrencies.", status: "Coming Soon" },
                            { title: "Talent Matchmaking", desc: "Predictive neural networks to perfectly match clients with top 1% freelancers.", status: "In Development" }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card" style={{ flex: '1 1 300px', maxWidth: '350px', padding: '2rem', textAlign: 'left', borderTop: '2px solid var(--accent-tertiary)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.2rem' }}>{feature.title}</h4>
                                    <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem', background: 'rgba(147, 51, 234, 0.1)', color: 'var(--accent-tertiary)', borderRadius: '6px', fontWeight: 'bold' }}>{feature.status}</span>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ background: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '20px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                        <div>
                            <h4 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>Enable Beta Access</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '400px' }}>Join the waitlist to get early access to future updates. Enable notifications below.</p>
                        </div>
                        <form onSubmit={(e) => { e.preventDefault(); alert('You are on the waitlist for future updates!'); }} style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '450px', flexWrap: 'wrap' }}>
                            <input type="email" placeholder="Enter your email address" required style={{ flex: '1', minWidth: '200px', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }} />
                            <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>Enable Updates</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Roadmap;
