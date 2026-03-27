import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Discovery from '@/components/Discovery';
import Products from '@/components/Products';
import Process from '@/components/Process';
import Triage from '@/components/Triage';
import Reviews from '@/components/Reviews';
import LocalStory from '@/components/LocalStory';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <Discovery />
      <Products />
      <Process />
      <Triage />
      <Reviews />
      <LocalStory />
      <About />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
