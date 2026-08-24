import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Detectar scroll para cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Habilidades', href: '#habilidades' },
        { name: 'Sobre Mí', href: '#sobre-mi' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled 
                ? 'py-4 bg-fondo/70 backdrop-blur-md border-b border-gray-800 shadow-lg' 
                : 'py-6 bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo o Nombre */}
                <a href="#inicio" className="text-xl font-heading font-bold text-texto tracking-wider hover:text-acento transition-colors">
                    Gabriel<span className="text-acento">.dev</span>
                </a>

                {/* Enlaces Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-sm font-heading text-gray-300 hover:text-acento transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-acento transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Botón Menú Móvil */}
                <button 
                    className="md:hidden text-gray-300 hover:text-acento"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Menú Móvil (Desplegable) */}
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-tarjeta border-b border-gray-800 shadow-xl py-4 px-6 flex flex-col gap-4"
                >
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-heading text-gray-300 hover:text-acento border-b border-gray-800 pb-2 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
