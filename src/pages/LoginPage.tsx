import siteLogo from '../assets/Site_Logo.png';

const LoginPage = () => {
    return (
        <div>
            <section className="flex justify-center relative">
                <img
                    src="https://img.freepik.com/free-vector/blue-fluid-background_53876-114597.jpg?t=st=1725113475~exp=1725117075~hmac=ceecb0d0781276dfb66e91e356142b37e2020224a3aba10ffe5ed6aca33bb600&w=1380"
                    className="w-full h-full object-cover fixed"
                />
                <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
                    <img
                        src={siteLogo}
                        alt="pagedone logo"
                        className="mx-auto lg:mb-11 mb-8"
                    />
                    <div className="rounded-2xl bg-white shadow-xl">
                        <form className="lg:p-11 p-7 mx-auto">
                            <div className="mb-11">
                                <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
                                    Welcome Back
                                </h1>
                                <p className="text-gray-500 text-center text-base font-medium leading-6">
                                    Let’s get started with your 30 days free trial
                                </p>
                            </div>
                            <input
                                type="text"
                                className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
                                placeholder="Username"
                            />
                            <input
                                type="password"
                                className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
                                placeholder="Password"
                            />
                            <a href="#" className="flex justify-end mb-6">
                                <span className="text-indigo-600 text-right text-base font-normal leading-6">
                                    Forgot Password?
                                </span>
                            </a>
                            <button
                                type="submit"
                                className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11"
                            >
                                Login
                            </button>
                            <a href="#" className="flex justify-center text-gray-900 text-base font-medium leading-6">
                                Don’t have an account?
                                <span className="text-indigo-600 font-semibold pl-3">Sign Up</span>
                            </a>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
