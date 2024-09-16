import { useParams } from "react-router-dom";
import { useGetFacilityByIdQuery } from "../../redux/features/facility/facilityApi";
import Loading from "../../components/Global/Loading";
import ErrorComponent from "../../components/ui/error/ErrorComponent";
import BookingHero from "../../components/Section/Booking/BookingHero";
import CheckAvailabilityForm from "../../components/ui/form/CheckAvailabilityForm";

const BookingPage = () => {
    const { id } = useParams<{ id?: string }>(); // Ensure id can handle undefined
    const { data: { data: facility = {} } = {}, isLoading, error } = useGetFacilityByIdQuery(id || '');

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <ErrorComponent message="Something went wrong! Please try again." />
    }

    return (
        <section className="py-24 lg:py-32 relative">
            <BookingHero facility={facility} />
            {id && <CheckAvailabilityForm id={id} />}  {/* Only render if id exists */}
        </section>
    );
};

export default BookingPage;
