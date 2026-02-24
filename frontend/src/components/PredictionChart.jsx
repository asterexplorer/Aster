import React from 'react';

const PredictionChart = ({ predictionData }) => {
    if (!predictionData) return null;

    const { label, data, dates, insight } = predictionData;
    const maxVal = Math.max(...data, 100);
    const minVal = Math.min(...data, 0);
    const range = maxVal - minVal || 1;

    const width = 300;
    const height = 120;
    const padding = 20;

    const points = data.map((val, i) => {
        const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
        const y = height - ((val - minVal) / range) * (height - 2 * padding) - padding;
        return { x, y };
    });

    const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

    return (
        <div className="prediction-container animate-fade" style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            background: 'white',
            borderRadius: '16px',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            fontSize: '0.85rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '1rem', letterSpacing: '-0.01em' }}>{label}</span>
                <span style={{ background: '#f2f7f2', color: '#14a800', padding: '0.2rem 0.6rem', borderRadius: '100px', fontWeight: 'bold' }}>{data[data.length - 1]}%</span>
            </div>

            <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible', filter: 'drop-shadow(0 4px 6px rgba(20,168,0,0.1))' }}>
                {/* Grid lines */}
                <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="rgba(0,0,0,0.05)" strokeWidth="1" strokeDasharray="4 4" />

                {/* Fill Area */}
                <path
                    d={`${pathD} L ${points[points.length - 1].x},${height - padding} L ${points[0].x},${height - padding} Z`}
                    fill="url(#gradient-prediction)"
                    opacity="0.15"
                />

                {/* Line */}
                <path
                    d={pathD}
                    fill="none"
                    stroke="#14a800"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Points */}
                {points.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="4" fill="white" stroke="#14a800" strokeWidth="2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
                ))}

                <defs>
                    <linearGradient id="gradient-prediction" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#14a800" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: '500' }}>
                {dates.map((date, i) => (
                    <span key={i}>{i === 0 || i === dates.length - 1 ? date : ''}</span>
                ))}
            </div>

            <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                borderLeft: '4px solid #14a800',
                background: '#f2f7f2',
                borderRadius: '0 8px 8px 0',
                fontSize: '0.85rem',
                color: 'var(--text-primary)',
                lineHeight: '1.5'
            }}>
                <strong style={{ color: '#14a800', display: 'block', marginBottom: '0.2rem' }}>AI Insight:</strong>
                {insight}
            </div>
        </div>
    );
};

export default PredictionChart;
