
import React, { useState, useEffect, useCallback } from 'react';
import { COMPANY_INFO } from '../constants';
import { Target, Eye, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  'https://www.novatr.com/blog/civil-engineering-final-year-projects',
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600&h=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&h=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&h=400&auto=format&fit=crop',
];

interface AboutProps {
  showVideo?: boolean;
}

const About: React.FC<AboutProps> = ({ showVideo = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === carouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!isPaused && !showVideo) {
      const slider = setInterval(goToNext, 5000);
      return () => clearInterval(slider);
    }
  }, [currentIndex, isPaused, goToNext, showVideo]);

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Engineering a Foundation of Trust
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Aadhar Civil Consultancy provides a one-stop solution for design, testing, supervision, and certification, built on expertise and scientific methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Eye size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-gray-600">{COMPANY_INFO.vision}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Target size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  {COMPANY_INFO.mission.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {showVideo ? (
            /* Video Section - For Home Page */
            <div className="relative w-full max-w-[600px] h-[400px] mx-auto overflow-hidden rounded-lg shadow-xl bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Ax1U04c4gdc"
                title="Civil Engineering Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          ) : (
            /* Image Carousel - For About Page */
            <div
              className="relative w-full max-w-[600px] h-[400px] mx-auto overflow-hidden rounded-lg shadow-xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              aria-roledescription="carousel"
              aria-label="Image carousel of our projects"
            >
              <div
                className="flex h-full transition-transform ease-in-out duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Civil engineering project showcase ${index + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                    loading="lazy"
                    aria-hidden={currentIndex !== index}
                  />
                ))}
              </div>

              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2" role="group" aria-label="Carousel navigation">
                {carouselImages.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                  ></button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default About;