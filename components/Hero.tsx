'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { TERMINAL_ROLES, TRUST_ITEMS } from '@/lib/constants';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }),
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TERMINAL_ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
      } else {
        setRoleIndex((i) => (i + 1) % TERMINAL_ROLES.length);
        setTyping(true);
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="about"
      className="dot-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Glow blobs */}
      <div className="glow-blob" style={{ width: 500, height: 500, background: 'rgba(226,232,240,0.08)', top: '-100px', left: '-150px' }} />
      <div className="glow-blob" style={{ width: 400, height: 400, background: 'rgba(0,180,255,0.1)', bottom: '-80px', right: '-100px', animationDelay: '4s' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
        className="hero-grid">

        {/* Left: Text */}
        <div>
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem',
              padding: '0.35rem 0.9rem', borderRadius: '100px',
              border: '1px solid rgba(226,232,240,0.15)', background: 'rgba(226,232,240,0.05)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#e2e8f0', display: 'inline-block', boxShadow: '0 0 8px #e2e8f0' }} />
            <span style={{ fontSize: '0.8rem', color: '#e2e8f0', fontWeight: 500 }}>Available for projects</span>
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', lineHeight: 1.08, marginBottom: '1.2rem', color: '#f0f0f0' }}>
            Building Products<br />
            <span style={{ background: 'linear-gradient(135deg, #ffffff, #00b4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              That Actually Work.
            </span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', color: '#8892a4', marginBottom: '1.8rem', letterSpacing: '0.02em' }}>
            SDR · Full-Stack Builder · AI Automation · Podcast Host
          </motion.p>

          {/* Terminal */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
            style={{
              background: 'rgba(15,17,23,0.8)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px', padding: '0.9rem 1.2rem', marginBottom: '1.8rem',
              fontFamily: 'monospace', fontSize: '0.9rem',
            }}>
            <span style={{ color: '#8892a4' }}>$ </span>
            <span style={{ color: '#e2e8f0' }}>&gt; {displayed}</span>
            <span className="cursor-blink" style={{ color: '#e2e8f0', marginLeft: '2px' }}>█</span>
          </motion.div>

          <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show"
            style={{ color: '#8892a4', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.2rem', maxWidth: '520px' }}>
            I&apos;m Anshuman — an SDR selling B2B SaaS to the US market by day, a full-stack developer and AI tool builder on weekends, and a podcast host at night. I build things that solve real problems and share everything I learn in public.
          </motion.p>

          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="#work"
              style={{
                padding: '0.75rem 1.8rem', borderRadius: '8px',
                background: 'linear-gradient(135deg, #ffffff, #00b4ff)',
                color: '#08090e', fontWeight: 700, textDecoration: 'none',
                fontSize: '0.95rem', fontFamily: 'Syne, sans-serif',
                transition: 'opacity 0.2s, transform 0.2s',
                textAlign: 'center', flex: '1 1 auto',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >See My Work ↓</a>
            <a href="#contact"
              style={{
                padding: '0.75rem 1.8rem', borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#f0f0f0', fontWeight: 500, textDecoration: 'none',
                fontSize: '0.95rem', transition: 'border-color 0.2s, transform 0.2s',
                textAlign: 'center', flex: '1 1 auto',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Let&apos;s Talk</a>
          </motion.div>

          {/* Trust bar */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {TRUST_ITEMS.map((item) => (
              <span key={item} style={{ fontSize: '0.8rem', color: '#8892a4', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ color: '#e2e8f0' }}>✓</span> {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}
          className="hero-visual"
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <div style={{
              position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
              width: '80%', height: '60%',
              background: 'radial-gradient(ellipse, rgba(226,232,240,0.08) 0%, rgba(0,180,255,0.1) 50%, transparent 75%)',
              filter: 'blur(40px)',
              zIndex: 0,
            }} />
            <div style={{
              position: 'relative', zIndex: 1,
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(15,17,23,0.5)',
              backdropFilter: 'blur(6px)',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/myimg.jpeg"
                alt="Anshuman Mishra — Full-Stack Developer & Digital Consultant"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'top center' }}
              />
              <div style={{
                padding: '1rem 1.2rem',
                background: 'rgba(8,9,14,0.85)',
                backdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.95rem', color: '#f0f0f0' }}>Anshuman Mishra</div>
                  <div style={{ fontSize: '0.75rem', color: '#8892a4', marginTop: '0.15rem' }}>Developer · Consultant · Creator</div>
                </div>
                <div style={{
                  padding: '0.3rem 0.7rem', borderRadius: '100px',
                  background: 'rgba(226,232,240,0.07)', border: '1px solid rgba(226,232,240,0.15)',
                  fontSize: '0.7rem', color: '#e2e8f0', fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e2e8f0', display: 'inline-block', boxShadow: '0 0 6px #e2e8f0' }} />
                  Available
                </div>
              </div>
            </div>
            <div style={{
              position: 'absolute', top: '1rem', right: '-0.75rem', zIndex: 2,
              background: 'rgba(15,17,23,0.95)',
              border: '1px solid rgba(0,180,255,0.3)',
              borderRadius: '10px', padding: '0.45rem 0.85rem',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}>
              <div style={{ fontSize: '0.72rem', color: '#00b4ff', fontWeight: 700, fontFamily: 'Syne, sans-serif' }}>📍 Bengaluru, India</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Mobile: stack photo above text, show it */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-grid > div:first-child { order: 2; }
          .hero-visual {
            display: flex !important;
            order: 1;
            justify-content: center !important;
          }
          .hero-visual > div {
            max-width: 300px !important;
          }
        }
        /* Tablet: tighter gap */
        @media (min-width: 601px) and (max-width: 900px) {
          .hero-visual > div { max-width: 360px !important; }
        }
      `}</style>
    </section>
  );
}
