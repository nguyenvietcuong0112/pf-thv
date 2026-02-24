import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import avatarImg from '../Assets/avartar.png';

const ContactPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-[#5D12D2] relative flex flex-col items-center justify-center p-4 md:p-8 font-sans overflow-hidden text-white">

            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 text-white hover:scale-110 transition-transform z-20"
                aria-label="Go back"
            >
                <ArrowLeft size={48} strokeWidth={3} />
            </button>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Contact Title */}
                <h1 className="text-6xl md:text-8xl font-black italic text-[#FACC15] mb-4 tracking-tight">
                    Contact
                </h1>

                {/* Contact Info Section */}
                <div className="flex items-center gap-4 mt-2">
                    {/* Avatar Image (Aligned with 3 lines of text) */}
                    <img
                        src={avatarImg}
                        alt="Contact Avatar"
                        className="h-40 md:h-44 w-auto object-contain relative z-10 drop-shadow-lg flex-shrink-0"
                    />

                    {/* Contact Details */}
                    <div className="flex flex-col text-left space-y-1">
                        <p className="text-xl md:text-2xl font-bold tracking-wide">0962359058</p>
                        <p className="text-xl md:text-2xl font-bold tracking-wide">1999havy@gmail.com</p>
                        <p className="text-xl md:text-2xl font-bold tracking-wide text-white/90">Hai Ba Trung, Hanoi</p>
                    </div>
                </div>
            </div>

            {/* Background Decoration (Subtle Gradient Glow) */}
            <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

            {/* Soft Glow in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
};

export default ContactPage;
