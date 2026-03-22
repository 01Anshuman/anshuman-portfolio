'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CONTACT_INFO } from '@/lib/constants';
import { Mail, Linkedin, MessageCircle, Youtube, Github } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputStyle = (field: string) => ({
    width: '100%', padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#ff6b6b' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '8px', color: '#f0f0f0', fontSize: '0.9rem',
    fontFamily: 'DM Sans, sans-serif', outline: 'none',
    transition: 'border-color 0.2s',
  });

  return (
    <section id="contact" ref={ref} style={{ padding: '7rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ width: 500, height: 400, background: 'rgba(0,245,160,0.07)', bottom: '-100px', left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#00f5a0', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
            &lt; CONTACT /&gt;
          </span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#f0f0f0', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Ready to scale your business with technology?
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                'Fast delivery — most projects ship in 2–4 weeks',
                'Deep automation expertise across AI & no-code tools',
                'Ongoing support & optimization post-launch',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: '#8892a4', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  <span style={{ color: '#00f5a0', marginTop: '0.15rem', flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Contact chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: <Mail size={16} />, label: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: <Linkedin size={16} />, label: 'linkedin.com/in/anshuman-mishra-83a069233', href: CONTACT_INFO.linkedin },
                { icon: <Github size={16} />, label: 'github.com/01Anshuman', href: CONTACT_INFO.github },
                { icon: <MessageCircle size={16} />, label: `WhatsApp: ${CONTACT_INFO.whatsapp}`, href: `https://wa.me/919956888757` },
                { icon: <Youtube size={16} />, label: CONTACT_INFO.youtubeHandle, href: CONTACT_INFO.youtube },
              ].map((chip) => (
                <a
                  key={chip.label}
                  href={chip.href}
                  target={chip.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-chip"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.6rem 1rem', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    color: '#8892a4', textDecoration: 'none', fontSize: '0.85rem',
                    transition: 'border-color 0.2s, color 0.2s',
                    width: 'fit-content', maxWidth: '100%', wordBreak: 'break-all',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,245,160,0.3)'; e.currentTarget.style.color = '#00f5a0'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#8892a4'; }}
                >
                  <span style={{ color: '#00f5a0' }}>{chip.icon}</span>
                  {chip.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            {submitted ? (
              <div style={{
                background: 'rgba(0,245,160,0.06)', border: '1px solid rgba(0,245,160,0.2)',
                borderRadius: '16px', padding: '3rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#f0f0f0', marginBottom: '0.5rem' }}>Message sent!</h3>
                <p style={{ color: '#8892a4' }}>I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.82rem', color: '#8892a4', marginBottom: '0.4rem' }}>Name *</label>
                  <input id="name" type="text" placeholder="Your name" value={form.name}
                    onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                    style={inputStyle('name')}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,245,160,0.4)')}
                    onBlur={e => (e.target.style.borderColor = errors.name ? '#ff6b6b' : 'rgba(255,255,255,0.1)')}
                  />
                  {errors.name && <span style={{ fontSize: '0.75rem', color: '#ff6b6b' }}>{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.82rem', color: '#8892a4', marginBottom: '0.4rem' }}>Email *</label>
                  <input id="email" type="email" placeholder="your@email.com" value={form.email}
                    onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                    style={inputStyle('email')}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,245,160,0.4)')}
                    onBlur={e => (e.target.style.borderColor = errors.email ? '#ff6b6b' : 'rgba(255,255,255,0.1)')}
                  />
                  {errors.email && <span style={{ fontSize: '0.75rem', color: '#ff6b6b' }}>{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="service" style={{ display: 'block', fontSize: '0.82rem', color: '#8892a4', marginBottom: '0.4rem' }}>Service *</label>
                  <select id="service" value={form.service}
                    onChange={e => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: '' }); }}
                    style={{ ...inputStyle('service'), cursor: 'pointer' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,245,160,0.4)')}
                    onBlur={e => (e.target.style.borderColor = errors.service ? '#ff6b6b' : 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" style={{ background: '#0f1117' }}>Select a service</option>
                    <option value="web" style={{ background: '#0f1117' }}>Website Development</option>
                    <option value="ai" style={{ background: '#0f1117' }}>AI & Workflow Automation</option>
                    <option value="marketing" style={{ background: '#0f1117' }}>Digital Marketing Strategy</option>
                    <option value="other" style={{ background: '#0f1117' }}>Other</option>
                  </select>
                  {errors.service && <span style={{ fontSize: '0.75rem', color: '#ff6b6b' }}>{errors.service}</span>}
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.82rem', color: '#8892a4', marginBottom: '0.4rem' }}>Message *</label>
                  <textarea id="message" rows={4} placeholder="Tell me about your project..." value={form.message}
                    onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '110px' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,245,160,0.4)')}
                    onBlur={e => (e.target.style.borderColor = errors.message ? '#ff6b6b' : 'rgba(255,255,255,0.1)')}
                  />
                  {errors.message && <span style={{ fontSize: '0.75rem', color: '#ff6b6b' }}>{errors.message}</span>}
                </div>

                <button type="submit" style={{
                  padding: '0.85rem 2rem', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00f5a0, #00b4ff)',
                  border: 'none', color: '#08090e', fontWeight: 700,
                  fontSize: '0.95rem', fontFamily: 'Syne, sans-serif',
                  cursor: 'pointer', transition: 'opacity 0.2s, transform 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
