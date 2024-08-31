import { useState } from 'react';
import logo from '../../assets/Site_Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="py-5  relative z-50 w-full  bg-gray-50 transition-all duration-500 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="w-full flex flex-col lg:flex-row justify-between">
                        <div className=" flex justify-between  lg:flex-row">
                            <a href="javascript:;" className="cursor-pointer flex items-center">
                                <img className='w-64' src={logo} alt="" />
                            </a>
                            <button data-collapse-toggle="navbar-default" type="button"
                                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                                aria-controls="navbar-default"
                                aria-expanded={isMenuOpen}
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`w-full lg:flex lg:pl-11 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                            <ul className="lg:flex items-center flex-col mt-4 lg:mt-4 lg:flex-row">
                                <li>
                                    <Link to="/"
                                        className="text-gray-500 cursor-pointer text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about"
                                        className="text-gray-500 cursor-pointer text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/facilitiy-listing"
                                        className="text-gray-500 cursor-pointer text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center">
                                        Facilities</Link>
                                </li>
                                <li>
                                    <Link to="/contact"
                                        className="text-gray-500 cursor-pointer text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex items-center justify-center lg:flex-1 lg:justify-end flex-col md:flex-row gap-4">
                                <Link to='/login'
                                    className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">Login
                                </Link>
                                <Link to='/register'
                                    className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm md:ml-5 hover:bg-indigo-700">Sign
                                    up </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
