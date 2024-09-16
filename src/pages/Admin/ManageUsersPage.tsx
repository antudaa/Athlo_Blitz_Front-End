import DashboardHeader from "../../components/Section/Shared/DashboardHeader";
import ManageAllUsersTable from "../../components/ui/table/ManageAllUsersTable";

const ManageUsersPage = () => {
    return (
        <section>
            <DashboardHeader text1="Manage" text2='Users' />
            <ManageAllUsersTable />
        </section>
    );
};

export default ManageUsersPage;