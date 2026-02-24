import React from 'react';

const Navbar = ({ scrolled, setLoginModalOpen }) => {
    return (
        <nav className={`navbar ${scrolled ? 'glass-card' : ''}`} style={{
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
            backdropFilter: scrolled ? 'blur(20px)' : 'none'
        }}>
            <div className="container nav-content">
                <a href="#top" className="logo gradient-text" style={{ textDecoration: 'none', fontSize: '1.5rem' }}>AsterExplorer</a>
                <ul className="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#showcase">Showcase</a></li>
                    <li><a href="#jobs">Jobs</a></li>
                    <li><a href="#post-job">Hire</a></li>
                    <li><a href="#future-updates">Roadmap</a></li>
                </ul>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button onClick={() => setLoginModalOpen(true)} className="btn glass-card" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', background: 'transparent', color: 'var(--text-primary)' }}>Login</button>
                    <a href="#post-job" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Hire Talent</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
