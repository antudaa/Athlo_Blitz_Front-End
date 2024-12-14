import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import bannerImage1 from "../../../assets/BannerImage1.jpg";
import bannerImage2 from "../../../assets/BannerImage2.jpg";

const HeroSection = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const handleScroll = () => {
        const targetElement = document.querySelector("#featuredfacility");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="pt-32 lg:pt-48 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <div className="flex flex-col items-center justify-between w-full md:flex-row md:px-6 xl:px-0">
                    <div className="max-w-7xl h-full relative text-center md:text-start px-4 md:px-0">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="div">
                            <h1 className="max-w-2xl text-center mx-auto md:mx-0 md:text-start font-manrope font-bold text-4xl text-gray-800 mb-5 md:text-5xl leading-[50px]">
                                Find and Book the
                                <span className="text-indigo-600"> Best Sports Facilities </span>
                                Near You
                            </h1>
                            <p className="max-w-md mx-auto md:mx-0 text-center md:text-start text-lg font-normal leading-7 text-gray-800 mb-9">
                                Whether it's a football turf, badminton court, cricket ground, or swimming pool, our platform makes it easy to discover and book your favorite sports facilities.
                            </p>
                            <div className="flex flex-col">
                                <div
                                    className="group cursor-pointer mx-auto md:mx-0 border border-indigo-600 bg-white p-1 w-1/2 h-12 rounded-full flex items-center justify-between mb-4 hover:bg-indigo-500 hover:text-white transition-all duration-500">
                                    <span className="font-inter text-md font-medium ml-3">
                                        Explore Facilities & Book Now
                                    </span>
                                    <Link
                                        to='/facilities'
                                        className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600 group-hover:bg-white"
                                    >
                                        <FaLongArrowAltRight className="text-white group-hover:text-indigo-500" />
                                    </Link>
                                </div>
                                <Link
                                    to='/register'
                                    className="group w-1/2 h-12 mb-14 inline-flex items-center justify-between py-3 px-2 text-base text-center text-white rounded-full bg-indigo-600 shadow-xs border border-indigo-600 hover:bg-white hover:text-gray-900 transition-all duration-500"
                                >
                                    <span className="pl-2">Create an account</span>
                                    <FaLongArrowAltRight className="text-indigo-600 bg-white rounded-full p-2 size-8 ml-6 group-hover:bg-indigo-600 group-hover:text-white " />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex items-center mx-auto justify-center md:justify-end lg:w-1/2">
                        <div className="w-2/5">
                            <img className="object-cover h-[300px] md:h-[500px] rounded-3xl shadow-xl" src={bannerImage1} alt="" />
                        </div>
                        <div className="w-5/12 -ml-16 lg:-ml-32">
                            <img className="object-cover h-[300px] md:h-[500px] rounded-3xl shadow-xl" src={bannerImage2} alt="" />
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleScroll}
                    aria-label="Scroll down"
                    className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110 mt-6 hover:text-indigo-600 hover:border-indigo-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
