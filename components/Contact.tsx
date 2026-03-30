import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'aadharccspl@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Email error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-muted py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-kicker mb-3 text-sm font-semibold">Contact</p>
          <h2 className="section-heading text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="brand-divider mx-auto mt-4"></div>
          <p className="body-copy mt-4 text-lg max-w-3xl mx-auto">
            We are here to help you with your next project. Contact us today to discuss your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-bold text-[#263646]">Contact Information</h3>

            <div className="brand-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="brand-icon-chip rounded-full p-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-1 text-lg font-semibold text-[#263646]">Our Office</h3>
                  <p className="body-copy mb-2">{COMPANY_INFO.address}</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=H.No.+3316-W61-Z6,+Ratwat+pura+colony+phase-1,+Raipur,+Chhattisgarh,+India+492013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-link inline-flex items-center font-medium"
                  >
                    View on Map &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="brand-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="brand-icon-chip rounded-full p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-1 text-lg font-semibold text-[#263646]">Email Us</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="body-copy transition-colors hover:text-[#EC6630]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="brand-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="brand-icon-chip rounded-full p-3">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-1 text-lg font-semibold text-[#263646]">Call Us</h3>
                  <div className="body-copy space-y-1">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="block transition-colors hover:text-[#EC6630]">{COMPANY_INFO.phone}</a>
                    <a href={`tel:${COMPANY_INFO.phone2}`} className="block transition-colors hover:text-[#EC6630]">{COMPANY_INFO.phone2}</a>
                    <a href={`tel:${COMPANY_INFO.phone3}`} className="block transition-colors hover:text-[#EC6630]">{COMPANY_INFO.phone3}</a>
                    <a href={`tel:${COMPANY_INFO.phone4}`} className="block transition-colors hover:text-[#EC6630]">{COMPANY_INFO.phone4}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Request Callback Form */}
          <div className="brand-card rounded-2xl p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#263646]">Request a Call Back</h3>

            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="brand-icon-chip mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <CheckCircle className="h-10 w-10 text-[#EC6630]" />
                </div>
                <h4 className="mb-2 text-xl font-bold text-[#263646]">Request Sent!</h4>
                <p className="body-copy">Thank you for your interest. Our team will contact you shortly.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="brand-link mt-6 font-medium"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#263646]">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="brand-input w-full rounded-lg px-4 py-2 transition-shadow"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#263646]">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="brand-input w-full rounded-lg px-4 py-2 transition-shadow"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-[#263646]">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="brand-input w-full rounded-lg px-4 py-2 transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-[#263646]">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="brand-input w-full resize-none rounded-lg px-4 py-2 transition-shadow"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brand-button flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Embed - Full Width */}
        <div className="brand-card w-full rounded-xl p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54862266356!2d81.5625499!3d21.2513844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23c8d0659%3A0x49f4f3d0c800018d!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1732218000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="w-full h-[400px] md:h-[450px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
