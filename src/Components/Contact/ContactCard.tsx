import React from 'react';
import { InteractiveCard } from '../UI/InteractiveCard';
import { GradientCard } from '../UI/GradientCard';
import { Mail, ArrowRight } from 'lucide-react';
import { useUIStore } from '../../Store/useUIStore';

export const ContactCard: React.FC = () => {
    const setModalOpen = useUIStore((state) => state.setModalOpen);

    return (
        <InteractiveCard onClick={() => setModalOpen(true)} className="h-full">
            <GradientCard variant="secondary" className="h-full flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/10 rounded-xl">
                        <Mail className="text-pink-300" size={24} />
                    </div>
                    <ArrowRight className="text-white/50 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-300" />
                </div>

                <div className="mt-4">
                    <p className="text-white/50 text-sm mb-1">Get in touch</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-pink-200 transition-colors">
                        Contact Me
                    </h3>
                </div>
            </GradientCard>
        </InteractiveCard>
    );
};
