import React from 'react';

const PredictionChart = ({ predictionData }) => {
    if (!predictionData) return null;

    const { label, data, dates, insight } = predictionData;
    const maxVal = Math.max(...data, 100);
    const minVal = Math.min(...data, 0);
    const range = maxVal - minVal;

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
        <div className="prediction-container" style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.8rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
                <span>{label}</span>
                <span>{data[data.length - 1]}%</span>
            </div>

            <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible' }}>
                {/* Grid lines */}
                <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                {/* Fill Area */}
                <path
                    d={`${pathD} L ${points[points.length - 1].x},${height - padding} L ${points[0].x},${height - padding} Z`}
                    fill="url(#gradient-prediction)"
                    opacity="0.2"
                />

                {/* Line */}
                <path
                    d={pathD}
                    fill="none"
                    stroke="var(--accent-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: 'drop-shadow(0 0 4px var(--accent-primary))' }}
                />

                {/* Points */}
                {points.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--bg-primary)" stroke="var(--accent-primary)" strokeWidth="2" />
                ))}

                <defs>
                    <linearGradient id="gradient-prediction" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent-primary)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', opacity: 0.6, fontSize: '0.65rem' }}>
                {dates.map((date, i) => (
                    <span key={i}>{i === 0 || i === dates.length - 1 ? date : ''}</span>
                ))}
            </div>

            <div style={{
                marginTop: '1rem',
                padding: '0.5rem',
                borderLeft: '2px solid var(--accent-tertiary)',
                background: 'rgba(236, 72, 153, 0.05)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)'
            }}>
                <strong>AI Insight:</strong> {insight}
            </div>
        </div>
    );
};

export default PredictionChart;
