import { motion } from 'framer-motion';

const Statistics = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="text-center max-w-xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-600">Our Results In Number.</h1>
                    <div className="text-center mb-10">
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                </motion.div>
                <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                        <div className="flex gap-5">
                            <div className="font-manrope text-2xl font-bold text-indigo-600">
                                45+
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl text-gray-900 font-semibold mb-2">Numbers of Facilities Listed</h4>
                                <p className="text-xs text-gray-500 leading-5">We proudly list over [X] sports facilities, including basketball courts, soccer fields, tennis courts, and more, across Bangladesh.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                        <div className="flex gap-5">
                            <div className="font-manrope text-2xl font-bold text-indigo-600">
                                90%
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl text-gray-900 font-semibold mb-2">Customer Satisfaction</h4>
                                <p className="text-xs text-gray-500 leading-5"> 90% of our users are satisfied with their booking experience, based on recent surveys and feedback.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
                        <div className="flex gap-5">
                            <div className="font-manrope text-2xl font-bold text-indigo-600">
                                95%
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl text-gray-900 font-semibold mb-2">Booking Efficiency</h4>
                                <p className="text-xs text-gray-500 leading-5">95% of bookings are confirmed instantly. This high level of efficiency ensures that users can secure their preferred facilities without delays.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;