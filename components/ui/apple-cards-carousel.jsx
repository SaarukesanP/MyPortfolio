"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {assets} from "@/assets/assets";

export const CarouselContext = createContext({
    onCardClose: () => {},
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
    const carouselRef = React.useRef(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto pb-3  lg:pb-6 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}>
                    <div
                        className={cn(
                            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
                        )}></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "max-w-7xl mx-auto "
                        )}>
                        {items.map((item, index) => (
                            <div
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl ">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-2 md:mr-10">
                    <button
                        className="relative z-40 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}>
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        className="relative z-40 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}>
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({ card, index, layout = false }) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const { onCardClose, currentIndex } = useContext(CarouselContext);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useOutsideClick(containerRef, () => handleClose());

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    return (
        <>
            {open && (
                <div className="fixed inset-0 h-screen z-50 overflow-auto">
                    <div className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
                    <div
                        ref={containerRef}
                        className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative">
                        <button
                            className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                            onClick={handleClose}>
                            <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                        </button>
                        <p className="text-base font-medium text-black dark:text-white">
                            {card.duration}
                        </p>
                        <p className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white">
                            {card.title}
                        </p>
                        <div className="py-10">{card.contentComponent}</div>
                    </div>
                </div>
            )}

            <button
                onClick={handleOpen}
                className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-48 w-80 md:h-64 md:w-96 lg:h-80 lg:w-[35rem] overflow-hidden flex flex-col items-start justify-start relative z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-700/50 to-transparent z-30 pointer-events-none" />
                <div className="relative z-40 p-6">
                    <p className="text-white text-sm md:text-base font-medium font-sans text-left">
                        {card.duration}
                    </p>
                    <p className="text-white text-xl md:text-3xl font-semibold max-w-3xs text-left [text-wrap:balance] font-sans mt-2">
                        {card.title}
                    </p>
                </div>
                {/* GitHub Logo (Conditional Rendering) */}
                {card.githubLink && (
                    <a
                        href={card.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 z-50 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        <Image
                            src={assets.github}
                            alt="GitHub"
                            className="w-4 cursor-pointer transition-transform duration-300 hover:scale-125"
                        />
                    </a>
                )}
                <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute z-10 inset-0"
                />
            </button>
        </>
    );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <Image
            className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};