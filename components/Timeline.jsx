import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {motion} from "motion/react";

export function TimelineDemo() {
    const data = [
        {
            title: "From 2025",
            content: (
                <div>
                    <h3 className="flex flex-wrap justify-left items-end mb-3 gap-2 text-xl md:text-2xl font-grosky font-semibold">
                        BSc Hons in Computer Science
                    </h3>
                    <h3 className="flex flex-wrap justify-left items-end mb-3 gap-2 text-xl md:text-1xl font-grosky font-medium">
                        University of Jaffna
                    </h3>
                    <h3 className="flex flex-wrap justify-left items-end gap-2 text-xl md:text-1xl font-grosky font-medium">
                        CGPA: 3.21/4.00
                    </h3>
                </div>
            ),
        },
        {
            title: "2019",
            content: (
                <div>
                    <h3 className="flex flex-wrap justify-left items-end mb-3 gap-2 text-xl md:text-2xl font-grosky font-semibold">
                        G.C.E Advanced Level(Mathemetics Stream)
                    </h3>
                    <h3 className="flex flex-wrap justify-left items-end mb-3 gap-2 text-xl md:text-1xl font-grosky font-medium">
                        St/Michael's College
                    </h3>
                    <h3 className="flex flex-wrap justify-left items-end gap-2 text-xl md:text-1xl font-grosky font-medium">
                        Z-Score: 1.1931
                    </h3>
                </div>
            ),
        },
        {
            title: "2016",
            content: (
                <div>
                    <h3 className="flex flex-wrap justify-left items-end mb-3 gap-2 text-xl md:text-2xl font-grosky font-semibold">
                        G.C.E Ordinary Level
                    </h3>
                    <h3 className="flex flex-wrap justify-left items-end mb-3 gap-2 text-xl md:text-1xl font-grosky font-medium">
                        St/Michael's College
                    </h3>
                    <h3 className="flex flex-wrap justify-left items-end gap-2 text-xl md:text-1xl font-grosky font-medium">
                        Results: 6A 3B
                    </h3>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data}/>
        </div>)
    );
}
