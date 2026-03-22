import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Metrics from '@/components/Metrics';
import Process from '@/components/Process';
import Media from '@/components/Media';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Projects />
        <Metrics />
        <Process />
        <Media />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
