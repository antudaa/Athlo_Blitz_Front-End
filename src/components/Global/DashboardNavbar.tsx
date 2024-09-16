import { Link } from "react-router-dom";
import logo from '../../assets/Site_Logo.png';
import { useState } from "react";

const DashboardNavbar = () => {
    // State to manage mobile menu visibility
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle function for mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white z-50 py-3.5 px-6 w-full lg:shadow-none shadow-sm fixed border-b">
            <div className="flex items-center justify-between gap-1 sm:gap-6 lg:flex-row flex-col">
                <div className="flex justify-between items-center lg:w-auto w-full">
                    <Link to='/' className="cursor-pointer flex items-center">
                        <img className='w-64 h-12' src={logo} alt="" />
                    </Link>
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                        aria-controls="navbar-default"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    id="mobile-navbar"
                    className={`${isMobileMenuOpen ? "block" : "hidden"
                        } lg:flex flex-row w-full flex-1`}
                >
                    <ul className="text-center flex lg:flex-row flex-col lg:gap-2 xl:gap-4 items-center lg:ml-auto my-4 md:my-auto gap-5">
                        <li>
                            <Link
                                to="/"
                                className="py-1.5 px-3 bg-indigo-600 transition-all duration-500 ease-in-out text-xs hover:text-white text-white font-semibold rounded-md"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/facilities"
                                className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                            >
                                Facilities
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="text-center lg:flex items-center gap-1 sm:gap-4 lg:ml-auto mt-4 lg:mt-0">
                        <div className="flex items-center lg:justify-start justify-center gap-4 flex-col lg:flex-row">
                            <Link to='/login'
                                className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-2.5 px-6 text-sm hover:bg-indigo-100 mx-auto">Login
                            </Link>
                            <p className="text-gray-200 dark:text-gray-700 font-normal my-auto hidden md:block">
                                |
                            </p>

                            <Link to='/register'
                                className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-2.5 px-6 text-sm lg:ml-5 hover:bg-indigo-700 hover:text-white">Sign
                                up
                            </Link>
                            <button className="w-8 sm:w-11 h-8 sm:h-11 flex items-center justify-center lg:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M11.3235 2.5H9.16667C6.02397 2.5 4.45262 2.5 3.47631 3.47631C2.5 4.45262 2.5 6.02397 2.5 9.16667V10.8333C2.5 13.976 2.5 15.5474 3.47631 16.5237C4.45262 17.5 6.02397 17.5 9.16667 17.5H10.8333C13.976 17.5 15.5474 17.5 16.5237 16.5237C17.5 15.5474 17.5 13.976 17.5 10.8333V9.55882M10 10H5.83333M12.5 13.3333H5.83333M17.5 4.58333C17.5 5.73393 16.5673 6.66667 15.4167 6.66667C14.2661 6.66667 13.3333 5.73393 13.3333 4.58333C13.3333 3.43274 14.2661 2.5 15.4167 2.5C16.5673 2.5 17.5 3.43274 17.5 4.58333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;
