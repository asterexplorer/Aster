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
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem'
        }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '450px', padding: '3rem', position: 'relative', background: 'var(--bg-primary)', animation: 'fadeIn 0.3s ease-out', border: '1px solid var(--glass-border)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
            <button onClick={() => setLoginModalOpen(false)} style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'
            }} onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; }} onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
              ✖
            </button>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome Back</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Securely login to your AsterExplorer account.</p>
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '1rem' }}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '1rem' }}
              />

              <button type="submit" disabled={loginStatus === 'Connecting to Database...'} className="btn btn-primary btn-block" style={{ padding: '1.2rem', fontSize: '1.1rem', margin: '0.5rem 0' }}>Secure Login</button>

              {loginStatus && (
                <div style={{ textAlign: 'center', padding: '1rem', borderRadius: '8px', background: loginStatus.includes('Error') || loginStatus.includes('Failed') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', color: loginStatus.includes('Error') || loginStatus.includes('Failed') ? '#ef4444' : '#10b981', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {loginStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
