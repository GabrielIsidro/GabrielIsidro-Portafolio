import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    const isPersonal = project.category === "Proyecto Personal";

    return (
        // Transformamos el div en motion.div y le agregamos whileHover
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-tarjeta border border-tarjeta rounded-xl p-6 hover:border-acento hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-colors duration-300 flex flex-col h-full"
        >
            <div className="mb-4">
                <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md uppercase tracking-wide ${isPersonal ? 'bg-acento/20 text-acento' : 'bg-purple-500/20 text-purple-400'}`}>
                    {project.category}
                </span>
            </div>

            <h3 className="text-2xl font-heading font-bold text-texto mb-3">
                {project.title}
            </h3>

            <p className="text-gray-400 font-body mb-6 flex-grow leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                    <span key={index} className="text-sm font-mono text-gray-300 bg-fondo px-3 py-1 rounded-full border border-gray-700">
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-acento hover:opacity-80 font-heading font-medium transition-opacity mt-auto"
            >
                Ver en GitHub
                <span className="material-symbols-outlined text-base">
                    open_in_new
                </span>
            </a>
        </motion.div>
    );
}