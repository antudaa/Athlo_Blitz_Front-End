import DashboardHeader from "../../components/Section/Shared/DashboardHeader";
import ManageMyBookingsTable from "../../components/ui/table/ManageMyBookingsTable";

const MyBookingPage = () => {
    return (
        <section>
            <DashboardHeader text1="My" text2="Bookings" />
            <ManageMyBookingsTable />
        </section>
    );
};

export default MyBookingPage;