import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/public" className="text-2xl font-bold text-primary">
                    Promag
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/public" className="text-gray-800 hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-800 hover:text-primary transition-colors">
                        About Us
                    </Link>
                    <Link href="/services" className="text-gray-800 hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="/contact" className="text-gray-800 hover:text-primary transition-colors">
                        Contact
                    </Link>
                </div>

                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <Link
                            href="/public"
                            className="text-gray-800 hover:text-primary transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-800 hover:text-primary transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-800 hover:text-primary transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-800 hover:text-primary transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;