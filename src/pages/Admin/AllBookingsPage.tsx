import DashboardHeader from "../../components/Section/Shared/DashboardHeader";
import ManageAllBookingsTable from "../../components/ui/table/ManageAllBookingsTable";

const AllBookingsPage = () => {
    return (
        <section>
            <DashboardHeader text1="View" text2='Bookings' />
            {/* <AllFacilityTable /> */}
            <ManageAllBookingsTable />
        </section>
    );
};

export default AllBookingsPage;