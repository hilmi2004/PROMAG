import { motion } from 'framer-motion';

const ServiceHero = ({ title, subtitle }) => {
    return (
        <section className="relative text-black pt-40 pb-24">
            <div className="absolute">
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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