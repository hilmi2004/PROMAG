import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../ServiceFeatures.js';

const AgriculturePage = () => {
    const features = [
        {
            title: "Smart Farming",
            description: "IoT-enabled solutions for precision agriculture.",
            icon: "🌱"
        },
        {
            title: "Equipment Leasing",
            description: "Modern farming machinery on flexible terms.",
            icon: "🚜"
        },
        {
            title: "Agro Consultancy",
            description: "Expert advice from our agricultural specialists.",
            icon: "🧑‍🌾"
        }
    ];

    const programs = [
        {
            title: "Smallholder Support",
            description: "Programs designed for small-scale farmers"
        },
        {
            title: "Commercial Solutions",
            description: "Enterprise-grade farming solutions"
        },
        {
            title: "Training Programs",
            description: "Capacity building for modern techniques"
        }
    ];

    return (
        <>
            <ServiceHero
                title="Agricultural Services"
                subtitle="Modern solutions for Nigeria's agricultural revolution"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Agricultural Offerings"
                        subtitle="Bridging technology and traditional farming"
                        center
                    />

                    <ServiceFeatures features={features} />

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <h3 className="text-2xl font-bold mb-6">Sustainable Farming Practices</h3>
                            <p className="text-gray-600 mb-6">
                                We promote agricultural methods that increase productivity while preserving the environment. Our experts provide training and resources to help farmers adopt modern, sustainable techniques that are tailored to Nigeria's unique climate and soil conditions.
                            </p>
                            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
                                Learn About Sustainability
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-xl overflow-hidden aspect-video order-1 lg:order-2"
                        >
                            {/* Agriculture illustration placeholder */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-green-600 to-primary text-white text-2xl">
                                Smart Farming
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Programs"
                        subtitle="Comprehensive support for all farming scales"
                        center
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="text-4xl mb-4">
                                    {index === 0 && "👨‍🌾"}
                                    {index === 1 && "🏢"}
                                    {index === 2 && "🎓"}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                                <p className="text-gray-600">{program.description}</p>
                                <button className="mt-4 text-primary font-medium hover:underline">
                                    Learn more →
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Impact"
                        center
                        white
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                        {[
                            { value: "500+", label: "Farmers Supported" },
                            { value: "10K+", label: "Acres Covered" },
                            { value: "75%", label: "Yield Increase" },
                            { value: "100%", label: "Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6"
                            >
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AgriculturePage;