import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            // {
            //     path: '/',
            //     element: <HomePage />
            // },
            // {
            //     path: 'products',
            //     element: <ProductsPage />
            // },
            // {
            //     path: 'manage-products',
            //     element: <ProductAndCategoryManagementPage />
            // },
            // {
            //     path: '/product/:id',
            //     element: <ProductDetailsPage />
            // },
            // {
            //     path: '/cart-details',
            //     element: <CartDetailsPage />
            // },
            // {
            //     path: '/checkout',
            //     element: <CheckoutPage />
            // },
        ]
    }
]);

export default router;