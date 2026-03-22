import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anshuman Mishra — Full-Stack Developer & Digital Consultant',
  description: 'Building scalable web applications, AI automation systems, and digital growth strategies. Based in Bengaluru, India.',
  keywords: ['Full Stack Developer Bengaluru', 'AI Automation', 'Next.js Developer India', 'Digital Marketing Freelancer'],
  openGraph: {
    title: 'Anshuman Mishra — Developer & Digital Consultant',
    description: 'Web Dev · AI Automation · Digital Marketing from Bengaluru.',
    url: 'https://anshumanmishra.vercel.app',
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
