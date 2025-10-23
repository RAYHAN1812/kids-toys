import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ToyDetails from "../pages/ToyDetails";
import MyProfile from "../pages/MyProfile"; 
import ExtraSecretPage from "../pages/ExtraSecretPage"; 
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/forget-password", element: <ForgetPassword /> },
            { path: "/toy/:id", element: <PrivateRoute><ToyDetails /></PrivateRoute> },
            { path: "/profile", element: <PrivateRoute><MyProfile /></PrivateRoute> },
            { path: "/secret-base", element: <PrivateRoute><ExtraSecretPage /></PrivateRoute> },
        ]
    }
]);

export default router;
