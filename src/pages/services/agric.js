import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../ServiceFeatures.js';

const AgriculturePage = () => {
    const features = [
        {
            title: "Smart Farming",
            description: "IoT-enabled solutions for precision agriculture with real-time monitoring and data analytics.",
            icon: "🌱"
        },
        {
            title: "Equipment Leasing",
            description: "Access to modern farming machinery on flexible terms with maintenance included.",
            icon: "🚜"
        },
        {
            title: "Agro Consultancy",
            description: "Expert advice from our agricultural specialists tailored to your specific needs.",
            icon: "🧑‍🌾"
        },
        {
            title: "Crop Management",
            description: "Comprehensive solutions from planting to harvest with optimized yield strategies.",
            icon: "🌾"
        },
        {
            title: "Soil Analysis",
            description: "Advanced soil testing and nutrient management recommendations.",
            icon: "🔬"
        },
        {
            title: "Training Programs",
            description: "Capacity building for modern farming techniques and sustainable practices.",
            icon: "🎓"
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
                        title="Our Agricultural Solutions"
                        subtitle="Bridging technology and traditional farming for maximum productivity"
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
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Sustainable Farming Practices</h3>
                            <p className="text-gray-700 mb-6 text-lg">
                                We promote agricultural methods that increase productivity while preserving the environment. Our experts provide training and resources to help farmers adopt modern, sustainable techniques that are tailored to Nigeria's unique climate and soil conditions.
                            </p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden aspect-video order-1 lg:order-2 shadow-xl"
                        >
                            <img
                                src="/agricpromag.jpg"
                                alt="Smart Farming Solutions"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end p-8">
                                <h4 className="text-white text-xl font-semibold">Smart Farming in Action</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default AgriculturePage;