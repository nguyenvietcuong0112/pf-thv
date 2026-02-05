import React from 'react';
import { motion } from 'framer-motion';

export const StarDecoration: React.FC = () => {
    // Generate random stars
    const stars = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute text-white/20"
                    style={{ top: star.top, left: star.left }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.8, 0.2],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 4 + star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: star.delay,
                    }}
                >
                    <svg
                        width={star.size}
                        height={star.size}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};
