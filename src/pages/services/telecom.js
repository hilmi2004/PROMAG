import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../ServiceFeatures.js';
import Link from "next/link";
import Image from 'next/image';
const TelecomPage = () => {
    const features = [
        {
            title: "Telecommunication",
            description: "Reliable radio communication solutions for seamless connectivity across your networks and devices.",
            icon: "🌐"
        },
        {
            title: "5G Solutions",
            description: "Next-generation wireless technology for businesses with ultra-low latency.",
            icon: "📶"
        },
        {
            title: "VoIP Services",
            description: "Cost-effective voice communication over IP networks with crystal clear quality.",
            icon: "📞"
        },
        {
            title: "Enterprise Solutions",
            description: "Dedicated connectivity solutions for large organizations with SLA guarantees.",
            icon: "🏢"
        },
        {
            title: "IoT Connectivity",
            description: "Specialized networks for smart devices and connected systems with edge computing.",
            icon: "🌐"
        },
        {
            title: "Fiber Optic Networks",
            description: "High-speed connectivity with our state-of-the-art fiber infrastructure and minimal latency.",
            icon: "🔌"
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
                        subtitle="Reliable, scalable, and future-ready connectivity"
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
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">Telecommunication Coverage</h3>
                            <p className="text-gray-700 mb-6 text-lg">
                                We&#39;re committed to providing a secured telecommunication with innovative solutions tailored for Nigerian Space.
                            </p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden aspect-video shadow-xl"
                        >
                         

                            <Image src="/telecomm.jpg" width={100} height={100} alt="desc" className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end p-8">
                                <h4 className="text-white text-xl font-semibold">Building Nigeria&#39;s Digital Backbone</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl text-black md:text-4xl font-bold mb-6"
                    >
                        Ready to Upgrade Your Connectivity?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl mb-8 max-w-2xl mx-auto text-gray-400"
                    >
                        Our experts will assess your needs and recommend the perfect solution tailored to your business requirements.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/contact"><button className="bg-primary text-black px-10 py-4 cursor-pointer rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-lg">
                            Get a Consultation
                        </button></Link>

                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default TelecomPage;