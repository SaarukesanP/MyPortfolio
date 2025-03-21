import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
    const [activeSection, setActiveSection] = useState('ui');
    const [imageDimensions, setImageDimensions] = useState({});

    // Array of images for the "ui" section
    const uiImages = [
        { id: 1, src: "https://drive.google.com/uc?export=view&id=11ADXheexcD5JMm6qWiZQX1OAT7OljJjI" },
        { id: 2, src: "https://drive.google.com/uc?export=view&id=1eXT0UyY6W1sfs2gTi3JOvLNxHAcccmJW" },
        { id: 3, src: "https://drive.google.com/uc?export=view&id=1KRvJYK66Wo6qW_HmSuUSfGgbRXTjrcRN" },
        { id: 4, src: "https://images.unsplash.com/photo-1579056259666-b084dd37ed36?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 5, src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 6, src: "https://images.unsplash.com/photo-1579056259666-b084dd37ed36?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    // Function to handle image load and calculate dimensions
    const handleImageLoad = (event, id) => {
        const img = event.target;
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const fixedHeight = 100; // h-52 = 208px (13rem * 16px)
        const calculatedWidth = fixedHeight * aspectRatio;

        setImageDimensions((prev) => ({
            ...prev,
            [id]: { width: calculatedWidth, height: fixedHeight },
        }));
    };

    return (
        <div className='text-center'>
            {/* Heading */}
            <h2 id="skill"
                className="text-center text-blue-950 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grosky font-semibold mb-10">
                My Recent Works
            </h2>

            {/* Center - Navigation Links */}
            <div className="flex-grow flex justify-center">
                <ul className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 rounded-full px-4 md:px-12 py-3`}>
                    <li>
                        <a
                            className={`font-grotesk hover:text-blue-600 transform duration-300 ${
                                activeSection === 'ui' ? 'text-blue-600 font-bold' : ''
                            }`}
                            href="#ui"
                            onClick={(e) => { e.preventDefault(); handleNavClick('ui'); }}
                        >
                            UI/UX Design
                        </a>
                    </li>
                    <li>
                        <a
                            className={`font-grotesk hover:text-blue-600 transform duration-300 ${
                                activeSection === 'poster' ? 'text-blue-600 font-bold' : ''
                            }`}
                            href="#poster"
                            onClick={(e) => { e.preventDefault(); handleNavClick('poster'); }}
                        >
                            Poster Design
                        </a>
                    </li>
                    <li>
                        <a
                            className={`font-grotesk hover:text-blue-600 transform duration-300 ${
                                activeSection === 'logo' ? 'text-blue-600 font-bold' : ''
                            }`}
                            href="#logo"
                            onClick={(e) => { e.preventDefault(); handleNavClick('logo'); }}
                        >
                            Logo Design
                        </a>
                    </li>
                    <li>
                        <a
                            className={`font-grotesk hover:text-blue-600 transform duration-300 ${
                                activeSection === 'photo' ? 'text-blue-600 font-bold' : ''
                            }`}
                            href="#photo"
                            onClick={(e) => { e.preventDefault(); handleNavClick('photo'); }}
                        >
                            Photo Editing
                        </a>
                    </li>
                </ul>
            </div>

            {/* Content Sections */}
            <div className="relative">
                {/* UI/UX Design Section */}
                <div
                    id="ui"
                    className={`mx-12 transition-opacity duration-500 ${activeSection === 'ui' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'}`}
                >
                    <div className="flex flex-wrap justify-center gap-4">
                        {uiImages.map((item) => (
                            <div
                                key={item.id}
                                className="relative"
                                style={{
                                    height: '100px', // Fixed height (h-52 = 208px)
                                    width: imageDimensions[item.id]?.width || '100px', // Dynamic width
                                }}
                            >
                                <Image
                                    src={item.src}
                                    alt={`UI Design ${item.id}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className=""
                                    onLoad={(e) => handleImageLoad(e, item.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Poster Design Section */}
                <div
                    id="poster"
                    className={`mx-12 transition-opacity duration-500 ${activeSection === 'poster' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'}`}
                >
                    <div className={"lg:h-52 lg:w-52 bg-blue-600"}></div>
                </div>

                {/* Logo Design Section */}
                <div
                    id="logo"
                    className={`mx-12 transition-opacity duration-500 ${activeSection === 'logo' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'}`}
                >
                    <div className={"lg:h-52 lg:w-52 bg-green-600"}></div>
                </div>

                {/* Photo Editing Section */}
                <div
                    id="photo"
                    className={`mx-12 transition-opacity duration-500 ${activeSection === 'photo' ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'}`}
                >
                    <div className={"lg:h-52 lg:w-52 bg-yellow-600"}></div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;