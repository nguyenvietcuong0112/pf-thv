import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import avatarImg from '../Assets/avartar.png';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-[#FFBCDC] relative flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
            {/* Main Content Card Container */}
            <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10">

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-0 left-0 -mt-12 md:-mt-16 text-white hover:scale-110 transition-transform"
                    aria-label="Go back"
                >
                    <ArrowLeft size={48} strokeWidth={3} />
                </button>

                {/* Left Side: Avatar Section */}
                <div className="relative flex-shrink-0">
                    {/* Sparkles (Removed overlapping one) */}
                    <div className="absolute top-10 -left-12 z-20">
                        <Sparkle size={24} className="text-white" />
                    </div>
                    <div className="absolute -top-4 -right-2 z-20">
                        <Sparkle size={32} className="text-white" />
                    </div>

                    {/* Avatar Image (No Container) */}
                    <img
                        src={avatarImg}
                        alt="Avatar"
                        className="w-[300px] h-auto md:w-[450px] relative z-10 drop-shadow-2xl"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="flex-1 text-left">
                    <h1 className="text-6xl md:text-8xl font-black italic text-[#D81B60] mb-12 tracking-tight">
                        About me
                    </h1>

                    <div className="space-y-4 max-w-2xl">
                        <p className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                            Junior 2D Artist with 2+ years of experience in game projects.
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                            Strong in game items and concept.
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                            Experienced working with Unity pipeline and collaborating with dev teams.
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                            Looking for long term growth in game UI and asset production.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Decoration (Optional subtle patterns) */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
            </div>
        </div>
    );
};

// Custom Sparkle component for the 4-pointed stars
const Sparkle: React.FC<{ size: number; className?: string }> = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
);

export default AboutPage;
