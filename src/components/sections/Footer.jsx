export default function Footer() {
    return (
        <footer className="bg-tarjeta border-t border-gray-800 py-12 px-6 text-gray-400 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-texto font-heading font-bold text-lg mb-1">Gabriel Isidro Garcia</p>
                    <p className="text-sm font-body">Desarrollador Full-Stack | Analista en Informática</p>
                    <p className="text-xs font-mono mt-2 flex items-center justify-center md:justify-start gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        Buenos Aires, Argentina
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/GabrielIsidro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-acento hover:scale-110 transition-all duration-300 text-sm font-heading flex items-center gap-2"
                    >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 invert opacity-70 hover:opacity-100" />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gabriel-isidro-garcia-5b8478287/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-acento hover:scale-110 transition-all duration-300 text-sm font-heading flex items-center gap-2"
                    >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5 opacity-70 hover:opacity-100" />
                        LinkedIn
                    </a>
                    <a
                        href="#contacto"
                        className="hover:text-acento hover:scale-110 transition-all duration-300 text-sm font-heading flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-xl opacity-70 hover:opacity-100">mail</span>
                        Contacto
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-xs font-mono text-gray-500">
                Construido con React y Tailwind CSS.
            </div>
        </footer>
    );
}