import { motion } from 'framer-motion';

const ServiceHero = ({ title, subtitle }) => {
    return (
        <section className="relative bg-gray-900 text-white py-32">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30">
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl text-center mx-auto"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {subtitle}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceHero;