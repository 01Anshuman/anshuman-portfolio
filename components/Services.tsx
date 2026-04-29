'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ width: 350, height: 350, background: 'rgba(226,232,240,0.05)', bottom: '5%', left: '-80px' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; SERVICES /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}>
            What I Build For You
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }} className="services-grid">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="service-card card-hover"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              style={{
                background: 'rgba(15,17,23,0.8)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>{svc.icon}</div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#f0f0f0', marginBottom: '0.9rem' }}>
                {svc.title}
              </h3>
              <p style={{ color: '#8892a4', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {svc.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#8892a4', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Deliverables</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {svc.deliverables.map((d) => (
                    <span key={d} style={{
                      padding: '0.25rem 0.65rem', borderRadius: '100px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                      fontSize: '0.75rem', color: '#8892a4',
                    }}>{d}</span>
                  ))}
                </div>
              </div>

              <div style={{
                padding: '0.6rem 1rem', borderRadius: '8px',
                background: `${svc.accent}12`,
                border: `1px solid ${svc.accent}30`,
                fontSize: '0.82rem', fontWeight: 600, color: svc.accent,
              }}>
                📈 {svc.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) { .services-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 481px) and (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
