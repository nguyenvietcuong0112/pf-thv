import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { StarDecoration } from '../Components/UI/StarDecoration';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-[#FCE7F3] relative overflow-hidden text-slate-800">
            {/* Pink Grid Background */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Floating Stars */}
            <StarDecoration /> {/* Note: Stars might need color adjustment for light mode if they are fixed white */}

            <div className="relative z-10 p-6 md:p-12 max-w-5xl mx-auto flex flex-col items-start">
                <button
                    onClick={() => navigate('/')}
                    className="mb-8 text-white/80 hover:text-white bg-pink-400/50 p-2 rounded-full"
                >
                    <ArrowLeft size={32} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    {/* White Card */}
                    <div className="bg-white rounded-[40px] shadow-xl w-full aspect-[4/5] md:aspect-square relative overflow-hidden">
                        {/* Placeholder for image/profile */}
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-[#BE185D] mb-8">
                            About me
                        </h1>
                        <div className="space-y-6 text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pink Wave at bottom */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 320" className="w-full h-auto text-pink-300/40 fill-current">
                    <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default AboutPage;
