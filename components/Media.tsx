'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MEDIA } from '@/lib/constants';
import { ExternalLink, Play } from 'lucide-react';

function BannerImage({ item }: { item: typeof MEDIA[0] }) {
  const [failed, setFailed] = useState(false);

  if (!failed && item.banner) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', position: 'relative', overflow: 'hidden', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        className="banner-link"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.banner}
          alt={`${item.title} banner`}
          onError={() => setFailed(true)}
          style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.35s ease' }}
          className="banner-img"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.2s' }} className="banner-overlay" />
        <div style={{
          position: 'absolute', bottom: '0.75rem', right: '0.75rem',
          width: 40, height: 40, borderRadius: '50%', background: '#ff0000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(255,0,0,0.5)',
        }}>
          <Play size={16} fill="white" color="white" style={{ marginLeft: 2 }} />
        </div>
      </a>
    );
  }

  // Fallback styled placeholder
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0,
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
        position: 'relative', textDecoration: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
      className="banner-link"
    >
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)',
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', zIndex: 1 }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%', background: '#ff0000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(255,0,0,0.5)',
        }}>
          <Play size={22} fill="white" color="white" style={{ marginLeft: 3 }} />
        </div>
        <span style={{ color: '#f0f0f0', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center', padding: '0 1rem' }}>
          {item.title}
        </span>
        <span style={{ color: '#ff0000', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em' }}>YOUTUBE</span>
      </div>
    </a>
  );
}

export default function Media() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ width: 350, height: 350, background: 'rgba(255,107,107,0.06)', bottom: '10%', right: '-80px' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#00f5a0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; MEDIA /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}>
            Beyond The Code
          </h2>
          <p style={{ color: '#8892a4', fontSize: '1rem', marginTop: '0.75rem' }}>
            Creating content that educates and inspires the next generation of builders.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }} className="media-grid">
          {MEDIA.map((item, i) => (
            <motion.div
              key={item.title}
              className="card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                background: 'rgba(15,17,23,0.8)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <BannerImage item={item} />

              {/* Card content */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#f0f0f0' }}>{item.title}</h3>
                  <span style={{ fontSize: '0.75rem', color: '#ff6b6b', fontWeight: 600, padding: '0.15rem 0.5rem', borderRadius: '100px', background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.2)' }}>
                    {item.subtitle}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {item.stats.map((s) => (
                    <span key={s} style={{ fontSize: '0.75rem', color: '#00f5a0', fontWeight: 600 }}>{s}</span>
                  ))}
                </div>

                <p style={{ color: '#8892a4', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      color: '#00b4ff', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none',
                      transition: 'gap 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.gap = '0.7rem')}
                    onMouseLeave={e => (e.currentTarget.style.gap = '0.4rem')}
                  >
                    {item.linkLabel} <ExternalLink size={14} />
                  </a>

                  {'ctaLink' in item && item.ctaLink && (
                    <a
                      href={item.ctaLink as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        color: '#00f5a0', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none',
                        padding: '0.35rem 0.9rem', borderRadius: '6px',
                        border: '1px solid rgba(0,245,160,0.3)',
                        alignSelf: 'flex-start', transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,245,160,0.08)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      {item.ctaLabel as string}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .banner-link:hover .banner-img { transform: scale(1.04); }
        @media (max-width: 480px) { .media-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
