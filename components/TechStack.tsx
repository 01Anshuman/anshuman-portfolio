'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TECH_STACK, TICKER_ITEMS } from '@/lib/constants';

const GROUP_COLORS: Record<string, string> = {
  Frontend: '#00f5a0',
  Backend: '#00b4ff',
  Database: '#ff6b6b',
  'AI & Automation': '#a78bfa',
  'Cloud & DevOps': '#fbbf24',
  'Marketing Tools': '#f472b6',
};

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tech" ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ width: 400, height: 400, background: 'rgba(0,180,255,0.07)', top: '10%', right: '-100px' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#00f5a0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; STACK /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0', marginBottom: '0.75rem' }}>
            Technologies I Actually Use
          </h2>
          <p style={{ color: '#8892a4', fontSize: '1rem', maxWidth: '480px' }}>
            Not just a list — these are tools I&apos;ve shipped real projects with.
          </p>
        </motion.div>

        {/* Bento grid of groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }} className="tech-grid">
          {Object.entries(TECH_STACK).map(([group, items], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              style={{
                background: 'rgba(8,9,14,0.7)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: GROUP_COLORS[group] || '#00f5a0', display: 'inline-block' }} />
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: GROUP_COLORS[group] || '#00f5a0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {group}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {items.map((tech) => (
                  <div key={tech.name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.2rem', width: '28px', textAlign: 'center' }}>{tech.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f0f0f0' }}>{tech.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#8892a4' }}>{tech.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ticker */}
        <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{
                padding: '0.4rem 1.2rem',
                margin: '0 0.4rem',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#8892a4',
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                whiteSpace: 'nowrap',
              }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 481px) and (max-width: 900px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
