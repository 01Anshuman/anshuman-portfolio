'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ width: 400, height: 400, background: 'rgba(0,245,160,0.06)', top: '20%', left: '-100px' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#00f5a0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; TESTIMONIALS /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}>
            What Clients Say
          </h2>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 560px))', gap: '1.5rem', width: '100%', maxWidth: '1160px' }} className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                background: 'rgba(8,9,14,0.8)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: '1.2rem', right: '1.5rem',
                fontFamily: 'Georgia, serif', fontSize: '4rem', color: 'rgba(0,245,160,0.1)',
                lineHeight: 1, userSelect: 'none',
              }}>&ldquo;</div>

              <p style={{ color: '#c8d0dc', fontSize: '0.925rem', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00f5a0, #00b4ff)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.8rem', color: '#08090e',
                  flexShrink: 0,
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#f0f0f0' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#8892a4' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        </div>

      <style>{`
        @media (max-width: 700px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
