import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../ServiceFeatures.js';

const TelecomPage = () => {
    const features = [
        {
            title: "Fiber Optic Networks",
            description: "High-speed connectivity with our state-of-the-art fiber infrastructure.",
            icon: "🔌"
        },
        {
            title: "5G Solutions",
            description: "Next-generation wireless technology for businesses.",
            icon: "📶"
        },
        {
            title: "VoIP Services",
            description: "Cost-effective voice communication over IP networks.",
            icon: "📞"
        }
    ];

    const solutions = [
        {
            title: "Enterprise Connectivity",
            description: "Dedicated high-bandwidth solutions for large organizations."
        },
        {
            title: "Last-Mile Solutions",
            description: "Bridging the connectivity gap in underserved areas."
        },
        {
            title: "IoT Infrastructure",
            description: "Support for smart devices and connected systems."
        }
    ];

    return (
        <>
            <ServiceHero
                title="Telecommunication Services"
                subtitle="Connecting Nigeria with cutting-edge communication solutions"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Telecom Solutions"
                        subtitle="Reliable, scalable, and future-ready"
                        center
                    />

                    <ServiceFeatures features={features} />

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Nationwide Coverage</h3>
                            <p className="text-gray-600 mb-6">
                                Our telecommunication infrastructure spans across Nigeria, ensuring reliable connectivity even in remote areas. We're committed to bridging the digital divide with innovative solutions tailored for the Nigerian market.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
                                    View Coverage Map
                                </button>
                                <button className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors">
                                    Download Brochure
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-xl overflow-hidden aspect-video"
                        >
                            {/* Network illustration placeholder */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white text-2xl">
                                Network Infrastructure
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Tailored Solutions"
                        subtitle="We customize our offerings to your specific needs"
                        center
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                                <p className="text-gray-600">{solution.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Ready to Upgrade Your Connectivity?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Our experts will assess your needs and recommend the perfect solution.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <button className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                            Get a Free Consultation
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default TelecomPage;