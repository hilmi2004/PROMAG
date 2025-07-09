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
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: 'ICT Solutions', href: '/services/ict' },
        { name: 'Telecommunication', href: '/services/telecom' },
        { name: 'Agricultural Services', href: '/services/agric' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-2' : 'glass py-3'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        <span className="gradient-text">
                            <img width="70"   src="/realpromaglogo.png" alt=""/>

                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium"
                            >
                                Services <FaChevronDown className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden"
                                    >
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
                            Contact
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-md hover:shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
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
                            className="md:hidden bg-white rounded-lg shadow-xl mt-2 overflow-hidden"
                        >
                            <div className="px-4 py-3 space-y-3">
                                <Link
                                    href="/"
                                    className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </Link>

                                <div className="py-2">
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium w-full"
                                    >
                                        Services <FaChevronDown className={`ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="pl-4 mt-2 space-y-2"
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
                                    className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                            <div className="px-4 py-3 border-t border-gray-100">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-md hover:shadow-lg"
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