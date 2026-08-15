import { motion } from 'framer-motion';

export default function TechStack() {
    // Reorganizamos en 4 categorías para lograr la simetría 2x2 de la imagen de referencia
    const skills = [
        {
            category: "Frontend & Diseño",
            items: [
                { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
            ]
        },
        {
            category: "Backend & Programación",
            items: [
                { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                { name: "Spring", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
                { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }

            ]
        },
        {
            category: "Bases de Datos & Arquitectura",
            items: [
                { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }]
        },
        {
            category: "Herramientas & Entornos",
            items: [
                { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
                { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
                { name: "Jira", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" }
            ]
        }
    ];

    return (
        <section className="py-20 bg-fondo px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-texto mb-12 text-center">
                    Mis Habilidades
                </h2>

                {/* Contenedor Grid 2x2 para pantallas grandes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-tarjeta rounded-2xl p-8 border border-gray-800 hover:border-acento/50 transition-colors shadow-lg"
                        >
                            {/* Título centrado */}
                            <h3 className="text-xl font-heading font-bold text-texto text-center mb-10">
                                {skillGroup.category}
                            </h3>

                            {/* Grilla interna de íconos (3 o 4 columnas dependiendo del tamaño de pantalla) */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-10 gap-x-4">
                                {skillGroup.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform cursor-pointer group"
                                    >
                                        {/* Ícono de la tecnología */}
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-12 h-12 object-contain group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all"
                                        />
                                        {/* Nombre debajo del ícono */}
                                        <span className="text-sm font-body text-gray-400 group-hover:text-acento transition-colors text-center">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}