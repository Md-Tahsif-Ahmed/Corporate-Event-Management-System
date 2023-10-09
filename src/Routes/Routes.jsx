import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/HomePage/Home/Home";
import About from "../Pages/About/About";
import Navservices from "../Pages/Navservices/Navservices";
import Blog from "../Pages/Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,

        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/about',
          element: <PrivateRoutes><About></About></PrivateRoutes>
        },
        {
          path: '/services',
          element: <Navservices></Navservices>,
          loader: () => fetch('services.json'),
        },
        {
          path: '/blog',
          element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
        }
      ]
    },
  ]);