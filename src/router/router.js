import {
    createBrowserRouter
} from "react-router-dom";

import Test from '../Test';
import ProductsList from '../ProductsList';
import Homepage from '../Homepage';
import Product from '../Product';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/test",
        element: <Test />,
    },
    {
        path: "/products",
        element: <ProductsList />,
    },
    // {
    //     path: "/products/:id",
    //     element: <Product />,
    // },
]);

export default router;