import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BannerImage from '../../../assets/Failities_Image/FootballTurf_1.jpg'

const HeroSection = () => {

    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <section
            className="pt-28 lg:pt-56 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
                    <span className="font-inter text-xs font-medium text-gray-600 ml-3">
                        Explore Facilities & Book Now
                    </span>
                    <Link
                        to='/facilities'
                        className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
                    >
                        <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                                stroke="white"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </motion.div>
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="div">
                    <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-600 mb-5 md:text-5xl leading-[50px]">
                        Find and Book the
                        <span className="text-indigo-600"> Best Sports Facilities </span>
                        Near You
                    </h1>
                    <p className="max-w-md mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
                        Whether it's a football turf, badminton court, cricket ground, or swimming pool, our platform makes it easy to discover and book your favorite sports facilities.
                    </p>
                    <Link
                        to='/register'
                        className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:text-white hover:bg-indigo-700 transition-all duration-500"
                    >
                        Create an account
                        <svg
                            className="ml-2"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </motion.div>
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex justify-center border-2 border-indigo-500 p-1 rounded-t-3xl">
                    <img
                        src={BannerImage}
                        alt="Dashboard image"
                        className="rounded-t-3xl border-2 border-indigo-600 p-1"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
