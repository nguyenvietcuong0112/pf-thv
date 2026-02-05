import React from 'react';
import { HeroCard } from '../Components/Dashboard/HeroCard';

export const Dashboard: React.FC = () => {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center">
                <HeroCard />
            </section>
        </div>
    );
};
