"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {motion} from "motion/react";
import Image from "next/image";
import {assets} from "@/assets/assets";

const web_development = [
    {
        id: 1,
        name: "React.js",
        designation: "Web Development",
        image: assets.logo_1,
    },
    {
        id: 2,
        name: "Node.js",
        designation: "Web Development",
        image: assets.logo_2,
    },
    {
        id: 3,
        name: "Next.js",
        designation: "Web Development",
        image: assets.logo_3,
    },
    {
        id: 4,
        name: "Express.js",
        designation: "Web Development",
        image: assets.logo_4,
    },
    {
        id: 5,
        name: "PHP",
        designation: "Web Development",
        image: assets.logo_5,
    },
];

const programming = [
    {
        id: 1,
        name: "Java",
        designation: "Programming",
        image: assets.logo_6,
    },
    {
        id: 2,
        name: "JavaScript",
        designation: "Programming",
        image: assets.logo_8,
    },
    {
        id: 3,
        name: "Phython",
        designation: "Programming",
        image: assets.logo_7,
    }
];

const database = [
    {
        id: 1,
        name: "MySql",
        designation: "Database Management",
        image: assets.logo_11,
    },
    {
        id: 2,
        name: "MariaDB",
        designation: "Database Management",
        image: assets.logo_9,
    },
    {
        id: 3,
        name: "MongoDB",
        designation: "Database Management",
        image: assets.logo_10,
    },
    {
        id: 4,
        name: "Sequalize ORM",
        designation: "Database Management",
        image: assets.logo_12,
    }
];

const tools = [
    {
        id: 1,
        name: "Visual Studio Code",
        designation: "Tools & IDEs",
        image: assets.logo_13,
    },
    {
        id: 2,
        name: "IntelliJ",
        designation: "Tools & IDEs",
        image: assets.logo_14,
    },
    {
        id: 3,
        name: "MATLAB",
        designation: "Tools & IDEs",
        image: assets.logo_15,
    },
    {
        id: 4,
        name: "Postman",
        designation: "Tools & IDEs",
        image: assets.logo_16,
    }
];

const design = [
    {
        id: 1,
        name: "Figma",
        designation: "UI/UX & Design",
        image: assets.logo_19,
    },
    {
        id: 2,
        name: "Adobe Photoshop",
        designation: "UI/UX & Design",
        image: assets.logo_18,
    },
    {
        id: 3,
        name: "Adobe Illustrator",
        designation: "UI/UX & Design",
        image: assets.logo_17,
    }
];

export function AnimatedTooltipPreview() {
    return (
        // <div className="bg-blue-50 flex justify-center items-center">
            <div className="w-full h-full">
                <motion.h2
                    initial={{y: -20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{delay: 0.5, duration: 0.5}}
                    id={"skill"}
                    className='text-center text-blue-950 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grosky font-semibold mb-10 mt-10'>
                    My Skills
                </motion.h2>

                <div>
                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        transition={{duration: 0.8, type: "spring", stiffness: 100}}
                        className="flex flex-row items-center justify-center gap-5 mb-10 w-full"
                    >
                        <AnimatedTooltip items={web_development}/>
                    </motion.div>
                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        transition={{duration: 0.8, type: "spring", stiffness: 100}}
                        className="flex flex-row items-center justify-center gap-5 mb-10 w-full"
                    >
                        <AnimatedTooltip items={programming}/>
                    </motion.div>
                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        transition={{duration: 0.8, type: "spring", stiffness: 100}}
                        className="flex flex-row items-center justify-center gap-5 mb-10 w-full"
                    >
                        <AnimatedTooltip items={database}/>
                    </motion.div>
                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        transition={{duration: 0.8, type: "spring", stiffness: 100}}
                        className="flex flex-row items-center justify-center gap-5 mb-10 w-full"
                    >
                        <AnimatedTooltip items={tools}/>
                    </motion.div>
                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        transition={{duration: 0.8, type: "spring", stiffness: 100}}
                        className="flex flex-row items-center justify-center gap-5 mb-10 w-full"
                    >
                        <AnimatedTooltip items={design}/>
                    </motion.div>
                </div>
            </div>
        // </div>
    )
        ;
}
