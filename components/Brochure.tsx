import React from 'react';
import { FileText } from 'lucide-react';

const Brochure: React.FC = () => {
    const handleDownloadClick = () => {
        // Trigger download
        const link = document.createElement('a');
        //link.href = '/assets/brochures/Company_Details[1].pdf';
        link.download = 'Company_Details.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="brochure" className="section-dark py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Brochure Visual */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-sm">
                                {/* Brochure Card Mockup */}
                                <div className="rounded-2xl p-8 relative overflow-hidden brand-panel-dark">
                                    {/* Decorative Circle */}
                                    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#EC6630]/20"></div>

                                    {/* Badge */}
                                    <div className="mb-8 rounded-lg border border-[#EC6630]/35 p-6 relative z-10">
                                        <div className="text-center">
                                            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#EC6630]/18 ring-1 ring-[#EC6630]/30"></div>
                                            <h3 className="text-white text-2xl font-bold mb-1">EST. 2026</h3>
                                            <p className="text-[#f7d5c6] text-sm">ENGINEERING EXCELLENCE</p>
                                        </div>
                                    </div>

                                    {/* Company Name */}
                                    <div className="relative z-10">
                                        <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/60">COMPANY PROFILE</p>
                                        <h4 className="text-white text-xl font-bold">AADHAR CIVIL CONSULTANCY</h4>
                                    </div>

                                    {/* Decorative Line */}
                                    <div className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-[#EC6630] to-[#f7d5c6]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div>
                            <p className="section-kicker mb-3 text-sm font-semibold">
                                INFORMATION & RESOURCES
                            </p>
                            <h2 className="section-heading-light text-4xl font-bold mb-4">
                                Company Profile
                                <div className="brand-divider mt-3"></div>
                            </h2>
                            <p className="body-copy-light text-lg mb-8 leading-relaxed">
                                Explore our journey, technical capabilities, and the extensive portfolio of projects that define our commitment to quality. Our brochure provides a comprehensive overview of our services, certifications, and the standards we uphold in every engineering challenge.
                            </p>
                            <button
                                onClick={handleDownloadClick}
                                className="brand-button flex items-center gap-3 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
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
