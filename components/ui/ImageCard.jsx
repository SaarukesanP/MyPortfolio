import React from 'react';
import { cn } from '@/lib/utils';

export default function ImageCard({ src, alt, onClick }) {
    return (
        <div
            className="image-card rounded-lg shadow-sm cursor-pointer fixed-height-container"
            onClick={onClick}
        >
            <div className="h-full w-full relative overflow-hidden rounded-lg group">
                <img
                    src={src}
                    alt={alt}
                    className={cn(
                        "w-auto h-full object-cover transition-all duration-500",
                        "group-hover:scale-105"
                    )}
                />
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent opacity-0",
                    "transition-opacity duration-300 group-hover:opacity-100"
                )}/>
            </div>
        </div>
    );
}