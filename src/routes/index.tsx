import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Shared/ErrorPage";
import MainLayout from "../components/layout/MainLayout";
import BookingPage from "../pages/Shared/BookingPage";
import FacilityListingPage from "../pages/Shared/FacilityListingPage";
import FacilityDetailsPage from "../pages/Shared/FacilityDetailsPage";
import LoginPage from "../pages/Shared/LoginPage";
import AboutPage from "../pages/Shared/AboutPage";
import SignUpPage from "../pages/Shared/SignUpPage";
import HomePage from "../pages/Shared/HomePage";
import ContactPage from "../pages/Shared/ContactPage";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AdminDashboard from "../components/layout/AdminDashboardLayout";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./AdminRoute";
import UserDashboard from "../components/layout/UserDashboardLayout";
import { userPaths } from "./userRoute";
import ViewBookingDetails from "../pages/Shared/ViewBookingDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/admin',
                element: (
                    <ProtectedRoute role='admin'>
                        <AdminDashboard />
                    </ProtectedRoute>
                ),
                children: routeGenerator(adminPaths),
            },
            {
                path: '/user',
                element: (
                    <ProtectedRoute role='user'>
                        <UserDashboard />
                    </ProtectedRoute>
                ),
                children: routeGenerator(userPaths),
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: '/booking/:id',
                element: (
                    <ProtectedRoute>
                        <BookingPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/booking-details/:id',
                element: (
                    <ProtectedRoute>
                        <ViewBookingDetails />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'facilities',
                element: <FacilityListingPage />,
            },
            {
                path: 'facility/:id',
                element: <FacilityDetailsPage />,
            },
        ],
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: 'register',
        element: <SignUpPage />,
    },
]);

export default router;