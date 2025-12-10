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
                loader: () => fetch('http://localhost:5000/posts').then(res => res.json()),
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