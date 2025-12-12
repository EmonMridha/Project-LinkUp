import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../Authenticatio/login/Login";
import Register from "../Authenticatio/register/Register";
import AddPost from "../pages/AddPost/AddPost";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                loader: () => fetch('https://link-up-server-q7ztk1nyp-md-emon-mridhas-projects.vercel.app/posts').then(res => res.json()),
                Component: Home
            },
            {
                path: '/addPost',
                Component: AddPost
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    }
]);