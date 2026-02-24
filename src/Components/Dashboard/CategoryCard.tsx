import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryCardProps {
    title: string;
    route: string;
    image: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    route,
    image
}) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => navigate(route)}
            className="relative h-[450px] w-full rounded-[32px] overflow-hidden cursor-pointer shadow-xl bg-slate-100 flex flex-col group"
        >
            {/* Background Image - Filling the entire card */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle overlay for text readability if needed */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </div>

            {/* Sparkles Decoration inside card - Stacked ON TOP of image */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-60">
                <Sparkle size={20} className="absolute top-10 right-8 text-white drop-shadow-md" />
                <Sparkle size={14} className="absolute top-24 right-16 text-white drop-shadow-md" />
                <Sparkle size={16} className="absolute top-16 left-24 text-white drop-shadow-md" />
                <Sparkle size={12} className="absolute bottom-1/3 left-6 text-white drop-shadow-md" />
                <Sparkle size={18} className="absolute bottom-20 right-4 text-white drop-shadow-md" />
            </div>

            {/* Title - Stacked ON TOP of image */}
            <div className="relative z-20 p-6">
                <h2 className="text-3xl font-bold text-white leading-tight drop-shadow-2xl">
                    {title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                            {word}
                            {i === 1 && title.split(' ').length > 2 ? <br /> : ' '}
                        </React.Fragment>
                    ))}
                </h2>
            </div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />
        </motion.div>
    );
};

const Sparkle: React.FC<{ size: number; className?: string }> = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
);
