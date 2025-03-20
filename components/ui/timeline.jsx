"use client";
import { useScroll, useTransform, motion } from "motion/react";
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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-grosky px-4 md:px-10" ref={containerRef}>
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grosky font-semibold py-8"
            >
                Education
            </motion.h2>

            {/* Timeline Content */}
            <div ref={ref} className="relative max-w-7xl mx-auto font-grosky font-semibold">
                {/* Vertical Line */}
                {/*<div*/}
                {/*    style={{ height: height + "px" }}*/}
                {/*    className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"*/}
                {/*>*/}
                {/*    <motion.div*/}
                {/*        style={{ height: heightTransform, opacity: opacityTransform }}*/}
                {/*        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"*/}
                {/*    />*/}
                {/*</div>*/}

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
                            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};