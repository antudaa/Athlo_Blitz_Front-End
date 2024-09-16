import BookingIncreaseViewChart from "../../components/Global/Chart/BookingIncreaseViewChart";
import BookingSuccessfulViewChart from "../../components/Global/Chart/BookingSuccessViewChart";
import UserIncreasingViewChart from "../../components/Global/Chart/UserIncreasingViewChart";
import UserReviewRadialChart from "../../components/Global/Chart/UserReviewChart";

const AdminDashboardHome = () => {
    return (
        <section className="grid grid-cols-2 gap-6 my-16">
            <div className="col-span-2 lg:col-span-1">
                <UserIncreasingViewChart />
            </div>
            <div className="col-span-2 lg:col-span-1">
                <BookingIncreaseViewChart />
            </div>
            <div className="col-span-2 lg:col-span-1">
                <BookingSuccessfulViewChart />
            </div>
            <div className="col-span-2 lg:col-span-1">
                <UserReviewRadialChart />
            </div>
        </section>
    );
};

export default AdminDashboardHome;