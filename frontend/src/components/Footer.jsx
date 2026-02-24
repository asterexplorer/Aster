import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--text-primary)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem', marginTop: '5rem' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem' }}>
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <div className="logo" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#14a800', letterSpacing: '-0.03em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'white' }}>Aster</span>Explorer
                        </div>
                        <p style={{ color: '#a0a0a0', fontSize: '1.05rem', maxWidth: '350px', lineHeight: 1.7, marginBottom: '2rem' }}>
                            The premium marketplace for top freelancers and innovative clients. Build the future, together.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background 0.3s' }} onMouseOver={(e) => e.target.style.background = '#14a800'} onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>in</a>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background 0.3s' }} onMouseOver={(e) => e.target.style.background = '#14a800'} onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>tw</a>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background 0.3s' }} onMouseOver={(e) => e.target.style.background = '#14a800'} onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>fb</a>
                            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background 0.3s' }} onMouseOver={(e) => e.target.style.background = '#14a800'} onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>ig</a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>For Clients</span>
                            <a href="#post-job" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>How to Hire</a>
                            <a href="#post-job" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Talent Marketplace</a>
                            <a href="#showcase" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Project Catalog</a>
                            <a href="#enterprise" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Enterprise Solution</a>
                            <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Payroll Services</a>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>For Talent</span>
                            <a href="#jobs" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>How to Find Work</a>
                            <a href="#jobs" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Direct Contracts</a>
                            <a href="#jobs" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Find Freelance Jobs</a>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>Company</span>
                            <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>About Us</a>
                            <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Leadership</a>
                            <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Careers</a>
                            <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Press</a>
                            <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Trust & Safety</a>
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <p style={{ color: '#a0a0a0', fontSize: '0.9rem', margin: 0 }}>© 2015 - 2026 AsterExplorer® Global Inc.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Terms of Service</a>
                        <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Privacy Policy</a>
                        <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>CA Notice at Collection</a>
                        <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Cookie Settings</a>
                        <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#a0a0a0'}>Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
