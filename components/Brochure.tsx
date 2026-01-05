import React from 'react';
import { FileText } from 'lucide-react';

const Brochure: React.FC = () => {
    const handleDownloadClick = () => {
        // Trigger download
        const link = document.createElement('a');
        link.href = '/assets/brochures/Company_Details[1].pdf';
        link.download = 'Company_Details.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="brochure" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Brochure Visual */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm">
                                {/* Brochure Card Mockup */}
                                <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                                    {/* Decorative Circle */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-600 rounded-full opacity-50"></div>

                                    {/* Badge */}
                                    <div className="border-2 border-blue-400 rounded-lg p-6 mb-8 relative z-10">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4"></div>
                                            <h3 className="text-white text-2xl font-bold mb-1">EST. 2026</h3>
                                            <p className="text-blue-200 text-sm">ENGINEERING EXCELLENCE</p>
                                        </div>
                                    </div>

                                    {/* Company Name */}
                                    <div className="relative z-10">
                                        <p className="text-gray-300 text-xs uppercase tracking-wider mb-2">COMPANY PROFILE</p>
                                        <h4 className="text-white text-xl font-bold">AADHAR CIVIL CONSULTANCY</h4>
                                    </div>

                                    {/* Decorative Line */}
                                    <div className="mt-8 border-t-4 border-blue-600 w-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div>
                            <p className="text-orange-500 uppercase tracking-wider text-sm font-semibold mb-3">
                                INFORMATION & RESOURCES
                            </p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Company Profile
                                <div className="w-16 h-1 bg-orange-500 mt-2"></div>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Explore our journey, technical capabilities, and the extensive portfolio of projects that define our commitment to quality. Our brochure provides a comprehensive overview of our services, certifications, and the standards we uphold in every engineering challenge.
                            </p>
                            <button
                                onClick={handleDownloadClick}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <FileText className="w-6 h-6" />
                                DOWNLOAD HERE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brochure;
