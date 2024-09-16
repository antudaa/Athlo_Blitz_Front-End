import MyBookingsChart from "../../components/Global/Chart/UserBookingChart";
import UserReviewChart from "../../components/Global/Chart/UserReviewChart";

const UserDashboardHome = () => {

    return (
        <section className="grid grid-cols-2 gap-6">
                <MyBookingsChart />
                <UserReviewChart />
        </section>
    );
};

export default UserDashboardHome;