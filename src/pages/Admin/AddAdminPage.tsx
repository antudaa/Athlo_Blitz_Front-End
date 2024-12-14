import DashboardHeader from "../../components/Section/Shared/DashboardHeader";
import AddAdminForm from "../../components/ui/form/AddAdminForm";

const AddAdminPage = () => {
    return (
        <section className="bg-white p-6 rounded-xl mb-6">
            <DashboardHeader text1="Add" text2='Admin' />
            {/* <AllFacilityTable /> */}
            <AddAdminForm />
        </section>
    );
};

export default AddAdminPage;