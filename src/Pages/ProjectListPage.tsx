import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CategoryCard } from '../Components/Dashboard/CategoryCard';

// Asset Imports
import kidGameImg from '../Assets/kidgame.png';
import hairSalonImg from '../Assets/hairsalongame.png';
import fashionGameImg from '../Assets/fashiongame.png';
import otherProductsImg from '../Assets/otherproducts.png';

const ProjectListPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();

    return (
        <div className={`min-h-screen w-full relative overflow-hidden bg-[#FEDB54] font-sans`}>

            <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto">
                {/* Header with Back Button */}
                <header className="flex items-center mb-4">
                    <button
                        onClick={() => navigate('/')}
                        className="text-white hover:scale-110 transition-transform"
                        aria-label="Go back"
                    >
                        <ArrowLeft size={48} strokeWidth={3} />
                    </button>
                </header>

                <div className="flex flex-col items-center justify-center mb-12 text-center">
                    <h1 className="text-6xl md:text-8xl font-black italic text-[#5D12D2] tracking-tight drop-shadow-sm">
                        Project
                    </h1>
                </div>

                {/* Category Grid */}
                {!category && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 pb-20 mt-8">
                        <CategoryCard
                            title="Kid Game"
                            route="/projects/kid-game"
                            image={kidGameImg}
                        />
                        <CategoryCard
                            title="Hair Salon Game"
                            route="/projects/hair-salon"
                            image={hairSalonImg}
                        />
                        <CategoryCard
                            title="Fashion Game"
                            route="/projects/fashion"
                            image={fashionGameImg}
                        />
                        <CategoryCard
                            title="Other Products"
                            route="/projects/other"
                            image={otherProductsImg}
                        />
                    </div>
                )}

                {/* Placeholder for specific category items */}
                {category && (
                    <div className="text-center text-[#5D12D2] py-20 bg-white/30 rounded-[40px] backdrop-blur-sm shadow-xl">
                        <p className="text-4xl font-black italic mb-4">Coming Soon!</p>
                        <p className="text-xl font-bold">Projects for this category will appear here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectListPage;
