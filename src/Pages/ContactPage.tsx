import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { CircleDecoration } from '../Components/UI/CircleDecoration';

const ContactPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full bg-slate-900 relative overflow-hidden text-white">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900" />
            <CircleDecoration color="bg-indigo-500/20" />

            <div className="relative z-10 p-6 md:p-12 max-w-6xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="mb-12 group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
                >
                    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Get in <br />
                            <span className="text-yellow-400">Touch.</span>
                        </h1>
                        <p className="text-xl text-white/60 mb-12 max-w-lg">
                            I'm currently available for freelance projects and full-time opportunities.
                            Let's build something amazing together.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <Mail className="text-pink-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Email</p>
                                    <p className="text-lg font-medium">hello@havy.design</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <Phone className="text-purple-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Phone</p>
                                    <p className="text-lg font-medium">+84 123 456 789</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <MapPin className="text-green-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-white/40">Location</p>
                                    <p className="text-lg font-medium">Hanoi, Vietnam</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fake Map / Visual */}
                    <div className="relative aspect-square md:aspect-[4/5] bg-white/5 rounded-[40px] border border-white/10 overflow-hidden backdrop-blur-sm flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Hanoi,Vietnam&zoom=13&size=600x800&key=YOUR_API_KEY_HERE')] bg-cover bg-center opacity-30 grayscale" />
                        <div className="relative z-10 text-center p-8">
                            <Globe size={64} className="mx-auto text-blue-400 mb-4 opacity-50" />
                            <p className="text-white/40 uppercase tracking-widest font-bold">World Wide Work</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
