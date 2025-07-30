import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://formsubmit.co/ajax/gsabdullahi@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: 'New message from Promag website',
                    _template: 'table',
                    _captcha: 'false'
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative  py-32">

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl">
                            Get in touch with our team for inquiries, support, or partnership opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100"
                        >
                            <SectionTitle title="Send Us a Message" />

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-100 rounded-lg">
                                    <p className="font-medium">Thank you!</p>
                                    <p>Your message has been sent successfully. We&#39;ll get back to you soon.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-100 rounded-lg">
                                    <p className="font-medium">Something went wrong</p>
                                    <p>Please try again later or contact us directly at promag.integrated@gmail.com</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full py-3 text-lg cursor-pointer"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <SectionTitle title="Our Contact Information" />
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <FaMapMarkerAlt className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Headquarters</h3>
                                        <p className="text-gray-600">
                                            13 Sokoto Road GRA,Bauchi,Nigeria
                                        </p>
                                        <h3 className="text-lg font-semibold mb-1 mt-4">Branch</h3>
                                        <p className="text-gray-600">
                                            27 BNet Estate Wumba District,Abuja,Nigeria
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <FaPhone className="text-primary text-xl" />
                                    </div>
                                    <div >
                                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                        <p className="text-gray-600">+234 70 359 38674</p>
                                        <p className="text-gray-600">+234 70 132 72464</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <FaEnvelope className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                                        <p className="text-gray-600">info@promag.com.ng</p>
                                        <p className="text-gray-600">support@promag.com.ng</p>
                                        <p className="text-gray-600">promag.integrated@gmail.com</p>


                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <FaClock className="text-primary text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                                <div className="rounded-xl overflow-hidden h-64 border border-gray-200 shadow-sm">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!4v1753266120715!6m8!1m7!1sgtT23nLCw63EaHoXNNVYyQ!2m2!1d10.3099480887949!2d9.816858628004121!3f342.32!4f14.060000000000002!5f0.7820865974627469"
                                        width="600" height="450" className="object-cover w-[100%] h-[100%]"  allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;