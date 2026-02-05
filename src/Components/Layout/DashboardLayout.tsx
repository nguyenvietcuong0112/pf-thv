import React from 'react';
import { motion } from 'framer-motion';
import { useUIStore } from '../../Store/useUIStore';
import { StarDecoration } from '../UI/StarDecoration';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const isRouteLoading = useUIStore((state) => state.isRouteLoading);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#5b54e0] to-[#6d64eb] text-white selection:bg-pink-500/30">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#4c44cf] rounded-full blur-3xl opacity-80"
                />

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-[#4c44cf] rounded-full blur-3xl opacity-80"
                />

                <StarDecoration />
            </div>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-4 py-8 md:px-8 max-w-7xl">
                {children}
            </main>

            {/* Loading Overlay */}
            {isRouteLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="w-12 h-12 border-4 border-white/20 border-t-pink-500 rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
};
