import {
    createBrowserRouter
} from "react-router-dom";

import About from '../About';
import ProductsList from '../ProductsList';
import Homepage from '../Homepage';




const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/about-us",
        element: <About />,
    },
    {
        path: "/products",
        element: <ProductsList />,
    },

]);

export default router;