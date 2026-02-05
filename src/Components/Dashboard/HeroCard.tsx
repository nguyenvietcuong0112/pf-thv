import React from 'react';
import { useScrollOrNavigate } from '../../Hooks/useScrollOrNavigate';
import { InteractiveCard } from '../UI/InteractiveCard';

export const HeroCard: React.FC = () => {
    const handleNavigation = useScrollOrNavigate();

    const navItems = [
        { label: 'About me', target: '/about', isHash: false },
        { label: 'Project', target: '/projects', isHash: false },
        { label: 'Contact', target: '/contact', isHash: false },
    ];

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] w-full text-center">

            {/* Navigation Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {navItems.map((item) => (
                    <InteractiveCard
                        key={item.label}
                        onClick={() => handleNavigation(item.target, item.isHash)}
                        className="px-8 py-2 rounded-full border border-white/80 bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/25 transition-all"
                    >
                        {item.label}
                    </InteractiveCard>
                ))}
            </div>

            {/* Main Title "Portfolio" */}
            <div className="relative mb-4 select-none">
                <h1 className="text-8xl md:text-9xl font-black tracking-tighter flex items-baseline justify-center drop-shadow-lg">
                    <span className="text-white font-serif tracking-tight">Port</span>
                    <span className="text-[#fbbf24] font-serif italic ml-1" style={{ fontFamily: 'Times New Roman, serif' }}>folio</span>
                </h1>
                {/* Decorative sparkles near title */}
                <div className="absolute -top-4 right-1/4 text-white text-4xl animate-pulse">✦</div>
                <div className="absolute top-1/2 left-1/4 text-white text-2xl animate-pulse delay-75">✦</div>
            </div>

            {/* Subtitle */}
            <p className="text-3xl md:text-4xl text-white font-medium tracking-wide">
                2D Game Artist
            </p>

        </div>
    );
};
