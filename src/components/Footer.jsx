import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Service links data
    const services = [
        { name: 'ICT Solutions', path: '/services/ict' },
        { name: 'Telecommunication', path: '/services/telecom' },
        { name: 'Agricultural', path: '/services/agric' },
        { name: 'Consulting', path: '/contact' }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="gradient-text">
                            <img width="150"    src="/try100logo.png" alt=""/>
                            </span>
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Pioneering integrated services in Nigeria.
                        </p>
                        <div className="flex space-x-4">
                            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-3">
                            {['About Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.path}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
                        <address className="text-gray-300 not-italic space-y-3">
                            <p>13 Sokoto Road GRA , Bauchi , Nigeria</p>
                            <p>27 BNet Estate Anumba District , Abuja , Nigeria</p>
                            <p>Nigeria</p>
                            <p>info@promag.com</p>
                            <p>+234 70 359 38674</p>
                            <p></p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Promag Integrated Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;