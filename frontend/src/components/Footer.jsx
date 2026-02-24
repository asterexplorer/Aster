import React from 'react';

const Footer = () => {
    return (
        <footer className="container section" style={{ paddingBottom: '3rem', paddingTop: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '250px' }}>
                    <div className="logo gradient-text" style={{ fontSize: '2rem' }}>AsterExplorer</div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '1.5rem', maxWidth: '350px', lineHeight: 1.7 }}>
                        The premium marketplace for top freelancers and innovative clients. Build the future, together.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Platform</span>
                        <a href="#jobs" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s' }}>Find Jobs</a>
                        <a href="#post-job" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s' }}>Hire Freelancers</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Company</span>
                        <a href="#top" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s' }}>Our Page</a>
                        <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s' }}>About Us</a>
                        <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s' }}>Support & Trust</a>
                        <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s' }}>Fees</a>
                    </div>
                </div>

                <div style={{ width: '100%', paddingTop: '4rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>© 2026 AsterExplorer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
