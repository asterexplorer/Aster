import React from 'react';

const Navbar = ({ scrolled, setLoginModalOpen }) => {
    return (
        <nav className="navbar" style={{
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'var(--bg-primary)',
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
            backdropFilter: scrolled ? 'blur(20px)' : 'none'
        }}>
            <div className="container nav-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1400px', padding: '0 2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }}>
                    <a href="#top" className="logo" style={{ textDecoration: 'none', fontSize: '1.8rem', fontWeight: 'bold', color: '#14a800', letterSpacing: '-0.03em', display: 'flex', alignItems: 'center' }}>
                        Aster<span style={{ color: 'var(--text-primary)' }}>Explorer</span>
                    </a>

                    <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        <li><a href="#services" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500', fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#14a800'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Find Talent</a></li>
                        <li><a href="#jobs" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500', fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#14a800'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Find Work</a></li>
                        <li><a href="#showcase" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500', fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#14a800'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Why Aster</a></li>
                        <li><a href="#enterprise" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500', fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#14a800'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Enterprise</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-chat')); }} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '500', fontSize: '1rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#14a800'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Chat</a></li>
                    </ul>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative', marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ position: 'absolute', left: '16px', opacity: 0.5, fontSize: '1rem' }}>🔍</span>
                        <input
                            type="text"
                            placeholder="Search"
                            style={{ padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(0,0,0,0.03)', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s', width: '260px', color: 'var(--text-primary)' }}
                            onFocus={(e) => { e.target.style.borderColor = '#14a800'; e.target.style.background = 'transparent'; }}
                            onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.background = 'rgba(0,0,0,0.03)'; }}
                        />
                    </div>
                    <button onClick={() => setLoginModalOpen(true)} style={{ padding: '0.6rem 1.8rem', fontSize: '1rem', background: '#14a800', color: 'white', border: 'none', borderRadius: '100px', cursor: 'pointer', fontWeight: 'bold', transition: 'background 0.2s', boxShadow: '0 4px 14px rgba(20, 168, 0, 0.2)' }} onMouseOver={(e) => e.target.style.background = '#108900'} onMouseOut={(e) => e.target.style.background = '#14a800'}>Log In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
