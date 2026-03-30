import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import TeamMemberCard from './TeamMemberCard';

const Team: React.FC = () => {
    return (
        <section id="team" className="section-surface py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="section-kicker mb-3 text-sm font-semibold">Leadership</p>
                    <h2 className="section-heading text-3xl md:text-4xl font-bold">Our Team</h2>
                    <div className="brand-divider mx-auto mt-4"></div>
                    <p className="body-copy mt-4 text-lg max-w-3xl mx-auto">
                        Meet the experienced professionals dedicated to delivering excellence in every project. Our team combines technical expertise with a commitment to quality and innovation.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {TEAM_MEMBERS.map((member) => (
                        <TeamMemberCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
