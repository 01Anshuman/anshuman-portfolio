'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; PROCESS /&gt;
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}>
            How I Work
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }} className="process-grid">
          {/* Connecting line */}
          <div style={{
            position: 'absolute', top: '2.5rem', left: '12.5%', right: '12.5%', height: '1px',
            background: 'linear-gradient(90deg, #e2e8f0, #00b4ff, #ff6b6b, #a78bfa)',
            opacity: 0.3,
          }} className="process-line" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ padding: '0 1.5rem', position: 'relative' }}
              className="process-step"
            >
              {/* Step circle */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #ffffff, #00b4ff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.85rem', color: '#08090e',
                position: 'relative', zIndex: 1,
              }} className="process-circle">{step.num}</div>

              <div className="process-content">
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#f0f0f0', marginBottom: '0.6rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#8892a4', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-step {
          text-align: center;
        }
        .process-content {
          text-align: center;
        }
        
        @media (max-width: 480px) {
          .process-grid { 
            grid-template-columns: 1fr !important; 
            gap: 2rem !important; 
          }
          .process-line { 
            display: none !important; 
          }
          .process-step { 
            display: flex !important; 
            gap: 1rem !important; 
            align-items: flex-start !important;
            padding: 0 !important;
            text-align: left !important;
          }
          .process-circle { 
            flex-shrink: 0 !important; 
            margin: 0 !important; 
          }
          .process-content {
            text-align: left !important;
            flex: 1 !important;
          }
        }
        @media (min-width: 481px) and (max-width: 900px) {
          .process-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
            gap: 2.5rem !important; 
          }
          .process-line { 
            display: none !important; 
          }
        }
      `}</style>
    </section>
  );
}
