import { FaHome } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import UserDashboardHome from "../pages/User/UserDashboardHome";
import MyBookingPage from "../pages/User/MyBookingPage";


export const userPaths = [
  {
    name: 'Home',
    path: 'dashboard',
    element: <UserDashboardHome />,
    icon: <FaHome />
  },
  {
    name: 'Bookings',
    path: 'my-bookings',
    element: <MyBookingPage />,
    icon: <TbBrandBooking />
  },
];