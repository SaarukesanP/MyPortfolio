"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "motion/react";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="w-full h-full">
            <motion.h2
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grosky font-semibold"
            >
                My Projects
            </motion.h2>
            <Carousel items={cards}/>
        </div>
        </div>
    );
}

const DummyContent = ({project}) => {
    return (
        <div className="p-8 md:p-14 rounded-3xl mb-4">
            {/* Description */}
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans mb-4 text-justify">
                {project.description}
            </p>

            {/* Technologies Used */}
            <p className="text-neutral-700 dark:text-neutral-300 font-medium text-sm md:text-lg">
                <span className="font-bold">Technologies Used:</span> {project.technologies.join(", ")}
            </p>

            {/* Contributors */}
            <p className="text-neutral-700 dark:text-neutral-300 font-medium text-sm md:text-lg mt-2">
                <span className="font-bold">Contributors:</span> {project.contributors.join(", ")}
            </p>

            {/* Image */}
            <Image
                src={project.src}
                alt={project.title}
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-4"
            />
        </div>
    );
};

const data = [
    {
        category: "2024",
        title: "Hostel Management System for Welfare Branch, University of Jaffna",
        description:
            "A web-based platform designed to streamline and enhance hostel management at the University of Jaffna. The system provides features for hostel registration, management, and monitoring, making it easier for both students and administrators to manage hostel-related activities. This project is part of MyUoJ, aimed at improving campus life through digital solutions.",
        technologies: ["React.js", "Node.js", "Express", "MariaDB"],
        contributors: ["Premkumar Saarukesan", "John Doe", "Jane Smith"],
        src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        category: "2023",
        title: "Exam Registration System, Faculty of Science, University of Jaffna",
        description:
            "An online system for students to register for semester examinations at the Faculty of Science, University of Jaffna. The platform enables students to enroll easily, while administrators can track and manage registrations effectively.",
        technologies: ["PHP", "HTML", "Tailwind CSS", "JavaScript"],
        contributors: ["Saarukesan P", "Alice Johnson", "Bob Martin"],
        src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        category: "2025",
        title: "Surface Defect Detection and Segmentation using Semi-Supervised Learning",
        description:
            "A defect detection model using semi-supervised learning for accurate segmentation and identification of defects in industrial parts.",
        technologies: ["PyTorch", "U-Net", "Deep Learning"],
        contributors: ["Saarukesan P", "Michael Green", "Sophia Lee"],
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

// Attach DummyContent dynamically to each project
data.forEach((project) => {
    project.content = <DummyContent project={project} />;
});

export { data };
