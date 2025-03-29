'use client'; // Mark as a Client Component
import { useState } from 'react';
import CategoryNav from '@/components/ui/CategoryNav';
import ImageSlider from '@/components/ui/ImageSlider';
import ImageModal from '@/components/ui/ImageModal';
import Image from "next/image";
import { cn } from '@/lib/utils';
import { assets } from '@/assets/assets';

export const categories = ['Figma Projects', 'Flyers', 'Logo Design', 'T-shirt Design'];

export const images = [
    {
        id: '1',
        src: '/post/1.jpg',
        category: 'Flyers',
    },
    {
        id: '15',
        src: '/post/15.jpg',
        category: 'Flyers',
    },
    {
        id: '21',
        src: '/post/21.jpg',
        category: 'Flyers',
    },
    {
        id: '19',
        src: '/post/19.jpg',
        category: 'Flyers',
    },
    {
        id: '28',
        src: '/post/28.jpg',
        category: 'Flyers',
    },
    {
        id: '26',
        src: '/post/26.jpg',
        category: 'Flyers',
    },
    {
        id: '2',
        src: '/post/2.jpg',
        category: 'Flyers',
    },
    {
        id: '3',
        src: '/post/3.jpg',
        category: 'Flyers',
    },
    {
        id: '4',
        src: '/post/4.jpg',
        category: 'Flyers',
    },
    {
        id: '5',
        src: '/post/5.jpg',
        category: 'Flyers',
    },
    {
        id: '6',
        src: '/post/6.jpg',
        category: 'Flyers',
    },
    {
        id: '7',
        src: '/post/7.jpg',
        category: 'Flyers',
    },
    {
        id: '9',
        src: '/post/9.jpg',
        category: 'Flyers',
    },
    {
        id: '10',
        src: '/post/10.jpg',
        category: 'Flyers',
    },
    {
        id: '14',
        src: '/post/14.jpg',
        category: 'Flyers',
    },
    {
        id: '16',
        src: '/post/16.jpg',
        category: 'Flyers',
    },
    {
        id: '17',
        src: '/post/17.jpg',
        category: 'Flyers',
    },
    {
        id: '22',
        src: '/post/22.jpg',
        category: 'Flyers',
    },
    {
        id: '18',
        src: '/post/18.jpg',
        category: 'Flyers',
    },
    {
        id: '23',
        src: '/post/23.jpg',
        category: 'Flyers',
    },
    {
        id: '25',
        src: '/post/25.jpg',
        category: 'Flyers',
    },
    {
        id: '27',
        src: '/post/27.jpg',
        category: 'Flyers',
    },
    {
        id: '29',
        src: '/post/29.jpg',
        category: 'Flyers',
    },
    {
        id: '30',
        src: '/post/30.jpg',
        category: 'Logo Design',
    },
    {
        id: '31',
        src: '/post/31.jpg',
        category: 'Logo Design',
    },
    {
        id: '32',
        src: '/post/32.jpg',
        category: 'Logo Design',
    },
    {
        id: '33',
        src: '/post/33.jpg',
        category: 'Logo Design',
    },
    {
        id: '34',
        src: '/post/34.jpg',
        category: 'Logo Design',
    },
    {
        id: '35',
        src: '/post/35.jpg',
        category: 'Logo Design',
    },
    {
        id: '38',
        src: '/post/38.jpg',
        category: 'Logo Design',
    },
    {
        id: '40',
        src: '/post/40.jpg',
        category: 'T-shirt Design',
    },
    {
        id: '41',
        src: '/post/41.jpg',
        category: 'T-shirt Design',
    },
    {
        id: '42',
        src: '/post/42.jpg',
        category: 'T-shirt Design',
    },
    {
        id: '43',
        src: '/post/43.jpg',
        category: 'T-shirt Design',
    },
    {
        id: '44',
        src: '/post/44.jpg',
        category: 'T-shirt Design',
    },
    {
        id: '45',
        src: '/post/Figma_1.png',
        // alt: 'https://www.figma.com/design/uYuVRA8Yk9Cu6bHI4bsVh9/My-Portfolio?node-id=0-1&t=04zXVhGZJAsFCMBG-1',
        alt: <a
            href= 'https://www.figma.com/design/uYuVRA8Yk9Cu6bHI4bsVh9/My-Portfolio?node-id=0-1&t=04zXVhGZJAsFCMBG-1'
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-14 right-10 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
            <Image
                src={assets.figma2}
                alt="Figma"
                className="w-6 cursor-pointer transition-transform duration-300 hover:scale-110"
            />
        </a>,
        category: 'Figma Projects',
    },
    {
        id: '46',
        src: '/post/Figma_2.png',
        // alt: 'https://www.figma.com/design/02a7vO41oYSnL4yv5P8fnF/My-Space?node-id=0-1&t=sfC8IX6Ih63ga8Kc-1',
        alt:
        <a
            href= 'https://www.figma.com/design/02a7vO41oYSnL4yv5P8fnF/My-Space?node-id=0-1&t=sfC8IX6Ih63ga8Kc-1'
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-14 right-10 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
            <Image
                src={assets.figma2}
                alt="Figma"
                className="w-6 cursor-pointer transition-transform duration-300 hover:scale-110"
            />
        </a>,
        category: 'Figma Projects',
    },
    {
        id: '47',
        src: '/post/Figma_3.png',
        // alt: 'https://www.figma.com/design/02a7vO41oYSnL4yv5P8fnF/My-Space?node-id=0-1&t=sfC8IX6Ih63ga8Kc-1',
        alt:
            <a
                href= 'https://www.figma.com/design/9Bv8AyvsNTjm96B1wLSV8N/Technical-Assessment---Octopus-BI?node-id=1-19&t=Q2BqgV8J4bbZyOQs-1'
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-14 right-10 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
                <Image
                    src={assets.figma2}
                    alt="Figma"
                    className="w-6 cursor-pointer transition-transform duration-300 hover:scale-110"
                />
            </a>,
        category: 'Figma Projects',
    }

];


export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div id="work" className=" text-center mb-12 scroll-mt-24">
                <h1 className="text-4xl font-light tracking-tight text-blue-950 mb-4 font-grosky">
                    Recent Works
                </h1>
                <p className="text-base px-[12%] text-gray-600 mx-auto animate-fade-in font-grosky mb-6">
                    Explore my creative work across different categories. Click on any image to view.
                </p>

            <main className="container mx-auto px-4">
                {/* Category Navigation */}
                <CategoryNav
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                />

                {/* Category Title */}
                <div className="mb-6 text-center animate-fade-in">
                    <h2 className="text-2xl font-light text-gray-900">
                        {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                    </h2>
                    <div
                        className={cn(
                            "w-16 h-1 bg-brand-dark-blue mx-auto mt-2",
                            "rounded-full transition-all duration-500"
                        )}
                    />
                </div>

                {/* Image Slider */}
                <div className="">
                    <ImageSlider
                        images={images}
                        category={activeCategory}
                        onImageClick={handleImageClick}
                    />
                </div>
            </main>

            {/* Image Modal */}
            <ImageModal image={selectedImage} onClose={closeModal} />
        </div>
    );
}