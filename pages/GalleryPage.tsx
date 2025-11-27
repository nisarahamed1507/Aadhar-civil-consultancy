import React, { useState } from 'react';
import { X } from 'lucide-react';

const GalleryPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Gallery images from public/assets/images/gallery folder
    const galleryImages = [
        {
            id: 1,
            url: '/assets/images/gallery/IMG-20251127-WA0007.jpg',
            title: 'Project 1',
            category: 'Infrastructure'
        },
        {
            id: 2,
            url: '/assets/images/gallery/IMG-20251127-WA0008.jpg',
            title: 'Project 2',
            category: 'Commercial'
        },
        {
            id: 3,
            url: '/assets/images/gallery/IMG-20251127-WA0009.jpg',
            title: 'Project 3',
            category: 'Residential'
        },
        {
            id: 4,
            url: '/assets/images/gallery/IMG-20251127-WA0010.jpg',
            title: 'Project 4',
            category: 'Infrastructure'
        },
        {
            id: 5,
            url: '/assets/images/gallery/IMG-20251127-WA0011.jpg',
            title: 'Project 5',
            category: 'Commercial'
        },
        {
            id: 6,
            url: '/assets/images/gallery/IMG-20251127-WA0012.jpg',
            title: 'Project 6',
            category: 'Infrastructure'
        },
        {
            id: 7,
            url: '/assets/images/gallery/IMG-20251127-WA0013.jpg',
            title: 'Project 7',
            category: 'Residential'
        },
        {
            id: 8,
            url: '/assets/images/gallery/IMG-20251127-WA0014.jpg',
            title: 'Project 8',
            category: 'Commercial'
        },
        {
            id: 9,
            url: '/assets/images/gallery/IMG-20251127-WA0015.jpg',
            title: 'Project 9',
            category: 'Infrastructure'
        },
        {
            id: 10,
            url: '/assets/images/gallery/IMG-20251127-WA0016.jpg',
            title: 'Project 10',
            category: 'Commercial'
        },
        {
            id: 11,
            url: '/assets/images/gallery/IMG-20251127-WA0017.jpg',
            title: 'Project 11',
            category: 'Residential'
        },
        {
            id: 12,
            url: '/assets/images/gallery/IMG-20251127-WA0018.jpg',
            title: 'Project 12',
            category: 'Infrastructure'
        },
        {
            id: 13,
            url: '/assets/images/gallery/IMG-20251127-WA0019.jpg',
            title: 'Project 13',
            category: 'Commercial'
        },
        {
            id: 14,
            url: '/assets/images/gallery/IMG-20251127-WA0020.jpg',
            title: 'Project 14',
            category: 'Infrastructure'
        },
        {
            id: 15,
            url: '/assets/images/gallery/IMG-20251127-WA0021.jpg',
            title: 'Project 15',
            category: 'Residential'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Project Gallery</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our portfolio of successful civil engineering projects across various sectors
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            onClick={() => setSelectedImage(image.url)}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-64 object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
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
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full size"
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                            loading="lazy"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;
