import React, { useState, useEffect } from 'react'
import './App.css'
import VoiceAssistant from './components/VoiceAssistant';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import FeatureBanner from './components/FeatureBanner';
import Services from './components/Services';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer'; function App() {
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

        <Showcase />

        <FeatureBanner />

        {/* Jobs Feed Section */}
        <section id="jobs" className="container section">
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
                    <div style={{ width: '100%', marginTop: '2rem', background: 'rgba(0,0,0,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                      <h4 style={{ marginBottom: '1rem' }}>Submit Your Proposal</h4>
                      <form onSubmit={(e) => handleSubmitProposal(e, job.id)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                          <input
                            className="btn glass-card"
                            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1rem', textAlign: 'left' }}
                            placeholder="Your Name / Alias"
                            value={proposalForm.freelancer_name}
                            onChange={(e) => setProposalForm({ ...proposalForm, freelancer_name: e.target.value })}
                            required
                          />
                          <input
                            type="number"
                            className="btn glass-card"
                            style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1rem', textAlign: 'left' }}
                            placeholder="Bid Amount ($)"
                            value={proposalForm.bid_amount}
                            onChange={(e) => setProposalForm({ ...proposalForm, bid_amount: e.target.value })}
                            required
                          />
                        </div>
                        <textarea
                          className="btn glass-card"
                          style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1rem', minHeight: '120px', textAlign: 'left', width: '100%' }}
                          placeholder="Cover Letter: Explain why you are the best fit for this project..."
                          value={proposalForm.cover_letter}
                          onChange={(e) => setProposalForm({ ...proposalForm, cover_letter: e.target.value })}
                          required
                        />
                        <button type="submit" disabled={proposalStatus === 'Submitting...'} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Proposal</button>
                        {proposalStatus && <p style={{ color: proposalStatus.includes('Error') ? '#ef4444' : '#10b981', fontSize: '0.9rem' }}>{proposalStatus}</p>}
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
          <div className="glass-card" style={{ padding: '5rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div className="section-header" style={{ marginBottom: '3rem' }}>
              <h2 className="gradient-text" style={{ fontSize: '3.5rem' }}>Post a New Project</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Need something done? Describe your project and start receiving bids.</p>
            </div>
            <form onSubmit={handlePostJob} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <input
                  className="btn glass-card"
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', textAlign: 'left' }}
                  placeholder="Project Title (e.g., Build a React Website)"
                  value={jobForm.title}
                  onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                  required
                />
                <input
                  type="number"
                  className="btn glass-card"
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', textAlign: 'left' }}
                  placeholder="Budget ($)"
                  value={jobForm.budget}
                  onChange={(e) => setJobForm({ ...jobForm, budget: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <input
                  className="btn glass-card"
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', textAlign: 'left' }}
                  placeholder="Company / Client Name"
                  value={jobForm.client_name}
                  onChange={(e) => setJobForm({ ...jobForm, client_name: e.target.value })}
                  required
                />
                <input
                  className="btn glass-card"
                  style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', textAlign: 'left' }}
                  placeholder="Required Skills (comma separated)"
                  value={jobForm.skills}
                  onChange={(e) => setJobForm({ ...jobForm, skills: e.target.value })}
                  required
                />
              </div>

              <textarea
                className="btn glass-card"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '1.25rem', minHeight: '200px', textAlign: 'left', width: '100%' }}
                placeholder="Describe your project in detail..."
                value={jobForm.description}
                onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                required
              />
              <button type="submit" disabled={postStatus === 'Posting...'} className="btn btn-primary btn-lg btn-block">Publish Job</button>
              {postStatus && <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: '500', color: postStatus.includes('Error') ? '#ef4444' : '#10b981' }}>{postStatus}</p>}
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
