import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FlipWords } from '@/components/ui/flip-words';

const Header2 = () => {
    const words = ['Full-Stack Development', 'UI/UX Design', 'Graphic Design'];

    return (
        <section className="relative w-full overflow-hidden px-5 pt-28 pb-14 sm:px-8 sm:pt-32 lg:px-12">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl sm:h-80 sm:w-80" />
                <div className="absolute right-0 top-28 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl sm:h-80 sm:w-80" />
            </div>

            <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-2 py-2 text-center sm:px-4 lg:px-6">
                <Image
                    src={assets.profile_img}
                    alt="Saarukesan profile"
                    className="mb-6 h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg shadow-blue-500/20 sm:h-36 sm:w-36"
                    priority
                />

                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700/90 sm:text-base">
                    Hello, I&apos;m
                </p>

                <h1 className="mb-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    Saarukesan
                </h1>

                <div className="mb-1 min-h-[3rem] sm:min-h-[3.75rem] lg:min-h-[4.5rem]">
                    <FlipWords
                        className="text-3xl font-semibold leading-tight text-blue-600 sm:text-5xl lg:text-6xl"
                        words={words}
                    />
                </div>

                <p className="mx-auto mt-0 max-w-2xl px-2 text-sm font-medium text-slate-600 sm:text-base lg:text-lg">
                    Associate Software Engineer
                </p>

                <div className="mt-4 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                    <a
                        href="/p_saarukesan.pdf"
                        download
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto sm:text-base"
                    >
                        Download My CV
                        <Image src={assets.download_icon} alt="Download CV" className="h-4 w-4" />
                    </a>
                </div>

                <p className="mt-7 text-sm font-medium text-slate-500">Follow me</p>

                <div className="mt-3 flex items-center gap-5">
                    <a
                        href="https://www.instagram.com/saarukesan.p/?__pwa=1"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2 shadow-md shadow-blue-100 transition-transform duration-300 hover:-translate-y-1"
                    >
                        <Image src={assets.instagram} alt="Instagram" className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                    <a
                        href="https://github.com/SaarukesanP"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2 shadow-md shadow-blue-100 transition-transform duration-300 hover:-translate-y-1"
                    >
                        <Image src={assets.github} alt="GitHub" className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                    <a
                        href="https://x.com/SaaruK27"
                        aria-label="X"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2 shadow-md shadow-blue-100 transition-transform duration-300 hover:-translate-y-1"
                    >
                        <Image src={assets.x} alt="Twitter/X" className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Header2;
