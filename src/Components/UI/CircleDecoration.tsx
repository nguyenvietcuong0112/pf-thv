import React from 'react';
import { motion } from 'framer-motion';

interface CircleDecorationProps {
    color?: string;
}

export const CircleDecoration: React.FC<CircleDecorationProps> = ({ color = 'bg-white/10' }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Top Left */}
            <motion.div
                className={`absolute -top-20 -left-20 w-80 h-80 rounded-full ${color} blur-3xl`}
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Bottom Center-Right */}
            <motion.div
                className={`absolute -bottom-40 right-10 w-96 h-96 rounded-full ${color} blur-3xl`}
                animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            {/* Top Right Small */}
            <motion.div
                className={`absolute top-20 right-20 w-40 h-40 rounded-full ${color} blur-2xl opacity-60`}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
};
