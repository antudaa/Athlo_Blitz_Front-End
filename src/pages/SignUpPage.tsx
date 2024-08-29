const SignUpPage = () => {
    return (
        <div>
            <section className="flex justify-center relative">
                <img
                    src="https://images.pexels.com/photos/7130543/pexels-photo-7130543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="gradient background"
                    className="w-full h-full object-cover fixed"
                />
                <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
                    <img
                        src="https://pagedone.io/asset/uploads/1702362108.png"
                        alt="pagedone logo"
                        className="mx-auto lg:mb-11 mb-8"
                    />
                    <div className="rounded-2xl bg-white shadow-xl">
                        <form className="lg:p-11 p-7 mx-auto">
                            <div class="flex gap-x-6 mb-6">
                                <div class="w-full relative">
                                    <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">First Name <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                    </svg>
                                    </label>
                                    <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="">
                                </div>
                                <div class="w-full relative">
                                    <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Last Name <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                    </svg>
                                    </label>
                                    <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="">
                                </div>
                            </div>
                            <div class="relative mb-6">
                                <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Email Address <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                </svg>
                                </label>
                                <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="">
                            </div>
                            <div class="flex gap-x-6 mb-6">
                                <div class="w-full relative">
                                    <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Password <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                    </svg>
                                    </label>
                                    <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="">
                                </div>
                                <div class="w-full relative">
                                    <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Confirm Password <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                    </svg>
                                    </label>
                                    <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="">
                                </div>
                            </div>
                            <div class="relative mb-6">
                                <label class="flex  items-center mb-2 text-gray-600 text-sm font-medium">Phone Number <svg width="7" height="7" class="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
                                </svg>
                                </label>
                                <input type="text" id="default-search" class="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="" required="">
                            </div>
                            <button class="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">Sign Up</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUpPage;
