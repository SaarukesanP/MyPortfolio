"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div id="project" className="w-full mb-12 flex justify-center items-center scroll-mt-24">
            <div className="w-full h-full scroll-mt-20">
                {/* Heading */}
                <h2 className="text-center text-4xl font-light tracking-tight text-blue-950 mb-12 font-grosky">
                    Projects
                </h2>

                {/* Carousel */}
                <Carousel items={cards} />
            </div>
        </div>
    );
}

const data = [
    {
        title: "Hostel Management System for Welfare Branch, University of Jaffna",
        duration: "Nov 2023 - Nov 2024",
        organization: "University of Jaffna (MyUoJ)",
        technologies: ["React.js", "Node.js with Express.js", "MySQL with Sequelize ORM"],
        content: "Contributed to the development of the Welfare Hostel Management System, a web-based platform designed to streamline and enhance hostel management at the University of Jaffna. The system provides features for hostel registration, management, and monitoring, making it easier for both students and administrators to manage hostel-related activities. This project was part of MyUoJ, aimed at improving campus life through digital solutions.",
        contributors: ["R. N. Viththagan", "G. Dharshika", "I. V. Mary Joshna", "A. Bamini"],
        liveLinks: [
            { label: "Admin Portal", url: "https://www.myuoj.jfn.ac.lk" },
            { label: "Student Portal", url: "https://www.mys.jfn.ac.lk" }
        ],
        src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Exam Registration System, Faculty of Science, University of Jaffna",
        duration: "Aug 2023 - Nov 2023",
        organization: "University of Jaffna (MyUoJ)",
        technologies: ["PHP", "Tailwind CSS", "JavaScript", "MySQL"],
        content: "Our team successfully developed an Exam Registration System as part of the Web Technologies course during our second year at university. This comprehensive system streamlines the exam management process for the Dean's Office, Science Department. It is designed to cater to various administrative roles and student needs, ensuring efficiency and accuracy in exam-registration related tasks. ",
        contributors: ["R. N. Viththagan", "Chamod Rashmika", "I. L. Devapriya"],
        githubLink: "https://github.com/RNViththagan/ERS-Web_Technologies",
        src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Surface Defect Detection and Segmentation using Semi-Supervised Learning",
        duration: "2025",
        technologies: ["Pytorch"],
        content: "An individual research project focused on developing an automated defect detection system based on a deep learning model to enhance efficiency in real-world industrial applications. ",
        src: "https://images.unsplash.com/photo-1520697517317-6767553cc51a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


const DummyContent = ({ project }) => {
    return (
        <div className="p-8 md:p-14 rounded-3xl mb-4">
            {/* Organization */}
            {project.organization && (
                <p className="text-neutral-700 dark:text-neutral-300 font-medium text-sm md:text-lg">
                    <span className="font-bold">Organization:</span> {project.organization}
                </p>
            )}

            {/* Duration */}
            {project.duration && (
                <p className="text-neutral-700 dark:text-neutral-300 font-medium text-sm md:text-lg">
                    <span className="font-bold">Duration:</span> {project.duration}
                </p>
            )}

            {/* Description */}
            {project.content && (
                <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans mb-4 text-justify">
                    {project.content}
                </p>
            )}

            {/* Technologies Used */}
            {project.technologies?.length > 0 && (
                <p className="text-neutral-700 dark:text-neutral-300 font-medium text-sm md:text-lg">
                    <span className="font-bold">Technologies Used:</span> {project.technologies.join(", ")}
                </p>
            )}

            {/* Contributors */}
            {project.contributors?.length > 0 && (
                <p className="text-neutral-700 dark:text-neutral-300 font-medium text-sm md:text-lg mt-2">
                    <span className="font-bold">Contributors:</span> {project.contributors.join(", ")}
                </p>
            )}

            {/* Live Links */}
            {project.liveLinks?.length > 0 && (
                <div className="mt-4">
                    <span className="font-bold text-neutral-700 dark:text-neutral-300 text-sm md:text-lg">
                        Live Links:
                    </span>
                    <ul className="list-disc list-inside text-blue-600 dark:text-blue-400">
                        {project.liveLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-blue-800"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Attach DummyContent dynamically to each timeline project
data.forEach((project) => {
    project.contentComponent = <DummyContent project={project} />;
});

export { data };
