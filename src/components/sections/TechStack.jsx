export default function TechStack() {
    const skills = [
        {
            category: "Backend & Arquitectura",
            icon: "settings", // Ícono de engranaje
            items: ["Java", "Spring Boot", "Node.js", "API REST", "POO"]
        },
        {
            category: "Frontend",
            icon: "terminal", // Ícono de terminal de código
            items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            category: "Bases de Datos & Herramientas",
            icon: "database", // Ícono de base de datos
            items: ["MySQL", "Git", "GitHub", "Postman", "Arquitectura Relacional"]
        }
    ];

    return (
        // Usamos el color de fondo para alternar secciones
        <section className="py-20 bg-fondo px-6">
            <div className="max-w-6xl mx-auto">
                {/* Usamos font-heading para los títulos */}
                <h2 className="text-3xl md:text-4xl font-heading text-texto mb-12 border-b border-tarjeta pb-4">
                    Habilidades Técnicas
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        // Usamos bg-tarjeta para crear los contenedores
                        <div
                            key={index}
                            className="bg-tarjeta rounded-xl p-6 border border-tarjeta hover:border-acento transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                {/* Aquí renderizamos el Ícono de Google usando font-icon de Material Symbols */}
                                <span className="material-symbols-outlined text-4xl text-acento">
                                    {skillGroup.icon}
                                </span>
                                <h3 className="text-xl font-heading text-texto">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            <ul className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        // Usamos font-mono para que el código parezca de editor
                                        className="bg-fondo text-texto font-mono px-4 py-2 rounded-lg text-sm border border-tarjeta hover:text-acento transition-colors"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}