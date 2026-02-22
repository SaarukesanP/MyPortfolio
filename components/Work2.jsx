'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const categories = ['Figma Projects', 'Flyers', 'Logo Design', 'T-shirt Design'];

const workItems = [
    { id: '1', src: '/post/1.jpg', category: 'Flyers' },
    { id: '15', src: '/post/15.jpg', category: 'Flyers' },
    { id: '21', src: '/post/21.jpg', category: 'Flyers' },
    { id: '19', src: '/post/19.jpg', category: 'Flyers' },
    { id: '28', src: '/post/28.jpg', category: 'Flyers' },
    { id: '26', src: '/post/26.jpg', category: 'Flyers' },
    { id: '2', src: '/post/2.jpg', category: 'Flyers' },
    { id: '3', src: '/post/3.jpg', category: 'Flyers' },
    { id: '4', src: '/post/4.jpg', category: 'Flyers' },
    { id: '5', src: '/post/5.jpg', category: 'Flyers' },
    { id: '6', src: '/post/6.jpg', category: 'Flyers' },
    { id: '7', src: '/post/7.jpg', category: 'Flyers' },
    { id: '9', src: '/post/9.jpg', category: 'Flyers' },
    { id: '10', src: '/post/10.jpg', category: 'Flyers' },
    { id: '14', src: '/post/14.jpg', category: 'Flyers' },
    { id: '16', src: '/post/16.jpg', category: 'Flyers' },
    { id: '17', src: '/post/17.jpg', category: 'Flyers' },
    { id: '22', src: '/post/22.jpg', category: 'Flyers' },
    { id: '18', src: '/post/18.jpg', category: 'Flyers' },
    { id: '23', src: '/post/23.jpg', category: 'Flyers' },
    { id: '25', src: '/post/25.jpg', category: 'Flyers' },
    { id: '27', src: '/post/27.jpg', category: 'Flyers' },
    { id: '29', src: '/post/29.jpg', category: 'Flyers' },
    { id: '30', src: '/post/30.jpg', category: 'Logo Design' },
    { id: '31', src: '/post/31.jpg', category: 'Logo Design' },
    { id: '32', src: '/post/32.jpg', category: 'Logo Design' },
    { id: '33', src: '/post/33.jpg', category: 'Logo Design' },
    { id: '34', src: '/post/34.jpg', category: 'Logo Design' },
    { id: '35', src: '/post/35.jpg', category: 'Logo Design' },
    { id: '38', src: '/post/38.jpg', category: 'Logo Design' },
    { id: '40', src: '/post/40.jpg', category: 'T-shirt Design' },
    { id: '41', src: '/post/41.jpg', category: 'T-shirt Design' },
    { id: '42', src: '/post/42.jpg', category: 'T-shirt Design' },
    { id: '43', src: '/post/43.jpg', category: 'T-shirt Design' },
    { id: '44', src: '/post/44.jpg', category: 'T-shirt Design' },
    {
        id: '45',
        src: '/post/Figma_1.png',
        category: 'Figma Projects',
        figmaUrl: 'https://www.figma.com/design/uYuVRA8Yk9Cu6bHI4bsVh9/My-Portfolio?node-id=0-1&t=04zXVhGZJAsFCMBG-1',
    },
    {
        id: '46',
        src: '/post/Figma_2.png',
        category: 'Figma Projects',
        figmaUrl: 'https://www.figma.com/design/02a7vO41oYSnL4yv5P8fnF/My-Space?node-id=0-1&t=sfC8IX6Ih63ga8Kc-1',
    },
    {
        id: '47',
        src: '/post/Figma_3.png',
        category: 'Figma Projects',
        figmaUrl: 'https://www.figma.com/design/9Bv8AyvsNTjm96B1wLSV8N/Technical-Assessment---Octopus-BI?node-id=1-19&t=Q2BqgV8J4bbZyOQs-1',
    },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [selectedId, setSelectedId] = useState(null);
    const [showFullList, setShowFullList] = useState(false);

    const filteredItems = useMemo(() => workItems.filter((item) => item.category === activeCategory), [activeCategory]);

    const selectedIndex = filteredItems.findIndex((item) => item.id === selectedId);
    const selectedItem = selectedIndex >= 0 ? filteredItems[selectedIndex] : null;

    const openItem = (id) => setSelectedId(id);
    const closeModal = () => setSelectedId(null);

    const showPrev = () => {
        if (selectedIndex <= 0) return;
        setSelectedId(filteredItems[selectedIndex - 1].id);
    };

    const showNext = () => {
        if (selectedIndex < 0 || selectedIndex >= filteredItems.length - 1) return;
        setSelectedId(filteredItems[selectedIndex + 1].id);
    };

    useEffect(() => {
        if (!selectedItem) return;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') closeModal();
            if (event.key === 'ArrowLeft') showPrev();
            if (event.key === 'ArrowRight') showNext();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [selectedItem, selectedIndex, filteredItems]);

    useEffect(() => {
        setShowFullList(false);
    }, [activeCategory]);

    return (
        <section id="work" className="relative w-full scroll-mt-24 px-5 pb-12 sm:px-8 lg:px-12">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl" />
                <div className="absolute right-0 top-32 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45 }}
                    className="mb-8 text-center"
                >
                    <h2 className="mb-4 font-grosky text-4xl font-light tracking-tight text-blue-950">Recent Works</h2>
                    <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
                        A curated showcase of branding, flyers, apparel and UI work. Open any card to view it in detail.
                    </p>
                </motion.div>

                <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                    isActive
                                        ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                        : 'border-blue-100 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700'
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <div className="relative">
                    <motion.div
                        layout
                        className={`columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4 ${
                            showFullList ? '' : 'max-h-[42rem] overflow-y-auto pr-2'
                        }`}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3, delay: index * 0.015 }}
                                    onClick={() => openItem(item.id)}
                                    className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-blue-100 bg-white text-left shadow-[0_12px_35px_-28px_rgba(37,99,235,0.65)]"
                                >
                                    <div className="relative w-full">
                                        <Image
                                            src={item.src}
                                            alt={`${item.category} work ${item.id}`}
                                            width={900}
                                            height={1200}
                                            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-sm font-medium text-white/90">{item.category}</p>
                                        <p className="text-xs text-white/80">Work #{item.id}</p>
                                    </div>

                                    {item.figmaUrl && (
                                        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm">
                                            Figma <ExternalLink className="h-3 w-3" />
                                        </span>
                                    )}
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {!showFullList && filteredItems.length > 8 && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-50 via-blue-50/90 to-transparent" />
                    )}
                </div>

                {filteredItems.length > 8 && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowFullList((prev) => !prev)}
                            className="rounded-full border border-blue-200 bg-white px-6 py-2.5 text-sm font-medium text-blue-700 transition hover:border-blue-400 hover:bg-blue-50"
                        >
                            {showFullList ? 'Show less' : 'Show more'}
                        </button>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 p-4 backdrop-blur-md sm:p-6"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute inset-0 h-full w-full cursor-default"
                            aria-label="Close preview"
                        />

                        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-center">
                            <motion.div
                                initial={{ scale: 0.96, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.98, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="relative flex h-full w-full items-center justify-center"
                            >
                                <Image
                                    src={selectedItem.src}
                                    alt={`${selectedItem.category} work ${selectedItem.id}`}
                                    width={1600}
                                    height={2000}
                                    className="h-auto max-h-[82vh] w-auto max-w-full object-contain"
                                />
                            </motion.div>

                            <button
                                onClick={showPrev}
                                disabled={selectedIndex <= 0}
                                className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-slate-700 shadow-md backdrop-blur disabled:cursor-not-allowed disabled:opacity-40 sm:left-3"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <button
                                onClick={showNext}
                                disabled={selectedIndex >= filteredItems.length - 1}
                                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-slate-700 shadow-md backdrop-blur disabled:cursor-not-allowed disabled:opacity-40 sm:right-3"
                                aria-label="Next"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
                                {selectedIndex + 1} / {filteredItems.length}
                            </div>

                            {selectedItem.figmaUrl && (
                                <a
                                    href={selectedItem.figmaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-md"
                                >
                                    Open Figma <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            )}

                            <button
                                onClick={closeModal}
                                className="absolute right-4 top-4 rounded-full bg-white/85 p-2 text-slate-700 shadow-md backdrop-blur"
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
