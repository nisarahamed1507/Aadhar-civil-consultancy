import React, { useState } from 'react';
import { X } from 'lucide-react';
import ImageWithLoader from '../components/ImageWithLoader';
import SEO from '../components/SEO';

interface GalleryImage {
    id: number;
    url: string;
    title: string;
    category: string;
}

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        url: '/assets/images/gallery/blain-air-permiability.jpg',
        title: 'Blain Air Permeability Apparatus',
        category: 'Material Testing'
    },
    {
        id: 2,
        url: '/assets/images/gallery/cbr-testing-machine.jpg',
        title: 'CBR Testing Machine',
        category: 'Material Testing'
    },
    {
        id: 3,
        url: '/assets/images/gallery/digital-compression-testing-machine.jpg',
        title: 'Digital Compression Testing Machine',
        category: 'Material Testing'
    },
    {
        id: 4,
        url: '/assets/images/gallery/direct-sher-machine.jpg',
        title: 'Direct Shear Machine',
        category: 'Geotechnical'
    },
    {
        id: 5,
        url: '/assets/images/gallery/flaki-guage,elongation-guage.jpg',
        title: 'Flakiness & Elongation Gauge',
        category: 'Material Testing'
    },
    {
        id: 6,
        url: '/assets/images/gallery/humidity-chamber.jpg',
        title: 'Humidity Chamber',
        category: 'Material Testing'
    },
    {
        id: 7,
        url: '/assets/images/gallery/liquid-limit-device.jpg',
        title: 'Liquid Limit Device',
        category: 'Geotechnical'
    },
    {
        id: 8,
        url: '/assets/images/gallery/motor-cube-vibrating-machine.jpg',
        title: 'Motor Cube Vibrating Machine',
        category: 'Material Testing'
    },
    {
        id: 9,
        url: '/assets/images/gallery/plastic-limit-apparatus.jpg',
        title: 'Plastic Limit Apparatus',
        category: 'Geotechnical'
    },
    {
        id: 10,
        url: '/assets/images/gallery/rebound-hammer.jpg',
        title: 'Rebound Hammer (Schmidt Hammer)',
        category: 'NDT'
    },
    {
        id: 11,
        url: '/assets/images/gallery/setting-test-of-cement.jpg',
        title: 'Setting Time Test of Cement',
        category: 'Material Testing'
    },
    {
        id: 12,
        url: '/assets/images/gallery/shrinkage-limit.jpg',
        title: 'Shrinkage Limit Apparatus',
        category: 'Geotechnical'
    },
    {
        id: 13,
        url: '/assets/images/gallery/soil-permiability.jpg',
        title: 'Soil Permeability Test Setup',
        category: 'Geotechnical'
    },
    {
        id: 14,
        url: '/assets/images/gallery/specific-gravity-basket.jpg',
        title: 'Specific Gravity Basket',
        category: 'Material Testing'
    },
    {
        id: 15,
        url: '/assets/images/gallery/water-bath.jpg',
        title: 'Water Bath',
        category: 'Material Testing'
    }
];

const CATEGORIES = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

const GalleryPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <>
            <SEO
                title="Equipment & Project Gallery"
                description="Explore Aadhar Civil Consultancy's laboratory and field equipment gallery – CBR machines, compression testers, geotechnical apparatus, NDT tools, and more used in our civil engineering testing services."
                canonicalPath="/gallery"
                keywords="civil engineering equipment gallery, CBR testing machine, compression testing, NDT rebound hammer, geotechnical equipment, soil testing apparatus, Raipur"
            />

            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-16">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Equipment & Gallery</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A look at the state-of-the-art laboratory equipment and field tools we use to deliver precise civil engineering testing and analysis.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((image) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white"
                                onClick={() => setSelectedImage(image)}
                            >
                                <ImageWithLoader
                                    src={image.url}
                                    alt={`${image.title} – civil engineering equipment at Aadhar Civil Consultancy`}
                                    className="w-full h-64 object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h2 className="text-base font-semibold mb-1">{image.title}</h2>
                                        <span className="inline-block bg-blue-600 text-xs px-3 py-1 rounded-full">
                                            {image.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lightbox Modal */}
                    {selectedImage && (
                        <div
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                            role="dialog"
                            aria-modal="true"
                            aria-label={selectedImage.title}
                        >
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors focus:outline-none"
                                onClick={() => setSelectedImage(null)}
                                aria-label="Close image viewer"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <div className="text-center">
                                <img
                                    src={selectedImage.url}
                                    alt={`${selectedImage.title} – Aadhar Civil Consultancy`}
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                    onClick={(e) => e.stopPropagation()}
                                    loading="lazy"
                                />
                                <p className="text-white mt-4 text-lg font-semibold">{selectedImage.title}</p>
                                <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mt-2">{selectedImage.category}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default GalleryPage;
