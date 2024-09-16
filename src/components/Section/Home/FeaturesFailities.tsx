import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGetAllFacilitiesQuery } from "../../../redux/features/facility/facilityApi";
import { FaStar } from "react-icons/fa";
import Loading from "../../Global/Loading";

const FeaturesFacilities = () => {

    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const { data: facilityData, isLoading } = useGetAllFacilitiesQuery({
        sort: 'rating',
    });

    if (isLoading) {
        return <Loading />;
    }

    // Check if facilityData is available
    if (!facilityData?.data?.data) {
        return <p>No facilities data available.</p>;
    }

    const facilitiesCopy = [...facilityData.data.data];

    const topFacilities = facilitiesCopy
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    const bgColors = [
        'bg-gray-800',
        'bg-indigo-500',
        'bg-violet-500',
        'bg-violet-500',
        'bg-indigo-500',
        'bg-gray-800',
    ];
    return (
        <>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.header
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="mb-14 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-600">
                            Discover Top Sports Facilities Near You
                        </h2>
                        <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
                            Book premium sports facilities with ease. Whether you’re into football, swimming, or cricket, we have the perfect place for you.
                        </p>
                        <div className="text-center mb-10">
                            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        </div>
                        <div className="flex justify-center gap-5">
                            <Link
                                to="/facilities"
                                className="bg-indigo-50 py-3 px-6 rounded-full text-sm font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-600 hover:text-white border border-indigo-500"
                            >
                                Explore All Facilities
                            </Link>
                        </div>
                    </motion.header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full mt-10">
                        {topFacilities.map((facility, index) => {
                            const bgColor = bgColors[index % bgColors.length]
                            return (
                                <motion.article
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    key={facility.id} className={`${bgColor} rounded-2xl flex ${index === 0 || index === 5 ? 'md:col-span-2' : ''} justify-between flex-row flex-wrap`}>
                                    <div className={`p-5 xl:p-8 w-full ${index === 0 || index === 5 ? 'md:w-1/2 lg:w-1/2' : ''}`}>
                                        <div className="flex gap-3 bg-[aliceblue] w-[60px] px-2 rounded-xl">
                                            <FaStar className="my-auto text-amber-500" />
                                            <span className="my-auto text-indigo-700">{facility.rating}</span>
                                        </div>
                                        <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                                            {facility.name}
                                        </h3>
                                        <p className="text-xs font-normal text-gray-300 mb-8 xl:w-64 pr-10 text-justify">{facility.description.slice(0, 250)} ...</p>
                                        <Link to={`/facility/${facility?._id}`} className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5 text-nowrap w-[200px] hover:text-white">
                                            View Details
                                            <RightOutlined />
                                        </Link>
                                    </div>
                                    {(index === 0 || index === 5) ? (
                                        <div className="relative hidden h-auto md:w-1/2 md:block">
                                            <img src={facility.images[0]} alt="Facility" className="h-full ml-auto rounded-r-2xl" />
                                        </div>
                                    ) : null}
                                </motion.article>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesFacilities;
