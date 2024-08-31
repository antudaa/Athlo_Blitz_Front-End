import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePageLayout from "../components/layout/HomePageLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BookingPage from "../pages/BookingPage";
import ContactPage from "../pages/ContactPage";
import FacilityListingPage from "../pages/FacilityListingPage";
import FacilityDetailsPage from "../pages/FacilityDetailsPage";
import DashboardLayout from "../components/layout/DashboardLayout";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const router = createBrowserRouter([
    
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: 'register',
        element: <SignUpPage />,
    },
    {
        path: '/',
        element: <HomePageLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'booking',
                element: <BookingPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'facilitiy-listing',
                element: <FacilityListingPage />,
            },
            {
                path: 'facility',
                // path: 'facility/:id',
                element: <FacilityDetailsPage />,
            },
        ],
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            // {
            //     path: '/',
            //     element: <DashboardHomePage />,
            // },
            // {
            //     path: 'users',
            //     element: <DashboardUserPage />,
            // },
            // {
            //     path: 'settings',
            //     element: <DashboardSettingsPage />,
            // },
        ],
    },
]);

export default router;