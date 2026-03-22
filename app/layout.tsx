import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anshuman Mishra — SDR · Builder · Communicator',
  description: 'Anshuman Mishra — B2B SaaS SDR running US-market outbound, full-stack developer building AI tools and automations, and podcast host. Based in Bengaluru, India.',
  keywords: ['Full Stack Developer Bengaluru', 'AI Automation', 'Next.js Developer India', 'B2B SaaS SDR', 'Digital Marketing'],
  openGraph: {
    title: 'Anshuman Mishra — SDR · Builder · Communicator',
    description: 'Anshuman Mishra — B2B SaaS SDR running US-market outbound, full-stack developer building AI tools and automations, and podcast host. Based in Bengaluru, India.',
    url: 'https://anshuman01-portfolio.vercel.app/',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
