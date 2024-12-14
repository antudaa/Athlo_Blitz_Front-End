import Statistics from "../../components/Global/Statistics";
import { motion } from 'framer-motion';
import image1 from "../../assets/AboutPage/About_Page_Image_1.jpg";
import image2 from "../../assets/AboutPage/About_Page_Image_2.jpg";
import TeamSection from "../../components/Global/TeamSection";
import HistoryTimeLine from "../../components/Global/HistoryTimeLine";
import ContactUsHeroSection from "../../components/Section/ContactUs/ContactUsHeroSection";
import PageHeader from "../../components/Global/PageHeader";

const AboutPage = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="z-0">
            <PageHeader title="Book Your Favorite Sports Facilities " highlight='Effortlessly!' description='Whether you’re looking for a basketball court, soccer field, or tennis court, our user-friendly platform ensures you get instant confirmation and a seamless booking experience. Get started now and enjoy your game!' />

            <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="img-box">
                            <img src={image1} alt="About Us tailwind page"
                                className="max-lg:mx-auto rounded-2xl" />
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="lg:pl-[100px] flex items-center">
                            <div className="data w-full">
                                <div className="max-w-xl mx-auto">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-600">About Us</h1>
                                    <div className="mb-10">
                                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                    </div>
                                </div>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    At <span className="text-indigo-600">Athlo Blitz</span>, we believe that sports and fitness are more than just activities—they are a way of life. Our mission is to make it easier for individuals, teams, and organizations to access top-quality sports facilities and promote a healthy, active lifestyle. Our team is dedicated to providing a seamless experience for our users, whether you're booking a basketball court for a weekend game, organizing a corporate soccer tournament, or looking for a space to host a community sports event.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

                        <div className="lg:pr-24 flex items-center">
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                className="data w-full">
                                <img src={"https://pagedone.io/asset/uploads/1702034785.png"} alt="About Us tailwind page"
                                    className="block lg:hidden mb-9 mx-auto" />
                                <div className="max-w-xl mx-auto">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-600">Our Mission</h1>
                                    <div className="mb-10">
                                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                    </div>
                                </div>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    We envision a world where sports and recreation are seamlessly integrated into daily life, where finding and booking facilities is as easy as it should be. We are committed to fostering a vibrant community of sports enthusiasts and making a positive impact on people's health and well-being.

                                    Thank you for choosing Athlo Blitz. We look forward to helping you make the most of your sports and fitness activities!
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="img-box ">
                            <img src={image2} alt="About Us tailwind page"
                                className="hidden lg:block rounded-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section>
            <TeamSection />
            <HistoryTimeLine />
            <Statistics />
            <ContactUsHeroSection />
        </div>
    );
};

export default AboutPage;