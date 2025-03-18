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
        <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-grosky font-semibold'>
                Education
            </motion.h2>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-5 font-grosky font-semibold">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start md:pt-20 md:gap-6 relative">
                        {/* Title on the left side */}
                        <div className="flex md:justify-end md:w-1/2 text-right pr-3 md:pr-6 order-1 md:order-none">
                            <h3 className="text-lg md:text-3xl font-bold text-blue-600">{item.title}</h3>
                        </div>

                        {/* Vertical Line & Circle */}
                        <div className="relative flex items-center justify-center">
                            <div className="h-8 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-300 dark:border-neutral-700 z-10">
                                <div className="h-3 w-3 rounded-full bg-blue-900"/>
                            </div>
                        </div>

                        {/* Content on the right side */}
                        <div className="flex md:w-1/2 text-left pl-3 md:pl-6 order-2 md:order-none">
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* Vertical Line */}
                <div
                    style={{ height: height + "px" }}
                    className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"/>
                </div>
            </div>
        </div>
    );
};
