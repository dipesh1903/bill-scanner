import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/home";
import ProductSettings from "../pages/product-settings";
import { AuthGaurd } from "./authGaurd";
import LoginPage from "../pages/login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '/login',
        element: <LoginPage/>,

    },
    {
        element: <AuthGaurd></AuthGaurd>,
        children: [
            {
                path: '/home',
                element: <HomePage/>,
            },
            {
                path: '/product',
                element: <ProductSettings />
            },
            {
                path: '/product/all',
                element: <ProductSettings />
            },
        ]
    },
    {
        path: '*',
        element: <p>404 Error - Nothing here...</p>
      }
])