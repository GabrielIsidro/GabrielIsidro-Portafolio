export default function About() {
    return (
        <section id="sobre-mi" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-texto mb-8 border-b border-tarjeta pb-4">
                    Sobre Mí
                </h2>

                {/* Usamos bg-tarjeta para mantener la coherencia */}
                <div className="bg-tarjeta border border-tarjeta rounded-xl p-8 text-gray-300 text-lg font-body leading-relaxed shadow-lg">
                    <p className="mb-6">
                        Actualmente curso el tercer año de la carrera de Analista en Informática. Mi enfoque principal es el desarrollo Full-Stack, donde disfruto construyendo soluciones prácticas y eficientes para problemas reales, siempre priorizando la arquitectura limpia y las buenas prácticas de la ingeniería de software.
                    </p>
                    <p>
                        Mi curiosidad tecnológica no se limita únicamente al código. Me apasiona el mundo del hardware y el ensamblaje de computadoras. Entender cómo funcionan los equipos a nivel de componentes físicos me da una perspectiva mucho más completa al momento de optimizar el rendimiento de las aplicaciones y sistemas que desarrollo.
                    </p>
                </div>
            </div>
        </section>
    );
}