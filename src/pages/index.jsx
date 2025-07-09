import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import {motion} from "framer-motion";
import Link from "next/link";
export default function Home() {
    const services = [
        {
            title: 'ICT Solutions',
            link:'ict',
            description: 'Cutting-edge technology services including cloud computing, cybersecurity, and custom software development.',
            icon: '💻'
        },
        {
            title: 'Telecommunication',
            link:'telecom',
            description: 'Reliable connectivity solutions with fiber optics, 5G networks, and enterprise communication systems.',
            icon: '📶'
        },
        {
            title: 'Agricultural Services',
            link:'agric',
            description: 'Modern farming solutions with smart agriculture technology and sustainable practices.',
            icon: '🌱'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-primary-dark text-black pt-32 pb-24">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Transforming Nigeria Through <span className="gradient-text">Integrated Solutions</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xl md:text-2xl mb-8 text-gray-500"
                        >
                            Promag delivers innovative ICT, Telecommunication, and Agricultural services to power your digital transformation.
                        </motion.p>
                        {/* In your hero section */}
                        <motion.div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                className="shadow-lg cursor-pointer hover:shadow-xl"
                                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Learn More
                            </Button>

                            <Link href="/contact" passHref>
                                <Button
                                    variant="outline"
                                    className="text-white cursor-pointer border-white hover:bg-white/10"
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Services"
                        subtitle="Comprehensive solutions designed to meet your business needs"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 card-hover"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                                <p className="text-gray-600 mb-5">{service.description}</p>
                                <Link
                                    href={`/services/${service.link.toLowerCase().replace(' ', '-')}`}
                                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                                >
                                    Learn more <FaArrowRight className="ml-2" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Proven Process"
                        subtitle="How we deliver exceptional results"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Discovery",
                                icon: "🔍",
                                description: "We analyze your needs and business objectives"
                            },
                            {
                                title: "Solution Design",
                                icon: "✏️",
                                description: "Tailored strategies crafted by our experts"
                            },
                            {
                                title: "Implementation",
                                icon: "⚡",
                                description: "Seamless deployment with minimal disruption"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center"
                            >
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Why Choose Us"
                        subtitle="Subtle strengths, visible impact"
                        center
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        {[
                            { icon: "⚡", title: "Speed" },
                            { icon: "🔒", title: "Security" },
                            { icon: "♻️", title: "Sustainability" },
                            { icon: "💡", title: "Innovation" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white p-6 rounded-xl shadow-sm text-center"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="font-medium text-gray-800">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>






            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-500">
                            Our experts are ready to help you leverage technology for growth and efficiency.
                        </p>
                        <Button variant="primary" className="bg-white text-black cursor-pointer hover:bg-gray-100 shadow-lg hover:shadow-xl">
                            Get in Touch
                        </Button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}