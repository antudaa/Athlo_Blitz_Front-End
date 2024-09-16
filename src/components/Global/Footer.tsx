import { Layout } from "antd";
import logo from '../../assets/Site_Logo.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const FooterSection = () => {

    return (
        <Footer className="relative bg-blueGray-200 pt-8 pb-6 border-t">
            <footer className="w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* <!--Grid--> */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-md:max-w-sm max-md:mx-auto">
                        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <a href="" className="cursor-pointer flex justify-center lg:justify-start">
                                <img className="h-12 w-100" src={logo} alt="Site Logo" />
                            </a>
                            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100
                                countries & 5 million customers. Have any query ?</p>
                            <Link to='/contact'
                                className="py-2.5 cursor-pointer px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0 hover:text-white">
                                Contact us
                            </Link>
                        </div>
                        {/* <!--End Col--> */}
                        <div className="lg:mx-auto">
                            <h4 className="text-lg text-gray-900 font-medium mb-7 ">Pagedone</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6">
                                    <Link to="/" className="cursor-pointer text-gray-600 hover:text-gray-900">Home</Link>
                                </li>
                                <li className="mb-6">
                                    <Link to="/about" className="cursor-pointer  text-gray-600 hover:text-gray-900">About</Link>
                                </li>
                                <li>
                                    <Link to="/facilities" className="cursor-pointer  text-gray-600 hover:text-gray-900">Facilities</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!--End Col--> */}
                        <div className="lg:mx-auto">
                            <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6">
                                    <a href="" className="cursor-pointer text-gray-600 hover:text-gray-900">Figma UI
                                        System</a>
                                </li>
                                <li className="mb-6">
                                    <a href="" className="cursor-pointer  text-gray-600 hover:text-gray-900">Icons
                                        Assets</a>
                                </li>
                                <li>
                                    <a href="" className="cursor-pointer  text-gray-600 hover:text-gray-900">Responsive
                                        Blocks</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!--End Col--> */}
                        <div className="lg:mx-auto">
                            <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6">
                                    <a href="" className="cursor-pointer text-gray-600 hover:text-gray-900">Customer
                                        Support</a>
                                </li>
                                <li className="mb-6">
                                    <a href="" className="cursor-pointer  text-gray-600 hover:text-gray-900">Terms &
                                        Conditions</a>
                                </li>
                                <li>
                                    <a href="" className="cursor-pointer  text-gray-600 hover:text-gray-900">Privacy
                                        Policy</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!--End Col--> */}
                        <div className="lg:mx-auto">
                            <h4 className="text-lg text-gray-900 font-medium mb-7">Subscribe</h4>
                            <p className="text-sm text-gray-500 leading-6 mb-7">Subscribe to get the latest news from us</p>
                            <a href=""
                                className="flex cursor-pointer items-center justify-center gap-2 border border-indigo-600 rounded-full py-3 px-6 w-fit text-sm text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50">
                                Subscribe<svg width="15" height="12" viewBox="0 0 15 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                        stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* <!--Grid--> */}
                    <div className="py-7 border-t border-gray-200">
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-sm text-gray-500 ">©pagedone 2024, All rights reserved.</span>
                            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                                <a href=""
                                    className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                    <FaInstagram className="w-[1.25rem] h-[0.875rem] text-white" />
                                </a>
                                <a href=""
                                    className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF]  hover:bg-blue-600 ">
                                    <FaFacebookF className="w-[1.25rem] h-[0.875rem] text-white" />
                                </a>
                                <a href=""
                                    className="relative  w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000]  hover:bg-red-600 ">
                                    <FaYoutube className="w-[1.25rem] h-[0.875rem] text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Footer>
    );
};

export default FooterSection;