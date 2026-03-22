'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const outboundMotion = [
  '100+ touchpoints per week (cold calls, LinkedIn, email)',
  'GPT-powered outreach — 5× higher connection acceptance rate',
  'ICP sourcing via ZoomInfo + LinkedIn Sales Navigator',
  'BANT qualification + full pipeline management in Zoho CRM',
];

const toolsDaily = [
  'ZoomInfo · LinkedIn Sales Navigator',
  'Zoho CRM · Otter.ai for call analysis',
  'Custom GPTs for personalisation at scale',
  'n8n for sales workflow automation',
];

export default function SDR() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ width: 400, height: 400, background: 'rgba(0,180,255,0.08)', top: '10%', right: '-80px' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#00f5a0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; SDR /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}>
            The Sales Side
          </h2>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: 'rgba(15,17,23,0.8)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Accent top border */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #00f5a0, #00b4ff)',
          }} />

          {/* Top paragraph */}
          <p style={{ color: '#c8d0dc', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '820px' }}>
            I run full-cycle B2B SaaS outbound into the US market at{' '}
            <span style={{ color: '#00f5a0', fontWeight: 600 }}>FireFlink</span> — targeting QA Directors, CTOs, VPs of Engineering, and Founders at US-headquartered SaaS startups and mid-market companies.
          </p>

          {/* Two-column grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }} className="sdr-cols">
            {/* Left */}
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#00f5a0', marginBottom: '1rem', letterSpacing: '0.04em' }}>
                My Outbound Motion
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {outboundMotion.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#8892a4', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#00f5a0', flexShrink: 0, marginTop: '0.1rem' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#00b4ff', marginBottom: '1rem', letterSpacing: '0.04em' }}>
                Tools I Use Daily
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {toolsDaily.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#8892a4', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <span style={{ color: '#00b4ff', flexShrink: 0, marginTop: '0.1rem' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom muted note */}
          <p style={{ color: '#8892a4', fontSize: '0.82rem', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.2rem' }}>
            Building the AI-powered outbound system that makes me 3× more effective per hour than a traditional SDR.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .sdr-cols { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
