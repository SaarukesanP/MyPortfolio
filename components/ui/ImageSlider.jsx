import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageCard from './ImageCard';
import { cn } from '@/lib/utils';
import { categories } from "@/components/Work2";

export default function ImageSlider({ images, category, onImageClick }) {
    const sliderRef = useRef(null);

    const filteredImages = images.filter(
        (image) => image.category.toLowerCase() === category.toLowerCase()
    );

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            const scrollAmount = current.clientWidth * 0.8;

            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    if (filteredImages.length === 0) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500 animate-fade-in">
                No images found in this category.
            </div>
        );
    }

    return (
        <div className="relative w-full animate-fade-in">
            <div
                className={cn(
                    "slider-container",
                    "gap-4 px-4 pb-6 overflow-x-auto scrollbar-hide",
                    "flex items-stretch snap-x snap-mandatory"
                )}
                ref={sliderRef}
            >
                {filteredImages.map((image) => (
                    <div
                        key={image.id}
                        className="flex-none snap-start"
                        style={
                            category === 'Figma Projects'&&'T-shirt Design'
                                ? { minWidth: '500px', maxWidth: '500px' }
                                : { minWidth: '250px', maxWidth: '250px' }
                        }
                    >
                        <ImageCard
                            src={image.src}
                            alt={image.alt}
                            onClick={() => onImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            {filteredImages.length > 3 && (
                <>
                    <button
                        onClick={() => scroll('left')}
                        className={cn(
                            "absolute left-2 top-1/2 transform -translate-y-1/2 z-10",
                            "rounded-full p-2 bg-white/80 backdrop-blur-sm",
                            "shadow-md border border-gray-200",
                            "hover:bg-brand-blue transition-colors duration-200"
                        )}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className={cn(
                            "absolute right-2 top-1/2 transform -translate-y-1/2 z-10",
                            "rounded-full p-2 bg-white/80 backdrop-blur-sm",
                            "shadow-md border border-gray-200",
                            "hover:bg-brand-blue transition-colors duration-200"
                        )}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-5 w-5 text-gray-700" />
                    </button>
                </>
            )}
        </div>
    );
}
