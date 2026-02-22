"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const skills = [
    { id: "react", name: "React.js", designation: "Web Development", image: assets.logo_1 },
    { id: "node", name: "Node.js", designation: "Web Development", image: assets.logo_2 },
    { id: "next", name: "Next.js", designation: "Web Development", image: assets.logo_3 },
    { id: "express", name: "Express.js", designation: "Web Development", image: assets.logo_4 },
    { id: "php", name: "PHP", designation: "Web Development", image: assets.logo_5 },
    { id: "java", name: "Java", designation: "Programming", image: assets.logo_6 },
    { id: "javascript", name: "JavaScript", designation: "Programming", image: assets.logo_8 },
    { id: "python", name: "Python", designation: "Programming", image: assets.logo_7 },
    { id: "mysql", name: "MySql", designation: "Database Management", image: assets.logo_11 },
    { id: "mariadb", name: "MariaDB", designation: "Database Management", image: assets.logo_9 },
    { id: "mongodb", name: "MongoDB", designation: "Database Management", image: assets.logo_10 },
    { id: "sequelize", name: "Sequelize ORM", designation: "Database Management", image: assets.logo_12 },
    { id: "vscode", name: "Visual Studio Code", designation: "Tools & IDEs", image: assets.logo_13 },
    { id: "intellij", name: "IntelliJ", designation: "Tools & IDEs", image: assets.logo_14 },
    { id: "matlab", name: "MATLAB", designation: "Tools & IDEs", image: assets.logo_15 },
    { id: "postman", name: "Postman", designation: "Tools & IDEs", image: assets.logo_16 },
    { id: "figma", name: "Figma", designation: "UI/UX & Design", image: assets.logo_19 },
    { id: "photoshop", name: "Adobe Photoshop", designation: "UI/UX & Design", image: assets.logo_18 },
    { id: "illustrator", name: "Adobe Illustrator", designation: "UI/UX & Design", image: assets.logo_17 },
];

export function AnimatedTooltipPreview() {
    const [hoveredInfo, setHoveredInfo] = useState(null);

    const marqueeItems = useMemo(() => [...skills, ...skills], []);

    return (
        <section id="skill" className="relative isolate w-full scroll-mt-24 pb-12">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <h2 className="mb-3 text-center font-grosky text-4xl font-light tracking-tight text-blue-950">Skills</h2>
            </div>

            <div className="group relative left-1/2 w-screen -translate-x-1/2 overflow-x-hidden overflow-y-visible pt-16 pb-10">
                <div className="marquee-track group-hover:[animation-play-state:paused]">
                    {marqueeItems.map((skill, index) => {
                        const key = `${skill.id}-${index}`;
                        const isActive = hoveredInfo?.key === key;
                        const side = hoveredInfo?.side || "right";
                        const activeIndex = hoveredInfo?.index;
                        const shiftOffset = "11rem";
                        const shiftRight = activeIndex !== undefined && side === "right" && index > activeIndex;
                        const shiftLeft = activeIndex !== undefined && side === "left" && index < activeIndex;

                        return (
                            <div
                                key={key}
                                className="relative mx-4 flex h-24 w-24 shrink-0 items-center justify-center transition-transform duration-300 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                                style={{
                                    transform: shiftRight
                                        ? `translateX(${shiftOffset})`
                                        : shiftLeft
                                            ? `translateX(-${shiftOffset})`
                                            : "translateX(0)",
                                }}
                                onMouseEnter={(event) => {
                                    const rect = event.currentTarget.getBoundingClientRect();
                                    const cardWidth = 230;
                                    const gap = 16;
                                    const spaceRight = window.innerWidth - rect.right;
                                    const nextSide = spaceRight >= cardWidth + gap ? "right" : "left";
                                    setHoveredInfo({ key, side: nextSide, index });
                                }}
                                onMouseLeave={() => setHoveredInfo(null)}
                            >
                                <span
                                    className={`pointer-events-none absolute top-1/2 z-[9999] w-max max-w-[220px] -translate-y-1/2 rounded-xl border border-sky-100/40 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-800/90 px-3 py-2 text-left shadow-[0_12px_30px_-12px_rgba(14,116,144,0.85)] backdrop-blur-md transition-all duration-250 ${
                                        side === "right" ? "left-full ml-3" : "right-full mr-3"
                                    } ${
                                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                    }`}
                                >
                                    <span className="block text-xs font-semibold tracking-wide text-white">{skill.name}</span>
                                    <span className="block text-[11px] font-medium text-cyan-100/90">{skill.designation}</span>
                                    <span
                                        className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-sky-100/30 bg-cyan-900/80 ${
                                            side === "right"
                                                ? "-left-1.5 border-b border-l"
                                                : "-right-1.5 border-r border-t"
                                        }`}
                                    />
                                </span>

                                <Image
                                    src={skill.image}
                                    alt={skill.name}
                                    className={`h-16 w-16 object-contain transition-all duration-300 sm:h-20 sm:w-20 lg:h-24 lg:w-24 ${
                                        isActive ? "grayscale-0 scale-110 -translate-y-1 opacity-100" : "grayscale scale-100 translate-y-0 opacity-75"
                                    }`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .marquee-track {
                    width: max-content;
                    display: flex;
                    align-items: center;
                    animation: marquee 34s linear infinite;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
}
