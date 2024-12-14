'use client';
import { useRef } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import ballsport from "../../../assets/icons/ballsports.png";
import racquetsports from "../../../assets/icons/racquetsports.png";
import fitnesssports from "../../../assets/icons/fitnesssports.png";
import recreationalsports from "../../../assets/icons/recreationalsports.png";
import kidssports from "../../../assets/icons/kidssports.png";
import adventure from "../../../assets/icons/adventure.png";

const Categories = [
    { name: "Ball Sports", icon: ballsport },
    { name: "Racquet Sports", icon: racquetsports },
    { name: "Fitness Sports", icon: fitnesssports },
    { name: "Recreational Sports", icon: recreationalsports },
    { name: "Adventure & Fun", icon: adventure },
    { name: "Kids & Family Zones", icon: kidssports },
    { name: "Team Building Areas", icon: adventure },
    { name: "Professional Training Zones", icon: fitnesssports },
    { name: "Multipurpose Zones", icon: recreationalsports },
];

const CategorySection = () => {
    // Explicitly typing the ref for TypeScript
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full max-w-7xl mx-auto">
            <div className="my-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">Featured Categories</h1>
            </div>
            <div className="relative ">
                <div className="absolute -top-14 right-4 z-10 flex space-x-2">
                    <button
                        onClick={scrollLeft}
                        className="p-2 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white border border-indigo-600 rounded-full shadow-md focus:outline-none transition-all duration-500"
                    >
                        <FaLongArrowAltLeft className="my-auto size-5" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="p-2 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white border border-indigo-600 rounded-full shadow-md focus:outline-none transition-all duration-500"
                    >
                        <FaLongArrowAltRight className="my-auto size-5" />
                    </button>
                </div>

                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto space-x-4 no-scrollbar"
                    style={{
                        scrollbarWidth: "none", // For Firefox
                        msOverflowStyle: "none", // For Internet Explorer and Edge
                    }}
                >
                    {Categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-40 h-48 bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center"
                        >
                            <img
                                src={category.icon}
                                alt={category.name}
                                className="w-16 h-16 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold text-wrap w-36 h-10">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
