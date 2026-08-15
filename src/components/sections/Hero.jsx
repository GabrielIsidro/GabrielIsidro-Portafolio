export default function Hero() {
    return (
        // Quitamos el bg-gray porque App.jsx ya tiene el bg-fondo
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl mx-auto text-left">
                {/* Etiqueta con fuente monoespaciada y color de acento */}
                <div className="inline-block px-3 py-1 mb-6 text-sm font-mono font-semibold text-acento bg-acento/10 rounded-full">
                    Disponible para nuevos desafíos
                </div>

                {/* Título con fuente de encabezado (Poppins) */}
                <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-4">
                    Hola, soy <span className="text-acento">Gabriel Isidro Garcia</span>.
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-400 font-heading font-medium mb-6">
                    Desarrollador Full-Stack | Analista en Informática
                </h2>

                {/* Párrafo con fuente de lectura (Inter) */}
                <p className="text-lg text-gray-300 font-body mb-10 leading-relaxed max-w-2xl">
                    Me especializo en construir soluciones de software integrales, desde el diseño de bases de datos sólidas hasta interfaces web dinámicas. Enfocado en aplicar buenas prácticas de ingeniería para resolver problemas del mundo real.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Botón principal usando el color de acento de fondo y texto del color de fondo para contraste */}
                    <a
                        href="#proyectos"
                        className="px-6 py-3 text-center text-lg font-heading font-medium text-fondo bg-acento rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Ver Proyectos
                    </a>
                    {/* Botón secundario usando el color de tarjeta */}
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-center text-lg font-heading font-medium text-texto bg-tarjeta border border-tarjeta hover:border-acento transition-colors"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
        </section>
    );
}