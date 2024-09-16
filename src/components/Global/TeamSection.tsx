import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const Athlo_Blitz_Team = [
    {
        img: 'https://res.cloudinary.com/druseaf0p/image/upload/v1726313831/Nirjhor_sqj9dt.jpg',
        name: 'Nirjhor Saha',
        designation: 'CEO',
    },
    {
        img: 'https://res.cloudinary.com/druseaf0p/image/upload/v1726312948/Antu_Profile_Image_zsru5m.jpg',
        name: 'Antu Das',
        designation: 'FOUNDER',
    },
    {
        img: 'https://res.cloudinary.com/druseaf0p/image/upload/v1726313831/Satirtha_xezz3r.jpg',
        name: 'Satirtha Sen',
        designation: 'MARKETING HEAD',
    },
    {
        img: 'https://pagedone.io/asset/uploads/1696238720.png',
        name: 'Ayon Das',
        designation: 'MANAGING DIRECTOR',
    },
    {
        img: 'https://pagedone.io/asset/uploads/1696238684.png',
        name: 'Piu Das',
        designation: 'CHAIRMAN',
    },
    {
        img: 'https://pagedone.io/asset/uploads/1696238644.png',
        name: 'Nayon Das',
        designation: 'CHEAF ADVAISOR',
    },
]

const TeamSection = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-10">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="w-full lg:w-1/3 mb-24 lg:mb-0">
                        <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl text-gray-600 font-bold leading-snug md:leading-[3rem] lg:leading-[4rem] mb-7 text-center lg:text-left">
                            Our leading, strong & creative team
                        </h2>
                        <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 text-center lg:text-left">
                            These people work on making our product the best.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Link
                                to="/contact"
                                className="inline-flex items-center py-3 px-8 bg-indigo-600 text-white text-base font-semibold rounded-full transition-all duration-500 hover:bg-indigo-700"
                            >
                                Connect With Us
                                <FaAngleDoubleRight className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                    <div className="w-full md:w-3/3 lg:w-2/3 xl:w-1/2 lg:mt-0 mt-12 max-w-2xl mx-auto lg:max-w-none">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {Athlo_Blitz_Team.map((member, index) => (
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    key={index}
                                    className={`group block text-center cursor-pointer w-full ${index === 1 || index === 4 || index === 7 ? `md:-mt-[80px] ` : ``}`}
                                >
                                    <div className="relative mb-5 w-44 h-56 mx-auto">
                                        <img
                                            src={member.img}
                                            alt="Team member"
                                            className="w-44 h-full rounded-2xl object-cover transition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                                        />
                                    </div>
                                    <h4 className="text-lg md:text-xl text-gray-900 font-semibold mb-2 transition-all duration-500 group-hover:text-indigo-600">
                                        {member.name}
                                    </h4>
                                    <span className="text-sm md:text-base text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                                        {member.designation}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
