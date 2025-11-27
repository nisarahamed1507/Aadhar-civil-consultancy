import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import TeamMemberCard from './TeamMemberCard';

const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Team</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
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
