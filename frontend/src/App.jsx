import React, { useState, useEffect } from 'react'
import './App.css'
import VoiceAssistant from './components/VoiceAssistant';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import removed
import FeatureBanner from './components/FeatureBanner';
import Services from './components/Services';
import WhyAster from './components/WhyAster';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [jobs, setJobs] = useState([]);

  // Job Post Form State
  const [jobForm, setJobForm] = useState({ title: '', description: '', budget: '', skills: '', client_name: '' });
  const [postStatus, setPostStatus] = useState('');

  // Proposal Form State
  const [activeJobId, setActiveJobId] = useState(null);
  const [proposalForm, setProposalForm] = useState({ freelancer_name: '', cover_letter: '', bid_amount: '' });
  const [proposalStatus, setProposalStatus] = useState('');

  // Login Modal State
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginStatus('Connecting to Database...');
    try {
      // Simulate real-time backend connection
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setLoginStatus('Login Successful!');
        setTimeout(() => {
          setLoginModalOpen(false);
          setLoginStatus('');
          setLoginForm({ email: '', password: '' });
        }, 1500);
      } else {
        setLoginStatus(data.detail || 'Login Failed.');
      }
    } catch (error) {
      setLoginStatus('Backend Connection Error. Ensure DB is running.');
    }
  };

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/jobs');
      if (res.ok) {
        const data = await res.json();
        setJobs(data);
      }
    } catch (err) {
      console.error("Backend connection failed:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    fetchJobs();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePostJob = async (e) => {
    e.preventDefault();
    setPostStatus('Posting...');
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...jobForm,
          budget: parseFloat(jobForm.budget) || 0
        })
      });
      if (response.ok) {
        setPostStatus('Job posted successfully!');
        setJobForm({ title: '', description: '', budget: '', skills: '', client_name: '' });
        fetchJobs(); // Refresh job list
      } else {
        setPostStatus('Error posting job.');
      }
    } catch (err) {
      setPostStatus('Connection error. Is the backend running?');
    }
  };

  const handleSubmitProposal = async (e, jobId) => {
    e.preventDefault();
    setProposalStatus('Submitting...');
    try {
      const response = await fetch(`/api/jobs/${jobId}/proposals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...proposalForm,
          bid_amount: parseFloat(proposalForm.bid_amount) || 0
        })
      });
      if (response.ok) {
        setProposalStatus('Proposal submitted!');
        setProposalForm({ freelancer_name: '', cover_letter: '', bid_amount: '' });
        setActiveJobId(null);
        fetchJobs(); // Refresh jobs to get updated proposals count
      } else {
        setProposalStatus('Error submitting proposal.');
      }
    } catch (err) {
      setProposalStatus('Connection error.');
    }
  };

  return (
    <div className="app" id="top">
      <div className="vfx-container">
        <div className="vfx-mesh"></div>
        <div className="vfx-glow-1" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }}></div>
        <div className="vfx-glow-2" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)' }}></div>
      </div>

      <Navbar scrolled={scrolled} setLoginModalOpen={setLoginModalOpen} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Showcase */}
        <Services />

        <WhyAster />

        <FeatureBanner />

        {/* Jobs Feed Section */}
        <section id="jobs" className="container section">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)' }}>Find great work</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Meet clients you're excited to work with and take your career or business to new heights.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            {jobs.length === 0 ? null : (
              jobs.map(job => (
                <div key={job.id} className="glass-card feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '2rem', textAlign: 'left' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.8rem' }}>{job.title}</h3>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>${job.budget}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    Posted by <strong>{job.client_name}</strong> • {new Date(job.created_at).toLocaleDateString()}
                  </p>
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{job.description}</p>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    {job.skills.split(',').map((skill, idx) => (
                      <span key={idx} className="tag tag-software" style={{ fontSize: '0.75rem', margin: 0 }}>
                        {skill.trim()}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      {job.proposals.length} Proposals
                    </span>
                    <button
                      className="btn btn-primary"
                      onClick={() => setActiveJobId(activeJobId === job.id ? null : job.id)}
                    >
                      {activeJobId === job.id ? 'Cancel' : 'Submit Proposal'}
                    </button>
                  </div>

                  {activeJobId === job.id && (
                    <div style={{ width: '100%', marginTop: '2rem', background: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--accent-primary)', boxShadow: '0 10px 30px rgba(20, 168, 0, 0.1)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(20, 168, 0, 0.1)', color: '#14a800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>💼</div>
                        <h4 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-primary)' }}>Submit a Proposal</h4>
                      </div>

                      <form onSubmit={(e) => handleSubmitProposal(e, job.id)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '1.5rem' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Your Professional Profile Name</label>
                            <input
                              className="btn glass-card"
                              style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.2rem', textAlign: 'left', borderRadius: '12px' }}
                              placeholder="e.g. Jane Doe - Senior Developer"
                              value={proposalForm.freelancer_name}
                              onChange={(e) => setProposalForm({ ...proposalForm, freelancer_name: e.target.value })}
                              required
                            />
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Your Bid ($)</label>
                            <input
                              type="number"
                              className="btn glass-card"
                              style={{ background: 'white', color: 'var(--text-primary)', border: '2px solid var(--accent-primary)', padding: '1.2rem', textAlign: 'left', borderRadius: '12px', fontWeight: 'bold' }}
                              placeholder="0.00"
                              value={proposalForm.bid_amount}
                              onChange={(e) => setProposalForm({ ...proposalForm, bid_amount: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Cover Letter</label>
                          <textarea
                            className="btn glass-card"
                            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.2rem', minHeight: '160px', textAlign: 'left', width: '100%', borderRadius: '12px' }}
                            placeholder="Highlight your relevant experience, attach links to your portfolio, and explain how you plan to tackle this project..."
                            value={proposalForm.cover_letter}
                            onChange={(e) => setProposalForm({ ...proposalForm, cover_letter: e.target.value })}
                            required
                          />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                          {proposalStatus ? (
                            <p style={{ color: proposalStatus.includes('Error') ? '#ef4444' : '#14a800', fontSize: '1rem', fontWeight: '600', margin: 0 }}>{proposalStatus}</p>
                          ) : (
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Includes AsterExplorer's 5% freelancer service fee.</p>
                          )}
                          <div style={{ display: 'flex', gap: '1rem' }}>
                            <button type="button" onClick={() => setActiveJobId(null)} className="btn glass-card" style={{ background: 'transparent', color: 'var(--text-primary)', border: 'none', padding: '1rem 2rem' }}>Cancel</button>
                            <button type="submit" disabled={proposalStatus === 'Submitting...'} className="btn btn-primary" style={{ padding: '1rem 2.5rem', boxShadow: '0 8px 25px rgba(20, 168, 0, 0.3)' }}>Send Proposal</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </section>

        {/* Post a Job Section */}
        <section id="post-job" className="container section">
          <div className="glass-card" style={{ padding: '4rem 5rem', maxWidth: '900px', margin: '0 auto', width: '100%', background: 'var(--bg-primary)', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.05)' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(20, 168, 0, 0.1)', color: '#14a800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>📝</div>
              <div>
                <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Post a Job</h2>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1.1rem' }}>Connect with millions of independent professionals and bring your project to life.</p>
              </div>
            </div>

            <form onSubmit={handlePostJob} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>Project Title</label>
                  <input
                    className="btn glass-card"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', textAlign: 'left', borderRadius: '12px', fontSize: '1rem' }}
                    placeholder="e.g., Build a responsive React website"
                    value={jobForm.title}
                    onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>Estimated Budget ($)</label>
                  <input
                    type="number"
                    className="btn glass-card"
                    style={{ background: 'white', color: 'var(--text-primary)', border: '2px solid var(--accent-primary)', padding: '1.25rem', textAlign: 'left', borderRadius: '12px', fontSize: '1rem', fontWeight: 'bold' }}
                    placeholder="0.00"
                    value={jobForm.budget}
                    onChange={(e) => setJobForm({ ...jobForm, budget: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>Company / Client Name</label>
                  <input
                    className="btn glass-card"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', textAlign: 'left', borderRadius: '12px', fontSize: '1rem' }}
                    placeholder="Enter your organization's name"
                    value={jobForm.client_name}
                    onChange={(e) => setJobForm({ ...jobForm, client_name: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>Required Skills</label>
                  <input
                    className="btn glass-card"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', textAlign: 'left', borderRadius: '12px', fontSize: '1rem' }}
                    placeholder="e.g., React, Node.js, Design (comma separated)"
                    value={jobForm.skills}
                    onChange={(e) => setJobForm({ ...jobForm, skills: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>Project Description</label>
                <textarea
                  className="btn glass-card"
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', minHeight: '200px', textAlign: 'left', width: '100%', borderRadius: '12px', fontSize: '1rem', lineHeight: '1.6' }}
                  placeholder="Describe your project here. Include any specific requirements, deliverables, or timelines..."
                  value={jobForm.description}
                  onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                  required
                />
              </div>

              <div style={{ marginTop: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  {postStatus && <p style={{ margin: 0, fontWeight: '600', fontSize: '1.1rem', color: postStatus.includes('Error') ? '#ef4444' : '#14a800' }}>{postStatus}</p>}
                </div>
                <button type="submit" disabled={postStatus === 'Posting...'} className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(20, 168, 0, 0.3)' }}>Publish Job</button>
              </div>
            </form>
          </div>
        </section>

        <Roadmap />
      </main>

      <Footer />
      <VoiceAssistant />

      {/* Remaining Modals */}

      {/* Login Authentication Modal OVERLAY */}
      {loginModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem'
        }}>
          <div style={{ width: '100%', maxWidth: '480px', padding: '4rem 3.5rem', position: 'relative', background: 'white', borderRadius: '16px', animation: 'fadeIn 0.2s ease-out', border: '1px solid var(--glass-border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
            <button onClick={() => setLoginModalOpen(false)} style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'
            }} onMouseOver={(e) => { e.currentTarget.style.color = '#14a800'; }} onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
              ✕
            </button>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', fontWeight: 'bold' }}>Log in to AsterExplorer</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <button style={{ width: '100%', padding: '0.8rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', background: 'white', border: '1px solid #dcdcdc', borderRadius: '100px', cursor: 'pointer', fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#f2f2f2'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /></svg>
                Continue with Google
              </button>
              <button style={{ width: '100%', padding: '0.8rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', background: 'white', border: '1px solid #dcdcdc', borderRadius: '100px', cursor: 'pointer', fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#f2f2f2'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                <svg width="18" height="18" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                Continue with Apple
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, height: '1px', background: '#dcdcdc' }}></div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>or</div>
              <div style={{ flex: 1, height: '1px', background: '#dcdcdc' }}></div>
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <input
                type="text"
                placeholder="Username or Email"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '8px', border: '1px solid #dcdcdc', background: 'white', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = '#14a800'}
                onBlur={(e) => e.target.style.borderColor = '#dcdcdc'}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '8px', border: '1px solid #dcdcdc', background: 'white', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = '#14a800'}
                onBlur={(e) => e.target.style.borderColor = '#dcdcdc'}
              />

              <button type="submit" disabled={loginStatus === 'Connecting to Database...'} style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', background: '#14a800', color: 'white', border: 'none', borderRadius: '100px', cursor: 'pointer', fontWeight: 'bold', marginTop: '1rem', transition: 'background 0.2s' }} onMouseOver={(e) => e.target.style.background = '#108900'} onMouseOut={(e) => e.target.style.background = '#14a800'}>Continue with Email</button>

              {loginStatus && (
                <div style={{ textAlign: 'center', padding: '1rem', borderRadius: '8px', background: loginStatus.includes('Error') || loginStatus.includes('Failed') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(20, 168, 0, 0.1)', color: loginStatus.includes('Error') || loginStatus.includes('Failed') ? '#ef4444' : '#14a800', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {loginStatus}
                </div>
              )}
            </form>

            <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Don't have an AsterExplorer account? <a href="#" style={{ color: '#14a800', textDecoration: 'none', fontWeight: '500' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Sign Up</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
