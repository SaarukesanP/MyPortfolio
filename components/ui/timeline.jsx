"use client";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    return (
        <div className="font-grosky px-4 md:px-10" ref={containerRef}>
            {/* Title */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grosky font-semibold py-8">
                Education
            </h2>

            {/* Timeline Content */}
            <div ref={ref} className="relative max-w-7xl mx-auto font-grosky font-semibold">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center py-6 gap-4 relative"
                    >
                        {/* Circle */}
                        <div className="relative flex items-center justify-center w-8">
                            <div className="h-6 w-6 rounded-full bg-transparent flex items-center justify-center border border-neutral-300 dark:border-neutral-700 z-10">
                                <div className="h-3 w-3 rounded-full bg-blue-900" />
                            </div>
                        </div>

                        {/* Title and Content */}
                        <div className="flex flex-col items-center text-center gap-2">
                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                                {item.title}
                            </h3>

                            {/* Content */}
                            <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};