import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { StarDecoration } from '../Components/UI/StarDecoration';
import { CircleDecoration } from '../Components/UI/CircleDecoration';

const ProjectListPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();

    // Define themes based on category/images
    const getTheme = (cat?: string) => {
        switch (cat) {
            case 'kid-game':
                return {
                    bg: 'bg-[#4ADE80]', // Bright Green
                    titleColor: 'text-yellow-300', // Yellow Title
                    circleColor: 'bg-green-500/20',
                    title: 'Kid Game'
                };
            case 'fashion':
                return {
                    bg: 'bg-[#A855F7]', // Purple
                    titleColor: 'text-yellow-300',
                    circleColor: 'bg-purple-700/20',
                    title: 'Fashion Game'
                };
            case 'hair-salon':
                return {
                    bg: 'bg-[#F472B6]', // Pink relative to image
                    titleColor: 'text-yellow-300',
                    circleColor: 'bg-pink-600/20',
                    title: 'Hair Salon Game'
                };
            default:
                return {
                    bg: 'bg-slate-900',
                    titleColor: 'text-white',
                    circleColor: 'bg-white/5',
                    title: 'Projects'
                };
        }
    };

    const theme = getTheme(category);

    return (
        <div className={`min-h-screen w-full relative overflow-hidden ${theme.bg} transition-colors duration-500`}>
            {/* Background Elements */}
            <StarDecoration />
            <CircleDecoration color={theme.circleColor} />

            {/* Grid for "About" style consistency if needed, but keeping clean for game pages */}

            <div className="relative z-10 p-6 md:p-10">
                <header className="flex items-center justify-between mb-12">
                    <button
                        onClick={() => navigate('/')}
                        className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all"
                    >
                        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                </header>

                <div className="flex flex-col items-center justify-center mt-20 md:mt-10 text-center">
                    {/* Title with yellow color */}
                    <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-2 ${theme.titleColor} drop-shadow-md`}>
                        {theme.title}
                    </h1>
                </div>

                {/* Content Placeholder for Projects List */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Example Card to show "Empty" or Content */}
                    {/* In a real scenario, map filtered projects here. 
                 For now, we just match the empty "Game" screens aesthetics from the images. 
             */}
                </div>
            </div>
        </div>
    );
};

export default ProjectListPage;
