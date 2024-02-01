import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Products from "../pages/Products/Products";
import Blog from "../pages/Blog/Blog";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
        ]
    }
]);

export default router;