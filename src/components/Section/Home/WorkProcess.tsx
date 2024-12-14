import explore from '../../../assets/Explore_Facility.jpg';
import { motion } from "framer-motion";
import bookFacility from '../../../assets/Book_Facility.jpg';
import payment from '../../../assets/Make_Payment.jpg';
import experience from '../../../assets/Experience_Sports.jpg';


const WorkProcess = () => {

    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="max-w-5xl mx-auto py-10">
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="text-center max-w-xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">Athlo Blitz Work Process.</h1>
                <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
            </motion.div>
            <div>
                {/* Step 1: Discover Facilities */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-row">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 py-5 border border-gray-300 bg-white rounded-xl mr-4 uppercase flex flex-col items-center justify-center">
                            <div className="text-3xl font-black text-gray-800">Step 1</div>
                            <div className="text-gray-700 text-sm text-center font-semibold">Discover Facilities</div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded-xl border-gray-300 bg-white h-[300px] md:h-[200px] my-auto">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-800">
                                    <span className="font-black">Step 1</span> - Discover Facilities
                                </div>
                                <div className="p-3 text-xl lg:text-2xl font-semibold text-gray-800">Explore Sports Facilities</div>
                                <div className="px-3 pb-6 text-lg">
                                    Browse through a list of sports facilities with detailed descriptions, images, ratings, and reviews to find the perfect place for your next game or workout. Explore an extensive collection of venues, each featuring high-quality images, user-generated reviews, and accurate ratings to help you make informed choices for an enjoyable sporting experience.
                                </div>
                            </div>
                            <div className="w-64 p-5">
                                <img src={explore} alt="step 1" className="object-scale-down" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Step 2: Check Availability & Book Slots */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex items-start flex-row">
                    <div className="border-t-4 border-r-4 border-transparent">
                        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-row-reverse">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 py-5 border border-gray-300 bg-white rounded-xl ml-4 uppercase flex flex-col items-center justify-center">
                            <div className="text-3xl font-black text-gray-800">Step 2</div>
                            <div className="text-gray-700 text-sm text-center font-semibold">Check Availability & Book</div>
                        </div>
                        <div className="h-full border-r-4 border-transparent">
                            <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded-xl border-gray-300 bg-white h-[300px] md:h-[200px] my-auto">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-800">
                                    <span className="font-black">Step 2</span> - Check Availability & Book
                                </div>
                                <div className="p-3 text-xl lg:text-2xl text-gray-800 font-semibold">Book Your Facility</div>
                                <div className="px-3 pb-6 text-lg">
                                    Check the real-time availability of slots at your chosen facility, select a time that suits you, and complete the booking with ease. View up-to-date schedules directly from the facility, pick a time that fits your plan, and secure your spot with a hassle-free booking system.
                                </div>
                            </div>
                            <div className="w-64 p-5">
                                <img src={bookFacility} alt="step 2" className="object-scale-down" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Step 3: Secure Payment & Confirmation */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex items-start flex-row-reverse">
                    <div className="border-t-4 border-l-4 border-transparent">
                        <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-row">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 py-5 border border-gray-300 bg-white rounded-xl mr-4 uppercase flex flex-col items-center justify-center">
                            <div className="text-3xl font-black text-gray-800">Step 3</div>
                            <div className="text-gray-700 text-sm text-center font-semibold">Secure Payment</div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded-xl border-gray-300 bg-white h-[300px] md:h-[200px] my-auto">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-800">
                                    <span className="font-black">Step 3</span> - Secure Payment
                                </div>
                                <div className="p-3 text-xl lg:text-2xl text-gray-800 font-semibold">Complete Your Payment</div>
                                <div className="px-3 pb-6 text-lg">
                                    Securely pay for your booking using our online payment system. Receive instant confirmation and ensure your slot is secured. Complete your transaction safely through our integrated payment platform, ensuring your financial data is protected at every step.
                                </div>
                            </div>
                            <div className="w-64 p-5">
                                <img src={payment} alt="step 3" className="object-scale-down" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Step 4: Manage Bookings & Reviews */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex items-start flex-row">
                    <div className="border-t-4 border-r-4 border-transparent">
                        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-row-reverse">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 py-5 border border-gray-300 bg-white rounded-xl ml-4 uppercase flex flex-col items-center justify-center">
                            <div className="text-3xl font-black text-gray-800">Step 4</div>
                            <div className="text-gray-700 text-sm text-center font-semibold">Manage Bookings & Reviews</div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded-xl border-gray-300 bg-white h-[300px] md:h-[200px] my-auto">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-800">
                                    <span className="font-black">Step 4</span> - Manage Bookings & Reviews
                                </div>
                                <div className="p-3 text-xl lg:text-2xl text-gray-800 font-semibold">Manage Your Experience</div>
                                <div className="px-3 pb-6 text-lg">
                                    Access your personalized dashboard to manage bookings, cancel if needed, request refunds, and submit or edit reviews. Enjoy a seamless experience tailored to your needs. Take full control of your experience with an intuitive dashboard, allowing seamless management of your bookings and interactions with facilities.
                                </div>
                            </div>
                            <div className="w-64 p-5">
                                <img src={experience} alt="step 4" className="object-scale-down" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkProcess;
