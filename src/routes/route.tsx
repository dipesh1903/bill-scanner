import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/home";
import ProductSettings from "../pages/product-settings";
import { AuthGaurd } from "./authGaurd";
import LoginPage from "../pages/login";
import Gallery from "../pages/gallery/admin";
import GalleryView from "../pages/gallery/view";

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
        path: '/gallery/view',
        element: <GalleryView/>
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
            {
                path: '/gallery',
                element: <Gallery/>
            }
        ]
    },
    {
        path: '*',
        element: <p>404 Error - Nothing here...</p>
      }
])