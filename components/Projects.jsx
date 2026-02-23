"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const data = [
    {
        id: "hostel-management",
        title: "Hostel Management System for Welfare Branch, University of Jaffna",
        duration: "Nov 2023 - Nov 2024",
        organization: "University of Jaffna (MyUoJ)",
        technologies: ["React.js", "Node.js with Express.js", "MySQL with Sequelize ORM"],
        content:
            "Contributed to the development of a web-based platform designed to streamline hostel registration, management and monitoring for students and administrators.",
        contributors: ["R. N. Viththagan", "G. Dharshika", "I. V. Mary Joshna", "A. Bamini"],
        liveLinks: [
            { label: "Admin Portal", url: "https://www.myuoj.jfn.ac.lk" },
            { label: "Student Portal", url: "https://www.mys.jfn.ac.lk" },
        ],
        src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
    },
    {
        id: "exam-registration",
        title: "Exam Registration System, Faculty of Science, University of Jaffna",
        duration: "Aug 2023 - Nov 2023",
        organization: "University of Jaffna (MyUoJ)",
        technologies: ["PHP", "Tailwind CSS", "JavaScript", "MySQL"],
        content:
            "Built a complete exam registration workflow for the Dean's Office to handle student and administrative exam processes accurately and efficiently.",
        contributors: ["R. N. Viththagan", "Chamod Rashmika", "I. L. Devapriya", "Asintha Udeshitha"],
        githubLink: "https://github.com/RNViththagan/ERS-Web_Technologies",
        src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "surface-defect",
        title: "Surface Defect Detection and Segmentation using Semi-Supervised Learning",
        duration: "2025",
        technologies: ["PyTorch"],
        content:
            "Individual research on automated defect detection using deep learning to improve reliability and efficiency in industrial inspection workflows.",
        src: "https://images.unsplash.com/photo-1520697517317-6767553cc51a?q=80&w=1974&auto=format&fit=crop",
    },
];

export function AppleCardsCarouselDemo() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="project" className="relative mb-12 w-full scroll-mt-24 px-5 sm:px-8 lg:px-12">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-0 top-8 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
                <div className="absolute right-0 top-28 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45 }}
                    className="mb-8 text-center"
                >
                    <h2 className="mb-3 font-grosky text-4xl font-light tracking-tight text-blue-950">Projects</h2>
                    <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
                        Selected work focused on product development, academic systems, and applied AI research.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {data.map((project, index) => {
                        return (
                            <motion.button
                                key={project.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onClick={() => setSelectedProject(project)}
                                className="relative h-44 overflow-hidden rounded-2xl border border-blue-100 text-left transition-all hover:border-blue-300 sm:h-48"
                            >
                                <div className="absolute inset-0">
                                    <img
                                        src={project.src}
                                        alt={project.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/45 to-transparent" />
                                <div className="relative z-10 flex h-full flex-col justify-end p-4">
                                    <p className="text-xs font-medium text-white/80">
                                        {project.duration}
                                    </p>
                                    <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-white sm:text-base">
                                        {project.title}
                                    </h4>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 h-full w-full cursor-default"
                            aria-label="Close project preview"
                        />

                        <motion.article
                            initial={{ opacity: 0, y: 14, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.25 }}
                            className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-3xl border border-blue-100 bg-white shadow-2xl"
                        >
                            <div className="p-5 sm:p-7">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                                >
                                    Close
                                </button>
                                <p className="text-xs font-semibold text-blue-700">{selectedProject.duration}</p>
                                <h3 className="mt-1 text-xl font-semibold leading-tight text-slate-900 sm:text-2xl">
                                    {selectedProject.title}
                                </h3>
                                {selectedProject.organization && (
                                    <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
                                        {selectedProject.organization}
                                    </p>
                                )}
                                <p className="mt-4 text-sm text-slate-600 sm:text-base">{selectedProject.content}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {selectedProject.technologies?.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {selectedProject.contributors?.length > 0 && (
                                    <p className="mt-4 text-sm text-slate-600">
                                        <span className="font-semibold text-slate-700">Contributors:</span>{" "}
                                        {selectedProject.contributors.join(", ")}
                                    </p>
                                )}

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {selectedProject.liveLinks?.map((link) => (
                                        <a
                                            key={link.url}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-700"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    {selectedProject.githubLink && (
                                        <a
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-400"
                                        >
                                            GitHub Repo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export { data };
