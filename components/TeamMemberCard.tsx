import React from 'react';
import type { TeamMember } from '../types';
import { Download } from 'lucide-react';

interface TeamMemberCardProps {
    member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    const handleDownloadCV = () => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = member.cvPath;
        link.download = `${member.name.replace(/\s+/g, '_')}_CV.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.description}</p>
                <button
                    onClick={handleDownloadCV}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                    <Download size={18} />
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default TeamMemberCard;
