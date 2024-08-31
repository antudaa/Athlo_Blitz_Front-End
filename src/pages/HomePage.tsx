import NewSletter from "../components/Global/NewSletter";
import FAQSection from "../components/Section/ContactUs/FAQSection";
import FeaturesFailities from "../components/Section/Home/FeaturesFailities";
import HeroSection from "../components/Section/Home/HeroSection";
import Testimonials from "../components/Section/Home/Testimonials";
import WorkProcess from "../components/Section/Home/WorkProcess";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <FeaturesFailities />
            <WorkProcess />
            <Testimonials />
            <FAQSection />
            <NewSletter />
        </>
    );
};

export default HomePage;