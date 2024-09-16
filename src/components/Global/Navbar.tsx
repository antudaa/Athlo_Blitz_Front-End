import { NavLink } from "react-router-dom";
import logo from '../../assets/Site_Logo.png';
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser, logout } from "../../redux/features/auth/authSlice";
import { UserOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, message } from 'antd';
import { useDispatch } from "react-redux";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        message.success("Logged out successfully");
    };

    const menuItems = (
        <Menu>
            <Menu.Item key="profile" icon={<DashboardOutlined />}>
                <NavLink to={`/${currentUser?.user.role}/dashboard`}>Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white z-50 py-3.5 px-6 w-full lg:shadow-none shadow-sm fixed border-b">
            <div className="flex items-center justify-between gap-1 sm:gap-6 lg:flex-row flex-col">
                <div className="flex justify-between items-center lg:w-auto w-full">
                    <NavLink to='/' className="cursor-pointer flex items-center">
                        <img className='w-[140px] md:w-[220px]' src={logo} alt="Site Logo" />
                    </NavLink>
                    <div>
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                            aria-controls="navbar-default"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-4 h-4"
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
                </div>
                <div
                    id="mobile-navbar"
                    className={`${isMobileMenuOpen ? "block" : "hidden"
                        } lg:flex flex-row w-full flex-1`}
                >
                    <ul className="text-center flex lg:flex-row flex-col lg:gap-2 xl:gap-4 items-center lg:ml-auto my-auto gap-5">
                        <li className="mt-4 md:mt-0">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `py-1.5 px-3 transition-all duration-500 ease-in-out text-xs font-semibold rounded-md ${isActive ? 'bg-indigo-600 text-white hover:text-white' : 'bg-transparent text-gray-500 hover:bg-indigo-600 hover:text-white'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="mt-4 md:mt-0">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `py-1.5 px-3 transition-all duration-500 ease-in-out text-xs font-semibold rounded-md ${isActive ? 'bg-indigo-600 text-white hover:text-white' : 'bg-transparent text-gray-500 hover:bg-indigo-600 hover:text-white'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="mt-4 md:mt-0">
                            <NavLink
                                to="/facilities"
                                className={({ isActive }) =>
                                    `py-1.5 px-3 transition-all duration-500 ease-in-out text-xs font-semibold rounded-md ${isActive ? 'bg-indigo-600 text-white hover:text-white' : 'bg-transparent text-gray-500 hover:bg-indigo-600 hover:text-white'
                                    }`
                                }
                            >
                                Facility
                            </NavLink>
                        </li>
                        <li className="mt-4 md:mt-0">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `py-1.5 px-3 transition-all duration-500 ease-in-out text-xs font-semibold rounded-md ${isActive ? 'bg-indigo-600 text-white hover:text-white' : 'bg-transparent text-gray-500 hover:bg-indigo-600 hover:text-white'
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        {/* Other nav links */}
                    </ul>
                    <div className="text-center lg:flex items-center gap-1 sm:gap-4 lg:ml-auto mt-4 lg:mt-0">
                        <div className="flex items-center lg:justify-start justify-center gap-4 flex-col lg:flex-row">
                            {
                                !currentUser?.user?.role ? (
                                    <>
                                        <NavLink to='/login'
                                            className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-2.5 px-6 text-sm hover:bg-indigo-100 mx-auto">Login
                                        </NavLink>
                                        <p className="text-gray-200 dark:text-gray-700 font-normal my-auto hidden md:block">
                                            |
                                        </p>
                                        <NavLink to='/register'
                                            className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-2.5 px-6 text-sm lg:ml-5 hover:bg-indigo-700 hover:text-white">Sign
                                            up
                                        </NavLink>
                                    </>
                                ) : (
                                    <Dropdown
                                        className="hidden md:block"
                                        overlay={menuItems}
                                        trigger={['click']}
                                    >
                                        <Avatar
                                            src={currentUser?.profileImage}
                                            icon={!currentUser?.profileImage && <UserOutlined />}
                                            className="cursor-pointer border border-indigo-500 h-8 w-8 md:mr-10 rounded-full"
                                        />
                                    </Dropdown>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
