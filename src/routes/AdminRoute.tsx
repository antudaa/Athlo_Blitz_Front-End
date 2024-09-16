import { AiOutlineProduct } from "react-icons/ai";
import AllBookingsPage from "../pages/Admin/AllBookingsPage";
import AllFacilitiesPage from "../pages/Admin/AllFacilitiesPage";
import AdminDashboardHome from "../pages/Admin/AdminDashboardHome";
import AddAdminPage from "../pages/Admin/AddAdminPage";
import { MdAdminPanelSettings } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaHome, FaUsersCog } from "react-icons/fa";
import ManageUsersPage from "../pages/Admin/ManageUsersPage";



export const adminPaths = [
  {
    name: 'Home',
    path: 'dashboard',
    element: <AdminDashboardHome />,
    icon: <FaHome />
  },
  {
    name: 'Facilities',
    path: 'manage-facilities',
    element: <AllFacilitiesPage />,
    icon: <AiOutlineProduct />
  },
  {
    name: 'Add Admin',
    path: 'add-admin',
    element: <AddAdminPage />,
    icon: <MdAdminPanelSettings />,

  },
  {
    name: 'Bookings',
    path: 'view-bookings',
    element: <AllBookingsPage />,
    icon: <TbBrandBooking />,
  },
  {
    name: 'Users',
    path: 'manage-user',
    element: <ManageUsersPage />,
    icon: <FaUsersCog />,
  },
];