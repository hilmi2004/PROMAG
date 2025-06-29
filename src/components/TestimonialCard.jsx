import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, content, avatar }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md"
        >
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">{name}</h4>
                    <p className="text-gray-500 text-sm">{role}</p>
                </div>
            </div>
            <p className="text-gray-600">"{content}"</p>
        </motion.div>
    );
};

export default TestimonialCard;