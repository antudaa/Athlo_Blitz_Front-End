import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import image from '../../../assets/Failities_Image/Badminton_Court_Image_3.png';

const FeaturesFacilities = () => {
    const facilities = [
        {
            id: 1,
            title: "Accomplish tasks swiftly with online tools.",
            description: "Get quoted and covered in under 10 minutes online. No paperwork or waiting anymore.",
            bgColor: "bg-gray-800",
            icon: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            ),
            imageUrl: image,
        },
        {
            id: 2,
            title: "Improved technology yields greater value",
            description: "We’ve eliminated old analogue processes with state-of-the-art tech.",
            bgColor: "bg-indigo-500",
            icon: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
            ),
            imageUrl: image,
        },
        {
            id: 3,
            title: "Build wealth with insurance planning",
            description: "Every life plan policy has a built-in wealth bonus, and we contribute too.",
            bgColor: "bg-violet-500",
            icon: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
            ),
            imageUrl: image,
        },
        {
            id: 4,
            title: "Accomplish tasks swiftly with online tools.",
            description: "Get quoted and covered in under 10 minutes online. No paperwork or waiting anymore.",
            bgColor: "bg-violet-500",
            icon: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            ),
            imageUrl: image,
        },
        {
            id: 5,
            title: "Improved technology yields greater value",
            description: "We’ve eliminated old analogue processes with state-of-the-art tech.",
            bgColor: "bg-indigo-500",
            icon: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
            ),
            imageUrl: image,
        },
        {
            id: 6,
            title: "Build wealth with insurance planning",
            description: "Every life plan policy has a built-in wealth bonus, and we contribute too.",
            bgColor: "bg-gray-800",
            icon: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
            ),
            imageUrl: image,
        },
    ];

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <header className="mb-14 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-6 lg:max-w-3xl lg:mx-auto">
                        Discover Top Sports Facilities Near You
                    </h2>
                    <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
                        Book premium sports facilities with ease. Whether you’re into football, swimming, or cricket, we have the perfect place for you.
                    </p>
                    <div className="flex justify-center gap-5">
                        <Link
                            to="/facilities"
                            className="bg-indigo-50 py-3 px-6 rounded-full text-sm font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-600 hover:text-white border border-indigo-500"
                        >
                            Explore All Facilities
                        </Link>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full mt-10">
                    {facilities.map((facility, index) => (
                        <article key={facility.id} className={`${facility.bgColor} rounded-2xl flex ${index === 0 || index === 5 ? 'md:col-span-2' : ''} justify-between flex-row flex-wrap`}>
                            <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                                <div className="block">
                                    {facility.icon}
                                </div>
                                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                                    {facility.title}
                                </h3>
                                <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">{facility.description}</p>
                                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5 text-nowrap">
                                    View More
                                    <RightOutlined />
                                </button>
                            </div>
                            {(index === 0 || index === 5) ? (
                                <div className="relative hidden h-auto md:w-1/2 md:block">
                                    <img src={facility.imageUrl} alt="Header tailwind Section" className="h-full ml-auto rounded-r-2xl" />
                                </div>
                            ) : null}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesFacilities;
