'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STATIC_METRICS = [
  { value: '3+',   label: 'Projects Delivered' },
  { value: '20+',  label: 'Hours Saved Per Week' },
  { value: '2',    label: 'Podcasts Running' },
  { value: '5+',   label: 'Automation Systems Built' },
  { value: '50+',  label: 'Leads Generated via Outbound' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="results" ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ width: 500, height: 300, background: 'rgba(0,245,160,0.06)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#00f5a0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; RESULTS /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}>
            By The Numbers
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }} className="metrics-grid">
          {STATIC_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(15,17,23,0.8)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s',
              }}
              whileHover={{ borderColor: 'rgba(0,245,160,0.3)' }}
            >
              <div style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                background: 'linear-gradient(135deg, #00f5a0, #00b4ff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
              }}>
                {m.value}
              </div>
              <div style={{ color: '#8892a4', fontSize: '0.875rem', fontWeight: 400 }}>{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) { .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 481px) and (max-width: 900px) { .metrics-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </section>
  );
}
