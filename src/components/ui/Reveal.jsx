import { motion } from "framer-motion";

export default function Reveal({ children }) {
    // Definimos la animación (variantes)
    const variants = {
        // Estado inicial: invisible y un poco más abajo
        hidden: {
            opacity: 0,
            y: 50
        },
        // Estado final: visible y en su posición original
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6, // Duración de la animación en segundos
                ease: "easeOut" // Tipo de curva de animación (suave)
            }
        }
    };

    return (
        // 'motion.div' es un div con superpoderes de animación
        <motion.div
            variants={variants}
            initial="hidden" // Comienza en el estado 'hidden'
            whileInView="visible" // Cambia a 'visible' cuando entra en el viewport
            viewport={{
                once: true, // La animación solo se ejecuta una vez (al bajar)
                amount: 0.2 // La animación empieza cuando el 20% del elemento es visible
            }}
        >
            {children}
        </motion.div>
    );
}