import DashboardHeader from "../../components/Section/Shared/DashboardHeader";
import AddAdminForm from "../../components/ui/form/AddAdminForm";

const AddAdminPage = () => {
    return (
        <section>
            <DashboardHeader text1="Add" text2='Admin' />
            {/* <AllFacilityTable /> */}
            <AddAdminForm />
        </section>
    );
};

export default AddAdminPage;