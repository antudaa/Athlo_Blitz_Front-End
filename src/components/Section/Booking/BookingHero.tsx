import { MdOutlinePriceChange, MdLocationOn, MdOutlineStarPurple500 } from "react-icons/md";
import { IFacility } from "../../../types/Facility/facility.type";
import { motion } from 'framer-motion';

interface BookingHeroProps {
    facility: IFacility;
}

const BookingHero = ({ facility }: BookingHeroProps) => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const { name, rating, location, pricePerHour, images } = facility;

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="grid grid-cols-12 gap-y-11 border border-indigo-500 rounded-xl shadow-xl">
                <div
                    className="col-span-12 lg:col-span-7 py-6 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
                    <h2 className="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-gray-700 mb-9">{name} Facility</h2>
                    <div className="flex flex-col min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white w-full xl:w-[calc(100%-45px)]">
                        <div className="flex items-center gap-4 pr-6 max-[550px]:pl-6 min-[550px]:border-r border-gray-200 ">
                            <button
                                className="p-4 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                                <MdOutlineStarPurple500 className="h-5 w-5 text-indigo-600 mx-auto my-auto" />
                            </button>
                            <p className="font-medium text-sm text-black">{rating}</p>
                        </div>
                        <div className="flex items-center gap-4 px-6 min-[550px]:border-r border-gray-200 ">
                            <button
                                className="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                                <MdLocationOn className="h-6 w-6 text-indigo-600 mx-auto my-auto" />
                            </button>
                            <p className="font-medium text-sm text-black">{location}</p>
                        </div>
                        <div className="flex items-center gap-4 pl-6  ">
                            <button
                                className="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                                <MdOutlinePriceChange className="h-6 w-6 text-indigo-600 mx-auto my-auto" />
                            </button>
                            <p className="font-medium text-sm text-black">${pricePerHour}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 lg:max-w-xl max-lg:mx-auto ">
                    <img src={images[0]} alt="Facility image" className="w-full h-full max-lg:rounded-2xl rounded-3xl p-2" />
                </div>
            </motion.div>
        </section>
    );
};

export default BookingHero;
