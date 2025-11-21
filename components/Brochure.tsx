import React, { useState } from 'react';
import { Download, FileText, CheckCircle, Loader2, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Brochure: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDownloadClick = () => {
        setShowFormModal(true);
        setSubmitError('');
    };

    const closeFormModal = () => {
        setShowFormModal(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
        setSubmitError('');
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            // EmailJS configuration
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
                to_email: 'aadharccspl@gmail.com'
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setIsSubmitting(false);
            setShowFormModal(false);

            // Trigger download
            const link = document.createElement('a');
            link.href = '/assets/brochures/Company_Details[1].pdf';
            link.download = 'Company_Details.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show success modal
            setShowSuccessModal(true);

            // Reset form
            setFormData({ name: '', phone: '', email: '', message: '' });

            // Auto-close success modal after 3 seconds
            setTimeout(() => {
                setShowSuccessModal(false);
            }, 3000);

        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitError('Failed to submit form. Please try again or contact us directly.');
            setIsSubmitting(false);
        }
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

            {/* Form Modal */}
            {showFormModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Download Request
                            </h3>
                            <button
                                onClick={closeFormModal}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            {submitError && (
                                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                    {submitError}
                                </div>
                            )}

                            <p className="text-sm text-gray-600 mb-6">
                                Please fill out the form below to download our company brochure.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                                        placeholder="Any specific requirements or questions..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Download className="w-5 h-5" />
                                            Submit & Download
                                        </>
                                    )}
                                </button>
                            </form>

                            <p className="mt-4 text-xs text-gray-500 text-center">
                                Your information will be sent to our team and used solely for providing you with the requested brochure.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 text-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Thanks for Downloading!
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Your brochure download has started. We've also sent you a confirmation email.
                        </p>
                        <button
                            onClick={closeSuccessModal}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Brochure;
