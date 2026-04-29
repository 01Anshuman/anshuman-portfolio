'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const roles = [
  {
    company: 'Middleware',
    title: 'Senior SDR',
    period: 'Current',
    accent: '#00b4ff',
    description:
      'Driving enterprise outbound for a developer-first observability platform — targeting Engineering Managers, VPs of Engineering, and CTOs at high-growth SaaS and tech companies.',
    outboundMotion: [
      'Multi-channel outbound: cold calls, LinkedIn, personalised email',
      'ICP research using LinkedIn Sales Navigator + intent signals',
      'AI-assisted personalisation at scale with Custom GPTs',
      'Full pipeline ownership from prospecting to qualified handoff',
    ],
    tools: [
      'LinkedIn Sales Navigator · Apollo.io',
      'Custom GPTs for hyper-personalisation',
      'n8n for outbound workflow automation',
      'CRM pipeline management & reporting',
    ],
  },
  {
    company: 'FireFlink',
    title: 'SDR — US Market',
    period: 'Previous',
    accent: '#e2e8f0',
    description:
      'Ran full-cycle B2B SaaS outbound into the US market — targeting QA Directors, CTOs, VPs of Engineering, and Founders at US-headquartered SaaS startups and mid-market companies.',
    outboundMotion: [
      '100+ touchpoints per week (cold calls, LinkedIn, email)',
      'GPT-powered outreach — 5× higher connection acceptance rate',
      'ICP sourcing via ZoomInfo + LinkedIn Sales Navigator',
      'BANT qualification + full pipeline management in Zoho CRM',
    ],
    tools: [
      'ZoomInfo · LinkedIn Sales Navigator',
      'Zoho CRM · Otter.ai for call analysis',
      'Custom GPTs for personalisation at scale',
      'n8n for sales workflow automation',
    ],
  },
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
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; SDR /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}>
            The Sales Side
          </h2>
          <p style={{ color: '#8892a4', fontSize: '1rem', marginTop: '0.75rem' }}>
            B2B SaaS outbound across two high-growth companies — from SDR to Senior SDR.
          </p>
        </motion.div>

        {/* Role cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
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
                background: `linear-gradient(90deg, ${role.accent}, transparent)`,
              }} />

              {/* Role header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#f0f0f0', margin: 0 }}>
                  {role.title}
                </h3>
                <span style={{
                  fontSize: '0.8rem', fontWeight: 700, color: role.accent,
                  padding: '0.2rem 0.7rem', borderRadius: '100px',
                  background: `${role.accent}18`, border: `1px solid ${role.accent}40`,
                }}>
                  {role.company}
                </span>
                <span style={{
                  fontSize: '0.75rem', color: role.period === 'Current' ? '#e2e8f0' : '#8892a4',
                  padding: '0.15rem 0.6rem', borderRadius: '100px',
                  background: role.period === 'Current' ? 'rgba(226,232,240,0.06)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${role.period === 'Current' ? 'rgba(226,232,240,0.15)' : 'rgba(255,255,255,0.08)'}`,
                }}>
                  {role.period}
                </span>
              </div>

              <p style={{ color: '#c8d0dc', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '820px' }}>
                {role.description}
              </p>

              {/* Two-column grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="sdr-cols">
                <div>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: role.accent, marginBottom: '1rem', letterSpacing: '0.04em' }}>
                    Outbound Motion
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    {role.outboundMotion.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#8892a4', fontSize: '0.875rem', lineHeight: 1.6 }}>
                        <span style={{ color: role.accent, flexShrink: 0, marginTop: '0.1rem' }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#00b4ff', marginBottom: '1rem', letterSpacing: '0.04em' }}>
                    Tools Used
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    {role.tools.map((item) => (
                      <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#8892a4', fontSize: '0.875rem', lineHeight: 1.6 }}>
                        <span style={{ color: '#00b4ff', flexShrink: 0, marginTop: '0.1rem' }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ color: '#8892a4', fontSize: '0.82rem', fontStyle: 'italic', marginTop: '1.5rem', textAlign: 'center' }}
        >
          Building the AI-powered outbound system that makes me 3× more effective per hour than a traditional SDR.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .sdr-cols { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
