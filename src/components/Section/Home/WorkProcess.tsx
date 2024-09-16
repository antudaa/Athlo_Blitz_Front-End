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
                <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-600">Athlo Blitz Work Process.</h1>
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
                        <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                            <div className="text-3xl font-black text-gray-500">Step 1</div>
                            <div className="text-gray-500 text-sm text-center">Discover Facilities</div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                                    <span className="font-black">Step 1</span> - Discover Facilities
                                </div>
                                <div className="p-3 text-3xl text-gray-800 font">Explore Sports Facilities</div>
                                <div className="px-3 pb-6">
                                    Browse through a list of sports facilities with detailed descriptions, images, ratings, and reviews to find the perfect place for your next game or workout.
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
                        <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                            <div className="text-3xl font-black text-gray-500">Step 2</div>
                            <div className="text-gray-500 text-sm text-center">Check Availability & Book</div>
                        </div>
                        <div className="h-full border-r-4 border-transparent">
                            <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                                    <span className="font-black">Step 2</span> - Check Availability & Book
                                </div>
                                <div className="p-3 text-3xl text-gray-800 font">Book Your Facility</div>
                                <div className="px-3 pb-6">
                                    Check the real-time availability of slots at your chosen facility, select a time that suits you, and complete the booking with ease.
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
                        <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                            <div className="text-3xl font-black text-gray-500">Step 3</div>
                            <div className="text-gray-500 text-sm text-center">Secure Payment</div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                                    <span className="font-black">Step 3</span> - Secure Payment
                                </div>
                                <div className="p-3 text-3xl text-gray-800 font">Complete Your Payment</div>
                                <div className="px-3 pb-6">
                                    Securely pay for your booking using our online payment system. Receive instant confirmation and ensure your slot is secured.
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
                        <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                            <div className="text-3xl font-black text-gray-500">Step 4</div>
                            <div className="text-gray-500 text-sm text-center">Manage Bookings & Reviews</div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                                    <span className="font-black">Step 4</span> - Manage Bookings & Reviews
                                </div>
                                <div className="p-3 text-3xl text-gray-800 font">Manage Your Experience</div>
                                <div className="px-3 pb-6">
                                    Access your personalized dashboard to manage bookings, cancel if needed, request refunds, and submit or edit reviews. Enjoy a seamless experience tailored to your needs.
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
