import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Home() {
    const services = [
        {
            title: 'ICT Solutions',
            description: 'Cutting-edge technology services including cloud computing, cybersecurity, and custom software development.',
            icon: '💻'
        },
        {
            title: 'Telecommunication',
            description: 'Reliable connectivity solutions with fiber optics, 5G networks, and enterprise communication systems.',
            icon: '📶'
        },
        {
            title: 'Agricultural Services',
            description: 'Modern farming solutions with smart agriculture technology and sustainable practices.',
            icon: '🌱'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-24">
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
                            className="text-xl md:text-2xl mb-8 text-gray-100"
                        >
                            Promag delivers innovative ICT, Telecommunication, and Agricultural services to power your digital transformation.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button variant="primary" className="shadow-lg hover:shadow-xl">
                                Get Started
                            </Button>
                            <Button variant="outline" className="text-white border-white hover:bg-white/10">
                                Learn More
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-white">
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
                                    href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                                >
                                    Learn more <FaArrowRight className="ml-2" />
                                </Link>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                            Our experts are ready to help you leverage technology for growth and efficiency.
                        </p>
                        <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl">
                            Get in Touch
                        </Button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}