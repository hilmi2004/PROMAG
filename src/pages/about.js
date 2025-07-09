import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About = () => {
    return (
        <>
            <section className="relative bg-gray-900 text-white py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30">
                    <div className="absolute inset-0 bg-black/40" />
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

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our Story" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6">From Humble Beginnings</h3>
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
                            className="relative"
                        >
                            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
                                {/* CEO Image */}
                                <img
                                    src="ceopromag.jpeg"
                                    alt="Adebayo Johnson, Founder & CEO"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
                                <h4 className="font-bold">Garba S. Abdullahi</h4>
                                <p className="text-sm text-gray-600">Founder & CEO</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our Core Values" center />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Innovation",
                                description: "We embrace new technologies and creative solutions to solve complex challenges.",
                                emoji: "💡"
                            },
                            {
                                title: "Integrity",
                                description: "We conduct business with honesty and transparency in all our dealings.",
                                emoji: "🤝"
                            },
                            {
                                title: "Excellence",
                                description: "We strive for the highest standards in everything we do.",
                                emoji: "✨"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-4xl mb-4">{value.emoji}</div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;