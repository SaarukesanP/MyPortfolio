import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "motion/react";

export function TimelineDemo() {
    const timelineData = [
        {
            title: "From 2021" ,
            study: "BSc Hons in Computer Science",
            details: [
                { text: "University of Jaffna, Sri Lanka"},
                { text: "CGPA: 3.21/4.00"}
            ]
        },
        {
            title: "2019",
            study: "G.C.E Advanced Level (Mathematics Stream)",
            details: [
                { text: "St/Michael's College, Batticaloa"},
                { text: "Z-Score: 1.1931"}
            ]
        },
        // {
        //     title: "2016",
        //     details: [
        //         { text: "G.C.E Ordinary Level"},
        //         { text: "St. Michael's College"},
        //         { text: "Results: 6A 3B"}
        //     ]
        // }
    ];

    const formattedData = timelineData.map((item) => ({
        title: item.title,
        study: item.study,
        content: (
            <div>
                {item.details.map((detail, index) => (
                    <h3 key={index} className={`${detail.className}`}>
                        {detail.text}
                    </h3>
                ))}
            </div>
        )
    }));

    return (
        <div id="education" className="w-full mb-12 scroll-mt-24">
            {/* Title */}
            <h2 className="text-center text-4xl font-light tracking-tight text-blue-950 mb-12 font-grosky">
                Education
            </h2>
            <Timeline data={formattedData} />
        </div>
    );
}
