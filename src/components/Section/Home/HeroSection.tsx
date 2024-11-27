import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
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
                        <FaLongArrowAltRight className="text-white" />
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
                        <span className="">Create an account</span>
                        <FaChevronRight className="ml-4" />
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
                        className="rounded-t-3xl border-2 border-indigo-600 p-1 w-[1200px] h-[200px] md:h-[350px] lg:h-[400px]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
