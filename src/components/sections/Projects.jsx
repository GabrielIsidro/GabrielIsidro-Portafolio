import { PROJECTS } from '../../data/constants';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
    return (
        <section id="proyectos" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-texto mb-12 border-b border-tarjeta pb-4">
                    Proyectos Destacados
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}