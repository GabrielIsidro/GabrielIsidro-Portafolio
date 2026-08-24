import { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío real (ej. EmailJS, Formspree, etc.)
        // Simulamos un envío exitoso:
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <section id="contacto" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-texto mb-4 border-b border-tarjeta pb-4 text-center md:text-left">
                    Contacto
                </h2>
                <p className="text-gray-400 font-body mb-10 text-center md:text-left">
                    ¿Tienes un proyecto en mente o quieres saludar? Envíame un mensaje.
                </p>

                <div className="bg-tarjeta rounded-2xl p-8 border border-gray-800 shadow-xl relative overflow-hidden">
                    {/* Resplandor sutil de fondo */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-acento/10 rounded-full blur-[80px] pointer-events-none"></div>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-12 text-center"
                        >
                            <span className="material-symbols-outlined text-6xl text-green-400 mb-4">
                                check_circle
                            </span>
                            <h3 className="text-2xl font-heading font-bold text-texto mb-2">
                                ¡Mensaje Enviado!
                            </h3>
                            <p className="text-gray-400 font-body">
                                Gracias por contactarte. Te responderé a la brevedad.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-mono text-gray-300">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-fondo border border-gray-700 rounded-lg px-4 py-3 text-texto font-body focus:outline-none focus:border-acento focus:ring-1 focus:ring-acento transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-mono text-gray-300">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-fondo border border-gray-700 rounded-lg px-4 py-3 text-texto font-body focus:outline-none focus:border-acento focus:ring-1 focus:ring-acento transition-all"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-mono text-gray-300">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="bg-fondo border border-gray-700 rounded-lg px-4 py-3 text-texto font-body focus:outline-none focus:border-acento focus:ring-1 focus:ring-acento transition-all resize-none"
                                    placeholder="¿En qué puedo ayudarte?"
                                ></textarea>
                            </div>

                            <div className="self-end mt-4">
                                <MagneticButton>
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 px-8 py-3 text-lg font-heading font-bold text-fondo bg-acento rounded-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Enviar
                                        <span className="material-symbols-outlined text-base">
                                            send
                                        </span>
                                    </button>
                                </MagneticButton>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
