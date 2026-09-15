import { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/sections/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Reveal from './components/ui/Reveal';

// Lazy load below-the-fold sections
const Projects = lazy(() => import('./components/sections/Projects'));
const TechStack = lazy(() => import('./components/sections/TechStack'));
const About = lazy(() => import('./components/sections/About'));
const Contact = lazy(() => import('./components/sections/Contact'));

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
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
        <Reveal><Projects /></Reveal>
        <Reveal><TechStack /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Contact /></Reveal>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;