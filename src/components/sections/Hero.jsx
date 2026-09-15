import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import MagneticButton from '../ui/MagneticButton';
import ParticlesBackground from '../ui/ParticlesBackground';

export default function Hero() {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20 pb-10">
            <ParticlesBackground />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 -z-10"></div>

            <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-10 md:mt-0">
                <div className="flex-1 text-center md:text-left">

                    <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-4 text-texto">
                        Hola, soy <span className="text-acento drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">Gabriel Isidro Garcia</span>.
                    </h1>

                    <div className="text-2xl md:text-3xl text-gray-400 font-heading font-medium mb-6 h-10">
                        <Typewriter
                            options={{
                                strings: [
                                    'Desarrollador Full-Stack',
                                    'Analista en Informática'
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 80,
                            }}
                        />
                    </div>

                    <p className="text-lg text-gray-300 font-body mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                        Me especializo en construir soluciones de software integrales, desde el diseño de bases de datos sólidas hasta interfaces web dinámicas. Enfocado en aplicar buenas prácticas de ingeniería para resolver problemas del mundo real.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <MagneticButton>
                            <a
                                href="#proyectos"
                                className="inline-block px-8 py-3 text-lg font-heading font-bold text-fondo bg-acento rounded-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:-translate-y-1 transition-all duration-300"
                            >
                                Ver Proyectos
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 text-lg font-heading font-bold text-texto bg-tarjeta border border-gray-600 rounded-lg hover:border-acento hover:text-acento transition-colors duration-300"
                            >
                                Descargar CV
                            </a>
                        </MagneticButton>
                    </div>

                    {/* Redes Sociales en Hero */}
                    <div className="flex justify-center md:justify-start gap-6 mt-8">
                        <a
                            href="https://github.com/GabrielIsidro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-acento hover:scale-110 transition-all duration-300"
                            title="GitHub"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8 invert opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gabriel-isidro-garcia-5b8478287/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-acento hover:scale-110 transition-all duration-300"
                            title="LinkedIn"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>

                {/* COLUMNA DERECHA: ESPACIO PARA FOTO CON ANIMACIÓN */}
                <motion.div
                    className="flex-1 flex justify-center md:justify-end"
                    // Animación de Framer Motion: sube y baja 10px infinitamente
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Aura de resplandor (Glow) de fondo */}
                        <div className="absolute inset-0 bg-acento rounded-full blur-[60px] opacity-20"></div>

                        {/* Contenedor circular de la imagen */}
                        <div className="relative w-full h-full rounded-full border-2 border-acento/30 bg-tarjeta flex items-center justify-center overflow-hidden shadow-2xl z-10">

                            <img
                                src="/perfil1.jpeg"
                                alt="Gabriel Isidro Garcia"
                                fetchPriority="high"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}