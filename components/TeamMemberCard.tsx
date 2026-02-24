import React from 'react';
import type { TeamMember } from '../types';

interface TeamMemberCardProps {
    member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
            <div className="overflow-hidden bg-gray-100">
                <img
                    src={member.image}
                    alt={`${member.name} – ${member.role} at Aadhar Civil Consultancy`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{member.description}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;
