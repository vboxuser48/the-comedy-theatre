import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Main Stage Performance',
      category: 'venue'
    },
    {
      url: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      title: 'Audience Enjoying the Show',
      category: 'event'
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      title: 'Comedy Night Special',
      category: 'event'
    },
    {
      url: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      title: 'Intimate Seating Area',
      category: 'venue'
    },
    {
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Open Mic Night',
      category: 'event'
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      title: 'Backstage Area',
      category: 'venue'
    },
    {
      url: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
      title: 'Weekend Special Show',
      category: 'event'
    },
    {
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Bar and Lounge',
      category: 'venue'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a peek inside The Comedy Theatre and relive some of our most memorable moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <span className="inline-block bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-10"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img 
                src={images[selectedImage].url} 
                alt={images[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">
                  {images[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;