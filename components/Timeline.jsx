import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "motion/react";

export function TimelineDemo() {
    const timelineData = [
        {
            title: "From 2021" ,
            details: [
                { text: "BSc Hons in Computer Science"},
                { text: "University of Jaffna"},
                { text: "CGPA: 3.21/4.00"}
            ]
        },
        {
            title: "2019",
            details: [
                { text: "G.C.E Advanced Level (Mathematics Stream)" },
                { text: "St. Michael's College"},
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
        <div className="w-full">
            {/* Title */}
            <h2 className="text-center text-4xl font-light tracking-tight text-blue-950 mb-4 font-grosky">
                Education
            </h2>
            <Timeline data={formattedData} />
        </div>
    );
}
