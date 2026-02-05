import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { InteractiveCard } from '../UI/InteractiveCard';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardProps {
    title: string;
    count: number;
    route: string;
    gradient: string;
    image?: string; // Optional background image
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    count,
    route,
    gradient,
    image
}) => {
    const navigate = useNavigate();

    return (
        <InteractiveCard
            onClick={() => navigate(route)}
            className="h-[280px] md:h-[320px] w-full"
        >
            <div className={`relative h-full w-full rounded-3xl overflow-hidden p-8 flex flex-col justify-end bg-gradient-to-br ${gradient} border border-white/10 group`}>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            {title}
                        </h2>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <ArrowUpRight className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Decorative Circle */}
                <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </InteractiveCard>
    );
};
