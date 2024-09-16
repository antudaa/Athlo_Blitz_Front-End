import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { useGetFacilityByIdQuery } from "../../redux/features/facility/facilityApi";
import Loading from "../../components/Global/Loading";
import ErrorComponent from "../../components/ui/error/ErrorComponent";
import { useState } from "react";
import { StarOutlined } from "@ant-design/icons";
import ButtonLink from "../../components/ui/button/ButtonLink";

const FacilityDetailsPage = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    const [imageIndex, setImageIndex] = useState(0);
    const { id } = useParams();

    const { data: { data: facility = {} } = {}, isLoading, error } = useGetFacilityByIdQuery(id);

    const { name, description, images, pricePerHour, rating, location } = facility;

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <ErrorComponent message="Something went wrong! Please try again later." />
    }

    return (
        <div className="py-6 my-16 lg:my-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex flex-col lg:flex-row -mx-4 relative border border-indigo-500 md:border-2 md:rounded-xl md:p-6 shadow-2xl p-4">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="lg:flex-1 p-4 md:p-0">
                        <div className="h-64 md:h-80 rounded-lg= bg-gray-100 mb-4 flex items-center justify-center">
                            {images[imageIndex] ? (
                                <img
                                    src={images[imageIndex]}
                                    alt={`Room Image ${imageIndex + 1}`}
                                    className="h-full w-full object-cover rounded-lg"
                                />
                            ) : (
                                <span className="text-5xl text-gray-400">No Image</span>
                            )}
                        </div>

                        <div className="flex -mx-2 mb-4">
                            {images.map((imgUrl: string, i: number) => (
                                <div key={i} className="flex-1 px-2">
                                    <button
                                        onClick={() => setImageIndex(i)}
                                        className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${imageIndex === i ? 'ring-2 ring-indigo-300 ring-inset' : ''}`}
                                    >
                                        <img
                                            src={imgUrl}
                                            alt={`Room Thumbnail ${i + 1}`}
                                            className="h-full w-full object-cover rounded-lg"
                                            loading="lazy"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="lg:flex-1 px-4">
                        {/* button for large device */}
                        <div className="hidden lg:block absolute top-8 right-4 z-10">
                            <ButtonLink
                                link={`/booking/${id}`}
                                text="Book Now"
                            />
                        </div>
                        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{name}</h2>
                        <p className="text-gray-500 text-sm">By <span className="text-indigo-600 hover:underline">Athlo Blitz</span></p>

                        <div className="flex items-center space-x-4 my-4">
                            <div>
                                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                    <span className="font-bold text-indigo-600 text-3xl">${pricePerHour}</span>
                                    <span className="ml-2 mt-1">Per Hour</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-blue-900 text-xl font-semibold">Save 12%</p>
                                <p className="text-gray-600 text-sm">Inclusive of all Taxes.</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-gray-800 font-semibold text-xl mb-2">Facility Details</p>
                            <p className="text-gray-500">{description}</p>

                            <div className="flex flex-col flex-wrap">
                                <div className="flex flex-col mt-6">
                                    <div className="flex gap-2">
                                        <svg
                                            className="size-5 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                            />
                                        </svg>
                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Location</p>
                                        </div>
                                    </div>

                                    <p className="font-semibold text-nowrap mt-2">{location}</p>
                                </div>
                                <div className="flex flex-col mt-3">
                                    <div className="flex gap-2">
                                        <StarOutlined className="size-5 text-amber-700" />
                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Rating</p>
                                        </div>
                                    </div>

                                    <p className="font-semibold text-nowrap mt-2">{rating}</p>
                                </div>
                            </div>
                        </div>

                        {/* book now button for small and medium device */}
                        <div className="lg:hidden mt-6 flex items-center justify-center">
                            <ButtonLink
                                width='w-full'
                                // to={`/${user?.role}/bookings/${_id}`}
                                link={''}
                                text="Book Now"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FacilityDetailsPage;