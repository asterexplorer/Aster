import React, { useState, useEffect, useRef } from 'react';
import PredictionChart from './PredictionChart';

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi! I am the AsterExplorer Assistant. How can I help you find work or talent today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);

  // Web Speech API references
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleSend(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (isSpeaking) {
        synthRef.current.cancel();
        setIsSpeaking(false);
      }
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.warn('Recognition already started');
      }
    }
  };

  const speak = (text) => {
    if (!synthRef.current) return;

    // Stop any current speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Pick a good voice if available
    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Premium'));
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  };

  const handleSend = async (text) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: messageText }]);
    setInputValue('');

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, {
          role: 'ai',
          text: data.reply,
          predictionData: data.prediction_data
        }]);
        speak(data.reply);
      } else {
        const errorMsg = "I'm having trouble connecting to my brain right now.";
        setMessages(prev => [...prev, { role: 'ai', text: errorMsg }]);
        speak(errorMsg);
      }
    } catch (err) {
      const errorMsg = "Connection error. Please ensure the Aster backend is running.";
      setMessages(prev => [...prev, { role: 'ai', text: errorMsg }]);
      speak(errorMsg);
    }
  };

  return (
    <div className="voice-assistant-wrapper" style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 1000,
      fontFamily: 'var(--font-main)'
    }}>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`glass-card ${isOpen ? 'active' : ''}`}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: 0,
          background: isOpen ? 'var(--accent-primary)' : 'var(--glass-bg)',
          boxShadow: isSpeaking ? '0 0 20px var(--accent-tertiary)' : (isListening ? '0 0 20px var(--accent-primary)' : '0 8px 32px rgba(0,0,0,0.5)'),
          animation: isListening ? 'pulse-ai 1.5s infinite' : 'none',
          border: '1px solid var(--glass-border)'
        }}
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="glass-card animate-fade" style={{
          position: 'absolute',
          bottom: '80px',
          right: 0,
          width: '350px',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          padding: '1.5rem',
          border: '1px solid var(--glass-border)',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(40px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.2rem' }}>AsterExplorer Assistant</h4>
              <span style={{ fontSize: '0.7rem', color: isSpeaking ? 'var(--accent-tertiary)' : (isListening ? 'var(--accent-primary)' : 'var(--text-secondary)') }}>
                {isSpeaking ? '● Speaking...' : (isListening ? '● Listening...' : '● Online')}
              </span>
            </div>
            <div className="tag" style={{ fontSize: '0.6rem', color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)', background: 'rgba(20, 168, 0, 0.1)' }}>Support</div>
          </div>

          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingRight: '0.5rem',
              marginBottom: '1rem'
            }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  padding: '0.8rem 1rem',
                  borderRadius: msg.role === 'user' ? '18px 18px 0 18px' : '18px 18px 18px 0',
                  background: msg.role === 'user' ? 'var(--accent-primary)' : 'rgba(0,0,0,0.05)',
                  color: msg.role === 'user' ? '#fff' : 'var(--text-primary)',
                  fontSize: '0.9rem',
                  border: msg.role === 'user' ? 'none' : '1px solid var(--glass-border)'
                }}>
                  {msg.text}
                </div>
                {msg.predictionData && <PredictionChart predictionData={msg.predictionData} />}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleSend("Predict freelance trends")}
              className="tag tag-software"
              style={{ cursor: 'pointer', border: 'none', fontSize: '0.7rem', padding: '0.4rem 0.8rem' }}
            >
              📈 Market Trends
            </button>
            <button
              onClick={() => handleSend("Find freelance work")}
              className="tag tag-hardware"
              style={{ cursor: 'pointer', border: 'none', fontSize: '0.7rem', padding: '0.4rem 0.8rem' }}
            >
              💼 Find Work
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Ask anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '0.8rem',
                borderRadius: '12px',
                background: 'rgba(0,0,0,0.05)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.9rem'
              }}
            />
            <button
              onClick={toggleListening}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                border: '1px solid var(--glass-border)',
                background: isListening ? 'var(--accent-primary)' : 'rgba(0,0,0,0.05)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}
              title="Voice Input"
            >
              🎤
            </button>
            <button
              onClick={() => handleSend()}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                border: 'none',
                background: 'var(--accent-primary)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ➔
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-ai {
          0% { box-shadow: 0 0 0 0 rgba(20, 168, 0, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(20, 168, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(20, 168, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default VoiceAssistant;
