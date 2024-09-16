import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import Profile from "../pages/Dashboard/Profile";
export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/shop',
        element: <PrivateRoutes><Products/></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
    ]
  },
  {
    path: '/dashboard',
    element:<Dashboard/>,
    children:[
      {
        path: '/dashboard/user',
        element:<Profile/>
      }
    ]
  }
])