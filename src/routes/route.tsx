import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ProductSettings from "../pages/product-settings";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/product',
        element: <ProductSettings />
    }
])