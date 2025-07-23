import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../ServiceFeatures.js';
import Link from "next/link";

const ICTPage = () => {
    const features = [
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure tailored to your business needs with 99.9% uptime.",
            icon: "☁️"
        },
        {
            title: "Cybersecurity",
            description: "Comprehensive protection from evolving digital threats with 24/7 monitoring.",
            icon: "🛡️"
        },
        {
            title: "Software Development",
            description: "Custom solutions built for your unique requirements using modern technologies.",
            icon: "💻"
        },
        {
            title: "IT Consulting",
            description: "Strategic guidance to align your technology with business objectives.",
            icon: "📊"
        },
        {
            title: "Data Analytics",
            description: "Transform raw data into actionable insights for better decision making.",
            icon: "📈"
        },
        {
            title: "Managed Services",
            description: "Proactive IT management to keep your systems running smoothly.",
            icon: "⚙️"
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
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Digital Transformation</h3>
                            <p className="text-gray-700 mb-6 text-lg">
                                We don't believe in one-size-fits-all solutions. Our team works closely with you to understand your unique challenges and deliver customized ICT solutions that drive real business value and competitive advantage.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact">
                                    <button className="bg-primary cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-md hover:shadow-lg">
                                    Request Consultation
                                </button>
                                </Link>


                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden aspect-video shadow-xl"
                        >
                            <img
                                src="/ictpromag.jpg"
                                alt="ICT Solutions"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end p-8">
                                <h4 className="text-white text-xl font-semibold">Digital Solutions for Modern Businesses</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ICTPage;