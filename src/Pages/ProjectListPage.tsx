import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StarDecoration } from '../Components/UI/StarDecoration';
import { CircleDecoration } from '../Components/UI/CircleDecoration';
import { CategoryCard } from '../Components/Dashboard/CategoryCard';

const ProjectListPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();

    // Define themes based on category/images
    const getTheme = (cat?: string) => {
        switch (cat) {
            case 'kid-game':
                return {
                    bg: 'bg-[#4ADE80]',
                    titleColor: 'text-yellow-300',
                    circleColor: 'bg-green-500/20',
                    title: 'Kid Game'
                };
            case 'fashion':
                return {
                    bg: 'bg-[#A855F7]',
                    titleColor: 'text-yellow-300',
                    circleColor: 'bg-purple-700/20',
                    title: 'Fashion Game'
                };
            case 'hair-salon':
                return {
                    bg: 'bg-[#F472B6]',
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

            <div className="relative z-10 p-6 md:p-10">
                <header className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate('/')}
                        className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all"
                    >
                        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    {/* Add more navigation or context if needed */}
                </header>

                <div className="flex flex-col items-center justify-center mb-16 text-center">
                    <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-2 ${theme.titleColor} drop-shadow-md`}>
                        {theme.title}
                    </h1>
                </div>

                {/* If no specific category is selected, show general categories */}
                {!category && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 pb-20">
                        <CategoryCard
                            title="Kid Game"
                            count={5}
                            route="/projects/kid-game"
                            gradient="from-green-400 to-green-500"
                        />
                        <CategoryCard
                            title="Hair Salon"
                            count={3}
                            route="/projects/hair-salon"
                            gradient="from-pink-400 to-pink-500"
                        />
                        <CategoryCard
                            title="Fashion"
                            count={8}
                            route="/projects/fashion"
                            gradient="from-purple-500 to-purple-600"
                        />
                        <CategoryCard
                            title="Others"
                            count={12}
                            route="/projects/other"
                            gradient="from-blue-500 to-indigo-600"
                        />
                    </div>
                )}

                {/* Placeholder for specific category items */}
                {category && (
                    <div className="text-center text-white/80 py-20">
                        <p className="text-2xl font-bold mb-4">Coming Soon!</p>
                        <p>Projects for {theme.title} will appear here.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProjectListPage;
