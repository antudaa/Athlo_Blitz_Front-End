
const FacilityListingPage = () => {

    return (
        <div>

            <div className="bg-white">
                <header>
                    <div className="container mx-auto px-6 py-3">
                        <div className="flex items-center justify-between">
                            <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                                Facility Listing Page
                            </div>
                        </div>
                        <div className="relative mt-6 max-w-lg mx-auto">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
                        </div>
                    </div>
                </header>
                <div className="font-sans py-10 px-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product1.webp" alt="Product 1"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Lexicon Luxe | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$10</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product2.webp" alt="Product 2"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Adjective Attire | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$12</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product3.webp" alt="Product 3"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">ThreadCraft Vibes | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$14</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product7.webp" alt="Product 3"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Verbal Vogue Tees | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$12</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product5.webp" alt="Product 3"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Jargon Jungle | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$15</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product6.webp" alt="Product 3"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Syllable Streetwear | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$14</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityListingPage;