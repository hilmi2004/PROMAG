import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaEye } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

const About = () => {
    const teamMembers = [
        {
            name: 'Adebayo Johnson',
            role: 'CEO & Founder',
            image: '/images/team1.jpg',
        },
        {
            name: 'Chioma Okeke',
            role: 'CTO',
            image: '/images/team2.jpg',
        },
        {
            name: 'Emeka Nwankwo',
            role: 'Head of Agriculture',
            image: '/images/team3.jpg',
        },
        {
            name: 'Funke Adeleke',
            role: 'Telecom Director',
            image: '/images/team4.jpg',
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-32">
                <div className="absolute inset-0 bg-black/50">
                    <img
                        src="/images/about.jpg"
                        alt="About Promag"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Promag</h1>
                        <p className="text-xl">
                            Pioneering integrated services in Nigeria since 2010.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company History */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our Story" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">From Humble Beginnings</h3>
                            <p className="text-gray-600 mb-4">
                                Founded in 2010 by Adebayo Johnson, Promag started as a small IT consultancy firm in Lagos. Recognizing the need for integrated services in Nigeria's growing economy, we expanded our offerings to include telecommunication and agricultural services.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Today, we serve clients across Nigeria with a team of over 150 professionals dedicated to delivering excellence in every project we undertake.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-lg overflow-hidden"
                        >
                            <img
                                src="/images/office.jpg"
                                alt="Promag Office"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our Core Values" center />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg shadow-sm text-center"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaUsers className="text-primary text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">People First</h3>
                            <p className="text-gray-600">
                                We prioritize our clients, employees, and communities in all our decisions and actions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg shadow-sm text-center"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaLightbulb className="text-primary text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-600">
                                We embrace new technologies and creative solutions to solve complex challenges.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-lg shadow-sm text-center"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaEye className="text-primary text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Vision</h3>
                            <p className="text-gray-600">
                                To be Nigeria's leading provider of integrated services that drive sustainable development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Meet Our Team" center />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;