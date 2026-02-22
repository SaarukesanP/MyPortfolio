"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function TimelineDemo() {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 0.85", "end 0.2"],
    });
    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const timelineItems = [
        {
            period: "From December 2025",
            type: "Experience",
            title: "Associate Software Engineer",
            place: "Unicom SD (Pvt) Ltd",
            highlights: "",
        },
        {
            period: "June 2025 - December 2025",
            type: "Experience",
            title: "Internship - Software Engineer",
            place: "Unicom SD (Pvt) Ltd",
            highlights: "",
        },
        {
            period: "June 2021 - November 2025",
            type: "Education",
            title: "BSc Hons in Computer Science",
            place: "University of Jaffna, Sri Lanka",
            highlights: ["CGPA: 3.05/4.00 (108 out of 120 credits)"],
        },
        // {
        //     period: "2019",
        //     type: "Education",
        //     title: "G.C.E Advanced Level (Mathematics Stream)",
        //     place: "St. Michael's College, Batticaloa",
        //     highlights: ["Z-Score: 1.1931"],
        // },
    ];

    return (
        <section id="education" className="w-full scroll-mt-24 px-5 pb-8 sm:px-8 lg:px-12">
            <h2 className="mb-12 text-center font-grosky text-4xl font-light tracking-tight text-blue-950">
                Education
            </h2>

            <div ref={timelineRef} className="relative mx-auto max-w-5xl">
                <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-blue-100/90" />
                <motion.span
                    style={{ scaleY: lineScaleY, transformOrigin: "top" }}
                    className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-400 via-blue-600 to-cyan-400"
                />

                <div className="space-y-8 sm:space-y-10">
                    {timelineItems.map((item, index) => {
                        const isRight = index % 2 !== 0;
                        const hasHighlights = Array.isArray(item.highlights) && item.highlights.length > 0;

                        return (
                            <motion.article
                                key={`${item.period}-${item.title}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="relative md:grid md:grid-cols-2 md:gap-8"
                            >
                                <span className="absolute left-1/2 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-600 shadow-[0_0_0_4px_rgba(191,219,254,0.9)]" />

                                <div className={`pt-12 md:pt-0 ${isRight ? "md:col-start-2" : "md:col-start-1"}`}>
                                    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_12px_35px_-25px_rgba(37,99,235,0.6)] sm:p-6">
                                        <div className="mb-3 flex items-center gap-2">
                                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                                                {item.type}
                                            </span>
                                            <span className="text-sm font-medium text-slate-500">{item.period}</span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{item.title}</h3>
                                        <p className="mt-1 text-sm font-medium text-slate-600 sm:text-base">{item.place}</p>

                                        {hasHighlights && (
                                            <ul className="mt-3 space-y-1 text-sm text-slate-600 sm:text-base">
                                                {item.highlights.map((highlight) => (
                                                    <li key={highlight}>{highlight}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
