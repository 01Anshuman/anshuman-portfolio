'use client';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '3rem 0 2rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }} className="footer-grid">
          {/* Logo + tagline */}
          <div>
            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{
                width: '32px', height: '32px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(0,245,160,0.4)',
                flexShrink: 0,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/myimg.jpeg" alt="Anshuman Mishra" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#f0f0f0' }}>Anshuman Mishra</span>
            </div>
            <p style={{ color: '#8892a4', fontSize: '0.82rem' }}>Building scalable digital solutions from Bengaluru.</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation" className="footer-nav">
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ color: '#8892a4', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8892a4')}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Built with */}
          <div className="footer-built" style={{ textAlign: 'right' }}>
            <p style={{ color: '#8892a4', fontSize: '0.78rem', marginBottom: '0.3rem' }}>Built with</p>
            <p style={{ color: '#8892a4', fontSize: '0.78rem' }}>
              {['Next.js', 'React', 'Tailwind', 'Framer Motion'].map((t, i, arr) => (
                <span key={t}>
                  <span style={{ color: '#00f5a0' }}>{t}</span>
                  {i < arr.length - 1 && <span> · </span>}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#8892a4', fontSize: '0.8rem' }}>© 2025 Anshuman Mishra. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }
          .footer-nav { grid-column: 1 / -1; }
          .footer-built { text-align: left !important; }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .footer-built { text-align: center !important; }
          .footer-logo { justify-content: center !important; }
          .footer-nav ul { justify-content: center !important; flex-wrap: wrap !important; gap: 1rem !important; }
        }
      `}</style>
    </footer>
  );
}
