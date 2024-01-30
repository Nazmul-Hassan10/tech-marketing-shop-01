import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Products from "../pages/Products/Products";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/product",
                element: <Products></Products>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
        ],
    },
]);

export default router;