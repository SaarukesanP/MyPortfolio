import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ImageModal({ image, onClose }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!image) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
            <div
                className="absolute inset-0"
                onClick={onClose}
            />

            <div
                className={cn(
                    "relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-lg",
                    "bg-white/50 backdrop-blur-lg p-6"
                )}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="font-semibold text-gray-900 text-xl">
                            {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                        </h3>
                        <p className="text-sm text-gray-600">{image.alt}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className={cn(
                            "rounded-full p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors",
                            "focus:outline-none"
                        )}
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center overflow-auto mb-4">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-[70vh] object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
