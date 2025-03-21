import React from 'react';
import { cn } from '@/lib/utils';

export default function CategoryNav({ categories, activeCategory, onCategoryChange }) {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                        "border border-gray-200 hover:border-gray-300",
                        activeCategory === category
                            ? "bg-blue-600 text-white hover:bg-blue-500"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                    )}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>
    );
}