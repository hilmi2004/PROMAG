import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleServices = () => setServicesOpen(!servicesOpen);

    const services = [
        { name: 'ICT Solutions', href: '/services/ict' },
        { name: 'Telecommunication', href: '/services/telecom' },
        { name: 'Agricultural Services', href: '/services/agriculture' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm' : 'glass'}`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        Promag
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-800 hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-800 hover:text-primary transition-colors">
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleServices}
                                className="flex items-center text-gray-800 hover:text-primary transition-colors"
                            >
                                Services <FaChevronDown className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden"
                                    >
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/contact" className="text-gray-800 hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
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
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white shadow-lg overflow-hidden"
                        >
                            <div className="px-4 py-2 flex flex-col space-y-4">
                                <Link
                                    href="/"
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

                                <div>
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="flex items-center text-gray-800 hover:text-primary transition-colors py-2"
                                    >
                                        Services <FaChevronDown className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="pl-4"
                                        >
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="block py-2 text-gray-600 hover:text-primary transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>

                                <Link
                                    href="/contact"
                                    className="text-gray-800 hover:text-primary transition-colors py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;