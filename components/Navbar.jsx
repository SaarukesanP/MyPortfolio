"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = ({ activeCategory, setActiveCategory }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = [
        { name: "UI/UX Design", id: "ui-ux" },
        { name: "Poster Design", id: "poster" },
        { name: "Logo Design", id: "logo" },
        { name: "Photo Editing", id: "photo" },
    ];


    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-xl font-bold text-blue-600">My Portfolio</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`#${category.id}`}
                                onClick={() => setActiveCategory(category.id)}
                                className={`text-gray-700 hover:text-blue-600 ${
                                    activeCategory === category.id ? "text-blue-600 font-semibold" : ""
                                }`}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-blue-600"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-lg"
                    >
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`#${category.id}`}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${
                                    activeCategory === category.id ? "text-blue-600 font-semibold" : ""
                                }`}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;