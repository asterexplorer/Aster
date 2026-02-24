import React from 'react';

const Services = () => {
    return (
        <section id="services" className="container section animate-fade" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
            <div className="section-header" style={{ marginBottom: '4rem', textAlign: 'left', width: '100%', maxWidth: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>Browse talent by category</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>Looking for work? <a href="#jobs" style={{ color: '#14a800', textDecoration: 'none', fontWeight: '500' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Browse jobs</a></p>
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem',
                width: '100%'
            }}>
                {[
                    {
                        title: "Development & IT",
                        rating: "4.85/5",
                        skills: "1853 skills"
                    },
                    {
                        title: "Design & Creative",
                        rating: "4.91/5",
                        skills: "968 skills"
                    },
                    {
                        title: "Sales & Marketing",
                        rating: "4.77/5",
                        skills: "392 skills"
                    },
                    {
                        title: "Writing & Translation",
                        rating: "4.92/5",
                        skills: "505 skills"
                    },
                    {
                        title: "Admin & Customer Support",
                        rating: "4.79/5",
                        skills: "123 skills"
                    },
                    {
                        title: "Finance & Accounting",
                        rating: "4.86/5",
                        skills: "214 skills"
                    },
                    {
                        title: "Engineering & Architecture",
                        rating: "4.82/5",
                        skills: "650 skills"
                    },
                    {
                        title: "Consulting & HR",
                        rating: "4.88/5",
                        skills: "411 skills"
                    }
                ].map((s, idx) => (
                    <a href="#jobs" key={idx} style={{ textDecoration: 'none' }}>
                        <div className="glass-card" style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            backgroundColor: 'white',
                            textAlign: 'left',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border)',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            height: '100%'
                        }} onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#f2f7f2';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.06)';
                        }} onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.4)'; // Reset to original glass-card shadow
                        }}>
                            <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.01em', lineHeight: '1.3' }}>{s.title}</h3>
                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: '600', fontSize: '1rem' }}>
                                    <span style={{ color: '#14a800', fontSize: '1.2rem' }}>★</span> {s.rating}
                                </div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>
                                    {s.skills}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Services;
