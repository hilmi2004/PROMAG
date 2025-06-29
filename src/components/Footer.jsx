import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-4">Promag</h3>
                        <p className="text-gray-300 mb-4">
                            Providing integrated ICT, Telecommunication, and Agricultural services across Nigeria.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/public" className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    ICT Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Telecommunication
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Agricultural Services
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <address className="text-gray-300 not-italic">
                            <p className="mb-2">123 Business Avenue, Lagos</p>
                            <p className="mb-2">Nigeria</p>
                            <p className="mb-2">Phone: +234 123 456 7890</p>
                            <p className="mb-2">Email: info@promag.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Promag Integrated Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;