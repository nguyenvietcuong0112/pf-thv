import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CategoryCard } from '../Components/Dashboard/CategoryCard';

// Asset Imports
import kidGameImg from '../Assets/kidgame.png';
import kidGame1Img from '../Assets/kidgame1.png';
import kidGame2Img from '../Assets/kidgame2.png';
import kidGame3Img from '../Assets/kidgame3.png';

import hairSalonImg from '../Assets/hairsalongame.png';
import hairGame1Img from '../Assets/hairgame1.png';
import hairGame2Img from '../Assets/hairgame2.png';
import hairGame3Img from '../Assets/hairgame3.png';

import fashionGameImg from '../Assets/fashiongame.png';
import fashionGame1Img from '../Assets/fashiongame1.png';
import fashionGame2Img from '../Assets/fashiongame2.png';
import fashionGame3Img from '../Assets/fashiongame3.png';

import otherProductsImg from '../Assets/otherproducts.png';
import otherGame1Img from '../Assets/othergame1.png';
import otherGame2Img from '../Assets/othergame2.png';
import otherGame3Img from '../Assets/othergame3.png';
import otherGame4Img from '../Assets/othergame4.png';
import otherGame5Img from '../Assets/othergame5.png';

// New Icon Imports
import icFashion from '../Assets/ic_fashion.png';
import icHair1 from '../Assets/ic_hairslon1.png';
import icHair2 from '../Assets/ic_hairslon2.png';
import icHair3 from '../Assets/ic_hairslon3.png';
import icOther2 from '../Assets/ic_orther2.png';
import icZooDoctor from '../Assets/ic_zoodoctor.png';
import icHappyDoctor from '../Assets/ic_happydoctor.png';

import otherGame6ImgActual from '../Assets/othergame6.png';

// Types for Project Data
interface ProjectDetailData {
    id: string;
    title: string;
    gradient: string;
    titleColor: string;
    sections: {
        title: string;
        type: 'image' | 'links' | 'placeholder' | 'dual-image';
        image?: string;
        image2?: string;
        links?: { thumb: string; name: string; url: string; downloads: string }[];
    }[];
}

const PROJECT_CONFIG: Record<string, ProjectDetailData> = {
    'kid-game': {
        id: 'kid-game',
        title: 'Kid Game',
        gradient: 'bg-gradient-to-b from-[#87CEEB] via-[#F0E68C] to-[#87CEEB]',
        titleColor: 'text-[#FF9800]',
        sections: [
            { title: 'Characters', type: 'image', image: kidGame1Img },
            { title: 'Items, UI Buttons & Pop-up', type: 'image', image: kidGame2Img },
            { title: 'Ingame', type: 'image', image: kidGame3Img },
            {
                title: 'Link Product',
                type: 'links',
                links: [
                    {
                        thumb: icZooDoctor,
                        name: 'Zoo Doctor Dentist Game',
                        downloads: '5M+',
                        url: 'https://play.google.com/store/apps/details?id=com.doctor.dentist.game.free&hl=vi'
                    },
                    {
                        thumb: icHappyDoctor,
                        name: 'Happy Doctor Dentist',
                        downloads: '1M+',
                        url: 'https://play.google.com/store/apps/details?id=com.central.hospital.dentist.game&hl=vi'
                    }
                ]
            }
        ]
    },
    'hair-salon': {
        id: 'hair-salon',
        title: 'Hair Salon Game',
        gradient: 'bg-gradient-to-b from-[#F9A8D4] via-[#FDF2F8] to-[#93C5FD]',
        titleColor: 'text-[#D81B60]',
        sections: [
            { title: 'Characters', type: 'image', image: hairGame1Img },
            { title: 'Items, UI Buttons & Pop-up', type: 'image', image: hairGame2Img },
            { title: 'Ingame', type: 'image', image: hairGame3Img },
            {
                title: 'Link Product',
                type: 'links',
                links: [
                    {
                        thumb: icHair1,
                        name: 'Hair salon fashion for girl',
                        downloads: '1M+',
                        url: 'https://play.google.com/store/apps/details?id=com.hair.salon.stylist.girl.game&hl=vi'
                    },
                    {
                        thumb: icHair2,
                        name: 'Hair Salon Halloween Stylish',
                        downloads: '1M+',
                        url: 'https://play.google.com/store/apps/details?id=com.hair.fashion.halloween.game.free&hl=vi'
                    },
                    {
                        thumb: icHair3,
                        name: 'Hair Salon Halloween Party',
                        downloads: '500N+',
                        url: 'https://play.google.com/store/apps/details?id=com.uchiha.hair.halloween&hl=vi'
                    }
                ]
            }
        ]
    },
    'fashion': {
        id: 'fashion',
        title: 'Fashion Game',
        gradient: 'bg-gradient-to-b from-[#A855F7] via-[#F3E8FF] to-[#db2777]',
        titleColor: 'text-[#FACC15]',
        sections: [
            { title: 'Characters', type: 'image', image: fashionGame1Img },
            { title: 'Items, UI Buttons & Pop-up', type: 'image', image: fashionGame2Img },
            { title: 'Ingame', type: 'image', image: fashionGame3Img },
            {
                title: 'Link Product',
                type: 'links',
                links: [
                    {
                        thumb: icFashion,
                        name: 'Outft Planner: Fashion Games',
                        downloads: '1M+',
                        url: 'https://play.google.com/store/apps/details?id=com.fashion.makeup.hair.game&hl=vi'
                    }
                ]
            }
        ]
    },
    'other': {
        id: 'other',
        title: 'Other Products',
        gradient: 'bg-gradient-to-b from-[#6EE7B7] via-[#ECFDF5] to-[#3DB5E0]',
        titleColor: 'text-[#2563EB]',
        sections: [
            { title: 'Panda Hero Adventure', type: 'dual-image', image: otherGame1Img, image2: otherGame2Img },
            { title: 'Block Blast Puzzle Mania', type: 'dual-image', image: otherGame3Img, image2: otherGame4Img },
            { title: 'Christmas Coloring', type: 'dual-image', image: otherGame5Img, image2: otherGame6ImgActual },
            {
                title: 'Link Product',
                type: 'links',
                links: [
                    {
                        thumb: icOther2,
                        name: 'Block Blast Puzzle Mania',
                        downloads: '500N+',
                        url: 'https://play.google.com/store/apps/details?id=com.bibota.blast.puzzle&hl=vi'
                    }
                ]
            }
        ]
    }
};

const ProjectListPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();
    const currentProject = category ? PROJECT_CONFIG[category] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    return (
        <div className={`min-h-screen w-full relative overflow-hidden transition-colors duration-500 ${currentProject ? currentProject.gradient : 'bg-[#FEDB54]'} font-sans`}>

            <div className="relative z-10 p-6 md:p-10 max-w-[1200px] mx-auto min-h-screen flex flex-col items-center">
                {/* Fixed Circular Back Button */}
                <button
                    onClick={() => navigate(category ? '/projects' : '/')}
                    className="fixed top-8 left-8 z-50 text-white hover:scale-110 transition-transform bg-white/20 p-4 rounded-full backdrop-blur-md shadow-lg border border-white/30"
                    aria-label="Go back"
                >
                    <ArrowLeft size={32} strokeWidth={3} />
                </button>

                {!category ? (
                    <>
                        <div className="flex flex-col items-center justify-center mb-12 text-center">
                            <h1 className="text-6xl md:text-8xl font-black italic text-[#5D12D2] tracking-tight drop-shadow-sm">
                                Project
                            </h1>
                        </div>

                        {/* Category Grid */}
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
                    </>
                ) : (
                    /* Detailed Project Content */
                    <div className="w-full flex flex-col items-center pb-20">
                        {/* Title Section */}
                        <div className="text-center mb-12">
                            <h1 className={`text-6xl md:text-8xl font-black italic ${currentProject?.titleColor} mb-2`}>
                                {currentProject?.title}
                            </h1>
                        </div>

                        {/* Sections based on config */}
                        <div className="w-full space-y-12">
                            {currentProject?.sections.map((section, idx) => (
                                <section key={idx} className="w-full flex flex-col items-center">
                                    <div className="text-center mb-6">
                                        <h3 className="text-white font-bold tracking-tight text-xl mb-1">
                                            {section.title}
                                        </h3>
                                    </div>

                                    {(section.type === 'image' || section.type === 'dual-image') && (
                                        <div className="w-full flex flex-col items-center space-y-8">
                                            {section.image && (
                                                <img
                                                    src={section.image}
                                                    alt={section.title}
                                                    className="w-full max-w-4xl h-auto object-contain"
                                                />
                                            )}
                                            {section.type === 'dual-image' && section.image2 && (
                                                <img
                                                    src={section.image2}
                                                    alt={`${section.title} - Layer 2`}
                                                    className="w-full max-w-4xl h-auto object-contain"
                                                />
                                            )}
                                        </div>
                                    )}

                                    {section.type === 'links' && section.links && (
                                        <div className="flex flex-wrap justify-center gap-8">
                                            {section.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex flex-col items-center group cursor-pointer"
                                                >
                                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-xl border-4 border-white/50 bg-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform relative">
                                                        <img src={link.thumb} alt={link.name} className="w-full h-full object-cover" />
                                                        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                                                            {link.downloads} Downloads
                                                        </div>
                                                    </div>
                                                    <span className="mt-3 text-white font-bold text-xs md:text-sm text-center max-w-[120px]">
                                                        {link.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {section.type === 'placeholder' && (
                                        <div className="w-full max-w-5xl bg-white/20 backdrop-blur-md rounded-[40px] p-8 md:p-12 shadow-2xl border border-white/30 min-h-[400px] flex items-center justify-center text-white/50 italic">
                                            <div className="text-center">
                                                <p className="text-2xl font-black mb-2 opacity-50">{section.title} Section</p>
                                                <p className="text-sm font-bold opacity-30 tracking-widest uppercase">Content Placeholder</p>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectListPage;
