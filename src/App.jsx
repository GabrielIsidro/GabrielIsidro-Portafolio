import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Reveal from './components/ui/Reveal';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-fondo min-h-screen text-texto overflow-x-hidden font-body cursor-none relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Reveal><Projects /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  );
}

export default App;