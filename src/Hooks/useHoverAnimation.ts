import { useMemo } from 'react';

export const useHoverAnimation = (scaleHover = 1.03, scaleTap = 0.97) => {
    return useMemo(() => ({
        whileHover: { scale: scaleHover },
        whileTap: { scale: scaleTap },
        transition: { type: 'spring', stiffness: 300, damping: 20 } as any,
    }), [scaleHover, scaleTap]);
};
