import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import background from '../../../assets/Auth_Background.png';

const ContactUsHeroSection = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <div className="lg:mb-0 mb-10">
                            <div className="group w-full h-full">
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    className="relative h-full">
                                    <img
                                        src={background}
                                        alt="ContactUs tailwind section"
                                        className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                                    />
                                    <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                                        Contact us
                                    </h1>
                                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                        <div className="bg-white rounded-lg p-6 block">
                                            <a href="javascript:;" className="flex items-center mb-6">
                                                <FaPhoneAlt className="size-6 text-indigo-600" />
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                    +880 1788362766
                                                </h5>
                                            </a>
                                            <a href="javascript:;" className="flex items-center mb-6">
                                                <MdEmail className="size-6 text-indigo-600" />
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                    antu.programmer@gmail.com
                                                </h5>
                                            </a>
                                            <a href="javascript:;" className="flex items-center">
                                                <FaLocationDot className="size-6 text-indigo-600" />
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                    College Gate, Hathazari, Chittagong, BD
                                                </h5>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                            <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                                Get in touch
                            </h2>
                            <form action="" method="">
                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-600 font-manrope text-base font-normal mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-600"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-600 font-manrope text-base font-normal mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-600"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label
                                        htmlFor="message"
                                        className="block text-gray-600 font-manrope text-base font-normal mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-600"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-manrope text-base font-semibold py-4 px-8 rounded-3xl w-full"
                                >
                                    Submit
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUsHeroSection;
