import React, { useState } from 'react';
import { X } from 'lucide-react';

const GalleryPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Sample gallery images - replace with actual project images
    const galleryImages = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop',
            title: 'Commercial Building Project',
            category: 'Commercial'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop',
            title: 'Residential Complex',
            category: 'Residential'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
            title: 'Urban Infrastructure',
            category: 'Infrastructure'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop',
            title: 'Modern Office Complex',
            category: 'Commercial'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&auto=format&fit=crop',
            title: 'Road Construction',
            category: 'Infrastructure'
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&auto=format&fit=crop',
            title: 'Bridge Engineering',
            category: 'Infrastructure'
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop',
            title: 'Luxury Apartments',
            category: 'Residential'
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&auto=format&fit=crop',
            title: 'Shopping Mall Development',
            category: 'Commercial'
        },
        {
            id: 9,
            url: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&auto=format&fit=crop',
            title: 'Mixed-Use Development',
            category: 'Commercial'
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
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;
