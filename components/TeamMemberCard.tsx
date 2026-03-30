import React from 'react';
import type { TeamMember } from '../types';

interface TeamMemberCardProps {
    member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {

    return (
        <div className="brand-card overflow-hidden rounded-[1.5rem] transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="overflow-hidden bg-[#f7f4f1]">
                <img
                    src={member.image}
                    alt={`${member.name} – ${member.role} at Aadhar Civil Consultancy`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-1 text-xl font-bold text-[#263646]">{member.name}</h3>
                <p className="mb-3 font-semibold text-[#EC6630]">{member.role}</p>
                <p className="body-copy flex-grow text-sm leading-relaxed">{member.description}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;
