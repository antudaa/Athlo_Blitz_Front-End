import { FaStar } from "react-icons/fa";


const FacilityReview = () => {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                <div className="">
                    <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-8">
                        Customer reviews &
                        rating</h2>
                    <div className="grid grid-cols-12 mb-11">

                        <div className="col-span-12 xl:col-span-4 flex items-center">
                            <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
                                <div className="flex items-center w-full">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">5</p>
                                    <FaStar className="text-yellow-400 size-5" />
                                    <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[30%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">30</p>
                                </div>
                                <div className="flex items-center w-full">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">4</p>
                                    <FaStar className="text-yellow-400 size-5" />
                                    <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[40%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">40</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">3</p>
                                    <FaStar className="text-yellow-400 size-5" />
                                    <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[20%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">20</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">2</p>
                                    <FaStar className="text-yellow-400 size-5" />
                                    <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[16%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">16</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">1</p>
                                    <FaStar className="text-yellow-400 size-5" />
                                    <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                        <span className="h-full w-[8%] rounded-[30px] bg-indigo-500 flex"></span>
                                    </p>
                                    <p className="font-medium text-lg py-[1px] text-black mr-[2px]">8</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
                            <div
                                className="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
                                <div className="col-span-12 md:col-span-8 flex items-center">
                                    <div className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                                        <div
                                            className="sm:pr-3 sm:border-r border-gray-200 flex items-center justify-center flex-col">
                                            <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.3</h2>
                                            <div className="flex items-center gap-3 mb-4">
                                            <FaStar className="text-yellow-400 size-9" />
                                            <FaStar className="text-yellow-400 size-9" />
                                            <FaStar className="text-yellow-400 size-9" />
                                            <FaStar className="text-yellow-400 size-9" />
                                            <FaStar className="text-yellow-400 size-9" />
                                            </div>
                                            <p className="font-normal text-lg leading-8 text-gray-400">46 Ratings</p>
                                        </div>

                                        <div
                                            className="sm:pl-3 sm:border-l border-gray-200 flex items-center justify-center flex-col">
                                            <h2 className="font-manrope font-bold text-5xl text-black text-center mb-4">4.8</h2>
                                            <div className="flex items-center gap-3 mb-4">
                                            <FaStar className="text-yellow-400 size-9" />
                                            <FaStar className="text-yellow-400 size-9" />
                                            <FaStar className="text-yellow-400 size-9" />
                                            <FaStar className="text-yellow-400 size-9" />
                                            <FaStar className="text-yellow-400 size-9" />
                                            </div>
                                            <p className="font-normal text-lg leading-8 text-gray-400">Last Month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
                                    <div className="flex items-center flex-col justify-center w-full h-full ">
                                        <button
                                            className="rounded-full px-6 py-4 bg-indigo-600 font-semibold text-lg text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Write
                                            A Review</button>
                                        <button
                                            className="rounded-full px-6 py-4 bg-white font-semibold text-lg text-indigo-600 whitespace-nowrap w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">See
                                            All Reviews</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
                    <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6">Most helpful positive
                    review</h4>
                        <div className="flex items-center gap-3 mb-4">
                        <FaStar className="text-yellow-400 size-7" />
                        <FaStar className="text-yellow-400 size-7" />
                        <FaStar className="text-yellow-400 size-7" />
                        <FaStar className="text-yellow-400 size-7" />
                        <FaStar className="text-yellow-400 size-7" />
                        </div>
                        <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-6">Outstanding Experience!!!
                        </h3>
                        <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                            <div className="flex items-center gap-3">
                                <img src="https://pagedone.io/asset/uploads/1704349572.png" alt="John image" className="w-8 h-8 rounded-full object-cover" />
                                    <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">John Watson</h6>
                            </div>
                            <p className="font-normal text-lg leading-8 text-gray-400">Nov 01, 2023</p>
                        </div>
                        <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.</p>
                    </div>
                    <div className="pt-8 max-xl:max-w-2xl max-xl:mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                        <FaStar className="text-yellow-400 size-7" />
                        <FaStar className="text-yellow-400 size-7" />
                        <FaStar className="text-yellow-400 size-7" />
                        <FaStar className="text-yellow-400 size-7" />
                        <FaStar className="text-yellow-400 size-7" />
                        </div>
                        <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-6">Pagedone's design system seamlessly bridges the gap between designers and developers!
                        </h3>
                        <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                            <div className="flex items-center gap-3">
                                <img src="https://pagedone.io/asset/uploads/1704351103.png" alt="Robert image" className="w-8 h-8 rounded-full object-cover" />
                                    <h6 className="font-semibold text-lg leading-8 text-indigo-600">Robert Karmazov</h6>
                            </div>
                            <p className="font-normal text-lg leading-8 text-gray-400">Nov 01, 2023</p>
                        </div>
                        <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">Pagedone doesn't disappoint when it comes to the variety and richness of its design components. From pre-built templates to customizable elements, the system caters to both beginners and seasoned designers. The extensive library ensures a diverse range of options to bring creative visions to life.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FacilityReview;