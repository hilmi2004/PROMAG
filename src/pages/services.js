import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaMobileAlt, FaWifi, FaTractor, FaSeedling } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Link from "next/link";

const Services = () => {
    const ictServices = [
        {
            icon: <FaServer className="text-primary text-3xl" />,
            title: 'Cloud Computing',
            description: 'Secure and scalable cloud solutions tailored to your business needs.',
        },
        {
            icon: <FaNetworkWired className="text-primary text-3xl" />,
            title: 'Network Infrastructure',
            description: 'Design, implementation, and maintenance of robust network systems.',
        },
        {
            icon: <FaMobileAlt className="text-primary text-3xl" />,
            title: 'Mobile App Development',
            description: 'Custom mobile applications for iOS and Android platforms.',
        },
    ];

    const telecomServices = [
        {
            icon: <FaWifi className="text-primary text-3xl" />,
            title: 'Broadband Solutions',
            description: 'High-speed internet connectivity for businesses and residences.',
        },
        {
            icon: <FaNetworkWired className="text-primary text-3xl" />,
            title: 'Fiber Optic Networks',
            description: 'State-of-the-art fiber optic infrastructure deployment.',
        },
        {
            icon: <FaMobileAlt className="text-primary text-3xl" />,
            title: 'VoIP Services',
            description: 'Cost-effective voice communication over IP networks.',
        },
    ];

    const agriServices = [
        {
            icon: <FaTractor className="text-primary text-3xl" />,
            title: 'Farm Equipment',
            description: 'Modern agricultural machinery sales and leasing.',
        },
        {
            icon: <FaSeedling className="text-primary text-3xl" />,
            title: 'Agro Consultancy',
            description: 'Expert advice on crop selection, soil management, and farming techniques.',
        },
        {
            icon: <FaServer className="text-primary text-3xl" />,
            title: 'AgriTech Solutions',
            description: 'Technology-driven solutions for modern farming challenges.',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-32">

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl">
                            Comprehensive solutions across ICT, Telecommunication, and Agriculture.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ICT Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="ICT Solutions"
                        subtitle="Cutting-edge technology services to power your digital transformation."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {ictServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-light p-8 rounded-lg"
                            >
                                <div className="flex items-center mb-4">
                                    {service.icon}
                                    <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                                </div>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-primary/10 p-8 rounded-lg"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Custom IT Solutions</h3>
                                <p className="text-gray-600 mb-4">
                                    We understand that every business has unique technology needs. Our team works closely with you to develop tailored IT solutions that align with your specific requirements and goals.
                                </p>
                                <Link href="/contact">
                                    <Button variant="primary" className="cursor-pointer">Request Consultation</Button>

                                </Link>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Telecom Services */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Telecommunication Services"
                        subtitle="Reliable and innovative communication solutions for businesses and individuals."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {telecomServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-lg shadow-sm"
                            >
                                <div className="flex items-center mb-4">
                                    {service.icon}
                                    <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                                </div>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-lg shadow-sm"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-2 lg:order-1">
                                <h3 className="text-2xl font-semibold mb-4">Nationwide Coverage</h3>
                                <p className="text-gray-600 mb-4">
                                    Our telecommunication infrastructure spans across Nigeria, ensuring reliable connectivity even in remote areas. We're committed to bridging the digital divide in Nigeria.
                                </p>
                                <Button variant="primary">View Coverage Map</Button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Agricultural Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Agricultural Services"
                        subtitle="Modern solutions to enhance productivity and sustainability in farming."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {agriServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-light p-8 rounded-lg"
                            >
                                <div className="flex items-center mb-4">
                                    {service.icon}
                                    <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                                </div>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-primary/10 p-8 rounded-lg"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Sustainable Farming</h3>
                                <p className="text-gray-600 mb-4">
                                    We promote agricultural practices that increase productivity while preserving the environment. Our experts provide training and resources to help farmers adopt modern, sustainable techniques.
                                </p>
                                <Button variant="primary">Learn About Our Programs</Button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Services;