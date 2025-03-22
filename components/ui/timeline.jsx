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
            {/* Timeline Content */}
            <div ref={ref} className="flex gap-10 items-center justify-center mx-auto font-grosky font-semibold flex-wrap">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center relative border border-blue-200 shadow-xl shadow-blue-600/10 p-6 rounded-lg w-96 bg-white"
                    >
                        {/* Circle */}
                        <div className="relative flex items-center justify-center my-2">
                            <div className="h-6 w-6 rounded-full bg-transparent flex items-center justify-center border border-neutral-300 dark:border-neutral-700 z-10">
                                <div className="h-3 w-3 rounded-full bg-blue-600" />
                            </div>
                        </div>

                        {/* Title and Content */}
                        <div className="flex flex-col items-center text-center">
                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-medium text-blue-600">
                                {item.title}
                            </h3>

                            {/* Study */}
                            <div className="text-sm sm:text-base text-neutral-700 font-semibold mt-2">
                                {item.study}
                            </div>

                            {/* Content */}
                            <div className="text-sm sm:text-base text-neutral-700 font-light">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
