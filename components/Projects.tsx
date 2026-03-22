'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ width: 450, height: 450, background: 'rgba(167,139,250,0.07)', top: '0', right: '-100px' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#00f5a0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; WORK /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}>
            Projects &amp; Case Studies
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }} className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="card-hover"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                background: 'rgba(8,9,14,0.8)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Thumbnail — real banner or placeholder */}
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                {proj.banner ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={proj.banner}
                      alt={`${proj.title} preview`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transition: 'transform 0.4s ease' }}
                      className="project-banner-img"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(8,9,14,0.85))' }} />
                  </>
                ) : (
                  <div style={{
                    width: '100%', height: '100%',
                    background: '#0A1628',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', gap: '0.5rem',
                  }}>
                    <span style={{ fontSize: '2rem' }}>{proj.emoji || '⚙️'}</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                      {proj.placeholderLabel || proj.title}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Badges */}
                <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
                  {proj.badges.map((b: string) => (
                    <span key={b} style={{
                      padding: '0.2rem 0.6rem', borderRadius: '100px',
                      background: 'rgba(255,107,107,0.12)', border: '1px solid rgba(255,107,107,0.25)',
                      fontSize: '0.72rem', color: '#ff6b6b', fontWeight: 600,
                    }}>{b}</span>
                  ))}
                </div>

                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: '#f0f0f0', marginBottom: '0.7rem' }}>
                  {proj.title}
                </h3>
                <p style={{ color: '#8892a4', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.2rem', flex: 1 }}>
                  {proj.description}
                </p>

                {/* Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                  {proj.stack.map((s: string) => (
                    <span key={s} style={{
                      padding: '0.2rem 0.6rem', borderRadius: '6px',
                      background: 'rgba(0,180,255,0.08)', border: '1px solid rgba(0,180,255,0.2)',
                      fontSize: '0.72rem', color: '#00b4ff', fontFamily: 'monospace',
                    }}>{s}</span>
                  ))}
                </div>

                {/* Results */}
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                  {proj.results.map((r: string) => (
                    <span key={r} style={{
                      padding: '0.3rem 0.7rem', borderRadius: '6px',
                      background: 'rgba(0,245,160,0.08)', border: '1px solid rgba(0,245,160,0.2)',
                      fontSize: '0.78rem', color: '#00f5a0', fontWeight: 600,
                    }}>✓ {r}</span>
                  ))}
                </div>

                {/* Link */}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.45rem 1rem', borderRadius: '6px',
                      border: '1px solid rgba(0,245,160,0.3)',
                      color: '#00f5a0', fontSize: '0.8rem', fontWeight: 600,
                      textDecoration: 'none', transition: 'background 0.2s',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,245,160,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    {proj.linkLabel || '🔗 View Live Site'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', color: '#8892a4', fontSize: '0.875rem' }}>
          More case studies available on request —{' '}
          <a href="#contact" style={{ color: '#00f5a0', textDecoration: 'none' }}>get in touch</a>
        </motion.p>
      </div>

      <style>{`
        .card-hover:hover .project-banner-img { transform: scale(1.04); }
        @media (max-width: 480px) { .projects-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 481px) and (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
