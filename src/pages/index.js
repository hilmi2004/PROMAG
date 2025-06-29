import { FaArrowRight, FaShieldAlt, FaChartLine, FaLeaf } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';

export default function Home() {
    const services = [
        {
            icon: <FaShieldAlt className="text-primary text-4xl mb-4" />,
            title: 'ICT Solutions',
            description: 'Comprehensive IT services including cybersecurity, cloud computing, and software development.',
        },
        {
            icon: <FaChartLine className="text-primary text-4xl mb-4" />,
            title: 'Telecommunication',
            description: 'Advanced telecom solutions for businesses and individuals across Nigeria.',
        },
        {
            icon: <FaLeaf className="text-primary text-4xl mb-4" />,
            title: 'Agricultural Services',
            description: 'Modern farming solutions, equipment, and consultancy services.',
        },
    ];

    const testimonials = [
        {
            name: 'John Adekunle',
            role: 'CEO, TechSolutions Ltd',
            content: 'Promag delivered exceptional IT infrastructure for our company. Their team is professional and knowledgeable.',
            avatar: '/images/avatar1.jpg',
        },
        // Add other testimonials
    ];

    const partners = [
        '/images/partner1.png',
        // Add other partners
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-32">
                <div className="absolute inset-0 bg-black/50">
                    <img
                        src="/images/hero.jpg"
                        alt="Promag Hero"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Integrated Services for a Digital Nigeria
                        </h1>
                        <p className="text-xl mb-8">
                            Promag delivers cutting-edge ICT, Telecommunication, and Agricultural solutions to drive your business forward.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="secondary">Get Started</Button>
                            <Button variant="outline" className="text-white border-white hover:bg-white/20">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Services"
                        subtitle="We offer comprehensive solutions across multiple industries to meet your business needs."
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-light p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                                {service.icon}
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <Button variant="outline" className="text-primary border-primary">
                                    Learn More <FaArrowRight className="ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss how our integrated services can benefit your organization.
                    </p>
                    <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                        Get in Touch
                    </Button>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="What Our Clients Say"
                        subtitle="Hear from businesses and individuals who have benefited from our services."
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our Trusted Partners" center />
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {partners.map((partner, index) => (
                            <div key={index} className="grayscale hover:grayscale-0 transition-all">
                                <img src={partner} alt={`Partner ${index + 1}`} className="h-12 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}