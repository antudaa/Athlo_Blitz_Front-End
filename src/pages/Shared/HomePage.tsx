import Statistics from "../../components/Global/Statistics";
import CategorySection from "../../components/Section/Home/CategorySection";
import FeaturesFacilities from "../../components/Section/Home/FeaturesFailities";
import HeroSection from "../../components/Section/Home/HeroSection";
import Testimonials from "../../components/Section/Home/Testimonials";
import WorkProcess from "../../components/Section/Home/WorkProcess";


const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CategorySection />
            <FeaturesFacilities />
            <WorkProcess />
            <Statistics />
            <Testimonials />
        </>
    );
};

export default HomePage;