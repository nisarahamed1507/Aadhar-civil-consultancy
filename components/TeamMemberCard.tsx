import React from 'react';
import type { TeamMember } from '../types';
import { Download } from 'lucide-react';

interface TeamMemberCardProps {
    member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {

    const handleCVDownload = () => {
        const link = document.createElement('a');
        link.href = member.cvPath;
        link.download = `${member.name.replace(/\s+/g, '_')}_CV.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                <p className="text-gray-600 mb-5 text-sm leading-relaxed flex-grow">{member.description}</p>

                <button
                    onClick={handleCVDownload}
                    aria-label={`Download CV of ${member.name}`}
                    className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200 hover:border-blue-600 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm"
                >
                    <Download className="w-4 h-4" />
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default TeamMemberCard;
