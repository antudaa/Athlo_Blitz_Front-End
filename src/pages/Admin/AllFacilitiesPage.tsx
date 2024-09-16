import DashboardHeader from "../../components/Section/Shared/DashboardHeader";
import AllFacilityTable from "../../components/ui/table/AllFacilityTable";

const AllFacilitiesPage = () => {
    return (
        <section>
            <DashboardHeader text1="Manage" text2='Facilities' />
            <AllFacilityTable />
        </section>
    );
};

export default AllFacilitiesPage;