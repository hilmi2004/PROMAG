import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const About = () => {
    return (
        <>
            {/* Hero Section - Text Only */}
            <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-32">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl text-black lg:text-6xl font-bold mb-6">About Promag</h1>

                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <div className="pl-14">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    To be a leading integrated enterprise providing information and communication technology and related solutions in Nigeria, making use of technically skilled, knowledgeable and devoted workforce.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <div className="pl-14">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    To become a respected one-stop integrated IT and related services provider in Nigeria.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section - Text Only */}
            {/*<section className="py-20 bg-gray-50">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <div className="max-w-4xl mx-auto">*/}
            {/*            <motion.div*/}
            {/*                initial={{ opacity: 0, y: 20 }}*/}
            {/*                whileInView={{ opacity: 1, y: 0 }}*/}
            {/*                transition={{ duration: 0.5 }}*/}
            {/*                viewport={{ once: true }}*/}
            {/*            >*/}
            {/*                <SectionTitle*/}
            {/*                    title="Our Story"*/}
            {/*                    subtitle="From humble beginnings to industry leaders"*/}
            {/*                />*/}
            {/*                <p className="text-gray-700 mb-6 text-lg">*/}
            {/*                    Founded by<span className="font-bold text-primary"> Garba S. Abdullahi</span>, Promag started as a small IT consultancy firm in Lagos. Recognizing the need for integrated services in Nigeria's growing economy, we expanded our offerings to include telecommunication and agricultural services.*/}
            {/*                </p>*/}
            {/*                <p className="text-gray-700 mb-8 text-lg">*/}
            {/*                    Today, under <span className="font-bold text-primary"> Garba S. Abdullahi</span> leadership, we serve clients across Nigeria with a team of over 150 professionals dedicated to delivering excellence in every project we undertake.*/}
            {/*                </p>*/}

            {/*            </motion.div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Core Values"
                        subtitle="The principles that guide everything we do"
                        center
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Innovation",
                                description: "We embrace new technologies and creative solutions to solve complex challenges.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Integrity",
                                description: "We conduct business with honesty and transparency in all our dealings.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Excellence",
                                description: "We strive for the highest standards in everything we do.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                )
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-primary/30 transition-all"
                            >
                                <div className="bg-primary/10 p-3 rounded-lg w-max mb-4 text-primary">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                                <p className="text-gray-700">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;