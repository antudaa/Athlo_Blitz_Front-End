import { motion } from 'framer-motion';

const HistoryTimeLine = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="bg-[aliceblue]">
            <div className="bg-[aliceblue] text-gray-800 py-8 max-w-7xl mx-auto">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="ml-2 text-indigo-500 uppercase tracking-loose font-semibold">Our Journey</p>
                        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold leading-normal md:leading-relaxed mb-2">From Vision to Reality</p>
                        <p className="text-sm md:text-base text-gray-600 mb-4">
                            Discover the story of Athlo Blitz, your go-to platform for booking sports facilities. Learn about our journey, the challenges we faced, and how we strive to provide a seamless experience for our valued customers.
                        </p>
                        <a
                            href="#"
                            className="bg-transparent mr-auto hover:bg-indigo-500 text-indigo-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-500 hover:border-transparent"
                        >
                            Learn More
                        </a>
                    </motion.div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}

                                    className="border-2-2 border-indigo-500 absolute h-full border"
                                    style={{ right: '50%', border: '2px solid #6366F1', borderRadius: '1%' }}
                                ></motion.div>
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}

                                    className="border-2-2 border-indigo-500 absolute h-full border"
                                    style={{ left: '50%', border: '2px solid #6366F1', borderRadius: '1%' }}
                                ></motion.div>
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <p className="mb-3 text-base text-indigo-500">2021</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Founding Athlo Blitz</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-600">
                                            In 2021, we embarked on a mission to transform how people book sports facilities. From humble beginnings, our vision was clear: to offer a seamless, user-friendly platform where enthusiasts can find and book their favorite sports venues effortlessly.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                                        <p className="mb-3 text-base text-indigo-500">2022</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Overcoming Challenges</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-600">
                                            Our journey wasn't easy. We faced numerous challenges, from building a robust booking system to ensuring secure payment processing. Through perseverance and a commitment to quality, we refined our platform to meet the needs of sports enthusiasts nationwide.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <p className="mb-3 text-base text-indigo-500">2023</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Gaining Traction</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-600">
                                            Today, Athlo Blitz proudly serves a growing community of satisfied customers. Our platform has become synonymous with convenience, offering an extensive range of sports facilities that cater to every need. Our secure payment gateway ensures a smooth booking experience for all.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4">
                                        <p className="mb-3 text-base text-indigo-500">The Future</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">What's Next?</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-600">
                                            Our journey doesn't end here. We continue to innovate, expanding our offerings and enhancing our platform to provide an even better experience. At Athlo Blitz, we're committed to making sports facility booking as simple and enjoyable as possible for our customers.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                            >
                                <img
                                    className="mx-auto -mt-36 md:-mt-36"
                                    src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                                    alt="Working Process Illustration"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryTimeLine;
