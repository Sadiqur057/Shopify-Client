import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoutes from "./PrivateRoutes";
export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <PrivateRoutes><Products></Products></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  }
])