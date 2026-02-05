import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InteractiveCard } from '../UI/InteractiveCard';
import { GradientCard } from '../UI/GradientCard';
import { useUIStore } from '../../Store/useUIStore';

interface ProjectMiniCardProps {
    title: string;
    category: string;
    route: string;
    color?: string;
}

export const ProjectMiniCard: React.FC<ProjectMiniCardProps> = ({
    title,
    category,
    route,
    color = 'bg-blue-500'
}) => {
    const navigate = useNavigate();
    const setRouteLoading = useUIStore((state) => state.setRouteLoading);

    const handleClick = () => {
        // Simulate slight delay/loading for effect if needed, or just navigate
        navigate(route);
    };

    return (
        <InteractiveCard onClick={handleClick} className="h-full">
            <GradientCard variant="glass" className="h-full flex flex-col justify-between p-4 min-h-[140px] group">
                <div>
                    <div className={`w-2 h-2 rounded-full ${color} mb-3`} />
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-200 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-white/60">{category}</p>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-pink-500/50 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
            </GradientCard>
        </InteractiveCard>
    );
};
