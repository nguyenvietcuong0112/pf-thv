import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useHoverAnimation } from '../../Hooks/useHoverAnimation';

interface InteractiveCardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
    children,
    className = '',
    onClick,
    disabled = false,
    ...props
}) => {
    const hoverAnimation = useHoverAnimation(disabled ? 1 : 1.03, disabled ? 1 : 0.97);

    return (
        <motion.div
            className={`relative cursor-pointer ${disabled ? 'cursor-not-allowed opacity-80' : ''} ${className}`}
            onClick={!disabled ? onClick : undefined}
            {...hoverAnimation}
            {...props}
            role="button"
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(e) => {
                if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick?.();
                }
            }}
        >
            {children}
        </motion.div>
    );
};
