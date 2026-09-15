import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect if the device is a touch device (no fine pointer)
        if (window.matchMedia('(pointer: coarse)').matches) {
            setIsTouchDevice(true);
            return;
        }

        const moveCursor = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target || !target.tagName) return;

            const isClickable = 
                target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' ||
                (target.closest && (target.closest('a') || target.closest('button')));

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    if (isTouchDevice) {
        return null; // Don't render the custom cursor on mobile/touch devices
    }

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            backgroundColor: "transparent",
            border: "2px solid #38BDF8"
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.5,
            backgroundColor: "rgba(56, 189, 248, 0.2)",
            border: "2px solid #38BDF8"
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
            style={{ willChange: "transform" }}
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        />
    );
}
