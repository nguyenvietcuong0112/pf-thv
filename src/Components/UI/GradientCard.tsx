import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GradientCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'glass';
}

export const GradientCard: React.FC<GradientCardProps> = ({
    children,
    className,
    variant = 'glass',
}) => {
    const baseStyles = 'rounded-3xl p-6 transition-all duration-300';

    const variants = {
        primary: 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/20 backdrop-blur-md shadow-xl',
        secondary: 'bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-white/20 backdrop-blur-md shadow-xl',
        glass: 'bg-white/10 border border-white/20 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white/15',
    };

    return (
        <div className={twMerge(baseStyles, variants[variant], className)}>
            {children}
        </div>
    );
};
