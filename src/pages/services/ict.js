import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../ServiceFeatures.js';

const ICTPage = () => {
    const features = [
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure tailored to your business needs.",
            icon: "☁️"
        },
        {
            title: "Cybersecurity",
            description: "Protect your business from evolving digital threats.",
            icon: "🛡️"
        },
        {
            title: "Software Development",
            description: "Custom solutions built for your unique requirements.",
            icon: "💻"
        }
    ];

    return (
        <>
            <ServiceHero
                title="ICT Solutions"
                subtitle="Transform your business with cutting-edge technology"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our ICT Services"
                        subtitle="Comprehensive solutions for the digital age"
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
                            <h3 className="text-2xl font-bold mb-6">Tailored Technology Solutions</h3>
                            <p className="text-gray-600 mb-6">
                                We don't believe in one-size-fits-all solutions. Our team works closely with you to understand your unique challenges and deliver customized ICT solutions that drive real business value.
                            </p>
                            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
                                Request Consultation
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-xl overflow-hidden aspect-video"
                        >
                            {/* Placeholder for graphic/illustration */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white text-2xl">
                                ICT Solutions Graphic
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ICTPage;