import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${center ? 'text-center' : ''} mb-12`}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
            {subtitle && (
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
        </motion.div>
    );
};

export default SectionTitle;