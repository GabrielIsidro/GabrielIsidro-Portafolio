import { useEffect } from 'react';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import About from './components/sections/About';
import Footer from './components/sections/Footer';
import Reveal from './components/ui/Reveal';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-fondo min-h-screen text-texto overflow-x-hidden font-body">
      <Hero />
      <Reveal><Projects /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><About /></Reveal>
      <Footer />
    </main>
  );
}

export default App;