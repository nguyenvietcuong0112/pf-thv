import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Placeholders for icons - user will add actual assets later
import icPhone from '../Assets/ic_phone.png';
import icMail from '../Assets/ic_mail.png';
import icLocation from '../Assets/ic_location.png';

const ContactPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-[#5D12D2] relative flex flex-col items-center justify-center p-4 md:p-8 font-sans overflow-hidden text-white">

            {/* Fixed Circular Back Button */}
            <button
                onClick={() => navigate('/')}
                className="fixed top-8 left-8 z-50 text-white hover:scale-110 transition-transform bg-white/20 p-4 rounded-full backdrop-blur-md shadow-lg border border-white/30"
                aria-label="Go back"
            >
                <ArrowLeft size={32} strokeWidth={3} />
            </button>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Contact Title */}
                <h1 className="text-6xl md:text-8xl font-black italic text-[#FACC15] mb-4 tracking-tight">
                    Contact
                </h1>

                {/* Contact Info Section */}
                <div className="flex flex-col items-start gap-6 mt-8">
                    {/* Phone */}
                    <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img src={icPhone} alt="Phone" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="text-2xl md:text-3xl font-montserrat font-medium tracking-wider">0962359058</p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img src={icMail} alt="Email" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="text-2xl md:text-3xl font-montserrat font-medium tracking-wider">1999havy@gmail.com</p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img src={icLocation} alt="Location" className="w-8 h-8 object-contain" />
                        </div>
                        <p className="text-2xl md:text-3xl font-montserrat font-medium tracking-wider">Hai Ba Trung, Hanoi</p>
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
